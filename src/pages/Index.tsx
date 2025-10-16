import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Users, Heart, FileText, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const WHATSAPP_NUMBER = "918839487027";
  const DEFAULT_MESSAGE = "Hello! I'm interested in your matrimonial services. Please guide me.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    window.open(url, '_blank');
  };

  const features = [
    {
      icon: Shield,
      title: "Privacy & Dignity",
      description: "Your personal information is handled with utmost care and Islamic principles"
    },
    {
      icon: Users,
      title: "Family-Centered Approach",
      description: "We involve families from the start, ensuring transparency and trust"
    },
    {
      icon: FileText,
      title: "Structured Biodata",
      description: "Comprehensive biodata format that covers all important aspects"
    },
    {
      icon: Heart,
      title: "Faith-First Matching",
      description: "Deen and values are prioritized in every connection we facilitate"
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Connect directly via WhatsApp for quick and personal interactions"
    },
    {
      icon: CheckCircle,
      title: "Success Tracking",
      description: "We follow up and celebrate every successful nikah with you"
    }
  ];

  const steps = [
    { number: "01", title: "Get in Touch", description: "Contact us via WhatsApp to express your interest" },
    { number: "02", title: "Receive Your Link", description: "Get a unique biodata submission link" },
    { number: "03", title: "Submit Details", description: "Fill your biodata form or upload PDF" },
    { number: "04", title: "We Take Care", description: "We handle matching, family introductions, and follow-ups" }
  ];

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
            <h2 className="text-4xl font-bold mb-4">Why Choose Tasneem Farook</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A trusted service combining Islamic values with modern professionalism
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, dignified, and effective process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button onClick={openWhatsApp} size="lg" className="text-lg px-8 py-6">
              Start Your Journey Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Take the first step towards a blessed nikah. Contact us today and let's start this journey together.
            </p>
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6"
            >
              Get Started on WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
