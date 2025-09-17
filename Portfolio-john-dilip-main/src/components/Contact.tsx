import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  MessageSquare,
  Download,
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      toast({
        title: 'All fields are required.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mrblevwg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Message sent successfully!',
          description: "I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: 'Failed to send message',
          description: 'Please try again later.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please check your network and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'johndilipkumar2004@gmail.com',
      href: 'mailto:johndilipkumar2004@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 9666912914',
      href: 'tel:+919666912914',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Kakinada, Andhra Pradesh, India',
      href: 'https://maps.google.com?q=Kakinada',
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: 'HackerRank',
      value: 'View Profile',
      href: 'https://www.hackerrank.com/profile/226K1A0560',
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vallamreddi-john-dilip-kumar-699223286/',
      color: 'hover:text-blue-500'
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: 'GitHub',
      href: 'https://github.com/johndilipkumar2004',
      color: 'hover:text-gray-400'
    },
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'John_Dilip_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities. I'm always open to new challenges!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Info */}
            <Card className="card-cyber">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold gradient-text mb-2">Let's Connect</h3>
                  <p className="text-muted-foreground text-sm">
                    Reach out through any of these channels.
                  </p>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">{info.label}</div>
                        <div className="font-semibold">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Social */}
            <Card className="card-cyber">
              <div className="space-y-4">
                <h4 className="font-bold text-center">Follow Me</h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-primary transition-colors group ${social.color}`}
                      title={social.name}
                    >
                      <div className="text-muted-foreground group-hover:text-primary-foreground transition-colors">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Resume */}
            <Card className="card-cyber">
              <div className="text-center space-y-4">
                <h4 className="font-bold">Download Resume</h4>
                <p className="text-sm text-muted-foreground">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <Button className="btn-primary w-full group" onClick={downloadResume}>
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-cyber">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold gradient-text mb-2">Send Me a Message</h3>
                  <p className="text-muted-foreground">
                    Have a project in mind? Let's discuss how we can work together.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or just say hello!"
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <MessageSquare className="mr-2 h-4 w-4 animate-pulse" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="card-cyber mt-16">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Ready to Start Something Amazing?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities,
              I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary" onClick={() => window.open('tel:+919666912914')}>
                Schedule a Call <Phone className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="btn-secondary"
                onClick={() => window.open('https://github.com/johndilipkumar2004', '_blank')}
              >
                View My Work <Github className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
