"use client";
import { useEffect, useRef, useState } from "react";
import { Icon, IC } from "@/lib/icons";
import { moreStays } from "@/lib/data";

export function MoreStays() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => { update(); }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="section">
      <div className="more-head">
        <h2 className="section__title" style={{ margin: 0 }}>More places to stay</h2>
        <div className="more-head__nav">
          <button className="carousel-btn" type="button" aria-label="Previous" onClick={() => scroll(-1)} disabled={atStart}>
            <Icon name={IC.prev} className="ico" />
          </button>
          <button className="carousel-btn" type="button" aria-label="Next" onClick={() => scroll(1)} disabled={atEnd}>
            <Icon name={IC.next} className="ico" />
          </button>
        </div>
      </div>

      <div className="more-track" ref={trackRef} onScroll={update}>
        {moreStays.map((s, i) => (
          <div className="more-card" key={s.title + i}>
            <img src={s.img} alt="" loading="lazy" />
            <div className="more-card__title">{s.title}</div>
            <div className="more-card__price">
              {s.price} for 2 nights · <Icon name={IC.star} className="star" /> {s.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
