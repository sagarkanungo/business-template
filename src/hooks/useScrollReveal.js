import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Adds "is-visible" to every .reveal element when it scrolls into view.
 * Re-scans on route change and when new .reveal nodes appear (e.g. gallery filtering).
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const scan = (root) => {
      root.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    };
    scan(document);

    const mo = new MutationObserver(() => scan(document));
    mo.observe(document.getElementById("main") || document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);
}
