import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Heart, MapPin, GraduationCap, Briefcase, CheckCircle, Lock, Sparkles } from "lucide-react";
import { mockProfiles } from "@/lib/mockData";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Discover = () => {
  const [deenFirst, setDeenFirst] = useState(true);

  const handleExpressInterest = (profileId: string) => {
    toast.success("Interest expressed! They'll be notified.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Discover Matches</h1>
            <p className="text-muted-foreground">Find your perfect match based on Islamic values and compatibility</p>
          </div>

          <div className="flex items-center gap-3 bg-card p-4 rounded-2xl border border-border shadow-sm">
            <Sparkles className="w-5 h-5 text-primary" />
            <Label htmlFor="deen-first" className="font-medium">Deen First Matching</Label>
            <Switch
              id="deen-first"
              checked={deenFirst}
              onCheckedChange={setDeenFirst}
            />
          </div>
        </div>

        {deenFirst && (
          <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
            <p className="text-sm text-primary font-medium">
              🌙 Deen First mode activated: Prioritizing religious compatibility (70% weight on Islamic practices)
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProfiles.map((profile) => (
            <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-all rounded-2xl">
              <CardHeader className="p-0">
                <div className="relative h-64 bg-muted">
                  <img
                    src={profile.photos[0]?.thumbUrl}
                    alt={`${profile.firstName}'s profile`}
                    className="w-full h-full object-cover"
                  />
                  <div className="blur-overlay">
                    <div className="text-center text-foreground">
                      <Lock className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Photo Protected</p>
                      <p className="text-xs text-muted-foreground">Express interest to unlock</p>
                    </div>
                  </div>
                  {profile.verified && (
                    <Badge className="absolute top-3 right-3 bg-primary">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{profile.displayName}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{profile.city}, {profile.country}</span>
                    <span>•</span>
                    <span>{profile.age} years old</span>
                  </div>
                </div>

                {profile.bio && (
                  <p className="text-sm text-muted-foreground line-clamp-2">{profile.bio}</p>
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>{profile.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>{profile.profession}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Islamic Practice</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{profile.religion.madhhab}</Badge>
                    <Badge variant="secondary">Prayer: {profile.religion.prayer}</Badge>
                    <Badge variant="secondary">Fasting: {profile.religion.fasting}</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 bg-primary/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${profile.quizScores.compatibilityIndex}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-primary">
                    {profile.quizScores.compatibilityIndex}% Match
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 gap-3">
                <Button
                  onClick={() => handleExpressInterest(profile.id)}
                  className="flex-1"
                  size="lg"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Express Interest
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to={`/profile/${profile.id}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Discover;
