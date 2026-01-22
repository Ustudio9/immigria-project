import { cn } from '@/lib/utils';

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({ 
  label, 
  title, 
  description, 
  backgroundImage, 
  className,
  children 
}: PageHeroProps) {
  return (
    <section 
      className={cn(
        "relative py-20 md:py-28 overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-primary/85" />
        </div>
      )}
      
      {/* Fallback gradient if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 hero-gradient hero-pattern" />
      )}
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {label}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            {title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
