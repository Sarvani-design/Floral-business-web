import React from "react";
import { Phone, MapPin, Clock, Star, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-heading text-3xl font-bold tracking-tight text-white mb-2">
                Jaquelines <span className="font-normal italic">Flowers</span>
              </h3>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-white ml-2 text-sm font-medium">5.0 (115 reviews)</span>
              </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed max-w-sm">
              A warm, living-color florist born from family love. We turn Los Angeles mornings into moments with stunningly fresh, handmade arrangements.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/jacquelinesflowershop/" target="_blank" rel="noopener noreferrer" aria-label="Follow Jaquelines Flowers on Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/p/Jacquelines-flower-shop-100072222450453/" target="_blank" rel="noopener noreferrer" aria-label="Follow Jaquelines Flowers on Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xl font-semibold text-white mb-2">Contact Us</h4>
            <a href="tel:+13235854647" className="flex items-start gap-3 hover:text-white transition-colors group">
              <Phone className="w-5 h-5 text-primary mt-1 group-hover:text-white transition-colors" />
              <div>
                <p className="font-medium text-white">Phone Order</p>
                <p className="text-secondary-foreground/80">+1 (323) 585-4647</p>
              </div>
            </a>
            <a href="https://maps.google.com/?q=1130+Firestone+Blvd,+Los+Angeles,+CA+90001" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors group mt-2">
              <MapPin className="w-5 h-5 text-primary mt-1 group-hover:text-white transition-colors" />
              <div>
                <p className="font-medium text-white">Location</p>
                <p className="text-secondary-foreground/80">1130 Firestone Blvd<br />Los Angeles, CA 90001</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xl font-semibold text-white mb-2">Hours</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-secondary-foreground/80">Mon – Sat</span>
                  <span className="text-white font-medium">8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-secondary-foreground/80">Sunday</span>
                  <span className="text-white font-medium">9:00 AM – 8:00 PM</span>
                </div>
                <p className="text-secondary-foreground/80 text-sm mt-2">
                  Open 7 days a week. Bilingual service available (English &amp; Spanish).
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-xl font-semibold text-white mb-2">Services</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-secondary-foreground/80">In-store shopping</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-secondary-foreground/80">In-store pick-up</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-secondary-foreground/80">Local LA Delivery</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-secondary-foreground/80">Event Arrangements</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-secondary-foreground/80">Custom Bouquets</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} Jaquelines Flowers. Family-owned in Los Angeles.
          </p>
          <div className="flex items-center gap-4 text-sm text-secondary-foreground/60">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
