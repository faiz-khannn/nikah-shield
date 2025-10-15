import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { mockQuizQuestions } from "@/lib/mockData";
import { ArrowRight, ArrowLeft, Heart } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const progress = ((currentQuestion + 1) / mockQuizQuestions.length) * 100;

  const handleNext = () => {
    if (!answers[mockQuizQuestions[currentQuestion].id]) {
      toast.error("Please select an answer");
      return;
    }

    if (currentQuestion < mockQuizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete
      const scores = calculateScores();
      localStorage.setItem('quizScores', JSON.stringify(scores));
      toast.success("Quiz completed! Creating your profile...");
      navigate('/profile/create');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScores = () => {
    let totalScore = 0;
    let count = 0;

    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = mockQuizQuestions.find(q => q.id === questionId);
      const option = question?.options.find(opt => opt.value === answer);
      if (option) {
        totalScore += option.score;
        count++;
      }
    });

    return {
      prayer: 5,
      fasting: 5,
      compatibilityIndex: Math.round((totalScore / (count * 5)) * 100)
    };
  };

  const question = mockQuizQuestions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern p-4">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary fill-current" />
                  <span className="font-semibold">Islamic Compatibility Quiz</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {currentQuestion + 1} of {mockQuizQuestions.length}
                </span>
              </div>
              <Progress value={progress} className="mb-4" />
              <CardTitle className="text-2xl">{question.question}</CardTitle>
              <CardDescription>
                Your answers help us find compatible matches based on Islamic values
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <RadioGroup
                value={answers[question.id] || ''}
                onValueChange={(value) => setAnswers({ ...answers, [question.id]: value })}
              >
                <div className="space-y-3">
                  {question.options.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label
                        htmlFor={option.value}
                        className="flex-1 cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              <div className="flex gap-4 pt-4">
                {currentQuestion > 0 && (
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
                  {currentQuestion === mockQuizQuestions.length - 1 ? 'Complete Quiz' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
