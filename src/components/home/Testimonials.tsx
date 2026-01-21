import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    content: "Immigria made my Express Entry journey incredibly smooth. Their team's expertise and attention to detail gave me confidence throughout the entire process. I received my PR in just 6 months!",
    author: 'Maria Santos',
    role: 'Software Engineer',
    location: 'From Brazil, now in Toronto',
    rating: 5,
  },
  {
    id: 2,
    content: "As a business owner, I needed to bring in specialized talent from overseas. Immigria handled everything from LMIA to work permits flawlessly. Their corporate immigration services are exceptional.",
    author: 'David Chen',
    role: 'CEO, Tech Startup',
    location: 'Montreal, QC',
    rating: 5,
  },
  {
    id: 3,
    content: "The family sponsorship process seemed overwhelming until we found Immigria. They reunited me with my parents in just 8 months. Forever grateful for their compassionate and professional service.",
    author: 'Priya Sharma',
    role: 'Healthcare Professional',
    location: 'From India, now in Vancouver',
    rating: 5,
  },
  {
    id: 4,
    content: "I came to Canada as an international student and Immigria helped me transition from study permit to PR. Their guidance through PGWP and Express Entry was invaluable.",
    author: 'Ahmed Hassan',
    role: 'Graduate Student',
    location: 'From Egypt, now in Ottawa',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Success Stories from Our Clients
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from the thousands of individuals and families we've helped achieve their immigration dreams.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Quote className="h-6 w-6 text-accent-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-accent text-sm font-medium">
                    {currentTestimonial.location}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-accent w-6' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
