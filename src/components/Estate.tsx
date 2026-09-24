import React from "react";
import { Trees, Sun, Compass, Shield, Award, Droplets } from "lucide-react";

export const Estate: React.FC = () => {
  const highlights = [
    {
      icon: Trees,
      title: "25 Hectare Privé Boshuis & Stiltegebied",
      description:
        "Direct aan de bosrand gelegen, afgeschermd van verkeerslawaai en stadsdrukte voor maximale sensorische rust.",
    },
    {
      icon: Droplets,
      title: "Natuurlijke Welness & Sauna Facility",
      description:
        "Houtgestookte sauna, koudwater dompelbad in het natuurven en verwarmde hottub onder de sterrenhemel.",
    },
    {
      icon: Sun,
      title: "Lichtrijke Yoga & Adem Studios",
      description:
        "Glazen studio met 360-graden uitzicht op de eeuwenoude eikenbomen en overvloedig natuurlijk zonlicht.",
    },
    {
      icon: Compass,
      title: "Wandelpaden & Meditatieve Plekken",
      description:
        "Eigen stilte-routes met overdekte rustpunten, vuurplaatsen en louterende natuurlijke meditatie-cirkels.",
    },
  ];

  return (
    <section
      id="landgoed"
      className="py-20 md:py-28 bg-card border-y border-border relative overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Visual Gallery Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-lg h-64 sm:h-80 relative group">
                <img
                  src="https://vibe.filesafe.space/1788205041202451066/attachments/716143e5-9e12-4f99-a8a4-749abecc0e09.png"
                  alt="Landgoed hoofdgebouw in het bos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  De Hoofdaccommodatie
                </span>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-64 sm:h-80 relative group mt-6">
                <img
                  src="https://vibe.filesafe.space/1788205041202451066/attachments/d257a145-1642-49c3-aa88-eb5995813632.png"
                  alt="Wellness & Sauna omgeven door bomen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Wellness & Buitenbad
                </span>
              </div>
            </div>

            {/* Quote Banner */}
            <div className="p-6 rounded-2xl bg-secondary/60 border border-border/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-xs sm:text-sm text-foreground italic leading-relaxed">
                "De natuur op het landgoed werkt als een tweede therapeut.
                Binnen enkele uren zakt je hartslag en ontstaat er ruimte in het
                hoofd."
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <Trees className="w-3.5 h-3.5 text-accent" />
              De Omgeving & Locatie
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
              Een heilzame plek waar vertraging vanzelfsprekend is
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              Ons landgoed is ontworpen als een oase voor herstel. Ver weg van
              de dagelijkse prikkels stap je binnen in een wereld waar alles
              draait om balans, privacy en verbinding met de natuur.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
