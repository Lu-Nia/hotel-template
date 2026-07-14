const hotelData = {
  // ── General ──────────────────────────────────────────
  name: "EzReiners Guesthouse",
  tagline: "Comfortable stays in the heart of Kimberley",
  description:
    "EzReiners Guesthouse offers warm, affordable accommodation with a personal touch. Whether you're here for business or leisure, we make you feel at home.",

  // ── Contact ───────────────────────────────────────────
  phone: "+27 60 266 3334",
  email: "reinerstumelo@gmail.com",
  address: "Kimberley North, Kimberley, South Africa",
  businessHours: "Monday – Sunday: 7:00 AM – 10:00 PM",
  whatsapp: "27602663334", // 27 + number, no spaces or +

  // ── Google Maps ───────────────────────────────────────
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Kimberley+North&output=embed",

  // ── Highlights ────────────────────────────────────────
  highlights: [
    "Free WiFi",
    "Free Parking",
    "Breakfast Available",
    "24/7 Security",
    "Pool Access",
    "Airport Shuttle",
  ],

  // ── Rooms ─────────────────────────────────────────────
  rooms: [
    {
      id: 1,
      name: "Standard Room",
      price: 750,
      description:
        "A cozy, well-furnished room perfect for solo travellers or couples on a budget.",
      image: "/images/rooms/standard.jpg",
      features: ["Free WiFi", "Air Conditioning", "Private Bathroom"],
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: 1100,
      description:
        "Spacious room with a king-size bed, en-suite bathroom, and garden view.",
      image: "/images/rooms/deluxe.jpg",
      features: ["Free WiFi", "Air Conditioning", "Private Bathroom", "Balcony"],
    },
    {
      id: 3,
      name: "Family Suite",
      price: 1600,
      description:
        "Perfect for families. Includes two bedrooms, a lounge area, and a kitchenette.",
      image: "/images/rooms/suite.jpg",
      features: ["Free WiFi", "Air Conditioning", "Private Bathroom", "Balcony"],
    },
  ],

  // ── Testimonials ──────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: "Thabo M.",
      review:
        "Absolutely loved my stay. Staff were friendly and the rooms were spotless.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah K.",
      review:
        "Great value for money. Will definitely be coming back with my family.",
      rating: 5,
    },
    {
      id: 3,
      name: "James R.",
      review:
        "Perfectly located and very comfortable. The breakfast was a bonus!",
      rating: 4,
    },
  ],

  // ── Specials ──────────────────────────────────────────
  special: {
    active: true, // set to false to hide the banner
    title: "Weekend Special 🎉",
    description: "Stay 2 nights, get 15% off. Every Friday to Sunday.",
  },
  // ── Social Media ──────────────────────────────────────
  socials: [
    { platform: "Facebook", url: "https://web.facebook.com/tumelo.reiners.1" },
    { platform: "Instagram", url: "https://www.instagram.com/faith_lunia/" },
    //{ platform: "TikTok", url: "https://tiktok.com/@sunriseguesthouse" },
    { platform: "X", url: "https://x.com/reiners_tu94328" },
  ],
};


export default hotelData;