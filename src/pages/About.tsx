import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, BookOpen } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & Principal Consultant',
    bio: 'ICCRC-licensed consultant with 20+ years of experience in Canadian immigration law.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Immigration Lawyer',
    bio: 'Bar-certified attorney specializing in complex immigration cases and appeals.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'Priya Sharma',
    role: 'Business Immigration Specialist',
    bio: 'Expert in corporate immigration, LMIA processing, and international talent acquisition.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
  {
    name: 'David Okonkwo',
    role: 'Family Sponsorship Expert',
    bio: 'Dedicated to reuniting families with a 98% success rate in sponsorship applications.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest standards in every case we handle.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear communication and honest assessments at every step.',
  },
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We understand the emotional weight of immigration decisions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together with our clients towards shared goals.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient hero-pattern py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Immigria</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3 mb-6">
                Your Trusted Partner in Immigration Excellence
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                Since 2008, Immigria has been guiding individuals, families, and businesses through the complex landscape of Canadian and US immigration with expertise, integrity, and personalized care.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  Empowering Dreams Through Expert Immigration Guidance
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We believe that everyone deserves a fair chance at achieving their immigration goals. Our mission is to provide accessible, professional, and compassionate immigration services that turn dreams into reality.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you're a skilled professional seeking new opportunities, a family hoping to reunite, or a business looking to expand your global talent pool, we're here to navigate the journey with you.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value.title} className="bg-card p-6 rounded-xl border border-border">
                    <value.icon className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                Meet the Experts Behind Your Success
              </h2>
              <p className="text-muted-foreground text-lg">
                Our diverse team of licensed consultants, lawyers, and specialists brings decades of combined experience to your immigration case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-card rounded-xl overflow-hidden border border-border card-hover">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-lg text-foreground">{member.name}</h3>
                    <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="bg-primary rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                    Licensed, Certified, and Trusted
                  </h2>
                  <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                    All our consultants are members of the College of Immigration and Citizenship Consultants (CICC) and adhere to the highest ethical standards in the industry.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                      <Award className="h-5 w-5 text-accent" />
                      <span className="text-primary-foreground text-sm font-medium">ICCRC Licensed</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                      <BookOpen className="h-5 w-5 text-accent" />
                      <span className="text-primary-foreground text-sm font-medium">CICC Members</span>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/booking">Book a Consultation</Link>
                  </Button>
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
