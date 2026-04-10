"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import hotelData from "@/config/hotelData";

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % hotelData.testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = hotelData.testimonials[active];

  return (
    <section
      id="testimonials"
      className="section-padding"
      ref={ref}
      style={{ backgroundColor: "var(--secondary)" }}
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
            Guest Experiences
          </p>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2.2rem",
            color: "white",
            marginBottom: "0.75rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.1s",
          }}>
            What Our Guests Say
          </h2>
          <div style={{
            width: visible ? "60px" : "0px",
            height: "3px",
            backgroundColor: "var(--primary)",
            margin: "1rem auto",
            transition: "width 0.8s ease 0.2s",
          }} />
        </div>

        {/* Active Testimonial */}
        <div style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease 0.3s",
        }}>
          {/* Quote Icon */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "rgba(200,169,110,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Quote size={24} color="var(--primary)" />
            </div>
          </div>

          {/* Review Text */}
          <p style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "white",
            lineHeight: "1.75",
            fontStyle: "italic",
            marginBottom: "2rem",
            transition: "opacity 0.4s ease",
          }}>
            "{testimonial.review}"
          </p>

          {/* Stars */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.25rem",
            marginBottom: "1rem",
          }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                fill={i < testimonial.rating ? "var(--primary)" : "none"}
                color="var(--primary)"
              />
            ))}
          </div>

          {/* Guest Name */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            fontWeight: "600",
            color: "var(--primary)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            {testimonial.name}
          </p>
        </div>

        {/* Dot Indicators */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.6rem",
          marginTop: "3rem",
        }}>
          {hotelData.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "28px" : "10px",
                height: "10px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                backgroundColor: i === active ? "var(--primary)" : "rgba(255,255,255,0.25)",
                transition: "all 0.4s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* All Reviews Summary */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginTop: "4rem",
          paddingTop: "3rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          {hotelData.testimonials.map((t, i) => (
            <div
              key={t.id}
              onClick={() => setActive(i)}
              style={{
                padding: "1.5rem",
                borderRadius: "6px",
                backgroundColor: i === active
                  ? "rgba(200,169,110,0.12)"
                  : "rgba(255,255,255,0.04)",
                border: i === active
                  ? "1px solid rgba(200,169,110,0.3)"
                  : "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* Stars */}
              <div style={{
                display: "flex",
                gap: "0.2rem",
                marginBottom: "0.75rem",
              }}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={13}
                    fill={si < t.rating ? "var(--primary)" : "none"}
                    color="var(--primary)"
                  />
                ))}
              </div>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: "1.6",
                marginBottom: "0.75rem",
                fontStyle: "italic",
              }}>
                "{t.review}"
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: "600",
                color: "var(--primary)",
                letterSpacing: "0.08em",
              }}>
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}