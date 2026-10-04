import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo/Seo.jsx";
import PageHero from "../components/PageHero/PageHero.jsx";
import ContactInfo from "../components/ContactInfo/ContactInfo.jsx";
import Button from "../components/Button/Button.jsx";
import Icon from "../components/Icon/Icon.jsx";
import siteConfig from "../config/siteConfig.js";
import contactConfig from "../config/contactConfig.js";
import services from "../config/servicesConfig.js";
import { mailLink, whatsappLink } from "../utils/helpers.js";
import "./Contact.css";

const emptyForm = { name: "", phone: "", email: "", service: "", message: "" };

/** Builds a plain-text enquiry from the form values. */
function buildMessage(form) {
  const serviceTitle = services.find((s) => s.id === form.service)?.title;
  return [
    `Hello ${siteConfig.businessName}, I would like to make an enquiry.`,
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    serviceTitle ? `Service: ${serviceTitle}` : null,
    "",
    form.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

function Contact() {
  const { hero, info, hoursTitle, form: text, mapTitle, mapPlaceholder } = contactConfig;
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get("service") || "";
  const [fields, setFields] = useState(emptyForm);
  const formRef = useRef(null);

  // A service chosen by the visitor wins; otherwise use ?service= from a service card or footer link
  const form = { ...fields, service: fields.service || preselected };

  const handleChange = (e) => setFields((current) => ({ ...current, [e.target.name]: e.target.value }));

  const handleWhatsApp = (e) => {
    e.preventDefault();
    window.open(whatsappLink(siteConfig.whatsapp, buildMessage(form)), "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    if (!formRef.current.reportValidity()) return;
    window.location.href = mailLink(siteConfig.email, text.emailSubject, buildMessage(form));
  };

  return (
    <>
      <Seo page="contact" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <h2>{info.title}</h2>
            <p>{info.text}</p>
            <ContactInfo />

            <div className="contact__hours reveal">
              <h3>
                <Icon name="clock" /> {hoursTitle}
              </h3>
              <dl>
                {siteConfig.hours.map((row) => (
                  <div key={row.days}>
                    <dt>{row.days}</dt>
                    <dd>{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <form className="contact__form reveal reveal--right" ref={formRef} onSubmit={handleWhatsApp}>
            <h2>{text.title}</h2>
            <p>{text.text}</p>

            <div className="form-field">
              <label htmlFor="name">Full name *</label>
              <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone *</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="service">{text.serviceLabel}</label>
              <select id="service" name="service" value={form.service} onChange={handleChange}>
                <option value="">{text.servicePlaceholder}</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder={text.messagePlaceholder}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="contact__buttons">
              <button type="submit" className="btn btn--accent btn--lg">
                <Icon name="whatsapp" /> <span>{text.whatsappButton}</span>
              </button>
              <Button variant="outline" size="lg" onClick={handleEmail}>
                {text.emailButton}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="section section--alt contact-map">
        <div className="container">
          <h2 className="contact-map__title">{mapTitle}</h2>
          <div className="contact-map__frame reveal reveal--zoom">
            {siteConfig.mapEmbedUrl ? (
              <iframe
                src={siteConfig.mapEmbedUrl}
                title={`Map showing the location of ${siteConfig.businessName}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="contact-map__placeholder">
                <Icon name="location" />
                <p>{siteConfig.address}</p>
                <small>{mapPlaceholder}</small>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
