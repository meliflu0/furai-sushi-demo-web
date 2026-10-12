import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowUpRight, ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/furai/Navbar";
import { Gallery } from "@/components/furai/Gallery";
import { ReservationForm } from "@/components/furai/ReservationForm";
import { furai, photos, whatsappUrl } from "@/lib/furai";

const title = "Furai Omakase | Sushi y Omakase en Villavicencio, Meta";
const description = "Vive la experiencia omakase en Villavicencio, Meta. Sushi premium, barra en vivo, cocina japonesa de autor y reservas por WhatsApp en Furai Omakase.";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:locale", content: "es_CO" }, { name: "twitter:card", content: "summary_large_image" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Restaurant", name: furai.name, telephone: furai.phone, servesCuisine: "Japonesa", address: { "@type": "PostalAddress", streetAddress: "Cra. 44 #26a-06 Sur, Local 101, Villavicencio Sur", addressLocality: "Villavicencio", addressRegion: "Meta", addressCountry: "CO" }, geo: { "@type": "GeoCoordinates", latitude: furai.coordinates.latitude, longitude: furai.coordinates.longitude }, openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "16:00", closes: "23:00" }, hasMenu: furai.menu, sameAs: [furai.instagram, furai.tiktok] }) }],
  }),
});

function ReserveLink({ text = "Reservar por WhatsApp", message = furai.reservationMessage, outline = false, href }: { text?: string; message?: string; outline?: boolean; href?: string }) {
  return <Button asChild variant={outline ? "editorialOutline" : "editorial"}><a href={href || whatsappUrl(message)} target="_blank" rel="noopener noreferrer">{text}<ArrowUpRight /></a></Button>;
}
function MenuLink({ text = "Explorar menú completo", subtle = false }: { text?: string; subtle?: boolean }) {
  return <Button asChild variant={subtle ? "editorialLink" : "editorial"}><a href={furai.menu} target="_blank" rel="noopener noreferrer">{text}<ArrowUpRight /></a></Button>;
}
function Index() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }); }, { threshold: .08 });
    document.querySelectorAll(".reveal").forEach(element => observer.observe(element)); document.documentElement.classList.add("motion-ready");
    return () => { observer.disconnect(); document.documentElement.classList.remove("motion-ready"); };
  }, []);
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Navbar /><main id="contenido">
    <section className="hero" id="inicio" aria-label="Furai Omakase, Villavicencio">
      <img className="hero-photo" src={photos.hero} alt="Fotografía ilustrativa de nigiris sobre cerámica oscura" width={1920} height={1024} fetchPriority="high" />
      <div className="hero-inner wrap"><div className="hero-content"><p className="eyebrow">Furai Omakase · Villavicencio</p><h1 className="hero-title" aria-label="Omakase y sushi premium en Villavicencio, Meta.">El arte del<br /><em>omakase.</em><span className="sr-only"> Omakase y sushi premium en Villavicencio, Meta.</span></h1><p className="hero-subtitle">{furai.text.hero}</p><div className="hero-actions"><Button asChild variant="editorial"><a href={furai.menu} target="_blank" rel="noopener noreferrer">Ver menú <ArrowUpRight /></a></Button><ReserveLink text="RESERVAR OMAKASE" outline href="https://reservation.carbonaraapp.com/Colombia/Villavicencio/Furai-Omakase/" /><Button asChild variant="editorialLink" className="hero-discover"><a href="#experiencia">Descubrir la experiencia <ArrowDown /></a></Button></div></div></div>
      <div className="hero-bottom"><span>{furai.claim}</span><a href="#filosofia">Una experiencia por descubrir <ArrowDown /></a></div>
    </section>
    <section className="section philosophy light-section" id="filosofia"><div className="wrap philosophy-grid"><div className="reveal"><p className="eyebrow">La filosofía</p><h2 className="section-title philosophy-title">La filosofía<br />de <em>Furai.</em></h2><p className="prose">{furai.text.philosophy}</p><Button asChild variant="editorialLink" className="mt-7"><a href="#menu">Descubre nuestra propuesta <ArrowUpRight /></a></Button></div><figure className="reveal"><img src={photos.filosofia} alt="Referencia gastronómica de un nigiri sobre una pieza de cerámica artesanal" width={1024} height={1280} loading="lazy" /><figcaption className="image-caption"><span>El detalle como punto de partida.</span></figcaption></figure></div></section>
    <section className="menu-section" id="menu"><div className="wrap"><div className="menu-grid"><div className="reveal"><p className="eyebrow">El menú de Furai</p><h2 className="section-title">Tu próxima<br /><em>elección.</em></h2><p className="prose">{furai.text.menu}</p><MenuLink text="Ver platos y precios" /><a className="menu-source" href={furai.menu} target="_blank" rel="noopener noreferrer">menu.fu.do/furaisushi <ArrowUpRight size={13} /></a></div><figure className="menu-photo reveal"><img src={photos.menu} alt="Composición ilustrativa de nigiris sobre cerámica; no representa platos del menú oficial de Furai" width={1920} height={1024} loading="lazy" /></figure></div></div></section>
    <section className="section experience" id="experiencia"><div className="wrap"><p className="eyebrow reveal">La experiencia frente al chef</p><div className="experience-heading reveal"><h2 className="section-title">En la barra.<br /><em>Frente a ti.</em></h2><p className="prose">{furai.text.experience}</p></div><figure className="experience-preparation reveal" id="barra"><img src={photos.hands} alt="Imagen ilustrativa de manos preparando un nigiri; no es una fotografía del chef de Furai" width={1024} height={1280} loading="lazy" /><figcaption>Preparación de sushi ilustrativa. No es una fotografía del chef ni de la barra de Furai.</figcaption></figure></div></section>
    <Gallery />
    <section className="final-cta"><img src={photos.hero} alt="Detalle gastronómico ilustrativo de nigiris y vajilla artesanal" width={1920} height={1024} loading="lazy" /><div className="wrap final-content reveal"><p className="eyebrow mb-7">Furai Omakase</p><h2>La próxima pieza<br />puede ser <em>tuya.</em></h2><p>Descubre Furai Omakase y consulta tu próxima visita en Villavicencio.</p><div className="final-buttons"><ReserveLink text="RESERVAR OMAKASE" href="https://reservation.carbonaraapp.com/Colombia/Villavicencio/Furai-Omakase/" /><MenuLink text="Explorar menú" subtle /></div></div></section>
  </main><a className="whatsapp-float" href={whatsappUrl(furai.reservationMessage)} target="_blank" rel="noopener noreferrer" aria-label="Consultar una reserva por WhatsApp"><MessageCircle /><span>Hablemos por WhatsApp</span></a></>;
}
