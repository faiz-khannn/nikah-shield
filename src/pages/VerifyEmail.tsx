import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.length !== 6) {
      toast.error("Please enter the 6-digit code");
      return;
    }

    // Mock verification
    toast.success("Email verified successfully!");
    navigate('/onboarding/quiz');
  };

  const handleResend = () => {
    setCountdown(60);
    setCanResend(false);
    toast.success("Verification code resent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Verify Your Email</CardTitle>
          <CardDescription className="text-base">
            We've sent a 6-digit code to your email address. Please enter it below to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter 6-digit code"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                className="text-center text-2xl tracking-widest"
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Verify & Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <div className="text-center">
              {canResend ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleResend}
                  className="text-sm"
                >
                  Resend Code
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Resend code in {countdown}s
                </p>
              )}
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Didn't receive the code? Check your spam folder or contact support.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmail;
