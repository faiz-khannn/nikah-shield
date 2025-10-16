import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "8839487027";
const DEFAULT_MESSAGE = "Hello! I'm interested in your services.";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${isScrolled
        ? "bg-white/90 shadow-md backdrop-blur-sm"
        : "bg-transparent"
      }`}>
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span
            className={`text-3xl font-[Zaslia] font-bold tracking-wide transition-all duration-300 ${isScrolled
                ? "text-primary"
                : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
              }`}
          >
            Tasneem Farook
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-[Montserrat]">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/success-stories" className="text-sm font-medium hover:text-primary transition-colors">
            Hall of Fame
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Button onClick={openWhatsApp} className="gap-2">
            <MessageCircle className="w-4 h-4" />
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${isScrolled ? 'border-t' : 'bg-background/80 backdrop-blur'}`}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/success-stories"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hall of Fame
            </Link>
            <Link
              to="/contact"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button onClick={openWhatsApp} className="w-full gap-2">
              <MessageCircle className="w-4 h-4" />
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
