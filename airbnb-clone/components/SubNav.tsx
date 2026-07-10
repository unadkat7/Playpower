"use client";
import { useEffect, useState } from "react";
import { listing } from "@/lib/data";

const LINKS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

export function SubNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("photos");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = sections[0]?.id ?? "photos";
      for (const s of sections) if (s.offsetTop <= y) current = s.id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"subnav" + (visible ? " is-visible" : "")} aria-hidden={!visible}>
      <div className="subnav__inner">
        <nav className="subnav__links" aria-label="Section navigation">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "is-active" : ""} tabIndex={visible ? 0 : -1}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="subnav__right">
          <div className="subnav__price">
            <div className="subnav__price-amt">{listing.pricePerStayLabel} {listing.nightsLabel}</div>
            <div className="subnav__rating">
              <span className="star-mask" aria-hidden="true" /> {listing.rating} · {listing.reviewCount} reviews
            </div>
          </div>
          <button className="btn-reserve btn-reserve--sm" type="button" tabIndex={visible ? 0 : -1}>Reserve</button>
        </div>
      </div>
    </div>
  );
}
