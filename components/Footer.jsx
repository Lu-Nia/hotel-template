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

          {/* Social Media */}
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
              Follow Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {hotelData.socials.map(({ platform, url }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                >
                  {/* Icon Box */}
                  <div style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {platform === "Facebook" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    )}
                    {platform === "Instagram" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                      </svg>
                    )}
                    {platform === "TikTok" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                      </svg>
                    )}
                    {platform === "X" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                  </div>
                  {platform}
                </a>
              ))}
            </div>
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