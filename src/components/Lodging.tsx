import React from "react";
import { Button } from "@/components/ui/button";
import {
  BedDouble,
  Users,
  Sparkles,
  Check,
  ArrowRight,
  Home,
  CalendarCheck,
} from "lucide-react";

interface LodgingProps {
  onOpenBooking: (roomTitle?: string) => void;
}

export const Lodging: React.FC<LodgingProps> = ({ onOpenBooking }) => {
  const lodgings = [
    {
      id: "landgoed-boshut",
      title: "Eco Boshut Cabin",
      subtitle: "Vrijstaande houten hut midden tussen de bomen",
      price: "€ 165",
      period: "per nacht (incl. ontbijt)",
      capacity: "1 - 2 personen",
      size: "35 m² met privé terras",
      image:
        "https://vibe.filesafe.space/1788205041202451066/attachments/e9af28b6-1608-488d-b18e-51e4324d7270.png",
      features: [
        "Kingsize natuurzilveren Auping bed",
        "Privé houtkachel & buitenhaard",
        "Panoramaraam met uitzicht op bos",
        "Biologisch streekontbijt aan de deur",
        "Inclusief toegang tot sauna & dompelbad",
      ],
      popular: false,
    },
    {
      id: "landgoed-wellness-suite",
      title: "Wellness Loft Suite",
      subtitle: "Luxe suite in het hoofdhuis met eigen infrarood sauna",
      price: "€ 245",
      period: "per nacht (all-inclusive)",
      capacity: "1 - 2 personen",
      size: "55 m² met privé wellness",
      image:
        "https://vibe.filesafe.space/1788205041202451066/attachments/716143e5-9e12-4f99-a8a4-749abecc0e09.png",
      features: [
        "Infrarood cabine & vrijstaand ligbad",
        "Inclusief 1x 45-min lichaamsmassage",
        "Eigen pantry met biologische kruidentheeën",
        "All-inclusive biologisch diner & ontbijt",
        "Privé lounge met zicht op de vijver",
      ],
      popular: true,
    },
  ];

  return (
    <section id="verblijf" className="py-20 md:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider">
            <Home className="w-3.5 h-3.5" />
            Tijd voor jezelf
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
            Overnachten op het Landgoed
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Combineer je therapie of retreat met een meerdaags verblijf in onze
            karakteristieke accommodaties. Geniet van ongekende stilte en
            privacy.
          </p>
        </div>

        {/* Lodging Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {lodgings.map((room) => (
            <div
              key={room.id}
              className={`bg-card border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative ${
                room.popular
                  ? "border-accent/60 ring-2 ring-accent/20"
                  : "border-border"
              }`}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 z-20 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Meest Geliefd
                </div>
              )}

              <div>
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                    <div>
                      <h3 className="font-serif text-2xl font-bold leading-tight">
                        {room.title}
                      </h3>
                      <p className="text-xs text-white/80">{room.size}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-5">
                  <div className="flex items-baseline justify-between border-b border-border/80 pb-4">
                    <div>
                      <span className="text-3xl font-serif font-bold text-foreground">
                        {room.price}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {room.period}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-foreground bg-secondary px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Users className="w-3 h-3 text-accent" />
                      {room.capacity}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {room.subtitle}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    {room.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-foreground font-medium"
                      >
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 md:p-8 pt-0">
                <Button
                  onClick={() => onOpenBooking(room.id)}
                  className={`w-full h-12 rounded-xl text-sm font-semibold transition-all ${
                    room.popular
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  <CalendarCheck className="w-4 h-4 mr-2" />
                  Boek Verblijf & Reserveer
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Stay Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-semibold text-accent tracking-widest">
              Op Maat Samengesteld
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
              Therapietraject combineren met meerdaags verblijf?
            </h3>
            <p className="text-primary-foreground/80 text-xs sm:text-sm max-w-xl">
              We stellen graag een gepersonaliseerd arrangement samen inclusief
              lichaamsgerichte sessies, volpension biologische maaltijden en
              sauna-toegang.
            </p>
          </div>
          <Button
            onClick={() => onOpenBooking("intake-call")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold h-12 px-7 rounded-full shrink-0 shadow-lg"
          >
            Vraag Maatwerk Offerte Aan
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
