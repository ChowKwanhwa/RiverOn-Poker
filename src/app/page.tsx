import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import ReservationForm from "@/components/layout/ReservationForm";
import { AboutSection, ContactSection, GameInfoSection } from "@/components/layout/ContentSections";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'RiverOn Poker Bangkok',
    'image': 'https://riveronbangkok.com/site-photo-nano.jpeg',
    '@id': 'https://riveronbangkok.com',
    'url': 'https://riveronbangkok.com',
    'telephone': '+66-XX-XXX-XXXX',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Bangkok',
      'addressRegion': 'Bangkok',
      'addressCountry': 'TH'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 13.7563,
      'longitude': 100.5018
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '20:00',
      'closes': '08:00'
    },
    'sameAs': [
      'https://t.me/yangcha123',
      'https://instagram.com/riveronbangkok',
      'https://t.me/riveronbangkok',
      'https://www.youtube.com/@riveronbangkok'
    ]
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <ReservationForm />
      <AboutSection />
      <GameInfoSection />
      <ContactSection />
    </main>
  );
}
