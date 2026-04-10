"use client";

import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery/1.jpg", alt: "Hotel exterior" },
  { src: "/images/gallery/2.jpg", alt: "Swimming pool" },
  { src: "/images/gallery/3.jpg", alt: "Deluxe room" },
  { src: "/images/gallery/4.jpg", alt: "Breakfast area" },
  { src: "/images/gallery/5.jpg", alt: "Garden view" },
  { src: "/images/gallery/6.jpg", alt: "Lounge area" },
];

export default function GallerySection() {
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState(null); // index of open image
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
      if (e.key === "ArrowLeft") setLightbox((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const prev = () => setLightbox((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightbox((i) => (i + 1) % galleryImages.length);

  return (
    <section
      id="gallery"
      className="section-padding"
      ref={ref}
      style={{ backgroundColor: "#f9f7f4" }}
    >
      <div className="container-max">

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            fontWeight: "600",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: "0.75rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}>
            Take a Look
          </p>
          <h2 className="section-title" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.1s",
          }}>
            Our Gallery
          </h2>
          <div style={{
            width: visible ? "60px" : "0px",
            height: "3px",
            backgroundColor: "var(--primary)",
            margin: "1rem auto",
            transition: "width 0.8s ease 0.2s",
          }} />
          <p className="section-subtitle" style={{
            margin: "0 auto",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.2s",
          }}>
            A glimpse into what awaits you. Click any image to view it fully.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
        }}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "6px",
                cursor: "pointer",
                aspectRatio: "4/3",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.nextSibling.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.nextSibling.style.opacity = "0";
                }}
              />
              {/* Hover Overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(26,26,46,0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }}>
                <p style={{
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  View Photo
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.92)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
            }}
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute",
              left: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "4px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute",
              right: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Counter */}
          <p style={{
            position: "absolute",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.6)",
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
          }}>
            {lightbox + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
}