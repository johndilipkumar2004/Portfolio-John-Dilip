import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Built a modern, responsive personal portfolio using React and Tailwind CSS, featuring project showcases, skill charts, and Formspree-powered contact form, deployed via Vercel.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600',
      technologies: ['React', 'Tailwind CSS', 'Formspree', 'GitHub', 'Vite'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'CleanTech Project',
      description: 'Developed an AI-powered CleanTech solution for automated waste classification using transfer learning in Python, enhancing sustainable waste management through intelligent image recognition.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600',
      technologies: ['Python', 'TensorFlow', 'Transfer Learning', 'NumPy', 'Pandas', 'Matplotlib'],
      category: 'AI/ML',
      liveUrl: 'https://drive.google.com/file/d/1M7k-3WqsvRjP6oXNbY4e3oqjLErgzvPO/view?usp=drive_link',
      githubUrl: 'https://github.com/johndilipkumar2004/cleantech_project.git',
      featured: true
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML', 'Mobile'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my latest work and technical achievements across various domains
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Spotlight Projects</h3>
          <Card className="card-cyber overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="relative">
                <img
                  src={featuredProjects[currentProject]?.image}
                  alt={featuredProjects[currentProject]?.title}
                  className="w-full h-64 lg:h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevProject}
                    className="bg-background/20 backdrop-blur-sm hover:bg-background/40"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextProject}
                    className="bg-background/20 backdrop-blur-sm hover:bg-background/40"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold mb-4">
                    {featuredProjects[currentProject]?.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredProjects[currentProject]?.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {featuredProjects[currentProject]?.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="btn-primary group" onClick={() => window.open(featuredProjects[currentProject].liveUrl, "_blank")}>
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Live Demo
                    </Button>
                    <Button className="btn-secondary group" onClick={() => window.open(featuredProjects[currentProject].githubUrl, "_blank")}>
                      <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentProject ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* All Projects Grid */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4 sm:mb-0">All Projects</h3>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-cyber group overflow-hidden">
                <div className="space-y-4">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="btn-primary flex-1" onClick={() => window.open(project.liveUrl, "_blank")}>
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Live
                      </Button>
                      <Button size="sm" className="btn-secondary flex-1" onClick={() => window.open(project.githubUrl, "_blank")}>
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            className="btn-secondary"
            onClick={() => window.open("https://github.com/johndilipkumar2004", "_blank")}
          >
            View All Projects on GitHub
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
