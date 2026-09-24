import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Star,
  Sparkles,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Algemene Vraag",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(
        "Vul a.u.b. alle verplichte velden (Naam, E-mail, Bericht) in.",
      );
      return;
    }

    setFormSubmitted(true);
    toast.success("Bericht succesvol verzonden! We reageren binnen 24 uur.");
  };

  const reviews = [
    {
      name: "Sanne van den Berg",
      role: "Deelnemer Lichaamstherapie & Adem Retreat",
      text: "Na 2 jaar kampen met aanhoudende rugpijn en een opbouwend gevoel van spanning, brachten de sessies bij Rust & Ruimte doorbraak. Ik voel me weer thuis in mijn eigen lijf.",
      rating: 5,
      date: "Augustus 2026",
    },
    {
      name: "Marc & Ellen de Jong",
      role: "Gasten 3-Daags Stilteverblijf",
      text: "Het landgoed is adembenemend stil. De sauna bij het ven en het verse biologische eten gaven ons exact de herbronning die we nodig hadden.",
      rating: 5,
      date: "Juli 2026",
    },
    {
      name: "Karin Visser",
      role: "Stressmanagement Coaching",
      text: "Deskundige, respectvolle en hele fijne lichaamsgerichte benadering. Geen zweverigheid maar concrete fysieke verlichting en handvatten.",
      rating: 5,
      date: "Juni 2026",
    },
  ];

  return (
    <div className="space-y-24">
      {/* Testimonials Section */}
      <section id="reviews" className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Ervaringen van Gasten & Cliënten
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Wat anderen zeggen over Rust & Ruimte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-background border border-border p-6 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/90 italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-border/60">
                  <h4 className="font-serif text-base font-bold text-foreground">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioner Bio Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-card to-secondary/50 border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-background shadow-xl">
                <img
                  src="https://vibe.filesafe.space/1788205041202451066/attachments/d257a145-1642-49c3-aa88-eb5995813632.png"
                  alt="Hoofdtherapeut & Founder Rust & Ruimte"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-1/4 bg-primary text-primary-foreground text-[11px] font-medium px-3 py-1 rounded-full shadow-md">
                Gecertificeerd Therapeute
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                Over de Praktijk
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                Veilige bedding met jarenlange ervaring in lichaamsgerichte
                traumawerk
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Met een achtergrond in somatic experiencing, bioenergetica en
                ademcoaching begeleid ik mannen en vrouwen om vanuit hun hoofd
                weer zakken in hun lijf. Bij Rust & Ruimte staat jouw unieke
                tempo centraal, zonder oordeel en in alle vertrouwelijkheid.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-foreground">
                <span className="bg-background px-3 py-1.5 rounded-lg border border-border">
                  Lid NFG & RBCZ (Vergoeding mogelijk)
                </span>
                <span className="bg-background px-3 py-1.5 rounded-lg border border-border">
                  Somatic Experiencing Practitioner
                </span>
                <span className="bg-background px-3 py-1.5 rounded-lg border border-border">
                  Adem- & Mindfulness Trainer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <Mail className="w-3.5 h-3.5" />
                Contact & Locatie
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
                Neem vrijblijvend contact op
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                Heb je specifieke vragen over vergoedingen, beschikbaarheid van
                huisjes of welk traject het beste bij jouw symptomen past? Wij
                staan je graag te woord.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Telefoonnummer
                  </h4>
                  <a
                    href="tel:+31612345678"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    06 - 12 34 56 78
                  </a>
                  <p className="text-[11px] text-muted-foreground">
                    Bereikbaar van ma t/m vr tussen 09:00 en 17:00 uur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    E-mailadres
                  </h4>
                  <a
                    href="mailto:info@rustenruimteretreats.nl"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@rustenruimteretreats.nl
                  </a>
                  <p className="text-[11px] text-muted-foreground">
                    We reageren binnen 24 uur op werkdagen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Locatie & Landgoed
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Landgoed Het Wold, Bospad 12
                    <br />
                    3881 LZ Putten (Veluwe), Nederland
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Openingstijden
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Maandag - Vrijdag: 08:30 - 18:00 uur
                    <br />
                    Zaterdag (Retreat gasten): 09:00 - 16:00 uur
                    <br />
                    Zondag: Enkel op afspraak
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-primary/15 text-primary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground font-semibold">
                    Bericht Verzonden!
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                    Bedankt voor je bericht, {formData.name}. We hebben je
                    informatie goed ontvangen en nemen binnen 24 uur persoonlijk
                    contact op.
                  </p>
                  <Button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "Algemene Vraag",
                        message: "",
                      });
                    }}
                    variant="outline"
                    className="mt-4"
                  >
                    Stuur nog een bericht
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Stuur een bericht
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Vul de velden in en we nemen zo snel mogelijk contact op.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name">Volledige Naam *</Label>
                    <Input
                      id="contact-name"
                      placeholder="Bijv. Mark Jansen"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-email">E-mailadres *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="mark@voorbeeld.nl"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-phone">Telefoonnummer</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="06 - 98 76 54 32"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-subject">Onderwerp</Label>
                    <Input
                      id="contact-subject"
                      placeholder="Bijv. Vraag over vergoeding of retreat datum"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-message">
                      Je Bericht of Vraag *
                    </Label>
                    <Textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Omschrijf kort wat je wilt vragen of bereiken..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-xl"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Verstuur Bericht
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D2F24] text-white pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="space-y-4 md:col-span-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Rust & Ruimte
              </span>
              <p className="text-xs text-white/70 leading-relaxed">
                Retreats & individuele lichaamsgerichte therapie op een
                rustgevend landgoed in het hart van de Veluwe.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-base font-semibold text-accent">
                Navigatie
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li>
                  <a
                    href="#over"
                    className="hover:text-white transition-colors"
                  >
                    Over Rust & Ruimte
                  </a>
                </li>
                <li>
                  <a
                    href="#therapie"
                    className="hover:text-white transition-colors"
                  >
                    Therapie & Aanbod
                  </a>
                </li>
                <li>
                  <a
                    href="#landgoed"
                    className="hover:text-white transition-colors"
                  >
                    Het Landgoed
                  </a>
                </li>
                <li>
                  <a
                    href="#verblijf"
                    className="hover:text-white transition-colors"
                  >
                    Retreats & Verblijf
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-base font-semibold text-accent">
                Therapieën
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li>Lichaamsgerichte Therapie</li>
                <li>Transformatief Ademwerk</li>
                <li>Stress- & Burn-out Herstel</li>
                <li>Somatic Experiencing</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-base font-semibold text-accent">
                Praktijk Informatie
              </h4>
              <p className="text-xs text-white/70">
                Landgoed Het Wold
                <br />
                Bospad 12, 3881 LZ Putten
                <br />
                KvK: 87654321 | AGB-Code: 9012345
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
            <p>
              © {new Date().getFullYear()} Rust & Ruimte Retreats. Alle rechten
              voorbehouden.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacybeleid
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Algemene Voorwaarden
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie instellingen
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
