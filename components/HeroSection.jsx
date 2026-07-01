"use client";

import { useEffect, useState } from "react";
import hotelData from "@/config/hotelData";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const whatsappUrl = `https://wa.me/${hotelData.whatsapp}?text=Hi, I'd like to book a room.`;

  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: loaded ? "scale(1)" : "scale(1.08)",
          transition: "transform 1.8s ease",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(26,26,46,0.55) 0%, rgba(26,26,46,0.75) 100%)",
        }}
      />

      {/* Special Banner */}
      {hotelData.special?.active && (
        <div
          style={{
            position: "absolute",
            top: "90px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "var(--primary)",
            color: "white",
            padding: "0.5rem 1.25rem",
            borderRadius: "12px",
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            fontWeight: "500",
            whiteSpace: "normal",
            textAlign: "center",
            width: "max-content",
            maxWidth: "calc(100vw - 2rem)",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s ease 0.3s",
            zIndex: 10,
          }}
        >
          🎉 {hotelData.special.title} — {hotelData.special.description}
        </div>
      )}

      {/* Hero Content */}
      <div
        className="container-max"
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 1.5rem",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            fontWeight: "500",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: "1rem",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          Welcome to
        </p>

        {/* Hotel Name */}
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "700",
            color: "white",
            lineHeight: "1.15",
            marginBottom: "1.25rem",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.35s",
          }}
        >
          {hotelData.name}
        </h1>

        {/* Gold Divider */}
        <div
          style={{
            width: loaded ? "80px" : "0px",
            height: "3px",
            backgroundColor: "var(--primary)",
            margin: "0 auto 1.5rem",
            transition: "width 0.8s ease 0.55s",
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: "1.7",
            fontWeight: "300",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.5s",
          }}
        >
          {hotelData.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.65s",
          }}
        >
          
            <a href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            
          >
            Book Now on WhatsApp
          </a>
          <a
            href="#rooms"
            className="btn-outline"
          >
            View Rooms
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          opacity: loaded ? 0.6 : 0,
          transition: "opacity 1s ease 1.2s",
          zIndex: 10,
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}
        >
          Scroll
        </p>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, white, transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}