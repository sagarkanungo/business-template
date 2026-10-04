import { useEffect, useRef } from "react";
import Icon from "../Icon/Icon.jsx";
import { assetUrl } from "../../utils/helpers.js";
import "./Lightbox.css";

/** Simple accessible image modal with prev/next, Esc to close and arrow-key navigation. */
function Lightbox({ items, index, onClose, onChange }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const item = items[index];
  const total = items.length;

  const go = (step) => onChange((index + step + total) % total);

  // Focus management + scroll lock; restore focus to the tile that opened the dialog
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    document.body.classList.add("no-scroll");
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("no-scroll");
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "Tab") {
        // keep focus inside the dialog
        const focusable = dialogRef.current.querySelectorAll("button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} ref={dialogRef} onClick={onClose}>
      <button type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close" ref={closeRef}>
        <Icon name="close" />
      </button>
      {total > 1 && (
        <button
          type="button"
          className="lightbox__btn lightbox__prev"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          aria-label="Previous image"
        >
          <Icon name="prev" />
        </button>
      )}
      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={assetUrl(item.image)} alt={item.alt || item.title} />
        <figcaption>
          <strong>{item.title}</strong>
          <span>
            {item.category} · {index + 1} / {total}
          </span>
        </figcaption>
      </figure>
      {total > 1 && (
        <button
          type="button"
          className="lightbox__btn lightbox__next"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          aria-label="Next image"
        >
          <Icon name="next" />
        </button>
      )}
    </div>
  );
}

export default Lightbox;
