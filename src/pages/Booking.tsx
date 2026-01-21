import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const services = [
  'Express Entry',
  'Work Permits',
  'Study Permits',
  'Provincial Nominee Programs',
  'Family Sponsorship',
  'Business Immigration',
  'Recruit Foreign Workers',
  'Translation Services',
  'Other / General Consultation',
];

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
];

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Consultation booked successfully! Check your email for confirmation details.');
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient hero-pattern py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Book a Consultation</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3 mb-6">
                Schedule Your Expert Immigration Consultation
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                Book a one-on-one session with our immigration specialists to discuss your unique case and explore your options.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Benefits */}
              <div className="lg:col-span-1 space-y-6">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  What to Expect
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Personalized Assessment</h3>
                      <p className="text-muted-foreground text-sm">Get a thorough review of your eligibility and options.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Expert Guidance</h3>
                      <p className="text-muted-foreground text-sm">Speak directly with licensed immigration consultants.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Clear Roadmap</h3>
                      <p className="text-muted-foreground text-sm">Leave with a clear understanding of your next steps.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">No Obligation</h3>
                      <p className="text-muted-foreground text-sm">Consultation is risk-free with no commitment required.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-foreground">30-Minute Session</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Our initial consultations are 30 minutes, giving us enough time to understand your situation and provide valuable guidance.
                  </p>
                </div>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-8 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Book Your Session
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country of Residence *</Label>
                      <Input id="country" name="country" placeholder="e.g., India, Brazil, USA" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select name="service" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input id="date" name="date" type="date" required min={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time (EST) *</Label>
                      <Select name="time" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time.toLowerCase().replace(/\s+/g, '-')}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Tell us a bit about your immigration goals or any specific questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Booking...'
                    ) : (
                      <>
                        Book Consultation
                        <Calendar className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-muted-foreground text-sm text-center">
                    By booking, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
