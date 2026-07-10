"use client";
import { useEffect } from "react";
import { Icon, IC } from "@/lib/icons";
import { photoTour } from "@/lib/data";
import { useOverlays } from "./OverlayProvider";

export function PhotoTour() {
  const { photoTourOpen, closePhotoTour, openLightbox, lightboxIndex, showToast } = useOverlays();

  useEffect(() => {
    if (!photoTourOpen) return;
    const onKey = (e: KeyboardEvent) => {
      // Only close the tour with Escape when the lightbox is not stacked on top.
      if (e.key === "Escape" && lightboxIndex === null) closePhotoTour();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [photoTourOpen, lightboxIndex, closePhotoTour]);

  const scrollToGroup = (i: number) => {
    document.getElementById(`pt-group-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Running index across all groups, matching the flattened galleryPhotos order.
  let running = 0;

  return (
    <div className={"phototour" + (photoTourOpen ? " is-open" : "")} role="dialog" aria-modal="true" aria-label="Photo tour">
      <div className="phototour__header">
        <button className="round-icon-btn phototour__back" type="button" aria-label="Close photo tour" onClick={closePhotoTour}>
          <Icon name={IC.prev} />
        </button>
        <div className="phototour__title">Photo tour</div>
        <div className="phototour__actions">
          <button className="icon-text-btn" type="button" onClick={() => showToast("Link copied to clipboard")}>
            <Icon name={IC.share} className="icon-16" />
            <span className="u-underline">Share</span>
          </button>
          <button className="icon-text-btn" type="button">
            <Icon name={IC.heart} className="icon-16" />
            <span className="u-underline">Save</span>
          </button>
        </div>
      </div>

      <div className="phototour__scroll">
        <div className="phototour__inner">
          <nav className="phototour__nav" aria-label="Jump to room">
            {photoTour.nav.map((n, i) => (
              <button key={n.label} className="phototour__thumb" type="button" onClick={() => scrollToGroup(i)}>
                <img src={n.img} alt="" loading="lazy" />
                <span className="label">{n.label}</span>
              </button>
            ))}
          </nav>

          {photoTour.groups.map((g, gi) => (
            <section className="pt-group" id={`pt-group-${gi}`} key={g.title}>
              <div className="pt-group__head">
                <h2 className="pt-group__title">{g.title}</h2>
                {g.subtitle && <div className="pt-group__sub">{g.subtitle}</div>}
              </div>
              <div className="pt-photos">
                <div className={"pt-grid " + (g.layout === "2col" ? "pt-grid--2" : "pt-grid--1")}>
                  {g.imgs.map((src) => {
                    const idx = running++;
                    return (
                      <button
                        key={src + idx}
                        className="pt-photo"
                        type="button"
                        aria-label={`View ${g.title} photo`}
                        onClick={() => openLightbox(idx)}
                      >
                        <img src={src} alt="" loading="lazy" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
