import { useEffect } from "react";
import siteConfig from "../../config/siteConfig.js";

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

/**
 * Sets the document title and meta description for a page.
 * Usage: <Seo page="about" /> — text comes from siteConfig.seo[page].
 */
function Seo({ page }) {
  const { title, description } = siteConfig.seo[page] || {};

  useEffect(() => {
    if (!title) return;
    const fullTitle = title.includes(siteConfig.businessName) ? title : `${title} | ${siteConfig.businessName}`;
    document.title = fullTitle;
    setMeta("name", "description", description || siteConfig.shortDescription);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description || siteConfig.shortDescription);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", siteConfig.businessName);
  }, [title, description]);

  return null;
}

export default Seo;
