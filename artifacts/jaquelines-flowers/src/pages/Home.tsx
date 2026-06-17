import React from "react";
import { motion, type Variants } from "framer-motion";
import { Star, MapPin, Phone, Heart, ShoppingBag, Truck, MessageCircleHeart, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

declare function gtag(...args: unknown[]): void;

function TranslateFAB() {
  const [active, setActive] = React.useState(false);

  const trigger = (toES: boolean, tries = 0) => {
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = toES ? "es" : "";
      combo.dispatchEvent(new Event("change"));
    } else if (tries < 15) {
      setTimeout(() => trigger(toES, tries + 1), 200);
    }
  };

  const handleClick = () => {
    const next = !active;
    setActive(next);
    trigger(next);
  };

  return (
    <button onClick={handleClick} className="translate-fab" aria-label="Translate page" translate="no">
      <img src="/google-translate-icon.svg" alt="" aria-hidden="true" width="28" height="28" />
      <span>{active ? "Ver en English" : "Ver en Español"}</span>
    </button>
  );
}

const PHONE_HREF = "tel:+13235854647";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const PEXELS = (id: number, w = 600, h = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

const occasions = [
  {
    id: "birthday",
    label: "Birthday",
    sub: "Roses, sunflowers & vibrant bouquets",
    img: PEXELS(3961916),
    accent: "hsl(340 60% 45%)",
  },
  {
    id: "wedding",
    label: "Wedding",
    sub: "Bridal bouquets & ceremony pieces",
    img: PEXELS(30325205),
    accent: "hsl(210 30% 40%)",
  },
  {
    id: "sympathy",
    label: "Sympathy",
    sub: "Gentle white & soft-tone arrangements",
    img: PEXELS(8865150),
    accent: "hsl(210 15% 40%)",
  },
  {
    id: "corporate",
    label: "Corporate",
    sub: "Elegant flowers for offices & events",
    img: PEXELS(1659399),
    accent: "hsl(150 25% 30%)",
  },
  {
    id: "just-because",
    label: "Just Because",
    sub: "Surprise someone with a fresh bouquet",
    img: PEXELS(37423023),
    accent: "hsl(30 70% 45%)",
  },
  {
    id: "special-events",
    label: "Special Events",
    sub: "Quinceañera, graduation & more",
    img: PEXELS(28571066),
    accent: "hsl(320 50% 40%)",
  },
];

function handleOccasionClick(id: string) {
  if (typeof gtag !== "undefined") {
    gtag("event", "click", { event_category: "engagement", event_label: `occasion_${id}` });
  }
  window.location.href = PHONE_HREF;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Noise texture overlay for warmth/organic feel */}
      <div className="noise-overlay"></div>

      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-[100svh] md:min-h-[95vh] flex items-center pt-28 md:pt-24" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
          <img
            src="/hero.png"
            alt="Florist arranging a colourful flower bouquet at Jaquelines Flowers in Los Angeles"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            {/* Same-day delivery badge */}
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 bg-white/15 text-white border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                ✓ Same-Day Delivery Available in Los Angeles
              </span>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
              <div className="bg-white/15 text-white px-3 py-1 rounded-full text-sm font-semibold tracking-wider uppercase border border-white/30 flex items-center gap-2 backdrop-blur-sm">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                5.0 Rated Florist in LA
              </div>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading text-white leading-[1.1] mb-6 text-balance">
              Where Los Angeles <br/> <span className="text-primary italic font-normal">blooms.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/85 mb-10 max-w-lg leading-relaxed font-body">
              A family-owned flower shop pouring love into every arrangement. Fresh, stunning, and handmade for your most important moments.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base px-8 py-6 shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <a href="#contact">
                  Visit the Shop <MapPin className="ml-2 w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6 bg-white/50 backdrop-blur-sm border-border hover:bg-white/80 transition-all" asChild>
                <a
                  href="tel:+13235854647"
                  onClick={() => { if (typeof gtag !== "undefined") gtag("event", "click", { event_category: "contact", event_label: "phone_call" }); }}
                >
                  Call for Delivery <Phone className="ml-2 w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-5">
              <TranslateFAB />
            </motion.div>

            {/* Prominent phone + hours below CTAs */}
            <motion.div variants={fadeIn} className="flex flex-col gap-1 mt-6">
              <a
                href="tel:+13235854647"
                onClick={() => { if (typeof gtag !== "undefined") gtag("event", "click", { event_category: "contact", event_label: "phone_call" }); }}
                className="flex items-center gap-2 text-white font-semibold text-lg hover:text-primary transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
              >
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" /> (323) 585-4647
              </a>
              <p className="text-white/70 text-sm">Mon–Sat 8AM–8PM · Sun 9AM–8PM</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES BAR */}
      <section id="services" className="py-12 bg-white relative z-20 shadow-sm border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex items-center gap-4 md:justify-center py-4 md:py-0">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                <ShoppingBag className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-1">In-store Shopping</h3>
                <p className="text-muted-foreground text-sm">Browse our fresh daily selections.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:justify-center py-4 md:py-0">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                <Heart className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-1">In-store Pick-up</h3>
                <p className="text-muted-foreground text-sm">Order ahead, grab &amp; go.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:justify-center py-4 md:py-0">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                <Truck className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-1">Local Delivery</h3>
                <p className="text-muted-foreground text-sm">Same-day delivery across Los Angeles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOP BY OCCASION */}
      <section id="occasions" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">We're here for every moment</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-balance">
              What's the <span className="italic font-normal text-secondary">occasion?</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {occasions.map((o) => (
              <button
                key={o.id}
                onClick={() => handleOccasionClick(o.id)}
                className="occasion-img-card"
                style={{ "--card-accent": o.accent } as React.CSSProperties}
                aria-label={`Order ${o.label} flowers — call Jaquelines Flowers`}
              >
                <img
                  src={o.img}
                  alt={`${o.label} flower arrangement`}
                  className="occasion-img-card__photo"
                  loading="lazy"
                  decoding="async"
                />
                <div className="occasion-img-card__overlay" aria-hidden="true" />
                <div className="occasion-img-card__text">
                  <span className="occasion-img-card__label">{o.label}</span>
                  <span className="occasion-img-card__sub">{o.sub}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Single unified order CTA below the grid */}
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-3 text-sm">Ready to order? We'll take care of the rest.</p>
            <a
              href="tel:+13235854647"
              onClick={() => { if (typeof gtag !== "undefined") gtag("event", "click", { event_category: "contact", event_label: "phone_call_occasions" }); }}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" /> Call (323) 585-4647
            </a>
          </div>
        </div>
      </section>

      {/* 4. ABOUT / STORY */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/20 rounded-l-[100px] -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img src="/about.png" alt="Jaqueline's florist hands carefully arranging fresh roses and lilies" className="w-full h-full object-cover" />
              </div>
              {/* Floating review card */}
              <motion.div
                variants={fadeIn}
                className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[280px] hidden sm:block border border-border"
              >
                <div className="flex gap-1 mb-3 text-yellow-400" aria-label="5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm font-medium italic text-foreground leading-relaxed">
                  "The family who runs the shop is very welcoming and nice and bilingual. Love the flowers thank you!"
                </p>
                <p className="text-xs text-muted-foreground mt-3 font-semibold uppercase tracking-wider">— Corazon Tovar</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Our Story</motion.h2>
              <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight text-balance">
                Born from <span className="italic font-normal text-secondary">family love.</span>
              </motion.h3>

              <motion.div variants={fadeIn} className="space-y-6 text-lg text-foreground/80 font-body">
                <p>
                  Jaquelines Flowers is the flower shop that turns Los Angeles mornings into moments. We are a proudly family-owned and bilingual (English &amp; Spanish) florist dedicated to our community.
                </p>
                <p>
                  Neighborhood regulars, last-minute romantics, grieving families, and event planners all trust us for one simple reason: our flowers are stunningly fresh, and we genuinely care about the stories they tell.
                </p>
                <p>
                  We don't just sell flowers; we handcraft expressions of love, sympathy, celebration, and gratitude.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10">
                <div className="flex items-center gap-4 text-foreground font-medium">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <MessageCircleHeart className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Hablamos Español</p>
                    <p className="font-heading text-lg">Bilingual Service</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY / SHOWCASE */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Fresh Daily</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-balance">
              Stunning arrangements, <span className="italic font-normal">flawless execution.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative mb-4">
                <img src="/bouquet-1.png" alt="Elegant white lily arrangement — available for pick-up or delivery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h4 className="font-heading font-bold text-xl text-center">Elegant Lilies</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer md:-mt-8"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative mb-4 shadow-xl">
                <img src="/bouquet-2.png" alt="Vibrant spring bouquet with mixed colourful flowers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h4 className="font-heading font-bold text-xl text-center">Vibrant Spring</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative mb-4">
                <img src="/bouquet-3.png" alt="Classic red rose romance bouquet for special occasions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h4 className="font-heading font-bold text-xl text-center">Classic Romance</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS */}
      <section id="reviews" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex gap-1 mb-6 text-yellow-400" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-current" aria-hidden="true" />
                ))}
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-balance leading-tight">
                Loved by 115+ <br/> <span className="italic font-normal opacity-90">happy customers.</span>
              </h3>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold font-heading">5.0 Rating</p>
              <p className="opacity-80">on Google Reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <p className="text-lg italic leading-relaxed mb-6">
                "Photos don't do the bouquet I got here justice. These are the most stunning flowers I've bought ever. My first time here &amp; now I know where to go when I want flowers."
              </p>
              <p className="font-semibold uppercase tracking-wider text-sm">— Corazon Tovar <span className="opacity-70 normal-case font-normal">(Local Guide)</span></p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <p className="text-lg italic leading-relaxed mb-6">
                "The best delivery service in LA. I placed a last-minute phone order for local delivery while out of state, and it was executed flawlessly. Thank you for creating smile-worthy bouquets!"
              </p>
              <p className="font-semibold uppercase tracking-wider text-sm">— Luz Sánchez</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 md:col-span-2 lg:col-span-1">
              <p className="text-lg italic leading-relaxed mb-6">
                "It was a really great experience. The young lady was outgoing, friendly, and very helpful. I bought white Lilies for a friend."
              </p>
              <p className="font-semibold uppercase tracking-wider text-sm">— Michael</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hidden md:block">
              <p className="text-lg italic leading-relaxed mb-6">
                "Service excellent and the flowers and arrangement are of good taste and quality."
              </p>
              <p className="font-semibold uppercase tracking-wider text-sm">— Google Review</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hidden lg:block">
              <p className="text-lg italic leading-relaxed mb-6">
                "My favorite flower shop...very clean &amp; great prices. Great customer service."
              </p>
              <p className="font-semibold uppercase tracking-wider text-sm">— Google Review</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hidden lg:block">
              <p className="text-lg italic leading-relaxed mb-6">
                "This location is the best flower place ever."
              </p>
              <p className="font-semibold uppercase tracking-wider text-sm">— Google Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT & LOCATION */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Visit Us</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                Ready to make someone's <span className="italic font-normal text-secondary">day?</span>
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl mb-2">Location</h4>
                    <p className="text-foreground/80 text-lg mb-2">
                      1130 Firestone Blvd<br />
                      Los Angeles, CA 90001
                    </p>
                    <a href="https://maps.app.goo.gl/8g5Zv4fXuG7PAd59A" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold flex items-center gap-1 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded w-fit">
                      Get Directions <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl mb-2">Call to Order</h4>
                    <p className="text-foreground/80 text-lg mb-2">
                      Need a last-minute delivery or a custom bouquet? Give us a call.
                    </p>
                    <a
                      href="tel:+13235854647"
                      onClick={() => { if (typeof gtag !== "undefined") gtag("event", "click", { event_category: "contact", event_label: "phone_call" }); }}
                      className="text-2xl font-bold font-heading text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    >
                      +1 (323) 585-4647
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl mb-2">Hours</h4>
                    <ul className="text-foreground/80 text-lg space-y-2">
                      <li className="flex justify-between w-72 border-b border-border pb-1">
                        <span>Mon – Sat</span>
                        <span className="font-medium">8:00 AM – 8:00 PM</span>
                      </li>
                      <li className="flex justify-between w-72 border-b border-border pb-1">
                        <span>Sunday</span>
                        <span className="font-medium">9:00 AM – 8:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423.8!2d-118.2552338!3d33.9600372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c99fad160743%3A0xc45e7b050c697f88!2sJaquelines%20Flowers!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jaquelines Flowers Location — 1130 Firestone Blvd, Los Angeles, CA 90001"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-accent/30 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Let's create something <span className="italic text-primary font-normal">beautiful.</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Whether it's a grand event or a simple "thinking of you", we have the perfect flowers ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full text-lg px-10 py-7 shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
              <a
                href="tel:+13235854647"
                onClick={() => { if (typeof gtag !== "undefined") gtag("event", "click", { event_category: "contact", event_label: "phone_call" }); }}
              >
                <Phone className="mr-2 w-5 h-5" aria-hidden="true" /> Order Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <a
        href={PHONE_HREF}
        aria-label="Call Jaquelines Flowers to order"
        className="call-fab"
        onClick={() => { if (typeof gtag !== "undefined") gtag("event", "click", { event_category: "contact", event_label: "phone_call_fab" }); }}
      >
        <Phone className="w-6 h-6" aria-hidden="true" />
        <span className="call-fab-label">Call to Order</span>
      </a>
    </div>
  );
}