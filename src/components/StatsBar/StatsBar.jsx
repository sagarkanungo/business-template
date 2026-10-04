import "./StatsBar.css";

/** Row of headline numbers. variant: card (floating white card) | plain (for dark sections) */
function StatsBar({ stats, variant = "card" }) {
  return (
    <div className={`stats stats--${variant}`}>
      <dl className="container stats__list">
        {stats.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <dt className="stats__label">{stat.label}</dt>
            <dd className="stats__value">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default StatsBar;
