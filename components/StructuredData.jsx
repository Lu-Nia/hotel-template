import hotelData from "@/config/hotelData";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: hotelData.name,
    description: hotelData.description,
    url: "https://hotel-template-silk.vercel.app/",
    telephone: hotelData.phone,
    email: hotelData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotelData.address,
      addressLocality: "Durban",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-29.8587",   // update to real coordinates
      longitude: "31.0218",   // update to real coordinates
    },
    openingHours: "Mo-Su 07:00-22:00",
    priceRange: "R750 - R1600",
    amenityFeature: hotelData.highlights.map((h) => ({
      "@type": "LocationFeatureSpecification",
      name: h,
      value: true,
    })),
    hasMap: hotelData.mapEmbedUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: hotelData.testimonials.length,
    },
    review: hotelData.testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
      reviewBody: t.review,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}