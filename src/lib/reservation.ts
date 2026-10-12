import { z } from "zod";
import { whatsappUrl } from "./furai";

export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export const occasions = ["Visita gastronómica", "En pareja", "Cumpleaños", "Aniversario", "Encuentro con amigos", "Encuentro empresarial", "Otra ocasión"] as const;
export const spaces = ["Barra omakase", "Mesa"] as const;
export function reservationSchema(today = localDate()) {
  return z.object({
    name: z.string().trim().min(1, "Escribe tu nombre.").max(100, "Usa un máximo de 100 caracteres."),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Selecciona una fecha válida.").refine(value => {
      const [y, m, d] = value.split("-").map(Number);
      if (y === undefined || m === undefined || d === undefined) return false;
      const date = new Date(y, m - 1, d);
      return localDate(date) === value && value >= today;
    }, "Elige hoy o una fecha posterior."),
    time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Selecciona una hora válida."),
    guests: z.coerce.number({ invalid_type_error: "Indica un número válido de personas." }).int("Indica un número entero.").positive("Indica al menos una persona.").max(Number.MAX_SAFE_INTEGER, "Indica un número válido."),
    occasion: z.enum(occasions, { errorMap: () => ({ message: "Selecciona una ocasión." }) }),
    space: z.enum(spaces, { errorMap: () => ({ message: "Selecciona una preferencia." }) }),
    message: z.string().trim().max(1000, "Usa un máximo de 1.000 caracteres."),
  });
}
export type Reservation = z.infer<ReturnType<typeof reservationSchema>>;
export function reservationUrl(data: Reservation) {
  return whatsappUrl([
    "Hola, Furai Omakase. Me gustaría consultar una reserva.", "",
    `Nombre: ${data.name}`, `Fecha deseada: ${data.date}`, `Hora deseada: ${data.time}`,
    `Número de personas: ${data.guests}`, `Ocasión: ${data.occasion}`,
    `Preferencia de espacio: ${data.space} (sujeta a confirmación del restaurante)`,
    ...(data.message ? [`Mensaje adicional: ${data.message}`] : []), "",
    "¿Podrían confirmarme la disponibilidad y las condiciones de la reserva?",
  ].join("\n"));
}