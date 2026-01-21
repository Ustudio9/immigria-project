import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  ArrowRight,
  Briefcase,
  GraduationCap,
  Home,
  Users,
  Award,
  Building2,
  UserPlus,
  Languages
} from 'lucide-react';

const serviceData: Record<string, {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  overview: string[];
  eligibility: string[];
  process: { step: string; description: string }[];
  included: string[];
  timeline: string;
}> = {
  'express-entry': {
    icon: Home,
    title: 'Express Entry',
    subtitle: 'Your Fastest Path to Canadian Permanent Residency',
    description: 'Express Entry is Canada\'s flagship immigration system for skilled workers. We help you navigate this points-based system to maximize your chances of receiving an Invitation to Apply (ITA).',
    overview: [
      'Federal Skilled Worker Program (FSWP)',
      'Federal Skilled Trades Program (FSTP)',
      'Canadian Experience Class (CEC)',
      'Provincial Nominee Program (PNP) alignment',
    ],
    eligibility: [
      'Skilled work experience (NOC TEER 0, 1, 2, or 3)',
      'Language proficiency (CLB 7 or higher recommended)',
      'Educational credentials (with ECA)',
      'Proof of funds (if applicable)',
      'Admissibility to Canada',
    ],
    process: [
      { step: 'Profile Assessment', description: 'We evaluate your eligibility and estimate your CRS score.' },
      { step: 'Document Preparation', description: 'Gather and verify all required documents including ECA and language tests.' },
      { step: 'Profile Creation', description: 'Create and submit your Express Entry profile to the pool.' },
      { step: 'CRS Optimization', description: 'Identify opportunities to improve your score (PNP, job offer, etc.).' },
      { step: 'ITA Response', description: 'Once invited, we prepare and submit your complete PR application.' },
      { step: 'Landing', description: 'Guidance on your landing process and PR card reception.' },
    ],
    included: [
      'Complete eligibility assessment',
      'CRS score calculation and optimization strategy',
      'Express Entry profile creation and management',
      'Document review and preparation guidance',
      'ITA response and PR application submission',
      'Ongoing case updates and communication',
    ],
    timeline: '6-12 months (from profile creation to PR)',
  },
  'work-permits': {
    icon: Briefcase,
    title: 'Work Permits',
    subtitle: 'Work Legally in Canada with Expert Guidance',
    description: 'Whether you need an employer-specific or open work permit, we guide you through LMIA applications, work permit processing, and employer compliance requirements.',
    overview: [
      'LMIA-based work permits',
      'LMIA-exempt work permits',
      'Open work permits',
      'Post-graduation work permits (PGWP)',
    ],
    eligibility: [
      'Valid job offer from Canadian employer (for LMIA-based)',
      'Proof of qualifications for the position',
      'Clean criminal record',
      'Medical examination (if required)',
      'Proof of intent to leave Canada (if applicable)',
    ],
    process: [
      { step: 'Initial Consultation', description: 'Assess your situation and determine the best work permit category.' },
      { step: 'LMIA Application', description: 'Prepare and submit LMIA application (if required) with your employer.' },
      { step: 'Work Permit Application', description: 'Compile documents and submit your work permit application.' },
      { step: 'Biometrics & Interview', description: 'Attend biometrics appointment and interview if requested.' },
      { step: 'Approval & Entry', description: 'Receive your work permit and guidance on Canadian entry procedures.' },
    ],
    included: [
      'Work permit category assessment',
      'LMIA application support (employer side)',
      'Complete work permit application preparation',
      'Document checklist and review',
      'Application submission and tracking',
      'Post-approval landing guidance',
    ],
    timeline: '2-6 months (depending on LMIA requirement)',
  },
  'study-permits': {
    icon: GraduationCap,
    title: 'Study Permits',
    subtitle: 'Start Your Canadian Education Journey',
    description: 'From university to college programs, we help international students navigate study permit applications, DLI requirements, and post-graduation pathways.',
    overview: [
      'Study permit applications',
      'Student Direct Stream (SDS)',
      'Study permit extensions',
      'Post-graduation work permit (PGWP)',
    ],
    eligibility: [
      'Acceptance letter from a DLI',
      'Proof of financial support',
      'Clean criminal record',
      'Medical examination',
      'Intent to leave Canada after studies',
    ],
    process: [
      { step: 'School Selection', description: 'Guidance on choosing the right DLI and program for your goals.' },
      { step: 'Admission Support', description: 'Assistance with school applications and acceptance letters.' },
      { step: 'Study Permit Application', description: 'Prepare and submit your study permit application.' },
      { step: 'Biometrics', description: 'Schedule and complete biometrics appointment.' },
      { step: 'Approval & Arrival', description: 'Receive permit and guidance on arriving in Canada as a student.' },
    ],
    included: [
      'DLI and program selection guidance',
      'Study permit application preparation',
      'Financial documentation guidance',
      'SDS eligibility assessment',
      'PGWP pathway planning',
      'Study permit extension support',
    ],
    timeline: '4-12 weeks (SDS) / 8-16 weeks (regular stream)',
  },
  'pnp': {
    icon: Award,
    title: 'Provincial Nominee Programs',
    subtitle: 'Provincial Pathways to Permanent Residency',
    description: 'With 80+ PNP streams across all provinces, we match your profile to the best provincial pathway and guide you through the nomination process.',
    overview: [
      'Express Entry-linked PNP streams',
      'Base PNP (paper-based) streams',
      'Entrepreneur and business streams',
      'International graduate streams',
    ],
    eligibility: [
      'Skills, education, or work experience matching provincial needs',
      'Intent to live in the nominating province',
      'Sufficient settlement funds',
      'Language proficiency (varies by stream)',
      'Job offer (for some streams)',
    ],
    process: [
      { step: 'Stream Matching', description: 'Analyze your profile against all available PNP streams.' },
      { step: 'Expression of Interest', description: 'Submit EOI to relevant provincial systems.' },
      { step: 'Provincial Application', description: 'Prepare and submit your nomination application.' },
      { step: 'Nomination Certificate', description: 'Receive your provincial nomination.' },
      { step: 'Federal PR Application', description: 'Submit your PR application with 600 bonus CRS points.' },
    ],
    included: [
      'Comprehensive PNP stream analysis',
      'Expression of Interest preparation',
      'Provincial application preparation',
      'Document collection and review',
      'Federal PR application support',
      'Provincial landing requirements guidance',
    ],
    timeline: '12-18 months (varies by province and stream)',
  },
  'family-sponsorship': {
    icon: Users,
    title: 'Family Sponsorship',
    subtitle: 'Reunite with Your Loved Ones in Canada',
    description: 'Bring your spouse, parents, children, and other eligible family members to Canada through our comprehensive family sponsorship services.',
    overview: [
      'Spouse and common-law partner sponsorship',
      'Parent and grandparent sponsorship',
      'Dependent child sponsorship',
      'Super Visa applications',
    ],
    eligibility: [
      'Canadian citizen or permanent resident sponsor',
      'Meet income requirements (for parents/grandparents)',
      'Genuine relationship proof',
      'No criminal inadmissibility',
      'Sign undertaking agreement',
    ],
    process: [
      { step: 'Eligibility Assessment', description: 'Verify sponsor and applicant eligibility.' },
      { step: 'Relationship Documentation', description: 'Compile evidence of genuine relationship.' },
      { step: 'Application Submission', description: 'Submit sponsorship and PR applications together.' },
      { step: 'Processing & Interview', description: 'Respond to any requests and prepare for potential interview.' },
      { step: 'Approval & Landing', description: 'Receive approval and guide family member to Canada.' },
    ],
    included: [
      'Sponsor and applicant eligibility assessment',
      'Relationship documentation guidance',
      'Complete application preparation',
      'Interview preparation (if required)',
      'Ongoing case management',
      'Landing guidance and PR card support',
    ],
    timeline: '12-24 months (spouse) / 24-36 months (parents)',
  },
  'business-immigration': {
    icon: Building2,
    title: 'Business Immigration',
    subtitle: 'Invest and Grow Your Business in Canada',
    description: 'For entrepreneurs and investors looking to establish or expand business operations in Canada through various business immigration programs.',
    overview: [
      'Start-up Visa Program',
      'Provincial entrepreneur programs',
      'Intra-company transfers',
      'Self-employed program',
    ],
    eligibility: [
      'Qualifying business idea or established business',
      'Designated organization support (for Start-up Visa)',
      'Minimum net worth (for investor programs)',
      'Business management experience',
      'Language proficiency',
    ],
    process: [
      { step: 'Program Selection', description: 'Identify the best business immigration pathway for your situation.' },
      { step: 'Business Plan Development', description: 'Create a comprehensive business plan meeting program requirements.' },
      { step: 'Designated Organization', description: 'Secure support from a designated organization (Start-up Visa).' },
      { step: 'Application Submission', description: 'Submit your business immigration application.' },
      { step: 'Approval & Business Launch', description: 'Receive PR and launch your Canadian business.' },
    ],
    included: [
      'Business immigration pathway assessment',
      'Business plan development support',
      'Designated organization introductions',
      'Complete application preparation',
      'Business establishment guidance',
      'Provincial compliance support',
    ],
    timeline: '12-36 months (varies by program)',
  },
  'recruit-foreign-workers': {
    icon: UserPlus,
    title: 'Recruit Foreign Workers',
    subtitle: 'Build Your Global Team with Confidence',
    description: 'Comprehensive solutions for Canadian employers looking to hire international talent, from LMIA applications to onboarding support.',
    overview: [
      'LMIA applications',
      'Global Talent Stream',
      'Intra-company transfers',
      'Compliance and retention',
    ],
    eligibility: [
      'Legitimate business operation in Canada',
      'Demonstrated recruitment efforts for Canadians',
      'Ability to pay prevailing wage',
      'Compliant workplace',
      'Clean LMIA history',
    ],
    process: [
      { step: 'Recruitment Strategy', description: 'Assess hiring needs and LMIA requirements.' },
      { step: 'LMIA Application', description: 'Prepare and submit LMIA application to ESDC.' },
      { step: 'Worker Support', description: 'Assist selected worker with work permit application.' },
      { step: 'Onboarding', description: 'Support worker arrival and workplace integration.' },
      { step: 'Compliance', description: 'Ensure ongoing LMIA compliance and reporting.' },
    ],
    included: [
      'LMIA strategy and preparation',
      'Job advertisement and recruitment documentation',
      'LMIA application submission',
      'Worker work permit support',
      'Compliance monitoring and reporting',
      'Retention and PR pathway planning',
    ],
    timeline: '3-6 months (LMIA + work permit)',
  },
  'translation': {
    icon: Languages,
    title: 'Translation Services',
    subtitle: 'Certified Document Translation for Immigration',
    description: 'Professional, certified translation services for all your immigration documents, accepted by IRCC and all Canadian immigration authorities.',
    overview: [
      'ATIO-certified translations',
      'Immigration document translation',
      'Legal document translation',
      'Rush services available',
    ],
    eligibility: [
      'Documents in any source language',
      'Clear, legible copies of documents',
      'Complete pages (no partial documents)',
    ],
    process: [
      { step: 'Document Submission', description: 'Send us clear copies of documents requiring translation.' },
      { step: 'Quote & Timeline', description: 'Receive a detailed quote and estimated completion time.' },
      { step: 'Translation', description: 'Our certified translators complete your documents.' },
      { step: 'Quality Review', description: 'All translations undergo quality assurance review.' },
      { step: 'Delivery', description: 'Receive certified translations ready for submission.' },
    ],
    included: [
      'ATIO-certified translations',
      'Certification stamp and declaration',
      'Hard copy and digital delivery',
      'Notarization (if required)',
      'Rush service availability',
      'Quality guarantee',
    ],
    timeline: '3-5 business days (standard) / 24-48 hours (rush)',
  },
  'citizenship': {
    icon: Award,
    title: 'Citizenship Assistance',
    subtitle: 'Complete Your Journey to Canadian Citizenship',
    description: 'From citizenship test preparation to application submission, we help permanent residents become proud Canadian citizens.',
    overview: [
      'Citizenship applications',
      'Test preparation',
      'Grant of citizenship',
      'Citizenship certificate replacement',
    ],
    eligibility: [
      'Permanent resident status',
      'Physical presence (1,095 days in 5 years)',
      'Tax filing compliance',
      'Language proficiency',
      'Pass citizenship test (18-54)',
    ],
    process: [
      { step: 'Eligibility Check', description: 'Calculate your physical presence and verify requirements.' },
      { step: 'Application Preparation', description: 'Compile documents and prepare citizenship application.' },
      { step: 'Test Preparation', description: 'Study guide and practice tests for citizenship exam.' },
      { step: 'Application Submission', description: 'Submit your completed citizenship application.' },
      { step: 'Ceremony', description: 'Attend citizenship ceremony and receive your certificate.' },
    ],
    included: [
      'Physical presence calculation',
      'Complete application preparation',
      'Document compilation and review',
      'Citizenship test study materials',
      'Ceremony preparation',
      'Certificate troubleshooting',
    ],
    timeline: '12-18 months (application to ceremony)',
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
            <Button variant="gold" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
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
        <section className="hero-gradient hero-pattern py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-accent" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-accent text-xl font-medium mb-4">{service.subtitle}</p>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  What's Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {service.included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Eligibility Requirements
                </h2>
                <ul className="space-y-3 mb-12">
                  {service.eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our Process
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{step.step}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Timeline</p>
                      <p className="font-semibold text-foreground">{service.timeline}</p>
                    </div>
                  </div>

                  <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Book a consultation to discuss your specific situation and create a personalized plan.
                  </p>
                  
                  <div className="space-y-3">
                    <Button variant="gold" className="w-full" asChild>
                      <Link to="/booking">
                        Book Consultation
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/assessment">Free Assessment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
