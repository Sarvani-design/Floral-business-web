import React from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

function LangToggle({ light }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  const id = React.useId();

  const select = (next: "en" | "es") => {
    if (next === lang) return;
    setLang(next);
  };

  const trackBg = light
    ? "bg-white/20 border border-white/30"
    : "bg-black/15 border border-black/10";

  const labelClass = (active: boolean) =>
    `relative z-10 text-xs font-semibold tracking-wider transition-colors duration-200 ${
      active
        ? "text-white"
        : light
        ? "text-white/70"
        : "text-foreground/60"
    }`;

  return (
    <div
      role="group"
      aria-label="Language"
      translate="no"
      className={`flex items-center rounded-full p-0.5 select-none cursor-pointer ${trackBg}`}
      onClick={() => select(lang === "en" ? "es" : "en")}
    >
      {(["en", "es"] as const).map((l) => (
        <div key={l} className="relative flex items-center justify-center px-2.5 py-1 min-w-[32px]">
          {lang === l && (
            <motion.div
              layoutId={`${id}-thumb`}
              className="absolute inset-0 rounded-full bg-primary shadow-sm"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className={labelClass(lang === l)}>
            {l.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our Story", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const textClass = isScrolled ? "text-foreground" : "text-white";
  const logoClass = isScrolled ? "text-primary" : "text-white";

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? "glass-nav" : "bg-black/20 backdrop-blur-sm"
      }`}
      style={{ paddingTop: "28px", paddingBottom: "20px" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className={`font-heading text-2xl font-bold tracking-tight transition-colors group-hover:opacity-80 ${logoClass}`}>
            Jaquelines <span className="font-normal italic">Flowers</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors uppercase tracking-widest hover:text-primary ${textClass}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <LangToggle light={!isScrolled} />
            </li>
          </ul>
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/30">
            <a
              href="tel:+13235854647"
              className={`hidden lg:flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded ${textClass}`}
            >
              <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>(323) 585-4647</span>
            </a>
            <Button asChild className="rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              <a href="#contact">Visit Us</a>
            </Button>
          </div>
        </nav>

        {/* Mobile: translate widget + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle light={!isScrolled} />
          <button
            className={`p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg transition-colors ${textClass}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border shadow-xl md:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block text-lg font-heading text-foreground hover:text-primary transition-colors py-2 min-h-[44px] flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <hr className="border-border" />
              <div className="flex flex-col gap-4">
                <a href="tel:+13235854647" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">(323) 585-4647</span>
                </a>
                <a
                  href="https://maps.google.com/?q=1130+Firestone+Blvd,+Los+Angeles,+CA+90001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">1130 Firestone Blvd, LA</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
