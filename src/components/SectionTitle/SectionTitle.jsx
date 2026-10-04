import "./SectionTitle.css";

/** Eyebrow + H2 + subtitle used at the top of most sections. align: center | left */
function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
