import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar, Heart } from "lucide-react";

interface HeaderProps {
  onOpenBooking: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Over Rust & Ruimte", href: "#over" },
    { name: "Therapie & Aanbod", href: "#therapie" },
    { name: "Het Landgoed", href: "#landgoed" },
    { name: "Retreats & Verblijf", href: "#verblijf" },
    { name: "Ervaringen", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground transition-transform group-hover:scale-105 shadow-sm">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  fillOpacity="0"
                />
                <path
                  d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12S7.86 19.5 12 19.5 19.5 16.14 19.5 12 16.14 4.5 12 4.5zm0 2.5c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"
                  opacity="0.3"
                />
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L6.39 16.2A6.97 6.97 0 015 12c0-3.87 3.13-7 7-7s7 3.13 7 7c0 1.51-.48 2.91-1.39 4.2l1.42 1.41C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-none">
                Rust & Ruimte
              </span>
              <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-sans font-medium mt-1">
                Retreats & Lichaamsgerichte Therapie
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+31612345678"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>06 - 12 34 56 78</span>
            </a>
            <Button
              onClick={() => onOpenBooking()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Afspraak Inplannen
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              onClick={() => onOpenBooking()}
              size="sm"
              className="bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full sm:hidden"
            >
              Boeken
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-card border border-border rounded-xl p-4 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary py-1 px-2 rounded-md hover:bg-muted"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-border flex flex-col gap-2">
                <a
                  href="tel:+31612345678"
                  className="flex items-center gap-2 text-sm text-muted-foreground py-1"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>06 - 12 34 56 78</span>
                </a>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="bg-primary text-primary-foreground w-full mt-1"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Afspraak & Intake Inplannen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
