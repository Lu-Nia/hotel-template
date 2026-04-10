"use client";

import { useEffect, useRef, useState } from "react";
import { Wifi, Car, Coffee, Shield, Waves, PlaneTakeoff } from "lucide-react";
import hotelData from "@/config/hotelData";

const iconMap = {
  "Free WiFi": Wifi,
  "Free Parking": Car,
  "Breakfast Available": Coffee,
  "24/7 Security": Shield,
  "Pool Access": Waves,
  "Airport Shuttle": PlaneTakeoff,
};

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding" ref={ref}
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
            Our Story
          </p>
          <h2 className="section-title" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.1s",
          }}>
            About {hotelData.name}
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
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.2s",
          }}>
            {hotelData.description}
          </p>
        </div>

        {/* Two Column Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}>

          {/* Left — Image */}
          <div style={{
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.8s ease 0.3s",
          }}>
            <img
              src="/images/about.jpg"
              alt={hotelData.name}
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
                borderRadius: "4px",
                display: "block",
              }}
            />
            {/* Floating stat card */}
            <div style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              backgroundColor: "var(--secondary)",
              color: "white",
              padding: "1.25rem 1.75rem",
              borderRadius: "4px",
              textAlign: "center",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            }}>
              <p style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                fontWeight: "700",
                color: "var(--primary)",
                lineHeight: 1,
              }}>10+</p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: "0.25rem",
                opacity: 0.85,
              }}>Years of Hospitality</p>
            </div>
          </div>

          {/* Right — Highlights */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.8s ease 0.4s",
          }}>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.6rem",
              color: "var(--secondary)",
              marginBottom: "0.75rem",
            }}>
              Why Stay With Us?
            </h3>
            <p style={{
              fontFamily: "var(--font-body)",
              color: "#666",
              lineHeight: "1.7",
              marginBottom: "2rem",
              fontSize: "0.95rem",
            }}>
              We pride ourselves on delivering a warm, personal experience
              that bigger hotels simply can't match. Every guest is family.
            </p>

            {/* Highlights Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}>
              {hotelData.highlights.map((item, i) => {
                const Icon = iconMap[item];
                return (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.85rem 1rem",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                    opacity: visible ? 1 : 0,
                    transition: `opacity 0.5s ease ${0.4 + i * 0.08}s`,
                  }}>
                    {Icon && (
                      <div style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(200,169,110,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Icon size={16} color="var(--primary)" />
                      </div>
                    )}
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                      color: "var(--secondary)",
                    }}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}