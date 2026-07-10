"use client";
import { useState } from "react";
import { Icon, IC } from "@/lib/icons";
import { listing, ratingCategories, ratingDistribution, reviewChips, reviews, type Review } from "@/lib/data";

function Stars() {
  return (
    <span className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name={IC.star} />
      ))}
    </span>
  );
}

function ReviewCard({ r }: { r: Review }) {
  const [expanded, setExpanded] = useState(false);
  const long = r.text.length > 170;
  return (
    <div className="review">
      <div className="head">
        {r.avatar ? (
          <img className="review__avatar" src={r.avatar} alt="" />
        ) : (
          <span className="review__initial" style={{ background: "#c2c2c2", color: "#fff" }}>{r.initial}</span>
        )}
        <div>
          <div className="review__name">{r.name}</div>
          <div className="review__tenure">{r.tenure}</div>
        </div>
      </div>
      <div className="review__meta">
        <Stars /> <span>·</span> <span>{r.date}</span>
      </div>
      <p className={"review__text" + (long && !expanded ? " is-clamped" : "")}>{r.text}</p>
      {long && !expanded && (
        <button className="review__more" type="button" onClick={() => setExpanded(true)}>Show more</button>
      )}
    </div>
  );
}

export function Reviews() {
  return (
    <div className="reviews-wrap" id="reviews">
      <section className="review-section">
        <div className="rating-hero">
          <div className="rating-hero__row">
            <img src="/assets/images/ui/laurel-left.png" alt="" />
            <span className="rating-hero__num">{listing.rating}</span>
            <img src="/assets/images/ui/laurel-right.png" alt="" />
          </div>
          <div className="rating-hero__title">Guest favourite</div>
          <p className="rating-hero__sub">
            This home is a guest favourite based on ratings, reviews and reliability
          </p>
          <button className="rating-hero__link" type="button">How reviews work</button>
        </div>

        <div className="rating-breakdown">
          <div className="breakdown-col">
            <div className="breakdown-col__label">Overall rating</div>
            <div className="dist">
              {ratingDistribution.map((d) => (
                <div className="dist__row" key={d.star}>
                  <span className="star">{d.star}</span>
                  <span className="dist__bar"><span className="dist__fill" style={{ width: `${d.pct}%` }} /></span>
                </div>
              ))}
            </div>
          </div>
          {ratingCategories.map((c) => (
            <div className="breakdown-col" key={c.label}>
              <div className="breakdown-col__label">{c.label}</div>
              <div className="breakdown-col__value">{c.value}</div>
              <Icon name={c.icon} className="ico" />
            </div>
          ))}
        </div>

        <div className="chips">
          {reviewChips.map((c) => (
            <button className="chip" key={c.label} type="button">
              <img src={c.img} alt="" />
              {c.label} <span className="count">{c.count}</span>
            </button>
          ))}
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>

        <button className="btn-outline" type="button">Show all {listing.reviewCount} reviews</button>
      </section>
    </div>
  );
}
