import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockProfiles } from "@/lib/mockData";
import { 
  Heart, MapPin, GraduationCap, Briefcase, CheckCircle, 
  Lock, ArrowLeft, Users, Bookmark, Flag 
} from "lucide-react";
import { toast } from "sonner";

const ProfileView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = mockProfiles.find(p => p.id === id);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Profile Not Found</h1>
          <Button onClick={() => navigate('/discover')}>Back to Discover</Button>
        </div>
      </div>
    );
  }

  const handleExpressInterest = () => {
    toast.success("Interest expressed! They'll be notified.");
  };

  const handleRequestWali = () => {
    toast.success("Wali introduction request sent!");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{profile.displayName}</h1>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{profile.city}, {profile.country}</span>
                      </div>
                      <span>•</span>
                      <span>{profile.age} years old</span>
                      {profile.verified && (
                        <>
                          <span>•</span>
                          <Badge className="bg-primary">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Photos */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {profile.photos.map((photo) => (
                    <div key={photo.id} className="relative aspect-square rounded-xl overflow-hidden">
                      <img
                        src={photo.thumbUrl}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                      <div className="blur-overlay">
                        <div className="text-center text-foreground">
                          <Lock className="w-6 h-6 mx-auto mb-1" />
                          <p className="text-xs font-medium">Protected</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20">
                  <p className="text-sm text-center">
                    <Lock className="w-4 h-4 inline mr-2" />
                    Photos will unblur after mutual interest and {profile.photos[0].rules.unblurAfterMessages} messages exchanged
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            {profile.bio && (
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
                </CardContent>
              </Card>
            )}

            {/* Education & Work */}
            <Card>
              <CardHeader>
                <CardTitle>Education & Career</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-muted-foreground">{profile.education}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Profession</p>
                    <p className="text-muted-foreground">{profile.profession}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Religious Details */}
            <Card>
              <CardHeader>
                <CardTitle>Religious Practice</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Madhhab</p>
                    <Badge variant="secondary">{profile.religion.madhhab}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Prayer</p>
                    <Badge variant="secondary">{profile.religion.prayer}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Fasting</p>
                    <Badge variant="secondary">{profile.religion.fasting}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Hijab/Beard</p>
                    <Badge variant="secondary">{profile.religion.hijab_beard}</Badge>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Compatibility Score</span>
                    <span className="text-2xl font-bold text-primary">
                      {profile.quizScores.compatibilityIndex}%
                    </span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${profile.quizScores.compatibilityIndex}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Family */}
            <Card>
              <CardHeader>
                <CardTitle>Family & Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Family Values</p>
                  <p className="font-medium">{profile.family.values}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ethnicity</p>
                  <p className="font-medium">{profile.family.ethnicity}</p>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            {profile.interests && (
              <Card>
                <CardHeader>
                  <CardTitle>Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <Badge key={index} variant="outline">{interest}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-4">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-3">
                <Button
                  onClick={handleExpressInterest}
                  className="w-full"
                  size="lg"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Express Interest
                </Button>

                <Button
                  onClick={handleRequestWali}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Request Wali Intro
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save Profile
                </Button>

                <Button
                  variant="ghost"
                  className="w-full text-destructive hover:text-destructive"
                >
                  <Flag className="w-4 h-4 mr-2" />
                  Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileView;
