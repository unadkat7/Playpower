import { Icon, IC } from "@/lib/icons";
import { neighbourhood } from "@/lib/data";

export function Location() {
  return (
    <section className="section" id="location">
      <h2 className="section__title">Where you&apos;ll be</h2>
      <div className="location__addr">Candolim, Goa, India</div>

      <div className="map">
        <div className="map__bg" />
        <button className="map__search" type="button" aria-label="Search this area">
          <Icon name={IC.search} className="ico" />
        </button>
        <div className="map__zoom">
          <button type="button" aria-label="Zoom in"><Icon name={IC.zoomIn} className="ico" /></button>
          <button type="button" aria-label="Zoom out"><Icon name={IC.zoomOut} className="ico" /></button>
        </div>
        <div className="map__marker" aria-hidden="true">
          <Icon name={IC.homeMarker} />
        </div>
      </div>

      <div className="map__note">Exact location provided after booking.</div>

      <div className="neigh__title">Candolim, Goa, India</div>
      <p className="neigh__text">{neighbourhood}</p>
    </section>
  );
}
