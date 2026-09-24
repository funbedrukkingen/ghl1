import React from "react";
import { Button } from "@/components/ui/button";
import {
  HeartHandshake,
  Wind,
  Compass,
  Sparkles,
  Check,
  ArrowUpRight,
  Activity,
} from "lucide-react";

interface ServicesProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const services = [
    {
      id: "lichaamsgerichte-therapie",
      title: "Individuele Lichaamsgerichte Therapie",
      subtitle:
        "Voor het loslaten van diepe spierspanning, burn-out en onverwerkt trauma",
      icon: HeartHandshake,
      description:
        "Therapie die verder gaat dan praten. Via bioenergetica, haptonomie en diepe weefselontspanning helpen we jouw zenuwstelsel weer in een staat van veiligheid en rust te brengen.",
      highlights: [
        "Persoonlijke 1-op-1 sessies van 75 minuten",
        "Focus op zenuwstelsel regulatie & chronische klachten",
        "Geen langdurige praatsessies maar voelbare fysieke ontlading",
      ],
      tag: "Meest gekozen therapie",
      image:
        "https://vibe.filesafe.space/1788205041202451066/attachments/e9af28b6-1608-488d-b18e-51e4324d7270.png",
      badge: "Individueel",
    },
    {
      id: "adem-mindfulness-retreat",
      title: "Multi-day Adem & Mindfulness Retreats",
      subtitle:
        "3 of 5 dagen volledige verdieping, herstel en vertraging in het groen",
      icon: Wind,
      description:
        "Treed uit de hectiek van alledag. Onze kleinschalige retreats bieden een uitgebalanceerde mix van transformatief ademwerk, stilte-wandelingen, gezonde biologische voeding en klankschalen.",
      highlights: [
        "Inclusief overnachting op ons bosrijke landgoed",
        "Maximale groepsgrootte van 8 deelnemers voor optimale aandacht",
        "Biologische maaltijden bereid door onze privé-chef",
      ],
      tag: "All-inclusive ervaring",
      image:
        "https://vibe.filesafe.space/1788205041202451066/attachments/716143e5-9e12-4f99-a8a4-749abecc0e09.png",
      badge: "Kleinschalige groep",
    },
    {
      id: "coaching-stressmanagement",
      title: "Coaching & Masterclasses Stressmanagement",
      subtitle:
        "Preventieve en curatieve begeleiding voor professionals en ondernemers",
      icon: Compass,
      description:
        "Leer hoe je effectief grenzen stelt, stresssignalen herkent voordat ze symptomen worden en je energiebalans duurzaam vasthoudt in werk en privéleven.",
      highlights: [
        "Praktische tools voor ademhaling tijdens stressmomenten",
        "Inzicht in neurobiologie en belastbaarheid",
        "Op maat gemaakte trajecten van 6 of 12 weken",
      ],
      tag: "Traject op maat",
      image:
        "https://vibe.filesafe.space/1788205041202451066/attachments/d257a145-1642-49c3-aa88-eb5995813632.png",
      badge: "Traject",
    },
  ];

  return (
    <section id="therapie" className="py-20 md:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            Therapie voor elke fase van je leven
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
            Ontdek ons specifieke therapie & retreat aanbod
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Of je nu kampt met aanhoudende fysieke klachten, behoefte hebt aan
            een diepe herstel-break of preventief aan je vitaliteit wilt werken
            — wij stemmen elk traject exact af op jouw lichaam.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
                      {service.badge}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                        <Icon className="w-4 h-4" />
                        {service.tag}
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-7 space-y-4">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 space-y-2 border-t border-border/60">
                      {service.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium"
                        >
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 pt-0">
                  <Button
                    onClick={() => onOpenBooking(service.id)}
                    className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-sm h-11 rounded-xl transition-colors flex items-center justify-between px-4 group/btn"
                  >
                    <span>Bekijk Details & Boek</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="mt-20 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Stap voor stap naar herstel
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Hoe een traject bij Rust & Ruimte verloopt
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="space-y-3 relative z-10 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold mx-auto md:mx-0 shadow-md">
                1
              </div>
              <h4 className="font-serif text-lg font-bold text-foreground">
                Vrijblijvende Intake
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We bespreken telefonisch of via video je huidige klachten en
                behoeften om te zien welke vorm het beste bij je past.
              </p>
            </div>

            <div className="space-y-3 relative z-10 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center font-serif text-xl font-bold mx-auto md:mx-0 shadow-md">
                2
              </div>
              <h4 className="font-serif text-lg font-bold text-foreground">
                Lichaamsanalyse
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tijdens de eerste fysieke sessie brengen we spanningspatronen,
                ademhalingsfrequentie en zenuwstelselrespons in kaart.
              </p>
            </div>

            <div className="space-y-3 relative z-10 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold mx-auto md:mx-0 shadow-md">
                3
              </div>
              <h4 className="font-serif text-lg font-bold text-foreground">
                Behandeling & Herstel
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Gerichte sessies waarin we het geaccumuleerde stresspatroon
                fysiek ontladen en jouw zelfherstellend vermogen activeren.
              </p>
            </div>

            <div className="space-y-3 relative z-10 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center font-serif text-xl font-bold mx-auto md:mx-0 shadow-md">
                4
              </div>
              <h4 className="font-serif text-lg font-bold text-foreground">
                Duurzame Integratie
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Je ontvangt gepersonaliseerde oefeningen voor thuis,
                ademhalingstechnieken en voedingstips om symptoomvrij te
                blijven.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
