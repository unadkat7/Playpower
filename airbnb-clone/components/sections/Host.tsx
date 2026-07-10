import { Icon, IC } from "@/lib/icons";
import { host, coHosts } from "@/lib/data";

export function Host() {
  return (
    <section className="section">
      <h2 className="section__title">Meet your host</h2>
      <div className="host">
        <div>
          <div className="host-card">
            <div className="host-card__main">
              <div className="host-card__avatar">
                <img src={host.avatar} alt="" />
                <span className="host-card__badge"><Icon name={IC.shield} /></span>
              </div>
              <div className="host-card__name">{host.name}</div>
              <div className="host-card__role">Superhost</div>
            </div>
            <div className="host-card__stats">
              <div className="host-stat">
                <div className="host-stat__num">{host.reviews}</div>
                <div className="host-stat__label">Reviews</div>
              </div>
              <div className="host-stat">
                <div className="host-stat__num">{host.rating}</div>
                <div className="host-stat__label">Rating</div>
              </div>
              <div className="host-stat">
                <div className="host-stat__num">{host.yearsHosting}</div>
                <div className="host-stat__label">Years hosting</div>
              </div>
            </div>
          </div>

          <div className="host-facts">
            <div className="host-fact"><Icon name={IC.balloon} className="ico" /> {host.bornInThe80s}</div>
            <div className="host-fact"><Icon name={IC.school} className="ico" /> {host.school}</div>
          </div>
        </div>

        <div>
          <div className="host__subhead">Co-hosts</div>
          <div className="cohosts">
            {coHosts.map((c) => (
              <div className="cohost" key={c.name}>
                {c.avatar ? (
                  <img src={c.avatar} alt="" />
                ) : (
                  <span className="cohost__initial" style={{ background: "#c2c2c2", color: "#fff" }}>{c.initial}</span>
                )}
                {c.name}
              </div>
            ))}
          </div>

          <div className="host__subhead">Host details</div>
          <div className="host-detail-text">
            {host.responseRate}
            <br />
            {host.respondsWithin}
          </div>

          <button className="btn-grey" type="button">Message host</button>

          <div className="protection">
            <Icon name={IC.shield} className="ico" />
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
