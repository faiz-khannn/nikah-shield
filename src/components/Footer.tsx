import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-5xl font-[Zaslia] font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tasneem Farook
            </h3>
            <p className="text-sm font-[Montserrat] text-muted-foreground">
              Simplifying the path to nikah with faith, dignity, and professional care. Trusted by families across India.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm font-[Agraham] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm font-[Montserrat] text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-sm font-[Montserrat] text-muted-foreground hover:text-primary transition-colors">
                  Hall of Fame
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm font-[Montserrat] text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm font-[Agraham] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm font-[Montserrat] text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm font-[Montserrat] text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tasneem Farook. All rights reserved.
          </p>
          <p className="text-sm font-[Brillant] text-muted-foreground mt-2 italic">
            "And of His signs is that He created for you from yourselves mates that you may find tranquility in them." — Quran 30:21
          </p>
        </div>
      </div>
    </footer>
  );
};
