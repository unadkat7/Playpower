"use client";
import { Icon } from "@/lib/icons";
import { amenitiesPreview } from "@/lib/data";
import { useOverlays } from "../overlays/OverlayProvider";

export function Amenities() {
  const { openAmenities } = useOverlays();
  return (
    <section className="section" id="amenities">
      <h2 className="section__title">What this place offers</h2>
      <div className="amenities-grid">
        {amenitiesPreview.map((a) => (
          <div className={"amenity" + (a.unavailable ? " is-unavailable" : "")} key={a.label}>
            <Icon name={a.icon} className="ico" />
            <span className="label">{a.label}</span>
          </div>
        ))}
      </div>
      <button className="btn-outline" type="button" onClick={openAmenities}>
        Show all 50 amenities
      </button>
    </section>
  );
}
