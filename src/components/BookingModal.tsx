import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Clock, CheckCircle2, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOption?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedOption = "",
}) => {
  const [step, setStep] = useState<"form" | "submitted">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedOption || "lichaamsgerichte-therapie",
    preferredDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Vul a.u.b. ten minste je naam en e-mailadres in.");
      return;
    }

    setStep("submitted");
    toast.success(
      "Aanvraag succesvol ontvangen! We nemen binnen 24 uur contact op.",
    );
  };

  const handleReset = () => {
    setStep("form");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <DialogContent className="sm:max-w-[540px] bg-card border-border shadow-2xl rounded-2xl p-6 md:p-8">
        {step === "form" ? (
          <>
            <DialogHeader className="text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold tracking-wide uppercase w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                Vrijblijvende Intake & Reservering
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-serif text-foreground">
                Plan jouw Rust & Ruimte ervaring
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm">
                Laat je gegevens achter voor een gratis kennismakingsgesprek of
                kies direct een therapie of retreat verblijf.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-1.5">
                <Label htmlFor="modal-name">Naam *</Label>
                <Input
                  id="modal-name"
                  placeholder="Bijv. Sophie de Vries"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="modal-email">E-mailadres *</Label>
                  <Input
                    id="modal-email"
                    type="email"
                    placeholder="sophie@voorbeeld.nl"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="modal-phone">Telefoonnummer</Label>
                  <Input
                    id="modal-phone"
                    type="tel"
                    placeholder="06 - 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="modal-service">Waar heb je interesse in?</Label>
                <Select
                  value={formData.service}
                  onValueChange={(val) =>
                    setFormData({ ...formData, service: val })
                  }
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Selecteer een optie" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="lichaamsgerichte-therapie">
                      Individuele Lichaamsgerichte Therapie
                    </SelectItem>
                    <SelectItem value="adem-mindfulness-retreat">
                      Multi-day Adem & Mindfulness Retreat
                    </SelectItem>
                    <SelectItem value="coaching-stressmanagement">
                      Coaching & Masterclasses Stressmanagement
                    </SelectItem>
                    <SelectItem value="landgoed-boshut">
                      Verblijf: Eco Boshut Cabin (€ 165/nacht)
                    </SelectItem>
                    <SelectItem value="landgoed-wellness-suite">
                      Verblijf: Wellness Loft Suite (€ 245/nacht)
                    </SelectItem>
                    <SelectItem value="intake-call">
                      Gratis Telefonische Intake (15 min)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="modal-date">Voorkeursdatum of periode</Label>
                <Input
                  id="modal-date"
                  type="text"
                  placeholder="Bijv. Komende maandag, of tweede week mei"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="modal-notes">
                  Toelichting of persoonlijke vraag
                </Label>
                <Textarea
                  id="modal-notes"
                  rows={3}
                  placeholder="Vertel kort over wat je wilt bereiken of waar je last van hebt..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="bg-background border-border resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="w-full sm:w-auto"
                >
                  Annuleren
                </Button>
                <Button
                  type="submit"
                  className="w-full sm:flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                >
                  Verstuur Aanvraag
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif text-foreground font-semibold">
              Hartelijk dank, {formData.name}!
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
              We hebben je aanvraag in goede orde ontvangen. We nemen binnen 24
              uur persoonlijk contact op per e-mail of telefoon om de verdere
              details af te stemmen.
            </p>
            <div className="pt-4">
              <Button
                onClick={handleReset}
                className="bg-primary text-primary-foreground"
              >
                Sluit Venster
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
