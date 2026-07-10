"use client";
import { useEffect } from "react";
import { Icon, IC } from "@/lib/icons";
import { amenityGroups, amenityIconByLabel } from "@/lib/data";
import { useOverlays } from "./OverlayProvider";

export function AmenitiesModal() {
  const { amenitiesOpen, closeAmenities } = useOverlays();

  useEffect(() => {
    if (!amenitiesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAmenities();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [amenitiesOpen, closeAmenities]);

  return (
    <div
      className={"modal-scrim" + (amenitiesOpen ? " is-open" : "")}
      onClick={(e) => { if (e.target === e.currentTarget) closeAmenities(); }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label="What this place offers">
        <div className="modal__header">
          <button className="round-icon-btn modal__back" type="button" aria-label="Close" onClick={closeAmenities}>
            <Icon name={IC.close} />
          </button>
        </div>
        <div className="modal__body">
          <h2>What this place offers</h2>
          {amenityGroups.map((group) => (
            <div className="modal-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.rows.map((row) => (
                <div className={"modal-amenity" + (row.unavailable ? " is-unavailable" : "")} key={row.label}>
                  <Icon name={amenityIconByLabel[row.label] ?? IC.star} className="ico" />
                  <span className="label">{row.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
