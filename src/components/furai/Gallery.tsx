import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gallery } from "@/lib/furai";

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const photo = selected === null ? undefined : gallery[selected];
  return <section id="galeria" className="section gallery-section"><div className="wrap">
    <div className="gallery-header reveal"><div><p className="eyebrow">Galería gastronómica</p><h2 className="section-title">Texturas, gestos<br />y <em>atmósfera.</em></h2></div><p className="gallery-note">Una mirada al universo omakase.<br />Imágenes ilustrativas; no son fotografías oficiales del local ni de su menú.</p></div>
    <div className="gallery-grid reveal">{gallery.map((item, index) => <Button key={item.label} variant="editorialIcon" className="gallery-item !w-full !h-full" onClick={() => setSelected(index)} aria-label={`Ampliar imagen: ${item.label}`}><img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" /></Button>)}</div>
    <Dialog.Root open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><Dialog.Portal><Dialog.Overlay className="lightbox-overlay" /><Dialog.Content className="lightbox" onKeyDown={event => { if (selected === null) return; if (event.key === "ArrowRight") setSelected((selected + 1) % gallery.length); if (event.key === "ArrowLeft") setSelected((selected + gallery.length - 1) % gallery.length); }}>
      {photo && <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />}
      <div className="lightbox-controls"><div><Dialog.Title>{photo?.label}</Dialog.Title><Dialog.Description>Fotografía ilustrativa del universo omakase.</Dialog.Description></div><div className="flex gap-2"><Button variant="editorialIcon" aria-label="Imagen anterior" onClick={() => { if (selected !== null) setSelected((selected + gallery.length - 1) % gallery.length); }}><ArrowLeft /></Button><Button variant="editorialIcon" aria-label="Imagen siguiente" onClick={() => { if (selected !== null) setSelected((selected + 1) % gallery.length); }}><ArrowRight /></Button><Dialog.Close asChild><Button variant="editorialIcon" aria-label="Cerrar imagen ampliada"><X /></Button></Dialog.Close></div></div>
    </Dialog.Content></Dialog.Portal></Dialog.Root>
  </div></section>;
}