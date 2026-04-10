"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import hotelData from "@/config/hotelData";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "var(--secondary)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none",
        padding: "1rem 1.5rem",
      }}
    >
      <div
        className="container-max"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "white",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          {hotelData.name}
        </a>

        {/* Desktop Links */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  transition: "color 0.2s ease",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.85)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Book Now — Desktop */}
        <a
          href={`https://wa.me/${hotelData.whatsapp}?text=Hi, I'd like to book a room.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary desktop-nav"
          style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}
        >
          Book Now
        </a>

        {/* Hamburger — Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-nav"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "var(--secondary)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "0.5rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${hotelData.whatsapp}?text=Hi, I'd like to book a room.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={handleNavClick}
            style={{ textAlign: "center", marginTop: "0.5rem" }}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}