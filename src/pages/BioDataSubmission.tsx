import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, CheckCircle, FileText } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const BioDataSubmission = () => {
  const { uniqueId } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [submissionType, setSubmissionType] = useState<'form' | 'pdf' | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    city: '',
    country: 'India',
    qualification: '',
    profession: '',
    salary: '',
    height: '',
    maritalStatus: '',
    religiousPractice: '',
    familyDetails: '',
    expectations: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    toast.success("Biodata submitted successfully!");
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      toast.success("PDF uploaded successfully!");
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl ">Submission Successful!</CardTitle>
                <CardDescription>
                  Your biodata has been submitted successfully. We will review it and get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Reference ID: <span className="font-mono font-semibold">{uniqueId}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  You will receive a confirmation message on WhatsApp shortly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  if (!submissionType) {
    return (
      <div className="min-h-screen pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold font-[Agraham] text-center mb-4">Submit Your Biodata</h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose how you would like to submit your biodata. You can either fill out our structured form or upload a PDF.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="cursor-pointer hover:shadow-lg transition-all hover:border-primary" onClick={() => setSubmissionType('form')}>
                <CardHeader className="text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <CardTitle>Fill Structured Form</CardTitle>
                  <CardDescription>
                    Answer specific questions about yourself, family, and preferences
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-all hover:border-primary" onClick={() => setSubmissionType('pdf')}>
                <CardHeader className="text-center">
                  <Upload className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <CardTitle>Upload PDF</CardTitle>
                  <CardDescription>
                    Upload a ready-made biodata in PDF format
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  if (submissionType === 'pdf') {
    return (
      <div className="min-h-screen pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-20 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Upload Your Biodata PDF</CardTitle>
              <CardDescription>
                Upload a PDF file containing your biodata information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors">
                <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <Label htmlFor="pdf-upload" className="cursor-pointer">
                  <span className="text-primary font-medium">Click to upload</span> or drag and drop
                  <br />
                  <span className="text-sm text-muted-foreground">PDF (Max 5MB)</span>
                </Label>
                <Input
                  id="pdf-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handlePdfUpload}
                />
              </div>
              <Button variant="outline" onClick={() => setSubmissionType(null)} className="w-full">
                Back to Options
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-[Agraham] text-center mb-4">Biodata Submission Form</h1>
          <p className="text-center text-muted-foreground mb-8">
            Please fill in all the details accurately. All information will be kept confidential.
          </p>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Personal Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maritalStatus">Marital Status *</Label>
                      <Select value={formData.maritalStatus} onValueChange={(value) => setFormData({ ...formData, maritalStatus: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="never">Never Married</SelectItem>
                          <SelectItem value="divorced">Divorced</SelectItem>
                          <SelectItem value="widowed">Widowed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        placeholder="e.g., 5'8&quot;"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Contact Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Professional Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="qualification">Qualification *</Label>
                      <Input
                        id="qualification"
                        required
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profession">Profession *</Label>
                      <Input
                        id="profession"
                        required
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Annual Income (Optional)</Label>
                    <Input
                      id="salary"
                      placeholder="e.g., 10-12 LPA"
                      value={formData.salary}
                      onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    />
                  </div>
                </div>

                {/* Religious & Family Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Religious & Family Background</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="religiousPractice">Religious Practice *</Label>
                    <Textarea
                      id="religiousPractice"
                      required
                      placeholder="Describe your religious practices (e.g., prayer frequency, fasting, etc.)"
                      value={formData.religiousPractice}
                      onChange={(e) => setFormData({ ...formData, religiousPractice: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="familyDetails">Family Details</Label>
                    <Textarea
                      id="familyDetails"
                      placeholder="Brief information about your family"
                      value={formData.familyDetails}
                      onChange={(e) => setFormData({ ...formData, familyDetails: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectations">Expectations from Life Partner</Label>
                    <Textarea
                      id="expectations"
                      placeholder="What are you looking for in a life partner?"
                      value={formData.expectations}
                      onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setSubmissionType(null)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1">
                    Submit Biodata
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default BioDataSubmission;
