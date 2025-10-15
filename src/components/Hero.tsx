import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover blur-[20%] z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 z-1" />
      
      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <p className="text-sm font-medium text-secondary">Halal • Privacy-First • Respectful</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find a faithful partner.
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pursue Nikah with dignity.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A respectful, privacy-first platform for practicing Muslims seeking marriage. 
            Your journey to Nikah starts here, with your values protected.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl border-2">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
          >
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-sm">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Privacy Protected</h3>
              <p className="text-sm text-muted-foreground">
                Blurred photos, ghost mode, and full control over your data
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-sm">
              <Heart className="w-10 h-10 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Islamic Values</h3>
              <p className="text-sm text-muted-foreground">
                Deen-first matching with Wali integration and halal approach
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-sm">
              <Users className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Verified Members</h3>
              <p className="text-sm text-muted-foreground">
                Authentic profiles with ID verification and serious intentions
              </p>
            </div>
          </motion.div>
          
          <p className="text-sm text-muted-foreground pt-8 italic">
            "And among His signs is that He created for you mates from among yourselves..." — Quran 30:21
          </p>
        </motion.div>
      </div>
    </section>
  );
};
