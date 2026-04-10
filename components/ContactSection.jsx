"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import hotelData from "@/config/hotelData";

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const { name, phone, checkin, checkout, message } = formData;
    const text = `Hi ${hotelData.name}! My name is ${name}. I'd like to enquire about a booking.${checkin ? ` Check-in: ${checkin}.` : ""}${checkout ? ` Check-out: ${checkout}.` : ""}${message ? ` Message: ${message}` : ""}${phone ? ` My number: ${phone}.` : ""}`;
    window.open(`https://wa.me/${hotelData.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  const contactItems = [
    { icon: Phone, label: "Phone", value: hotelData.phone, href: `tel:${hotelData.phone}` },
    { icon: Mail, label: "Email", value: hotelData.email, href: `mailto:${hotelData.email}` },
    { icon: MapPin, label: "Address", value: hotelData.address, href: "#" },
    { icon: Clock, label: "Hours", value: hotelData.businessHours, href: "#" },
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      ref={ref}
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
            Get In Touch
          </p>
          <h2 className="section-title" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.1s",
          }}>
            Contact Us
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
            Ready to book or have a question? Fill in your details below
            and we&apos;ll connect with you directly on WhatsApp.
          </p>
        </div>

        {/* Two Column Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          marginBottom: "4rem",
        }}>

          {/* Left — Contact Info */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.8s ease 0.3s",
          }}>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              color: "var(--secondary)",
              marginBottom: "0.5rem",
            }}>
              Find Us
            </h3>
            <p style={{
              fontFamily: "var(--font-body)",
              color: "#888",
              fontSize: "0.9rem",
              marginBottom: "2rem",
              lineHeight: "1.6",
            }}>
              We&apos;re always happy to hear from you. Reach out via any
              of the channels below.
            </p>

            {/* Contact Items */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              marginBottom: "2.5rem",
            }}>
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    textDecoration: "none",
                    padding: "1rem 1.25rem",
                    borderRadius: "6px",
                    backgroundColor: "#f9f7f4",
                    transition: "box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
                >
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(200,169,110,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="var(--primary)" />
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--primary)",
                      marginBottom: "0.2rem",
                    }}>
                      {label}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "var(--secondary)",
                      lineHeight: "1.5",
                    }}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Direct WhatsApp */}
            <a
              href={`https://wa.me/${hotelData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                width: "100%",
                boxSizing: "border-box",
                fontSize: "0.95rem",
              }}
            >
              <MessageCircle size={18} />
              Chat With Us on WhatsApp
            </a>
          </div>

          {/* Right — Enquiry Form */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.8s ease 0.4s",
          }}>
            {submitted ? (
              <div style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "3rem",
                backgroundColor: "#f9f7f4",
                borderRadius: "6px",
              }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(200,169,110,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}>
                  <MessageCircle size={28} color="var(--primary)" />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.4rem",
                  color: "var(--secondary)",
                  marginBottom: "0.75rem",
                }}>
                  Opening WhatsApp...
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  color: "#888",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}>
                  Your message has been prepared. Complete the chat
                  on WhatsApp to confirm your enquiry.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                  style={{ borderColor: "var(--secondary)", color: "var(--secondary)" }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <div style={{
                backgroundColor: "#f9f7f4",
                borderRadius: "6px",
                padding: "2rem",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.4rem",
                  color: "var(--secondary)",
                  marginBottom: "1.5rem",
                }}>
                  Make an Enquiry
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                      onBlur={(e) => e.target.style.borderColor = "#e0ddd8"}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 071 000 0000"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                      onBlur={(e) => e.target.style.borderColor = "#e0ddd8"}
                    />
                  </div>

                  {/* Dates Row */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Check-in</label>
                      <input
                        type="date"
                        name="checkin"
                        value={formData.checkin}
                        onChange={handleChange}
                        max={formData.checkout || undefined}
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                        onBlur={(e) => e.target.style.borderColor = "#e0ddd8"}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Check-out</label>
                      <input
                        type="date"
                        name="checkout"
                        value={formData.checkout}
                        onChange={handleChange}
                        min={formData.checkin || undefined}
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                        onBlur={(e) => e.target.style.borderColor = "#e0ddd8"}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message (Optional)</label>
                    <textarea
                      name="message"
                      placeholder="Any special requests or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
                      onBlur={(e) => e.target.style.borderColor = "#e0ddd8"}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleWhatsApp}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.6rem",
                      fontSize: "0.95rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <MessageCircle size={18} />
                    Send Enquiry via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Google Map */}
        <div style={{
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.5s",
        }}>
          <iframe
            src={hotelData.mapEmbedUrl}
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location"
          />
        </div>
      </div>
    </section>
  );
}

// Shared styles
const labelStyle = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "0.78rem",
  fontWeight: "600",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#888",
  marginBottom: "0.4rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "4px",
  border: "1.5px solid #e0ddd8",
  fontFamily: "var(--font-body)",
  fontSize: "0.9rem",
  color: "var(--secondary)",
  backgroundColor: "white",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};