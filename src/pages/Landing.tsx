import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Heart, Users, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy-First Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your dignity and privacy are our top priorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Blurred Photo Vault",
                description: "Photos are blurred by default. You control who sees them and when, with staged unblurring rules."
              },
              {
                icon: Shield,
                title: "Ghost Mode",
                description: "Make your profile invisible to specific users without them knowing. Full control over your visibility."
              },
              {
                icon: Heart,
                title: "Double Opt-In Messaging",
                description: "Messages only unlock after both parties express mutual interest. No unwanted messages."
              },
              {
                icon: Users,
                title: "Wali Integration",
                description: "Involve your Wali in the process with secure access and communication channels."
              },
              {
                icon: CheckCircle,
                title: "Verified Profiles",
                description: "ID verification ensures authentic profiles with serious intentions."
              },
              {
                icon: Star,
                title: "Deen-First Matching",
                description: "Islamic compatibility quiz prioritizes religious values in matching."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, respectful, and effective
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: "1",
                title: "Create Your Profile",
                description: "Complete the Islamic compatibility quiz and build your profile with as much or as little detail as you're comfortable with."
              },
              {
                step: "2",
                title: "Discover Matches",
                description: "Browse profiles with Deen-First matching. All photos are blurred by default to protect privacy."
              },
              {
                step: "3",
                title: "Express Interest",
                description: "Send interest to profiles you like. Only when both parties express mutual interest does messaging unlock."
              },
              {
                step: "4",
                title: "Start Conversations",
                description: "Chat with matches, involve your Wali when ready, and progress towards Nikah at your own pace."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-2xl shadow-lg">
              <Link to="/signup">Start Your Journey</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Find Your Match?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join thousands of Muslims who have found their life partners through our platform. 
              Your journey to a blessed Nikah starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-2xl">
                <Link to="/signup">Create Free Account</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-primary-foreground">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
