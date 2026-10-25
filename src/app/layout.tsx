import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ssglobalcsis.in'),
  title: 'SS Global Constructions and Interior Works | Vijayawada',
  description:
    'SS Global Constructions and Interior Works (20+ Years Experience) - Trusted specialists in all constructions and interior works in Vijayawada, Andhra Pradesh. Complete house building, luxury villas, commercial spaces, kitchen/bathroom renovations, waterproofing, and turnkey interiors from foundation to finishing.',
  keywords: [
    'SS Global Constructions',
    'SS Global Constructions and Interior Works',
    'Construction Company in Vijayawada',
    'House Construction in Vijayawada',
    'Villa Construction Vijayawada',
    'Interior Works in Vijayawada',
    'Home Renovation in Vijayawada',
    'Commercial Construction Vijayawada',
    'Waterproofing in Vijayawada',
    'Modular Kitchen Vijayawada',
    'Ramavarappadu Ring Road Constructions',
    'Currency Nagar Vijayawada Builder',
  ],
  authors: [{ name: 'SS Global Constructions and Interior Works' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'SS Global Constructions and Interior Works | 20+ Years Experience',
    description:
      'Trusted | Quality | Stability Through Experience. Specialists in All Constructions & Interior Works. From Foundation to Finishing. Vijayawada, Andhra Pradesh.',
    images: [{ url: '/images/hero-bg.jpg' }],
    url: 'https://www.ssglobalcsis.in/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SS Global Constructions and Interior Works',
    description:
      'Specialists in All Constructions & Interior Works in Vijayawada. 20+ Years Experience. Call 9494502777.',
    images: ['/images/hero-bg.jpg'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'SS Global Constructions and Interior Works',
  image: 'https://www.ssglobalcsis.in/images/hero-bg.jpg',
  logo: 'https://www.ssglobalcsis.in/logo.png',
  telephone: '+919494502777',
  email: 'contact@ssglobalcsis.in',
  url: 'https://www.ssglobalcsis.in/',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Door No. 6-6, Srinivasa Nilayam, Currency Nagar Road, Kaveti Vari Street, Near Ramavarappadu Ring',
    addressLocality: 'Vijayawada',
    addressRegion: 'Andhra Pradesh',
    postalCode: '521108',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '16.5204',
    longitude: '80.6710',
  },
  priceRange: '₹₹ - ₹₹₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '19:30',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Vijayawada' },
    { '@type': 'City', name: 'Amaravati' },
    { '@type': 'City', name: 'Guntur' },
  ],
  slogan: 'Trusted | Quality | Stability Through Experience',
  knowsAbout: [
    'Complete House Construction',
    'Independent House Construction',
    'Villa Construction',
    'Apartment Construction',
    'Commercial Construction',
    'Interior Design and Execution',
    'Kitchen Renovation',
    'Bathroom Renovation',
    'Waterproofing',
    'Cement and Masonry Works',
    'Tile Laying',
    'Plumbing Works',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect & Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Telugu:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
