import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Building, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Academy Cloud Virtual Internship',
      issuer: 'Amazon Web Services',
      date: 'Jan - Mar 2024',
      credentialId: '2b83c42593baf451b3f14c69a3db5243',
      description:
        'Comprehensive certification covering cloud architecture, security, and best practices for designing scalable systems on AWS.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability'],
      verified: true,
      logo: '🌐',
      verifyLink:
        'https://drive.google.com/file/d/1NPzrSadKnfV4TT8XzK8os8iOeiVoW8lP/view?usp=sharing',
    },
    {
  title: 'GOOGLE AI-ML VIRTUAL INTERNSHIP',
  issuer: 'Google',
  date: 'July - September 2024',
  credentialId: '30066b78f75d1dbb9117e4e70bfb9b20',
  description:
    'Virtual internship focused on core concepts of Artificial Intelligence and Machine Learning including supervised and unsupervised learning, data preprocessing, model building, and real-world applications using Python and TensorFlow.',
  skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Preprocessing', 'Model Evaluation'],
  verified: true,
  logo: '🧠',
  verifyLink: 'https://drive.google.com/file/d/175fMSed7YinP-rgSx-gr8fMmcTF4yXz-/view?usp=sharing'
},

 {
  title: 'ARTIFICIAL INTELLIGENCE & MACHINE LEARNING INTERNSHIP',
  issuer: 'SmartBridge Educational Services Pvt. Ltd.',
  date: 'May - June 2025',
  credentialId: 'EXT-APSCHE_AIML-50245',
  description:
    'Hands-on virtual internship focused on core concepts of Artificial Intelligence and Machine Learning including data preprocessing, supervised and unsupervised algorithms, model building, and deployment using Python and popular AI frameworks.',
  skills: ['Python', 'Machine Learning', 'Data Preprocessing', 'Model Deployment', 'AI Frameworks'],
  verified: true,
  logo: '🧠',
  verifyLink: 'https://drive.google.com/file/d/1v-gpNbXalrZ1JUE9WJqqCoCVhHfho8Sp/view?usp=sharing',
},

  {
  title: 'Full Stack Application Development Project Certification',
  issuer: 'IBM',
  date: 'June 2024',
  credentialId: 'dc7f84a5ea7246309d1b1631eab1408a',
  description:
    'Capstone project focused on designing and developing full-stack web applications using modern technologies including HTML, CSS, JavaScript, React, Node.js, and Express with backend integration and deployment best practices.',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Full-Stack Development'],
  verified: true,
  logo: '🧑‍💻',
  verifyLink: 'https://drive.google.com/file/d/1awXEXt-jYlnIsiyLnEzpsshwHJzfXRse/view?usp=sharing',
},

    
    {
  title: 'Python Basics for Data Science Certification',
  issuer: 'IBM',
  date: 'July 2024',
  credentialId: '066d96bbe02a4e33811c338a358d26f0',
  description:
    'Introductory certification covering fundamental Python programming concepts such as variables, data types, functions, loops, and data handling, with a focus on data science applications.',
  skills: ['Python', 'Data Types', 'Functions', 'Loops', 'Data Science Basics'],
  verified: true,
  logo: '🐍',
  verifyLink: 'https://drive.google.com/file/d/19OdtWA8uRh-EhZuUxD1jxOwbmsK0BVJS/view?usp=sharing',
},

  
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0e0e] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-[#1a1a1a] text-white border border-[#2a2a2a] hover:border-primary transition-all group">
              <div className="space-y-4 p-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{cert.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-bold text-sm leading-tight">{cert.title}</h3>
                        {cert.verified && (
                          <Badge variant="default" className="bg-green-600 text-white text-xs">
                            ✓
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Building className="h-3 w-3 mr-1" />
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date & Credential ID */}
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {cert.date}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground">Skills Covered</div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                {cert.verifyLink ? (
                  <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Verify Credential
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" size="sm" disabled className="w-full opacity-50">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Verification Unavailable
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section (Minimal Style, No Background Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-16">
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">6+</h2>
            <p className="text-sm text-muted-foreground mt-1">Certifications</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple-400">3+</h2>
            <p className="text-sm text-muted-foreground mt-1">Internships</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-400">100+</h2>
            <p className="text-sm text-muted-foreground mt-1">Hours Learning</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-400">2025</h2>
            <p className="text-sm text-muted-foreground mt-1">Active Year</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
