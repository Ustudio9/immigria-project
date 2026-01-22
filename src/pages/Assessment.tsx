import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { Button } from '@/components/ui/button';

import heroAssessmentImg from '@/assets/hero-assessment.jpg';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ArrowLeft, CheckCircle, FileCheck, Briefcase, GraduationCap, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const countries = [
  'India', 'China', 'Philippines', 'Nigeria', 'Brazil', 'Mexico', 'Pakistan', 'Bangladesh',
  'Iran', 'South Korea', 'United Kingdom', 'United States', 'France', 'Germany', 'Other'
];

const educationLevels = [
  'High School Diploma',
  'One-year diploma/certificate',
  'Two-year diploma/certificate',
  "Bachelor's degree",
  "Two or more Bachelor's degrees",
  "Master's degree",
  'Doctoral degree (PhD)',
];

const languageScores = [
  'CLB 4 or below',
  'CLB 5',
  'CLB 6',
  'CLB 7',
  'CLB 8',
  'CLB 9',
  'CLB 10 or above',
];

type AssessmentStep = 1 | 2 | 3 | 4 | 5;

interface AssessmentData {
  targetCountry: string;
  purpose: string;
  countryOfOrigin: string;
  age: string;
  education: string;
  workExperience: string;
  languageScore: string;
  hasJobOffer: string;
  hasFamilyInCanada: string;
  email: string;
  name: string;
}

