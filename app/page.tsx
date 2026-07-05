import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PracticeAreas } from "@/components/PracticeAreas";
import { FamilyDifference } from "@/components/FamilyDifference";
import { AboutAndTeam } from "@/components/AboutAndTeam";
import { ProcessRoadmap } from "@/components/ProcessRoadmap";
import { Testimonials } from "@/components/Testimonials";
import { BookingAndIntake } from "@/components/BookingAndIntake";
import { ContactAndMap } from "@/components/ContactAndMap";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"cases r us\",\"description\":\"we are a small family run law firm that specialise in family court cases, navy and yellow branding, super professional, we want people to book us online\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"nelson, treharris\"},\"url\":\"https://cases-r-us-631ce1.duckbyte.co\"}" }} />
      <Navbar />
      <Suspense fallback={<div className="min-h-[30vh]" />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[30vh]" />}>
        <PracticeAreas />
      </Suspense>
      <Suspense fallback={<div className="min-h-[30vh]" />}>
        <FamilyDifference />
      </Suspense>
      <Suspense fallback={<div className="min-h-[30vh]" />}>
        <AboutAndTeam />
      </Suspense>
      <Suspense fallback={<div className="min-h-[30vh]" />}>
        <ProcessRoadmap />
      </Suspense>
      <Suspense fallback={<div className="min-h-[30vh]" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="min-h-[30vh]" />}>
        <BookingAndIntake />
      </Suspense>
      <Suspense fallback={<div className="min-h-[30vh]" />}>
        <ContactAndMap />
      </Suspense>
      <Footer />
    </main>
  );
}
