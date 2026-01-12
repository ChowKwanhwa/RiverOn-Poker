import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import ReservationForm from "@/components/layout/ReservationForm";
import { AboutSection, ContactSection, GameInfoSection } from "@/components/layout/ContentSections";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ReservationForm />
      <AboutSection />
      <GameInfoSection />
      <ContactSection />
    </main>
  );
}
