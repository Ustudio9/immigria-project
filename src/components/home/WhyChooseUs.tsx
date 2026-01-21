import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Target, Eye, Clock, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Licensed Expertise',
    description: 'Our team includes ICCRC-licensed consultants and immigration lawyers with years of hands-on experience.',
  },
  {
    icon: Target,
    title: 'Personalized Strategy',
    description: 'Every case is unique. We develop customized immigration strategies tailored to your specific goals and circumstances.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'No hidden fees or surprises. We provide clear timelines, honest assessments, and regular updates throughout your journey.',
  },
  {
    icon: Clock,
    title: 'Timely Processing',
    description: 'We understand the importance of deadlines. Our efficient processes ensure your applications are submitted on time.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'From your first consultation to your final approval, our team is with you every step of the way.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'With a 95%+ success rate, we have helped thousands of clients achieve their immigration goals.',
  },
];

const stats = [
  { number: '5,000+', label: 'Clients Served' },
  { number: '95%', label: 'Success Rate' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Countries Served' },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Your Trusted Immigration Partner
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine expertise, transparency, and personalized attention to make your immigration journey smooth and successful.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                <value.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg" asChild>
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
