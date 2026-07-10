import { Icon, IC } from "@/lib/icons";
import { listing, highlights, host } from "@/lib/data";

export function Overview() {
  return (
    <>
      <section className="overview">
        <h2>{listing.subtitle}</h2>
        <div className="overview__sub">{listing.specs.join(" · ")}</div>
      </section>

      <section className="gf-banner" aria-label="Guest favourite">
        <span className="gf-banner__laurel-wrap">
          <Icon name={IC.laurel} className="laurel" />
          <span className="gf-banner__label">Guest<br />favourite</span>
          <Icon name={IC.laurel} className="laurel laurel--right" />
        </span>
        <span className="gf-banner__text">
          One of the most loved homes on Airbnb, according to guests
        </span>
        <span className="gf-banner__stats">
          <span className="gf-stat">
            <span className="gf-stat__num">{listing.rating}</span>
            <span className="gf-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name={IC.star} />
              ))}
            </span>
          </span>
          <span className="gf-divider" />
          <span className="gf-stat">
            <span className="gf-stat__num">{listing.reviewCount}</span>
            <span className="gf-stat__label">Reviews</span>
          </span>
        </span>
      </section>

      <section className="host-row">
        <img className="host-row__avatar" src={host.avatar} alt="" />
        <div>
          <div className="host-row__name">Hosted by {host.name}</div>
          <div className="meta">{host.hostedByYears}</div>
        </div>
      </section>

      <section className="highlights">
        {highlights.map((h) => (
          <div className="highlight" key={h.title}>
            <Icon name={h.icon} className="highlight__icon" />
            <div>
              <div className="highlight__title">{h.title}</div>
              <div className="highlight__body">{h.body}</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
