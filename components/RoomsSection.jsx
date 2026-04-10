"use client";

import { useEffect, useRef, useState } from "react";
import { BedDouble, Users, Check } from "lucide-react";
import hotelData from "@/config/hotelData";

export default function RoomsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const whatsappBase = `https://wa.me/${hotelData.whatsapp}?text=Hi, I'd like to book the`;

  return (
    <section id="rooms" className="section-padding" ref={ref}
      style={{ backgroundColor: "#ffffff" }}
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
            Accommodation
          </p>
          <h2 className="section-title" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.1s",
          }}>
            Our Rooms
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
            Each room is carefully furnished to ensure your comfort and relaxation.
            Book directly via WhatsApp for the best available rate.
          </p>
        </div>

        {/* Rooms Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}>
          {hotelData.rooms.map((room, i) => (
            <div key={room.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                transition: `all 0.6s ease ${i * 0.15}s`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Room Image */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={room.image}
                  alt={room.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                />
                {/* Price Badge */}
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  backgroundColor: "var(--primary)",
                  color: "white",
                  padding: "0.4rem 0.85rem",
                  borderRadius: "50px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                }}>
                  R{room.price} / night
                </div>
              </div>

              {/* Room Info */}
              <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}>
                  <BedDouble size={18} color="var(--primary)" />
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    color: "var(--secondary)",
                  }}>
                    {room.name}
                  </h3>
                </div>

                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "#666",
                  lineHeight: "1.65",
                  marginBottom: "1.25rem",
                  flexGrow: 1,
                }}>
                  {room.description}
                </p>

                {/* Inclusions */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  marginBottom: "1.5rem",
                }}>
                  {["Free WiFi included", "Daily housekeeping", "En-suite bathroom"].map((feature) => (
                    <div key={feature} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}>
                      <Check size={14} color="var(--primary)" />
                      <span style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.82rem",
                        color: "#555",
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                
                <a href={`${whatsappBase} ${room.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}