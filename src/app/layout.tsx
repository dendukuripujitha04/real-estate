import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.buildsphere.in'),
  title: 'BuildSphere Infra & Engineering | Building Your Dreams With Quality & Trust',
  description:
    'BuildSphere Infra & Engineering (Est. 2004) - Premier construction company in Vijayawada & Andhra Pradesh. Residential & commercial construction, 2D/3D architectural planning, structural engineering, interior design and renovation with 15-year structural warranty.',
  keywords: [
    'BuildSphere',
    'BuildSphere Infra',
    'Construction Company Vijayawada',
    'Residential Construction',
    'Commercial Construction',
    'Architectural Design',
    'Structural Engineering',
    'Interior Design',
    'Renovation',
    'Vijayawada',
    'Amaravati',
    'Guntur',
  ],
  authors: [{ name: 'BuildSphere Infra & Engineering' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'BuildSphere Infra & Engineering | 20+ Years of Engineering Excellence',
    description:
      'Turnkey residential luxury villas, commercial complexes, structural engineering, and modern interiors in Vijayawada & Amaravati region. 15-Year Structural Warranty & Milestone Payment Escrow.',
    images: [{ url: '/images/hero-bg.jpg' }],
    url: 'https://www.buildsphere.in/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildSphere Infra & Engineering',
    description:
      'Building Your Dreams With Quality & Trust. 20+ Years of Experience in Construction & Structural Engineering.',
    images: ['/images/hero-bg.jpg'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'BuildSphere Infra & Engineering',
  image: 'https://www.buildsphere.in/images/hero-bg.jpg',
  telephone: '+918179517373',
  email: 'contact@buildsphere.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Door No. 6-13, Kaveti Vari Street, Ring Road (Near M Convention), Ramavarapadu',
    addressLocality: 'Vijayawada',
    addressRegion: 'Andhra Pradesh',
    postalCode: '521108',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '16.5160',
    longitude: '80.6720',
  },
  url: 'https://www.buildsphere.in/',
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
  priceRange: '₹₹ - ₹₹₹₹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
