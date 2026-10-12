import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { furai, navigation, whatsappUrl } from "@/lib/furai";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("keydown", onKey); window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, []);
  return <header className={`site-nav ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
    <div className="nav-inner wrap">
      <a href="#inicio" className="brand" aria-label="Furai Omakase, inicio" onClick={() => setOpen(false)}><img src={furai.logo} alt="Logo oficial Furai" width={58} height={58} /><span className="brand-name">FURAI<small>OMAKASE</small></span></a>
      <div className="nav-right"><nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <Button asChild variant="editorialOutline" className="nav-reserve"><a href={whatsappUrl(furai.reservationMessage)} target="_blank" rel="noopener noreferrer">Reservar mesa <ArrowUpRight /></a></Button>
        <Button variant="editorialIcon" className="mobile-toggle" onClick={() => setOpen(prev => !prev)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">{[...navigation, { href: "#reservas", label: "Reservas" }].map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>}
  </header>;
}