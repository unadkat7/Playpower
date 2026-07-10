"use client";
import { useEffect } from "react";

/**
 * Mirrors the reference's focus behaviour: focus rings only appear once the user
 * starts navigating with the keyboard (Tab), and disappear again on mouse use.
 */
export function KeyboardFocus() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") document.body.classList.add("kbd");
    };
    const onMouse = () => document.body.classList.remove("kbd");
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onMouse);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onMouse);
    };
  }, []);
  return null;
}
