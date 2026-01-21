import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  GraduationCap, 
  Home, 
  Users, 
  Award, 
  Building2, 
  UserPlus, 
  Languages,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Work Visas & Permits',
    description: 'Secure your work authorization with expert guidance on LMIA, work permits, and employer compliance.',
    href: '/services/work-permits',
  },
  {
    icon: GraduationCap,
    title: 'Study Permits',
    description: 'From study permit applications to post-graduation work permits, we support your educational journey.',
    href: '/services/study-permits',
  },
  {
    icon: Home,
    title: 'Permanent Residency',
    description: 'Navigate Express Entry, Provincial Nominee Programs, and other PR pathways successfully.',
    href: '/services/express-entry',
  },
  {
    icon: Users,
    title: 'Family Sponsorship',
    description: 'Reunite with your loved ones through spouse, parent, and dependent sponsorship programs.',
    href: '/services/family-sponsorship',
  },
  {
    icon: Award,
    title: 'Citizenship Assistance',
    description: 'Complete your journey to becoming a Canadian or US citizen with proper preparation and guidance.',
    href: '/services/citizenship',
  },
  {
    icon: Building2,
    title: 'Business Immigration',
    description: 'Investor visas, entrepreneur programs, and corporate immigration solutions for business growth.',
    href: '/services/business-immigration',
  },
  {
    icon: UserPlus,
    title: 'Recruit Foreign Workers',
    description: 'Streamlined solutions for employers looking to hire international talent and navigate LMIA.',
    href: '/services/recruit-foreign-workers',
  },
  {
    icon: Languages,
    title: 'Translation Services',
    description: 'Certified document translation for all your immigration documents and official papers.',
    href: '/services/translation',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Comprehensive Immigration Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From work permits to citizenship, we provide end-to-end immigration services tailored to your unique situation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group p-6 bg-card rounded-xl border border-border card-hover"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
