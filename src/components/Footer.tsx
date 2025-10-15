import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Heart className="w-6 h-6 fill-current" />
              <span>NikahConnect</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              A respectful, privacy-first platform for Muslims seeking Nikah with dignity and faith.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-secondary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-secondary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Islamic Guidelines</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              All interactions follow Islamic principles of modesty, respect, and proper conduct.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p className="text-primary-foreground/80 italic mb-2">
            "And among His signs is that He created for you mates from among yourselves..." — Quran 30:21
          </p>
          <p className="text-primary-foreground/60">
            © 2025 NikahConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
