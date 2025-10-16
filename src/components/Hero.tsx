import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "8839487027";
const DEFAULT_MESSAGE = "Hello! I'm interested in your matrimonial services. Please guide me.";

export const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  useEffect(() => {
    const videoElement = document.getElementById('hero-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.onloadeddata = () => setIsVideoLoaded(true);
    }
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          id="hero-video"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ opacity: isVideoLoaded ? 0.7 : 0 }}
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background/70 to-accent/40" />
      </div>
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEyLTZjLTkuOTQxIDAtMTggOC4wNTktMTggMThzOC4wNTkgMTggMTggMTggMTgtOC4wNTkgMTgtMTgtOC4wNTktMTgtMTgtMTh6IiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
      
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
            className="inline-block mb-4 px-6 py-3 bg-secondary/20 border border-accent/30 rounded-full backdrop-blur-sm"
          >
            <p className="text-sm font-[Montserrat] font-medium text-foreground">Faith • Dignity • Professional Service</p>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-[Montserrat] font-bold leading-tight font-serif">
            Simplifying the Path to Nikah
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-sans">
              With Faith, Dignity, and Care
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-[Montserrat] text-white max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-lg">
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
              className="text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0E7F73] text-white"
            >
              <span className="relative z-10 font-[Montserrat]">Get Started on WhatsApp</span>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative mt-12 pt-8"
          >
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <p className="text-sm font-[Montserrat] bg-black/40 text-amber-100 p-3 rounded-lg shadow-lg quote-text backdrop-blur-md inline-block mx-auto">
              "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them..." — Quran 30:21
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
