import "./Marquee.css";

/** Endlessly scrolling text band. items: array of short strings (homeConfig.marquee). */
function Marquee({ items }) {
  const row = (hidden) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
          <i aria-hidden="true">✦</i>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export default Marquee;
