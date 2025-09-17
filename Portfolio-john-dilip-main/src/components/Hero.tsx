import { useEffect, useState } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
    }));
    setParticles(particleArray);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 hero-grid opacity-30"></div>
      
      {/* Floating Particles */}
      <div className="floating-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">John Dilip Kumar Vallamreddi</span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl font-light mb-2 text-primary">
            Web Developer<span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Final-year B.Tech CSE graduate passionate about creating impactful, 
            user-centric solutions with cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              Explore My Work
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary group"
            >
              Get In Touch
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;