import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "918839487027";
const DEFAULT_MESSAGE = "Hello! I'm interested in your matrimonial services. Please guide me.";

export const Hero = () => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-6 py-3 bg-secondary/20 border border-accent/30 rounded-full"
          >
            <p className="text-sm font-medium text-foreground">Faith • Dignity • Professional Service</p>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Simplifying the Path to Nikah
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              With Faith, Dignity, and Care
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A trusted matrimonial service guided by Islamic values, helping families connect with respect and transparency.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              Get Started on WhatsApp
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-muted-foreground pt-8 italic border-t border-border/30 mt-8 pt-8"
          >
            "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them..." — Quran 30:21
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
