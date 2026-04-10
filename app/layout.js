import "./globals.css";

export const metadata = {
  title: "EzReiners Guesthouse | Comfortable Stays in Kimberley",
  description:
    "Sunrise Guesthouse offers warm, affordable accommodation in Kimberley. Book directly via WhatsApp for the best rates.",
  keywords: "guesthouse, hotel, accommodation, Durban, bed and breakfast",
  openGraph: {
    title: "EzReiners Guesthouse",
    description: "Comfortable stays in the heart of Kimberley.",
    type: "website",
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
      </head>
      <body>{children}</body>
    </html>
  );
}