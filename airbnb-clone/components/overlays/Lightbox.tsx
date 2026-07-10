"use client";
import { useEffect } from "react";
import { Icon, IC } from "@/lib/icons";
import { galleryPhotos } from "@/lib/data";
import { useOverlays } from "./OverlayProvider";

export function Lightbox() {
  const { lightboxIndex, openLightbox, closeLightbox } = useOverlays();
  const open = lightboxIndex !== null;
  const index = lightboxIndex ?? 0;
  const total = galleryPhotos.length;
  const atStart = index <= 0;
  const atEnd = index >= total - 1;

  const prev = () => { if (!atStart) openLightbox(index - 1); };
  const next = () => { if (!atEnd) openLightbox(index + 1); };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, atStart, atEnd]);

  const photo = galleryPhotos[index];

  return (
    <div className={"lightbox" + (open ? " is-open" : "")} role="dialog" aria-modal="true" aria-label="Photo viewer">
      <div className="lightbox__header">
        <button className="round-icon-btn lightbox__back" type="button" aria-label="Close" onClick={closeLightbox}>
          <Icon name={IC.close} />
        </button>
        <div className="lightbox__title">{photo?.category}</div>
        <div className="lightbox__right">
          <span className="lightbox__counter">{index + 1} / {total}</span>
        </div>
      </div>

      <button
        className="round-icon-btn lb-arrow lb-arrow--prev"
        type="button"
        aria-label="Previous photo"
        onClick={prev}
        disabled={atStart}
      >
        <Icon name={IC.prev} />
      </button>

      <div className="lightbox__stage">
        {photo && <img key={index} className="fade" src={photo.src} alt={photo.category} />}
      </div>

      <button
        className="round-icon-btn lb-arrow lb-arrow--next"
        type="button"
        aria-label="Next photo"
        onClick={next}
        disabled={atEnd}
      >
        <Icon name={IC.next} />
      </button>
    </div>
  );
}
