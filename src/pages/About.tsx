import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Heart, Users, CheckCircle, Lock, Star } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold">Our Mission</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To provide a safe, respectful, and dignified platform for practicing Muslims 
              to find their life partners while upholding Islamic values and principles.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NikahConnect was founded by Muslims who recognized the need for a matrimonial 
                platform that truly respects Islamic values and personal privacy. We understand 
                that finding a spouse is one of the most important decisions in life, and it 
                should be done with dignity, respect, and proper Islamic guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Privacy First",
                    description: "Your privacy is sacred. We give you complete control over your information and visibility."
                  },
                  {
                    icon: Heart,
                    title: "Islamic Principles",
                    description: "All features are designed with Islamic values at the core, from modesty to proper conduct."
                  },
                  {
                    icon: Users,
                    title: "Family Involvement",
                    description: "We encourage Wali involvement and provide tools to include family in the process."
                  },
                  {
                    icon: CheckCircle,
                    title: "Authentic Profiles",
                    description: "Verification processes ensure serious intentions and genuine profiles."
                  },
                  {
                    icon: Lock,
                    title: "Safe Environment",
                    description: "Advanced safety features protect you from unwanted contact and maintain boundaries."
                  },
                  {
                    icon: Star,
                    title: "Quality Matches",
                    description: "Intelligent matching based on Deen, compatibility, and shared values."
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-card p-6 rounded-2xl border border-border">
                    <value.icon className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 rounded-2xl border border-primary/20"
            >
              <h2 className="text-3xl font-bold mb-4">Islamic Guidelines</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Modesty & Respect:</strong> All interactions 
                  must maintain proper Islamic etiquette. We encourage modest communication and discourage 
                  inappropriate conversation.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Wali Involvement:</strong> We strongly encourage 
                  involving your Wali (guardian) in the marriage process, as recommended in Islam. Our 
                  platform provides tools to facilitate this.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Serious Intentions:</strong> This platform is for 
                  Muslims seeking marriage (Nikah) with serious intentions. Casual dating and inappropriate 
                  relationships are strictly prohibited.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Honesty & Transparency:</strong> Members are expected 
                  to be truthful in their profiles and communications. Deception in matters of marriage is 
                  a serious issue in Islam.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Privacy & Dignity:</strong> Protect your own privacy 
                  and respect others'. Use our privacy features wisely and maintain appropriate boundaries.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-8"
            >
              <p className="text-xl italic text-muted-foreground">
                "And among His signs is that He created for you mates from among yourselves 
                that you may dwell in tranquility with them, and He placed between you affection 
                and mercy. Indeed, in that are signs for people who reflect."
              </p>
              <p className="text-lg font-semibold text-primary mt-4">— Quran 30:21</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
