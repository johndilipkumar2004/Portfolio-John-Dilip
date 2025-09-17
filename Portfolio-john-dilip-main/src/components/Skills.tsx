import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Palette, Server, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'React.js', level: 70 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 70 },
        { name: 'Python', level: 70 },
        { name: 'REST APIs', level: 70 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'MySQL', level: 70 },
        { name: 'Git/GitHub', level: 70 },
      ]
    },
    {
      title: 'AI/ML & Data',
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: 'Machine Learning', level: 70 },
        
        { name: 'TensorFlow', level: 70 },
       
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: 'Tailwind CSS', level: 70 },
        { name: 'Responsive Design', level: 70 },
        { name: 'User Experience', level: 70 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: 'JavaScript', level: 70 },
        { name: 'Python', level: 78 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 70 }
      ]
    }
  ];

  const topSkills = [
    { name: 'Java', level: 80, color: 'from-blue-500 to-cyan-500' },
    { name: 'Python', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'HTML/CSS', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'JavaScript', level: 70, color: 'from-green-600 to-green-400' },
    { name: 'C++', level: 70, color: 'from-cyan-500 to-blue-500' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Top Skills Showcase */}
        <Card className="card-cyber mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Top Technical Proficiencies</h3>
            <p className="text-muted-foreground">Core technologies I work with daily</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {topSkills.map((skill, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative w-24 h-24 mx-auto">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-muted"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(190, 95%, 50%)" />
                        <stop offset="100%" stopColor="hsl(260, 95%, 70%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold gradient-text">{skill.level}%</span>
                  </div>
                </div>
                <div className="font-semibold">{skill.name}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-cyber group">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-2 bg-muted" />
                        <div
                          className="skill-bar absolute top-0 left-0 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Learning Path (Only 24/7 Card) */}
        <Card className="card-cyber mt-16">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Continuous Learning Journey</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Always expanding my knowledge base and staying updated with the latest technologies and industry trends.
            </p>

            <div className="grid md:grid-cols-1 gap-6 pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Learning Mindset</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
