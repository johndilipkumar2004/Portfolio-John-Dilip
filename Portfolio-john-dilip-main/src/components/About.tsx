import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Brain, Code, Lightbulb } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
 

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Personal',
      description: 'Final-year B.Tech CSE graduate with a passion for technology',
      metric: '7.21',
      unit: 'CGPA'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI/ML Focus',
      description: 'Strong foundation in artificial intelligence and machine learning',
      metric: '2026',
      unit: 'Graduation'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Full Stack',
      description: 'Proficient in modern web technologies and MERN stack',
      unit: 'Projects'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation',
      description: 'Constantly learning and experimenting with new technologies',
      metric: '24/7',
      unit: 'Learning'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, passion, and the drive that fuels my work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 animate-pulse-glow"></div>
              <img
                src={profileImage}
                alt="John Dilip Kumar Vallamreddi"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Passionate Technology Enthusiast
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a final-year B.Tech graduate in Computer Science and Engineering from
                  <span className="text-primary font-semibold"> Ideal Institute of Technology</span>,
                  deeply passionate about technology and its transformative impact.
                </p>
                <p>
                  With a strong foundation in <span className="text-primary font-semibold">AI/ML</span> and
                  modern web technologies, I strive to blend creativity with logic to develop impactful,
                  user-centric solutions.
                </p>
                <p>
                  I enjoy solving real-world problems, experimenting with new tools, and continuously
                  learning to stay ahead in this dynamic field. My goal is to contribute to innovative
                  projects that make a meaningful difference in people's lives.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 card-cyber">
                <div className="text-3xl font-bold gradient-text mb-2">7.21</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center p-4 card-cyber">
                <div className="text-3xl font-bold gradient-text mb-2">2026</div>
                <div className="text-sm text-muted-foreground">Graduation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-cyber group cursor-pointer">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {highlight.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    {highlight.description}
                  </p>

                  <div className="space-y-1">
                    {highlight.metric && (
                      <div className="text-2xl font-bold gradient-text">
                        {highlight.metric}
                      </div>
                    )}
                    <Badge variant="secondary" className="text-xs">
                      {highlight.unit}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
