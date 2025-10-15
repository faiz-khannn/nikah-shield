import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Heart className="w-6 h-6 fill-current" />
            <span>NikahConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className="hover:text-secondary transition-colors">
              About
            </Link>
            <Link to="/success-stories" className="hover:text-secondary transition-colors">
              Success Stories
            </Link>
            <Link to="/pricing" className="hover:text-secondary transition-colors">
              Pricing
            </Link>
            <Link to="/login" className="hover:text-secondary transition-colors">
              Login
            </Link>
            <Button asChild variant="secondary" className="rounded-full">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-primary-foreground/20">
            <Link
              to="/about"
              className="block hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/success-stories"
              className="block hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              to="/pricing"
              className="block hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className="block hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                Sign Up
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
