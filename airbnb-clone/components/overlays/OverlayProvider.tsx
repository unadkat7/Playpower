"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { PhotoTour } from "./PhotoTour";
import { Lightbox } from "./Lightbox";
import { AmenitiesModal } from "./AmenitiesModal";
import { galleryPhotos } from "@/lib/data";

type OverlayCtx = {
  openPhotoTour: () => void;
  closePhotoTour: () => void;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  openAmenities: () => void;
  closeAmenities: () => void;
  openLightboxBySrc: (src: string) => void;
  showToast: (msg: string) => void;
  photoTourOpen: boolean;
  lightboxIndex: number | null;
  amenitiesOpen: boolean;
};

const Ctx = createContext<OverlayCtx | null>(null);
export const useOverlays = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useOverlays must be used within OverlayProvider");
  return c;
};

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const remember = () => (lastFocused.current = document.activeElement as HTMLElement);
  const restore = () => lastFocused.current?.focus?.();

  const openPhotoTour = useCallback(() => { remember(); setPhotoTourOpen(true); }, []);
  const closePhotoTour = useCallback(() => { setPhotoTourOpen(false); restore(); }, []);
  const openLightbox = useCallback((index: number) => {
    if (!photoTourOpen) remember();
    setLightboxIndex(index);
  }, [photoTourOpen]);
  const openLightboxBySrc = useCallback((src: string) => {
    const i = galleryPhotos.findIndex((p) => p.src === src);
    openLightbox(i >= 0 ? i : 0);
  }, [openLightbox]);
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    if (!photoTourOpen) restore();
  }, [photoTourOpen]);
  const openAmenities = useCallback(() => { remember(); setAmenitiesOpen(true); }, []);
  const closeAmenities = useCallback(() => { setAmenitiesOpen(false); restore(); }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }, []);

  const anyOpen = photoTourOpen || lightboxIndex !== null || amenitiesOpen;
  useEffect(() => {
    document.body.classList.toggle("no-scroll", anyOpen);
  }, [anyOpen]);

  const value = useMemo<OverlayCtx>(() => ({
    openPhotoTour, closePhotoTour, openLightbox, openLightboxBySrc, closeLightbox,
    openAmenities, closeAmenities, showToast, photoTourOpen, lightboxIndex, amenitiesOpen,
  }), [openPhotoTour, closePhotoTour, openLightbox, openLightboxBySrc, closeLightbox, openAmenities, closeAmenities, showToast, photoTourOpen, lightboxIndex, amenitiesOpen]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <PhotoTour />
      <Lightbox />
      <AmenitiesModal />
      <div className={"toast" + (toast ? " is-visible" : "")} role="status" aria-live="polite">{toast}</div>
    </Ctx.Provider>
  );
}
