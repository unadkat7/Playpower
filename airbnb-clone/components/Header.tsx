import { Icon, IC } from "@/lib/icons";

export function Header() {
  return (
    <header className="site-header" id="siteHeader">
      <div className="site-header__inner">
        <a className="logo" href="#" aria-label="Airbnb homepage">
          <Icon name={IC.logo} className="logo__mark" />
        </a>

        <div className="searchbar" role="search">
          <button className="searchbar__seg" type="button">
            <img className="searchbar__house" src="/assets/images/ui/searchbar-house.png" alt="" aria-hidden="true" />
            Anywhere
          </button>
          <span className="searchbar__divider" />
          <button className="searchbar__seg" type="button">Anytime</button>
          <span className="searchbar__divider" />
          <button className="searchbar__seg searchbar__seg--muted" type="button">Add guests</button>
          <button className="searchbar__orb" type="button" aria-label="Search" />
        </div>

        <nav className="header-actions">
          <a className="header-actions__host" href="#">Become a host</a>
          <button className="icon-btn" type="button" aria-label="Choose a language and currency">
            <Icon name={IC.globe} />
          </button>
          <button className="icon-btn" type="button" aria-label="Main navigation menu">
            <Icon name={IC.menu} />
          </button>
        </nav>
      </div>
    </header>
  );
}
