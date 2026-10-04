import "./PageHero.css";

/** Compact banner at the top of inner pages. Renders the page's single <h1>. */
function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;
