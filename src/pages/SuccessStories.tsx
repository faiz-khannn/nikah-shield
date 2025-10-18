import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heart, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const stories = [
    {
      names: "Aisha & Omar",
      location: "London, UK",
      date: "Married June 2024",
      story: "We both valued our Deen above everything else, and NikahConnect's compatibility quiz helped us realize how aligned we were. The privacy features made us feel comfortable, and involving our families was seamless with the Wali integration. Alhamdulillah, we found our perfect match!",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400"
    },
    {
      names: "Fatima & Yusuf",
      location: "Birmingham, UK",
      date: "Married March 2024",
      story: "As a practicing Muslimah, I was hesitant about online matrimonial sites. But the blurred photo vault and double opt-in messaging gave me confidence. I met my husband here, and we're so grateful for a platform that respects our values. May Allah bless this service!",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400"
    },
    {
      names: "Khadija & Ibrahim",
      location: "Manchester, UK",
      date: "Married September 2024",
      story: "The Deen-first matching was exactly what we needed. We connected over our shared commitment to our faith, and everything else fell into place naturally. The platform made it easy to have meaningful conversations while maintaining proper Islamic boundaries. Highly recommended!",
      image: "https://media.istockphoto.com/id/1298757638/photo/national-wedding-bride-and-groom-wedding-muslim-couple-during-the-marriage-ceremony-muslim.jpg?s=612x612&w=0&k=20&c=IZSdZRuMaHMnNwdPKQKq1vZ6IrcONjmA-_GuoIlD4m4="
    },
    {
      names: "Zainab & Ahmed",
      location: "Bradford, UK",
      date: "Married January 2024",
      story: "We appreciate how NikahConnect emphasizes family involvement. My Wali was able to participate in the process from day one, which gave us all peace of mind. The verification system also meant we could trust that profiles were genuine. Found my best friend and life partner here!",
      image: "https://images.unsplash.com/photo-1529539795054-3c162aab037a?w=400"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <section className="py-20 bg-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="inline-block mb-4">
              <Heart className="w-16 h-16 text-secondary mx-auto fill-current" />
            </div>
            <h1 className="text-5xl font-[Agraham] md:text-6xl font-bold" style={{ lineHeight: '1.5' }}>Success Stories</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real couples who found their match through NikahConnect. 
              May Allah bless all these unions with happiness and barakah.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={story.image}
                        alt={story.names}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader className="space-y-4">
                        <h3 className="text-2xl font-[Agraham] font-bold" style={{ lineHeight: '1.6' }}>{story.names}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {story.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {story.date}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed italic">
                          "{story.story}"
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border"
          >
            <Heart className="w-12 h-12 text-secondary mx-auto mb-4 fill-current" />
            <h2 className="text-3xl font-[Agraham] font-bold mb-4" style={{ lineHeight: '1.6' }}>Your Story Could Be Next</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of Muslims who have found their life partners through our platform. 
              Start your journey to a blessed Nikah today.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
