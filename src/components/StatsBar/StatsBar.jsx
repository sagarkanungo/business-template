import { useEffect, useRef, useState } from "react";
import "./StatsBar.css";

/** Splits "450+" into prefix "", number 450, suffix "+" so the number can count up. */
const parseValue = (value) => {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  return match ? { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] } : null;
};

/** Number that counts up from 0 when it scrolls into view. Falls back to plain text. */
function CountUp({ value }) {
  const parsed = parseValue(value);
  const ref = useRef(null);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!parsed) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return undefined;

    let frame;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCurrent(Math.round(parsed.number * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!parsed) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {parsed.prefix}
      {current ?? parsed.number}
      {parsed.suffix}
    </span>
  );
}

/** Row of headline numbers. variant: card (floating white card) | plain (for dark sections) */
function StatsBar({ stats, variant = "card" }) {
  return (
    <div className={`stats stats--${variant}`}>
      <dl className="container stats__list reveal">
        {stats.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <dt className="stats__label">{stat.label}</dt>
            <dd className="stats__value">
              <CountUp value={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default StatsBar;
