import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageSquare, FileCheck } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 md:py-28 hero-gradient hero-pattern relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Immigration Journey?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl">
            Take the first step towards your new life. Our experts are here to guide you every step of the way.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free Assessment */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 text-center card-hover">
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="h-7 w-7 text-accent-foreground" />
            </div>
            <h3 className="font-serif font-semibold text-xl text-primary-foreground mb-3">
              Free Eligibility Assessment
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Discover your immigration options with our comprehensive eligibility assessment tool.
            </p>
            <Button variant="hero" className="w-full" asChild>
              <Link to="/assessment">
                Start Assessment
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Book Consultation */}
          <div className="bg-accent rounded-xl p-6 text-center card-hover">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-serif font-semibold text-xl text-accent-foreground mb-3">
              Book a Consultation
            </h3>
            <p className="text-accent-foreground/80 text-sm mb-6">
              Schedule a one-on-one session with our immigration experts to discuss your case.
            </p>
            <Button variant="navy" className="w-full" asChild>
              <Link to="/booking">
                Book Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Contact Us */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 text-center card-hover">
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-7 w-7 text-accent-foreground" />
            </div>
            <h3 className="font-serif font-semibold text-xl text-primary-foreground mb-3">
              Send Us a Message
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Have questions? Our team is ready to assist you with any immigration inquiries.
            </p>
            <Button variant="heroOutline" className="w-full" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
