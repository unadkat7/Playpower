"use client";
import { Icon, IC } from "@/lib/icons";
import { listing } from "@/lib/data";
import { useOverlays } from "../overlays/OverlayProvider";

export function ReservationRail() {
  const { showToast } = useOverlays();
  return (
    <div className="reservation-sticky">
      <div className="offer">
        <img className="offer__icon" src="/assets/images/ui/discount.svg" alt="" />
        <div className="offer__text">
          Get 10% off your next stay.
          <br />
          <a href="#">Terms apply</a>
        </div>
        <button className="offer__claim" type="button" onClick={() => showToast("Discount claimed")}>
          Claim
        </button>
      </div>

      <div className="reservation">
        <div className="reservation__price">
          <span className="amt">{listing.pricePerStayLabel}</span>
          <span className="per">{listing.nightsLabel}</span>
        </div>

        <div className="res-dates">
          <div className="res-dates__row">
            <div className="res-cell">
              <div className="res-label">CHECK-IN</div>
              <div className="res-value">{listing.checkIn}</div>
            </div>
            <div className="res-cell">
              <div className="res-label">CHECKOUT</div>
              <div className="res-value">{listing.checkOut}</div>
            </div>
          </div>
          <div className="res-guests">
            <div>
              <div className="res-label">GUESTS</div>
              <div className="res-value">{listing.guestsLabel}</div>
            </div>
            <Icon name={IC.chevronDown} className="icon-16" />
          </div>
        </div>

        <div className="res-note">
          Free cancellation before <b>{listing.freeCancellationDate}</b>
        </div>

        <button className="btn-reserve is-full" type="button" onClick={() => showToast("Reservation started")}>
          Reserve
        </button>
        <div className="res-subnote">You won&apos;t be charged yet</div>
      </div>

      <div className="report">
        <Icon name={IC.report} className="ico" />
        <a href="#">Report this listing</a>
      </div>
    </div>
  );
}
