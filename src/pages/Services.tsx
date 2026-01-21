import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Home, 
  Users, 
  Award, 
  Building2, 
  UserPlus, 
  Languages,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Express Entry',
    description: 'The fastest pathway to Canadian permanent residency for skilled workers. We help you maximize your CRS score and navigate the selection process.',
    features: ['CRS Score Optimization', 'Profile Creation & Management', 'Document Preparation', 'ITA Response'],
    href: '/services/express-entry',
  },
  {
    icon: Briefcase,
    title: 'Work Permits',
    description: 'Comprehensive work permit solutions including LMIA applications, open work permits, and employer compliance guidance.',
    features: ['LMIA Processing', 'Work Permit Applications', 'PGWP Support', 'Employer Compliance'],
    href: '/services/work-permits',
  },
  {
    icon: GraduationCap,
    title: 'Study Permits',
    description: 'From study permit applications to post-graduation pathways, we support your educational journey in Canada.',
    features: ['Study Permit Applications', 'DLI Verification', 'SDS Program', 'PGWP Transition'],
    href: '/services/study-permits',
  },
  {
    icon: Award,
    title: 'Provincial Nominee Programs',
    description: 'Access 80+ PNP streams across all provinces. We match your profile to the best provincial pathway.',
    features: ['Provincial Nominations', 'Expression of Interest', 'Enhanced CRS Points', 'Provincial Pathways'],
    href: '/services/pnp',
  },
  {
    icon: Users,
    title: 'Family Sponsorship',
    description: 'Reunite with your loved ones in Canada. Spouse, parent, child, and other family sponsorship programs.',
    features: ['Spouse Sponsorship', 'Parent & Grandparent', 'Dependent Children', 'Super Visa'],
    href: '/services/family-sponsorship',
  },
  {
    icon: Building2,
    title: 'Business Immigration',
    description: 'Investor visas, start-up programs, and entrepreneur pathways for business-minded individuals.',
    features: ['Start-up Visa', 'Investor Programs', 'Entrepreneur Streams', 'Corporate Relocation'],
    href: '/services/business-immigration',
  },
  {
    icon: UserPlus,
    title: 'Recruit Foreign Workers',
    description: 'End-to-end solutions for employers looking to hire international talent and build global teams.',
    features: ['LMIA Applications', 'Global Talent Stream', 'Compliance Support', 'Retention Strategies'],
    href: '/services/recruit-foreign-workers',
  },
  {
    icon: Languages,
    title: 'Translation Services',
    description: 'Certified document translation for all your immigration documents and official papers.',
    features: ['Certified Translations', 'ATIO Members', 'Fast Turnaround', 'All Languages'],
    href: '/services/translation',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient hero-pattern py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3 mb-6">
                Comprehensive Immigration Solutions
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                From work permits to citizenship, we provide end-to-end immigration services tailored to your unique situation and goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="gold" asChild>
                      <Link to={service.href}>
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-muted rounded-2xl p-8 md:p-12 aspect-video flex items-center justify-center">
                      <service.icon className="h-24 w-24 text-muted-foreground/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Take our free eligibility assessment to discover the best immigration pathway for your situation, or book a consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/assessment">Free Eligibility Assessment</Link>
                </Button>
                <Button variant="navyOutline" size="lg" asChild>
                  <Link to="/booking">Book a Consultation</Link>
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
