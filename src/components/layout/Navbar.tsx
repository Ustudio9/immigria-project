import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const services = [
  { name: 'Express Entry', href: '/services/express-entry' },
  { name: 'Work Permits', href: '/services/work-permits' },
  { name: 'Study Permits', href: '/services/study-permits' },
  { name: 'Provincial Nominee Programs', href: '/services/pnp' },
  { name: 'Family Sponsorship', href: '/services/family-sponsorship' },
  { name: 'Business Immigration', href: '/services/business-immigration' },
  { name: 'Recruit Foreign Workers', href: '/services/recruit-foreign-workers' },
  { name: 'Translation Services', href: '/services/translation' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+15145551234" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>+1 (514) 555-1234</span>
            </a>
            <a href="mailto:info@immigria.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@immigria.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">I</span>
              </div>
              <span className="font-serif font-bold text-xl md:text-2xl text-primary">Immigria</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors animated-underline ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-56">
                      <DropdownMenuItem asChild>
                        <Link to="/services" className="w-full font-medium">
                          All Services
                        </Link>
                      </DropdownMenuItem>
                      {services.map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link to={service.href} className="w-full">
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-medium transition-colors animated-underline ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="navyOutline" size="sm" asChild>
                <Link to="/assessment">Free Assessment</Link>
              </Button>
              <Button variant="gold" size="sm" asChild>
                <Link to="/booking">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-slide-in-right">
            <div className="container py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={`block py-2 text-base font-medium ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 space-y-2 mt-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3 border-t border-border">
                <Button variant="navyOutline" className="w-full" asChild>
                  <Link to="/assessment" onClick={() => setIsOpen(false)}>Free Assessment</Link>
                </Button>
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/booking" onClick={() => setIsOpen(false)}>Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
