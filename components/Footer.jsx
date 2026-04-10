'use client';

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import hotelData from "@/config/hotelData";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${hotelData.whatsapp}?text=Hi ${hotelData.name}! I'd like to enquire about a room.`;

  return (
    <footer style={{
      backgroundColor: "#0f0f1e",
      color: "white",
      paddingTop: "4rem",
    }}>
      <div className="container-max" style={{ padding: "0 1.5rem" }}>

        {/* Top Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>

          {/* Brand Column */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "white",
              marginBottom: "0.75rem",
            }}>
              {hotelData.name}
            </h3>
            <div style={{
              width: "40px",
              height: "3px",
              backgroundColor: "var(--primary)",
              marginBottom: "1rem",
            }} />
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: "1.75",
              marginBottom: "1.5rem",
            }}>
              {hotelData.tagline}
            </p>
            
              <a href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#25D366",
                color: "white",
                padding: "0.6rem 1.25rem",
                borderRadius: "50px",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: "500",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: "600",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "1.25rem",
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.65rem" }}>
                  
                    <a href={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--primary)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: "600",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "1.25rem",
            }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Phone, value: hotelData.phone, href: `tel:${hotelData.phone}` },
                { icon: Mail, value: hotelData.email, href: `mailto:${hotelData.email}` },
                { icon: MapPin, value: hotelData.address, href: "#" },
              ].map(({ icon: Icon, value, href }) => (
                <a
                  key={value}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    lineHeight: "1.5",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                >
                  <Icon size={16} style={{ marginTop: "2px", flexShrink: 0, color: "var(--primary)" }} />
                  {value}
                </a>
              ))}
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: "600",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: "1.25rem",
            }}>
              Business Hours
            </h4>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: "1.75",
              marginBottom: "1.5rem",
            }}>
              {hotelData.businessHours}
            </p>

            {/* Specials Reminder */}
            {hotelData.special?.active && (
              <div style={{
                backgroundColor: "rgba(200,169,110,0.1)",
                border: "1px solid rgba(200,169,110,0.25)",
                borderRadius: "6px",
                padding: "0.85rem 1rem",
              }}>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  fontWeight: "600",
                  color: "var(--primary)",
                  marginBottom: "0.25rem",
                }}>
                  {hotelData.special.title}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "1.5",
                }}>
                  {hotelData.special.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1.5rem 0",
        }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.3)",
          }}>
            © {year} {hotelData.name}. All rights reserved.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.3)",
          }}>
            Designed & maintained by{" "}
            <span style={{ color: "var(--primary)" }}>EzReiners Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
}