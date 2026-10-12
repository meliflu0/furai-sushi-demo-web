import { describe, expect, it } from "vitest";
import { localDate, reservationSchema, reservationUrl } from "@/lib/reservation";
import { furai } from "@/lib/furai";

const valid = { name: "María & José", date: "2026-10-11", time: "19:30", guests: 2, occasion: "Aniversario" as const, space: "Barra omakase" as const, message: "Una consulta & preferencias" };
const schema = reservationSchema("2026-10-11");
describe("WhatsApp reservation rules", () => {
  it("accepts today and future dates, rejects yesterday and invalid calendar dates", () => {
    expect(schema.safeParse(valid).success).toBe(true);
    expect(schema.safeParse({ ...valid, date: "2026-10-12" }).success).toBe(true);
    expect(schema.safeParse({ ...valid, date: "2026-10-10" }).success).toBe(false);
    expect(schema.safeParse({ ...valid, date: "2027-02-30" }).success).toBe(false);
  });
  it("uses local browser date components, not UTC", () => {
    expect(localDate(new Date(2026, 9, 11, 23, 59))).toBe("2026-10-11");
  });
  it("requires a positive integer number of people", () => {
    for (const guests of [0, -1, 1.5, ""]) expect(schema.safeParse({ ...valid, guests }).success).toBe(false);
    expect(schema.safeParse({ ...valid, guests: 1 }).success).toBe(true);
  });
  it("requires all six mandatory inputs", () => {
    for (const field of ["name", "date", "time", "guests", "occasion", "space"]) expect(schema.safeParse({ ...valid, [field]: "" }).success).toBe(false);
    expect(schema.safeParse({ ...valid, message: "" }).success).toBe(true);
  });
  it("allows a desired time without applying an availability constraint", () => {
    expect(schema.safeParse({ ...valid, time: "09:00" }).success).toBe(true);
    expect(schema.safeParse({ ...valid, time: "25:00" }).success).toBe(false);
  });
  it("opens the official number with safely encoded submitted details", () => {
    const url = new URL(reservationUrl(valid));
    expect(url.origin + url.pathname).toBe("https://wa.me/573163209439");
    expect(url.searchParams.get("text")).toContain("Nombre: María & José");
    expect(url.searchParams.get("text")).toContain("Número de personas: 2");
    expect(url.searchParams.get("text")).toContain("Una consulta & preferencias");
    expect(url.searchParams.size).toBe(1);
  });
});
describe("Official commercial facts", () => {
  it("keeps the business-provided hours", () => {
    expect(furai.hours).toBe("Lunes a domingo: 4:00 p. m. – 11:00 p. m.");
  });
  it("uses the official informational menu", () => {
    expect(furai.menu).toBe("https://menu.fu.do/furaisushi");
  });
  it("uses the business-provided approximate coordinates", () => {
    expect(furai.coordinates).toEqual({ latitude: 4.101763, longitude: -73.656005 });
    expect(new URL(furai.maps).searchParams.get("destination")).toBe("4.101763,-73.656005");
  });
});