import Seo from "../components/Seo/Seo.jsx";
import Hero from "../components/Hero/Hero.jsx";
import StatsBar from "../components/StatsBar/StatsBar.jsx";
import Marquee from "../components/Marquee/Marquee.jsx";
import SplitSection from "../components/SplitSection/SplitSection.jsx";
import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard/ServiceCard.jsx";
import FeatureCard from "../components/FeatureCard/FeatureCard.jsx";
import GalleryCard from "../components/GalleryCard/GalleryCard.jsx";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard.jsx";
import CTASection from "../components/CTASection/CTASection.jsx";
import ContactInfo from "../components/ContactInfo/ContactInfo.jsx";
import Button from "../components/Button/Button.jsx";
import Icon from "../components/Icon/Icon.jsx";
import homeConfig from "../config/homeConfig.js";
import services, { servicesPage } from "../config/servicesConfig.js";
import galleryItems from "../config/galleryConfig.js";
import "./Home.css";

function Home() {
  const { hero, stats, aboutPreview, servicesPreview, whyChoose, galleryPreview, testimonials, cta, contactPreview } =
    homeConfig;

  return (
    <>
      <Seo page="home" />
      <Hero data={hero} />
      <StatsBar stats={stats} />
      <Marquee items={homeConfig.marquee} />

      <section className="section">
        <div className="container">
          <SplitSection image={aboutPreview.image} imageAlt={aboutPreview.imageAlt}>
            <span className="eyebrow">{aboutPreview.eyebrow}</span>
            <h2>{aboutPreview.title}</h2>
            {aboutPreview.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="split__points">
              {aboutPreview.points.map((point) => (
                <li key={point}>
                  <Icon name="check" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button to={aboutPreview.cta.path} variant="primary" icon="arrow-right">
              {aboutPreview.cta.label}
            </Button>
          </SplitSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle {...servicesPreview} />
          <div className="grid grid--3">
            {services.slice(0, servicesPreview.count).map((service) => (
              <ServiceCard key={service.id} service={service} ctaLabel={servicesPage.grid.cardCta} />
            ))}
          </div>
          <div className="section__footer">
            <Button to="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle eyebrow={whyChoose.eyebrow} title={whyChoose.title} subtitle={whyChoose.subtitle} />
          <div className="grid grid--4">
            {whyChoose.items.map((item) => (
              <FeatureCard key={item.title} variant="dark" {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle {...galleryPreview} />
          <div className="grid grid--3">
            {galleryItems.slice(0, galleryPreview.count).map((item) => (
              <GalleryCard key={item.id} item={item} to="/gallery" />
            ))}
          </div>
          <div className="section__footer">
            <Button to="/gallery" variant="outline">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle eyebrow={testimonials.eyebrow} title={testimonials.title} subtitle={testimonials.subtitle} />
          <div className="grid grid--3">
            {testimonials.items.map((item) => (
              <TestimonialCard key={item.name} testimonial={item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection data={cta} />

      <section className="section">
        <div className="container home-contact">
          <div>
            <span className="eyebrow">{contactPreview.eyebrow}</span>
            <h2>{contactPreview.title}</h2>
            <p className="home-contact__text">{contactPreview.text}</p>
            <Button to={contactPreview.cta.path} variant="accent" icon="arrow-right">
              {contactPreview.cta.label}
            </Button>
          </div>
          <ContactInfo />
        </div>
      </section>
    </>
  );
}

export default Home;
