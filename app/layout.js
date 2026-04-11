import "./globals.css";
import hotelData from "@/config/hotelData";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: `${hotelData.name} | Accommodation in Kimberley`,
  description: `${hotelData.description} Book directly via WhatsApp for the best rates. Located at ${hotelData.address}.`,
  keywords: [
    hotelData.name,
    "guesthouse Kimberley",
    "accommodation Kimberley",
    "hotel Kimberley",
    "bed and breakfast Kimberley",
    "cheap accommodation Northern Cape",
    "book guesthouse WhatsApp",
    "self catering Kimberley",
  ].join(", "),
  authors: [{ name: hotelData.name }],
  creator: hotelData.name,
  metadataBase: new URL("https://hotel-template-silk.vercel.app/"), // change to real domain
  openGraph: {
    title: `${hotelData.name} | Accommodation in Kimberley`,
    description: hotelData.description,
    url: "https://hotel-template-silk.vercel.app/",
    siteName: hotelData.name,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: hotelData.name,
      },
    ],
    locale: "en_ZA",
    type: "website",

  },

  twitter: {
    card: "summary_large_image",
    title: hotelData.name,
    description: hotelData.description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://hotel-template-silk.vercel.app/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
        <meta name="google-site-verification" content="ek9EgpCg4OwT3GDzV_Q3yUsHvn3Au4hpgUKfnoTZRRI" />


        
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}