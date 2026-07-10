"use client";
import { useState } from "react";
import { Icon, IC } from "@/lib/icons";
import { useOverlays } from "./overlays/OverlayProvider";
import { listing } from "@/lib/data";

export function TitleRow() {
  const [saved, setSaved] = useState(false);
  const { showToast } = useOverlays();

  return (
    <section className="title-row">
      <h1 className="title">{listing.title}</h1>
      <div className="title-actions">
        <button
          className="icon-text-btn"
          type="button"
          onClick={() => showToast("Link copied to clipboard")}
        >
          <Icon name={IC.share} className="icon-16" />
          <span className="u-underline">Share</span>
        </button>
        <button
          className={"icon-text-btn" + (saved ? " is-saved" : "")}
          type="button"
          aria-pressed={saved}
          onClick={() => setSaved((s) => !s)}
        >
          <Icon name={IC.heart} className="icon-16" />
          <span className="u-underline">Save</span>
        </button>
      </div>
    </section>
  );
}
