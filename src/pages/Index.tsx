import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Estate } from "@/components/Estate";
import { Lodging } from "@/components/Lodging";
import { ContactSection } from "@/components/ContactSection";
import { BookingModal } from "@/components/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBooking = (serviceOption?: string) => {
    if (serviceOption) {
      setSelectedService(serviceOption);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navigation Bar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Brand Philosophy Intro */}
        <section id="over" className="py-16 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Visie & Filosofie
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              "Het lichaam liegt nooit. Waar het hoofd verkrampt, wijst de
              ademhaling de weg naar herstel."
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Bij Rust & Ruimte geloven we dat fysieke symptomen zoals
              chronische spanning, hoofdpijn, vermoeidheid en
              spijsverteringsklachten signaalvlaggen zijn van een overprikkeld
              zenuwstelsel. Door lichaamsgerichte therapie te combineren met de
              stilte van ons bosrijke landgoed ontstaat er ruimte voor duurzame
              genezing.
            </p>
          </div>
        </section>

        {/* Therapy Offerings Section */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Estate & Nature Presentation */}
        <Estate />

        {/* Lodging & Retreat Stays */}
        <Lodging onOpenBooking={handleOpenBooking} />

        {/* Reviews, Practitioner Bio, Contact Form & Footer */}
        <ContactSection />
      </main>

      {/* Floating Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedOption={selectedService}
      />
    </div>
  );
};

export default Index;
