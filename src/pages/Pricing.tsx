import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "£0",
      period: "/month",
      description: "Perfect for getting started",
      icon: Star,
      features: [
        "Create profile",
        "Islamic compatibility quiz",
        "Browse profiles (limited)",
        "3 interest expressions per month",
        "Blurred photo vault",
        "Basic filters"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Premium",
      price: "£19.99",
      period: "/month",
      description: "Full access to all features",
      icon: Crown,
      features: [
        "Everything in Free",
        "Unlimited interest expressions",
        "Advanced Deen-first filters",
        "See who viewed your profile",
        "Priority in search results",
        "Unlimited messaging",
        "Voice notes",
        "Read receipts",
        "Faster verification"
      ],
      cta: "Start Premium",
      highlighted: true
    },
    {
      name: "Family Plan",
      price: "£29.99",
      period: "/month",
      description: "For families managing multiple profiles",
      icon: Users,
      features: [
        "Everything in Premium",
        "Manage up to 3 profiles",
        "Enhanced Wali dashboard",
        "Family account sharing",
        "Dedicated support",
        "Profile assistance"
      ],
      cta: "Get Family Plan",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the plan that's right for you. All plans include our core privacy features.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`relative overflow-hidden h-full flex flex-col ${
                    plan.highlighted 
                      ? 'border-2 border-primary shadow-xl scale-105' 
                      : 'border border-border'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-secondary text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <CardHeader className="text-center space-y-4">
                    <div className={`inline-flex w-16 h-16 rounded-full mx-auto items-center justify-center ${
                      plan.highlighted 
                        ? 'bg-gradient-to-br from-primary to-secondary' 
                        : 'bg-muted'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${plan.highlighted ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </div>
                    <div>
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      asChild 
                      className="w-full" 
                      size="lg"
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <Link to="/signup">{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards, debit cards, and PayPal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Is my payment secure?</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely. All payments are processed securely through industry-standard encryption.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What happens to my data if I cancel?</h4>
                  <p className="text-sm text-muted-foreground">
                    Your profile will remain viewable until you delete it. You can export your data anytime from settings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
