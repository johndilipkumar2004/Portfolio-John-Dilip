import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech Computer Science and Engineering',
      institution: 'Ideal Institute of Technology, Kakinada',
      period: '2022 - 2026',
      grade: 'CGPA: 7.21',
      status: 'Current',
      description: 'Specializing in AI/ML and modern web technologies with a focus on practical applications and industry-relevant projects.',
      highlights: ['Dean\'s List', 'Technical Club President', 'Best Project Award']
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'SriChaitanya Educational Institutions',
      period: '2020 - 2022',
      grade: '77%',
      status: 'Completed',
      description: 'Mathematics, Physics, and Chemistry stream with focus on analytical thinking and problem-solving skills.',
      highlights: ['Mathematics Excellence', 'Science Project Winner']
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'S.K.V.S.M High School',
      period: '2020',
      grade: '95%',
      status: 'Completed',
      description: 'Outstanding academic performance with distinction in all subjects, showing early promise in technical fields.',
      highlights: ['School Topper', 'Science Fair Winner', 'Perfect Attendance']
    }
  ];

  const achievements = [
    { label: 'Current CGPA', value: '7.21', icon: <TrendingUp className="h-5 w-5" /> },
    { label: 'SSC Percentage', value: '95%', icon: <Award className="h-5 w-5" /> },
    { label: 'Expected Graduation', value: '2026', icon: <Calendar className="h-5 w-5" /> }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Educational Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A consistent track record of academic excellence and continuous learning
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-cyber text-center">
              <div className="flex items-center justify-center mb-4 text-primary">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {achievement.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="card-cyber">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Institution & Degree */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    <Badge 
                      variant={edu.status === 'Current' ? 'default' : 'secondary'}
                      className={edu.status === 'Current' ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {edu.status}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Grade */}
                <div className="text-center lg:text-left">
                  <div className="text-sm text-muted-foreground mb-2">Performance</div>
                  <div className="text-2xl font-bold gradient-text">
                    {edu.grade}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">Key Highlights</div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Academic Progress Visualization */}
        <Card className="card-cyber mt-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Academic Excellence Timeline</h3>
            <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
              <div className="text-center min-w-0 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-sm font-semibold">SSC</div>
                <div className="text-xs text-muted-foreground">97%</div>
              </div>
              <div className="flex-1 h-0.5 bg-primary/30 min-w-8"></div>
              <div className="text-center min-w-0 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-sm font-semibold">Intermediate</div>
                <div className="text-xs text-muted-foreground">74.3%</div>
              </div>
              <div className="flex-1 h-0.5 bg-primary/30 min-w-8"></div>
              <div className="text-center min-w-0 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-2 animate-pulse-glow">
                  <Calendar className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-sm font-semibold">B.Tech</div>
                <div className="text-xs text-muted-foreground">8.16 CGPA</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;