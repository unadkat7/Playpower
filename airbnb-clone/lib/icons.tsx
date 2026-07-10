import type { CSSProperties } from "react";
import { ICONS } from "./icons_raw";

/**
 * Renders one of the reference's inline SVG icons. The raw SVG markup lives in
 * icons_raw.ts (extracted from the source DOM); sizing/colour is controlled by
 * the parent via `className` (the SVG fills its box and inherits currentColor).
 */
export function Icon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) {
  const svg = ICONS[name] ?? "";
  return (
    <span
      className={className}
      style={style}
      aria-hidden="true"
      // Trusted, static markup captured at build time.
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

/** Human-readable aliases onto the raw icon keys used across the UI. */
export const IC = {
  logo: "airbnb_homepage",
  globe: "choose_a_language_and_currency",
  menu: "main_navigation_menu",
  share: "share",
  heart: "save",
  grid: "show_all_photos",
  laurel: "guest",
  star: "icon",
  chevronRight: "where_you_ll_sleep",
  chevronLeft: "5_nights_in_candolim",
  chevronDown: "free_cancellation_before",
  keyboard: "clear_dates",
  report: "reserve",
  homeMarker: "icon_1",
  school: "co_hosts",
  shield: "icon_2",
  balloon: "born_in_the_80s",
  search: "search",
  zoomIn: "zoom_in",
  zoomOut: "zoom_out",
  close: "close",
  prev: "previous",
  next: "next",
  hlOutdoor: "outdoor_entertainment",
  hlCool: "designed_for_staying_cool",
  hlCheckin: "self_check_in",
  ttkCancellation: "ttk_0",
  ttkRules: "ttk_1",
  ttkSafety: "ttk_2",
  catCleanliness: "cat_0",
  catAccuracy: "cat_1",
  catCheckin: "cat_2",
  catCommunication: "cat_3",
  catLocation: "cat_4",
  catValue: "cat_5",
} as const;
