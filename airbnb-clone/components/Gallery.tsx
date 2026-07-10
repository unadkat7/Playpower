"use client";
import { Icon, IC } from "@/lib/icons";
import { useOverlays } from "./overlays/OverlayProvider";
import { heroImages } from "@/lib/data";

export function Gallery() {
  const { openPhotoTour, openLightboxBySrc } = useOverlays();

  return (
    <section className="gallery" id="photos" aria-label="Photos of this place">
      <div className="gallery__grid">
        {heroImages.map((src, i) => (
          <button
            key={src + i}
            className="gallery__cell"
            type="button"
            aria-label={`View photo ${i + 1}`}
            onClick={() => openLightboxBySrc(src)}
          >
            <img src={src} alt="" loading={i === 0 ? "eager" : "lazy"} />
          </button>
        ))}
      </div>
      <button className="show-all-photos" type="button" onClick={openPhotoTour}>
        <Icon name={IC.grid} className="icon-15" />
        Show all photos
      </button>
    </section>
  );
}
