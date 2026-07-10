import { OverlayProvider } from "@/components/overlays/OverlayProvider";
import { Header } from "@/components/Header";
import { SubNav } from "@/components/SubNav";
import { TitleRow } from "@/components/TitleRow";
import { Gallery } from "@/components/Gallery";
import { Overview } from "@/components/sections/Overview";
import { Description } from "@/components/sections/Description";
import { Sleep } from "@/components/sections/Sleep";
import { Amenities } from "@/components/sections/Amenities";
import { Calendar } from "@/components/sections/Calendar";
import { ReservationRail } from "@/components/sections/ReservationRail";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { Host } from "@/components/sections/Host";
import { ThingsToKnow } from "@/components/sections/ThingsToKnow";
import { MoreStays } from "@/components/sections/MoreStays";

export default function Page() {
  return (
    <OverlayProvider>
      <Header />
      <SubNav />
      <main id="main">
        <div className="container">
          <TitleRow />
          <Gallery />
          <div className="layout">
            <div className="layout__main">
              <Overview />
              <Description />
              <Sleep />
              <Amenities />
              <Calendar />
            </div>
            <aside className="layout__aside">
              <ReservationRail />
            </aside>
          </div>
          <Reviews />
          <Location />
          <Host />
          <ThingsToKnow />
          <MoreStays />
        </div>
      </main>
    </OverlayProvider>
  );
}
