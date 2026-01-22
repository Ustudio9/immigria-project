import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import heroServicesImg from '@/assets/hero-services.jpg';
import serviceExpressEntry from '@/assets/service-express-entry.jpg';
import serviceWorkPermits from '@/assets/service-work-permits.jpg';
import serviceStudyPermits from '@/assets/service-study-permits.jpg';
import servicePnp from '@/assets/service-pnp.jpg';
import serviceFamilySponsorship from '@/assets/service-family-sponsorship.jpg';
import serviceBusiness from '@/assets/service-business.jpg';
import serviceRecruitWorkers from '@/assets/service-recruit-workers.jpg';
import serviceTranslation from '@/assets/service-translation.jpg';

const services = [
  {
    image: serviceExpressEntry,
    title: 'Express Entry',
    description: 'The fastest pathway to Canadian permanent residency for skilled workers. We help you maximize your CRS score and navigate the selection process.',
    features: ['CRS Score Optimization', 'Profile Creation & Management', 'Document Preparation', 'ITA Response'],
    href: '/services/express-entry',
  },
  {
    image: serviceWorkPermits,
    title: 'Work Permits',
    description: 'Comprehensive work permit solutions including LMIA applications, open work permits, and employer compliance guidance.',
    features: ['LMIA Processing', 'Work Permit Applications', 'PGWP Support', 'Employer Compliance'],
    href: '/services/work-permits',
  },
  {
    image: serviceStudyPermits,
    title: 'Study Permits',
    description: 'From study permit applications to post-graduation pathways, we support your educational journey in Canada.',
    features: ['Study Permit Applications', 'DLI Verification', 'SDS Program', 'PGWP Transition'],
    href: '/services/study-permits',
  },
  {
    image: servicePnp,
    title: 'Provincial Nominee Programs',
    description: 'Access 80+ PNP streams across all provinces. We match your profile to the best provincial pathway.',
    features: ['Provincial Nominations', 'Expression of Interest', 'Enhanced CRS Points', 'Provincial Pathways'],
    href: '/services/pnp',
  },
  {
    image: serviceFamilySponsorship,
    title: 'Family Sponsorship',
    description: 'Reunite with your loved ones in Canada. Spouse, parent, child, and other family sponsorship programs.',
    features: ['Spouse Sponsorship', 'Parent & Grandparent', 'Dependent Children', 'Super Visa'],
    href: '/services/family-sponsorship',
  },
  {
    image: serviceBusiness,
    title: 'Business Immigration',
    description: 'Investor visas, start-up programs, and entrepreneur pathways for business-minded individuals.',
    features: ['Start-up Visa', 'Investor Programs', 'Entrepreneur Streams', 'Corporate Relocation'],
    href: '/services/business-immigration',
  },
  {
    image: serviceRecruitWorkers,
    title: 'Recruit Foreign Workers',
    description: 'End-to-end solutions for employers looking to hire international talent and build global teams.',
    features: ['LMIA Applications', 'Global Talent Stream', 'Compliance Support', 'Retention Strategies'],
    href: '/services/recruit-foreign-workers',
  },
  {
    image: serviceTranslation,
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
        <PageHero
          label="Our Services"
          title="Comprehensive Immigration Solutions"
          description="From work permits to citizenship, we provide end-to-end immigration services tailored to your unique situation and goals."
          backgroundImage={heroServicesImg}
        />

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
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
