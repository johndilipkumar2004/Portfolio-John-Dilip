import { Button } from '@/components/ui/button';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, href: 'https://github.com/johndilipkumar2004', name: 'GitHub' },
    { icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/in/vallamreddi-john-dilip-kumar-699223286/', name: 'LinkedIn' },
    { icon: <Mail className="h-4 w-4" />, href: 'mailto:johndilipkumar2004@gmail.com', name: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 py-12">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold gradient-text">John Dilip</h3>
            <p className="text-muted-foreground max-w-md">
              Passionate web developer crafting digital experiences with modern technologies. 
              Always eager to learn, build, and contribute to meaningful projects.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using</span>
              <Code className="h-4 w-4 text-primary" />
              <span>&</span>
              <Coffee className="h-4 w-4 text-amber-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted hover:bg-primary transition-colors group"
                    title={social.name}
                  >
                    <div className="text-muted-foreground group-hover:text-primary-foreground transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Open to opportunities</p>
                <p className="text-primary">johndilipkumar2004@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} John Dilip. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Built with React & TypeScript</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="btn-primary rounded-full shadow-lg animate-pulse-glow"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;