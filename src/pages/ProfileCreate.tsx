import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Upload, Lock, User, Heart, Briefcase, Users as UsersIcon, Image } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ProfileCreate = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Basic
    displayName: '',
    bio: '',
    
    // Religious
    madhhab: '',
    prayer: '',
    fasting: '',
    hijabBeard: '',
    quranReading: '',
    
    // Lifestyle
    education: '',
    profession: '',
    smoking: '',
    interests: '',
    
    // Family
    familyValues: '',
    ethnicity: '',
    familyBackground: '',
    
    // Wali
    waliName: '',
    waliEmail: '',
    waliPhone: ''
  });

  const steps = [
    { id: 0, title: "Basic Info", icon: User, description: "Tell us about yourself" },
    { id: 1, title: "Religious Details", icon: Heart, description: "Your Islamic practice" },
    { id: 2, title: "Lifestyle", icon: Briefcase, description: "Education and interests" },
    { id: 3, title: "Family", icon: UsersIcon, description: "Family values and background" },
    { id: 4, title: "Photos", icon: Image, description: "Add your photos (blurred by default)" },
    { id: 5, title: "Wali Info", icon: Lock, description: "Optional: Add your Wali" }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    // Basic validation
    if (currentStep === 0 && !formData.displayName) {
      toast.error("Please enter your display name");
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save profile
      localStorage.setItem('userProfile', JSON.stringify(formData));
      toast.success("Profile created successfully!");
      navigate('/discover');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Basic
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name *</Label>
              <Input
                id="displayName"
                placeholder="How you'd like to be known"
                value={formData.displayName}
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">About You</Label>
              <Textarea
                id="bio"
                placeholder="Tell potential matches about yourself..."
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                Share your values, interests, and what you're looking for
              </p>
            </div>
          </div>
        );

      case 1: // Religious
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="madhhab">Madhhab</Label>
              <Select
                value={formData.madhhab}
                onValueChange={(value) => setFormData({ ...formData, madhhab: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your madhhab" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hanafi">Hanafi</SelectItem>
                  <SelectItem value="shafi">Shafi</SelectItem>
                  <SelectItem value="maliki">Maliki</SelectItem>
                  <SelectItem value="hanbali">Hanbali</SelectItem>
                  <SelectItem value="other">Other / Not specific</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="prayer">Prayer Frequency</Label>
              <Select
                value={formData.prayer}
                onValueChange={(value) => setFormData({ ...formData, prayer: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="How often do you pray?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="always">Always (all 5 prayers on time)</SelectItem>
                  <SelectItem value="usually">Usually (occasionally miss one)</SelectItem>
                  <SelectItem value="sometimes">Sometimes (trying to be consistent)</SelectItem>
                  <SelectItem value="rarely">Rarely</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fasting">Ramadan Fasting</Label>
              <Select
                value={formData.fasting}
                onValueChange={(value) => setFormData({ ...formData, fasting: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Do you fast in Ramadan?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="always">Yes, every day unless medically unable</SelectItem>
                  <SelectItem value="usually">Yes, most days</SelectItem>
                  <SelectItem value="sometimes">Some days</SelectItem>
                  <SelectItem value="rarely">Rarely or never</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hijabBeard">Hijab / Beard</Label>
              <Select
                value={formData.hijabBeard}
                onValueChange={(value) => setFormData({ ...formData, hijabBeard: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Do you wear hijab/maintain beard?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, always</SelectItem>
                  <SelectItem value="sometimes">Sometimes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2: // Lifestyle
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="education">Education</Label>
              <Input
                id="education"
                placeholder="e.g., Bachelor's in Computer Science"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="profession">Profession</Label>
              <Input
                id="profession"
                placeholder="e.g., Software Engineer"
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interests">Interests & Hobbies</Label>
              <Textarea
                id="interests"
                placeholder="e.g., Reading, Hiking, Volunteering..."
                rows={3}
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
              />
            </div>
          </div>
        );

      case 3: // Family
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="familyValues">Family Values</Label>
              <Select
                value={formData.familyValues}
                onValueChange={(value) => setFormData({ ...formData, familyValues: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your family values" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="traditional">Traditional</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="liberal">Liberal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ethnicity">Ethnicity</Label>
              <Input
                id="ethnicity"
                placeholder="e.g., Pakistani, Arab, etc."
                value={formData.ethnicity}
                onChange={(e) => setFormData({ ...formData, ethnicity: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="familyBackground">Family Background</Label>
              <Textarea
                id="familyBackground"
                placeholder="Share about your family (optional)"
                rows={3}
                value={formData.familyBackground}
                onChange={(e) => setFormData({ ...formData, familyBackground: e.target.value })}
              />
            </div>
          </div>
        );

      case 4: // Photos
        return (
          <div className="space-y-4">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-center mb-2">Privacy Protected</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Photos are blurred by default. You control who sees them and when, 
                with staged unblurring rules.
              </p>
            </div>

            <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="font-medium mb-2">Upload Photos</p>
              <p className="text-sm text-muted-foreground">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                PNG, JPG up to 10MB
              </p>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              You can skip this step and add photos later from your profile settings
            </p>
          </div>
        );

      case 5: // Wali
        return (
          <div className="space-y-4">
            <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/20">
              <p className="text-sm text-muted-foreground text-center">
                Adding a Wali (guardian) is optional but recommended. They can participate 
                in your journey and provide guidance.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="waliName">Wali's Name</Label>
              <Input
                id="waliName"
                placeholder="e.g., Father, Uncle, Brother"
                value={formData.waliName}
                onChange={(e) => setFormData({ ...formData, waliName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="waliEmail">Wali's Email</Label>
              <Input
                id="waliEmail"
                type="email"
                placeholder="wali@example.com"
                value={formData.waliEmail}
                onChange={(e) => setFormData({ ...formData, waliEmail: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="waliPhone">Wali's Phone (optional)</Label>
              <Input
                id="waliPhone"
                type="tel"
                placeholder="+44..."
                value={formData.waliPhone}
                onChange={(e) => setFormData({ ...formData, waliPhone: e.target.value })}
              />
            </div>

            <p className="text-xs text-muted-foreground">
              You can add or update Wali information anytime from settings
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern p-4">
      <div className="w-full max-w-2xl">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CurrentIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
                  <CardDescription>{steps[currentStep].description}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}
                </span>
              </div>
              <Progress value={progress} />
            </CardHeader>

            <CardContent className="space-y-6">
              {renderStep()}

              <div className="flex gap-4 pt-4">
                {currentStep > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  className="flex-1"
                  size="lg"
                >
                  {currentStep === steps.length - 1 ? 'Complete Profile' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Step indicators */}
              <div className="flex justify-center gap-2 pt-4">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentStep
                        ? 'bg-primary w-6'
                        : index < currentStep
                        ? 'bg-primary/50'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCreate;