export default function Assessment() {
  const [step, setStep] = useState<AssessmentStep>(1);
  const [showResults, setShowResults] = useState(false);
  const [data, setData] = useState<AssessmentData>({
    targetCountry: '',
    purpose: '',
    countryOfOrigin: '',
    age: '',
    education: '',
    workExperience: '',
    languageScore: '',
    hasJobOffer: '',
    hasFamilyInCanada: '',
    email: '',
    name: '',
  });

  const updateData = (field: keyof AssessmentData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 5) setStep((step + 1) as AssessmentStep);
    else setShowResults(true);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as AssessmentStep);
  };

  const progress = (step / 5) * 100;

  const getRecommendations = () => {
    const recommendations: { title: string; description: string; icon: any; match: string }[] = [];
    
    if (data.purpose === 'work') {
      recommendations.push({
        title: 'Express Entry',
        description: 'Based on your profile, you may be eligible for the Federal Skilled Worker Program through Express Entry.',
        icon: Briefcase,
        match: 'High Match',
      });
      if (data.hasJobOffer === 'yes') {
        recommendations.push({
          title: 'LMIA Work Permit',
          description: 'With a job offer, you could pursue an LMIA-based work permit for faster entry.',
          icon: FileCheck,
          match: 'High Match',
        });
      }
    }
    
    if (data.purpose === 'study') {
      recommendations.push({
        title: 'Study Permit',
        description: 'A study permit is your pathway to Canadian education with potential PR pathways after graduation.',
        icon: GraduationCap,
        match: 'High Match',
      });
    }
    
    if (data.purpose === 'family') {
      recommendations.push({
        title: 'Family Sponsorship',
        description: 'If you have close relatives in Canada, family sponsorship may be the right path for you.',
        icon: Users,
        match: 'High Match',
      });
    }
    
    if (data.purpose === 'business') {
      recommendations.push({
        title: 'Start-up Visa Program',
        description: 'For entrepreneurs, the Start-up Visa program offers permanent residency for innovative business ideas.',
        icon: Building2,
        match: 'Medium Match',
      });
    }

    // Add PNP as secondary option
    recommendations.push({
      title: 'Provincial Nominee Programs',
      description: 'Consider PNP streams that may align with your skills and target province.',
      icon: FileCheck,
      match: 'Medium Match',
    });

    return recommendations.slice(0, 3);
  };

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-success" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Assessment Results
              </h1>
              <p className="text-muted-foreground text-lg">
                Based on your answers, here are your recommended immigration pathways.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {recommendations.map((rec, index) => (
                <div key={rec.title} className="bg-card rounded-xl border border-border p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <rec.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif font-semibold text-xl text-foreground">{rec.title}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        rec.match === 'High Match' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'
                      }`}>
                        {rec.match}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{rec.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary rounded-2xl p-8 text-center">
              <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Book a consultation with our experts to discuss your specific situation and create a personalized immigration plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          label="Free Assessment"
          title="Discover Your Immigration Options"
          description="Answer a few questions to receive personalized recommendations for your immigration journey."
          backgroundImage={heroAssessmentImg}
        />

        {/* Assessment Form */}
        <section className="py-12 bg-background">
          <div className="container max-w-2xl">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Step {step} of 5</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Let's Get Started</h2>
                    <p className="text-muted-foreground">Tell us about your immigration goals.</p>
                  </div>

                  <div className="space-y-4">
                    <Label>Which country are you targeting? *</Label>
                    <RadioGroup value={data.targetCountry} onValueChange={(v) => updateData('targetCountry', v)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="canada" id="canada" />
                        <Label htmlFor="canada" className="font-normal">Canada</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="usa" id="usa" />
                        <Label htmlFor="usa" className="font-normal">United States</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both" className="font-normal">Both / Not sure</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>What is the primary purpose of your immigration? *</Label>
                    <RadioGroup value={data.purpose} onValueChange={(v) => updateData('purpose', v)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="work" id="work" />
                        <Label htmlFor="work" className="font-normal">Work</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="study" id="study" />
                        <Label htmlFor="study" className="font-normal">Study</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="family" id="family" />
                        <Label htmlFor="family" className="font-normal">Family Reunification</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business" className="font-normal">Business / Investment</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 2: Background */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Your Background</h2>
                    <p className="text-muted-foreground">Tell us about your current situation.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country of Origin *</Label>
                    <Select value={data.countryOfOrigin} onValueChange={(v) => updateData('countryOfOrigin', v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country.toLowerCase()}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Your Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="e.g., 30"
                      value={data.age}
                      onChange={(e) => updateData('age', e.target.value)}
                      min="18"
                      max="100"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Qualifications */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Your Qualifications</h2>
                    <p className="text-muted-foreground">Tell us about your education and experience.</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Highest Level of Education *</Label>
                    <Select value={data.education} onValueChange={(v) => updateData('education', v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        {educationLevels.map((level) => (
                          <SelectItem key={level} value={level.toLowerCase().replace(/\s+/g, '-')}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Work Experience *</Label>
                    <Input
                      id="experience"
                      type="number"
                      placeholder="e.g., 5"
                      value={data.workExperience}
                      onChange={(e) => updateData('workExperience', e.target.value)}
                      min="0"
                      max="50"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Language & Connections */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Language & Connections</h2>
                    <p className="text-muted-foreground">Tell us about your language abilities and connections.</p>
                  </div>

                  <div className="space-y-2">
                    <Label>English/French Language Proficiency (CLB Level) *</Label>
                    <Select value={data.languageScore} onValueChange={(v) => updateData('languageScore', v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your CLB level" />
                      </SelectTrigger>
                      <SelectContent>
                        {languageScores.map((score) => (
                          <SelectItem key={score} value={score.toLowerCase().replace(/\s+/g, '-')}>
                            {score}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Do you have a valid job offer in Canada/US? *</Label>
                    <RadioGroup value={data.hasJobOffer} onValueChange={(v) => updateData('hasJobOffer', v)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="jobYes" />
                        <Label htmlFor="jobYes" className="font-normal">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="jobNo" />
                        <Label htmlFor="jobNo" className="font-normal">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>Do you have close family in Canada? *</Label>
                    <RadioGroup value={data.hasFamilyInCanada} onValueChange={(v) => updateData('hasFamilyInCanada', v)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="familyYes" />
                        <Label htmlFor="familyYes" className="font-normal">Yes (parent, sibling, or child)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="familyNo" />
                        <Label htmlFor="familyNo" className="font-normal">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 5: Contact */}
              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Almost Done!</h2>
                    <p className="text-muted-foreground">Enter your details to receive your personalized assessment.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={data.name}
                      onChange={(e) => updateData('name', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={data.email}
                      onChange={(e) => updateData('email', e.target.value)}
                    />
                    <p className="text-muted-foreground text-sm">
                      We'll send your detailed assessment results to this email.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}
                <Button variant="gold" onClick={nextStep}>
                  {step === 5 ? 'Get My Results' : 'Continue'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
