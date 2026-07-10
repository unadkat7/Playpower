"use client";
import { useState } from "react";
import { Icon, IC } from "@/lib/icons";
import { description } from "@/lib/data";

export function Description() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="description">
      <div className="translate-note">
        Some info has been automatically translated. <button type="button">Show original</button>
      </div>
      <p id="descText" className={expanded ? "" : "is-clamped"}>{description}</p>
      {!expanded && (
        <button className="show-more" type="button" onClick={() => setExpanded(true)}>
          Show more <Icon name={IC.chevronRight} className="icon-14" />
        </button>
      )}
    </section>
  );
}
