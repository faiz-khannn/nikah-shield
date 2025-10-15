import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Users, UserCheck, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'gender' | 'details'>('gender');
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    birthdate: '',
    country: '',
    city: ''
  });

  const handleGenderSelect = (selectedGender: 'male' | 'female') => {
    setGender(selectedGender);
    setStep('details');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password || !formData.fullName) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Mock signup - store in localStorage
    const userData = {
      ...formData,
      gender,
      id: Math.random().toString(36).substr(2, 9),
      verified: false
    };
    
    localStorage.setItem('pendingUser', JSON.stringify(userData));
    toast.success("Account created! Please verify your email.");
    navigate('/signup/verify-email');
  };

  if (step === 'gender') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pattern p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="w-full max-w-2xl shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Create Your Account</CardTitle>
              <CardDescription className="text-lg">
                First, let us know your gender to personalize your experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleGenderSelect('male')}
                  className="group relative p-8 border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-pressed={gender === 'male'}
                >
                  <Users className="w-16 h-16 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold">Male</h3>
                </button>

                <button
                  onClick={() => handleGenderSelect('female')}
                  className="group relative p-8 border-2 border-border rounded-2xl hover:border-secondary hover:bg-secondary/5 transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
                  aria-pressed={gender === 'female'}
                >
                  <UserCheck className="w-16 h-16 mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold">Female</h3>
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Log in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern p-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Create your account to start your journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthdate">Date of Birth</Label>
                <Input
                  id="birthdate"
                  type="date"
                  value={formData.birthdate}
                  onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    type="text"
                    placeholder="UK"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="London"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <Button type="submit" className="w-full" size="lg">
                  Create Account
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  className="w-full"
                  onClick={() => setStep('gender')}
                >
                  Back to Gender Selection
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center pt-2">
                By creating an account, you agree to our{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Signup;
