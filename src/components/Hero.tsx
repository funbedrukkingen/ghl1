import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  Heart,
  Leaf,
  Sun,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-background via-card/50 to-background">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Rust & Ruimte Retreats — Veluwe & Nature Sanctuaries</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground leading-[1.12] tracking-tight">
              Symptoomvrij leven, ontspanning en{" "}
              <span className="text-primary italic font-normal">
                individuele lichaamsgerichte therapie
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Herstel de natuurlijke balans tussen je lichaam en geest. Wij
              bieden deskundige begeleiding voor langdurige stress, fysieke
              spanningen en trauma-verwerking op onze rustgevende
              landgoedlocatie.
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Geen wachttijden</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span>1-op-1 Maatwerk</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Midden in de natuur</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => onOpenBooking("lichaamsgerichte-therapie")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold h-12 px-7 rounded-full shadow-md transition-transform hover:-translate-y-0.5"
              >
                Start met Lichaamstherapie
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => onOpenBooking("intake-call")}
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-secondary text-sm font-semibold h-12 px-7 rounded-full"
              >
                Gratis Intakegesprek (15 min)
              </Button>
            </div>

            {/* Micro Trust Stats */}
            <div className="pt-6 border-t border-border/80 flex items-center justify-center lg:justify-start gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Gecertificeerde lichaamsgericht therapeuten</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-accent fill-accent" />
                <span>9.8 / 10 tevredenheid (180+ gasten)</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card bg-card">
                <img
                  src="https://vibe.filesafe.space/1788205041202451066/attachments/e9af28b6-1608-488d-b18e-51e4324d7270.png"
                  alt="Lichaamsgerichte therapie sessie in serene natuurruimte"
                  className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                  <p className="font-serif text-lg font-medium leading-snug">
                    "Na 3 sessies voelde mijn lichaam voor het eerst in jaren
                    weer echt ontspannen en pijnvrij."
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    — Anne-Marie, Deelnemer 3-daagse Retreat
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 bg-card border border-border p-3 rounded-2xl shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">
                    100% Natuurlijk Herstel
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Adem, Beweging & Touch
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-5 -right-4 bg-card border border-border p-3 rounded-2xl shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">
                    Privé Landgoed
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    25 ha Bos & Stiltegebied
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
