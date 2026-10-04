import { useMemo, useState } from "react";
import Seo from "../components/Seo/Seo.jsx";
import PageHero from "../components/PageHero/PageHero.jsx";
import GalleryCard from "../components/GalleryCard/GalleryCard.jsx";
import Lightbox from "../components/Lightbox/Lightbox.jsx";
import CTASection from "../components/CTASection/CTASection.jsx";
import galleryItems, { galleryPage } from "../config/galleryConfig.js";
import "./Gallery.css";

function Gallery() {
  const { hero, allLabel, cta } = galleryPage;
  const [category, setCategory] = useState(allLabel);
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = useMemo(() => [allLabel, ...new Set(galleryItems.map((item) => item.category))], [allLabel]);
  const visibleItems = category === allLabel ? galleryItems : galleryItems.filter((item) => item.category === category);

  return (
    <>
      <Seo page="gallery" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container">
          <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
            {categories.map((name) => (
              <button
                key={name}
                type="button"
                className={`gallery-filters__btn ${name === category ? "is-active" : ""}`}
                aria-pressed={name === category}
                onClick={() => setCategory(name)}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="grid grid--3">
            {visibleItems.map((item, index) => (
              <GalleryCard key={item.id} item={item} onOpen={() => setActiveIndex(index)} />
            ))}
          </div>
        </div>
      </section>

      <CTASection data={cta} />

      {activeIndex !== null && (
        <Lightbox items={visibleItems} index={activeIndex} onChange={setActiveIndex} onClose={() => setActiveIndex(null)} />
      )}
    </>
  );
}

export default Gallery;
