import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chain of Density Toolkit",
      description: "A Python-based multilingual summarization pipeline that achieved >70% information retention using GPT-4 and OpenAI API. Features advanced text processing, multi-language support, and efficient summarization algorithms.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["Python", "GPT-4", "OpenAI API", "NLP", "FastAPI"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Interactive data visualization platform built with React and D3.js, processing real-time metrics for 10K+ users. Includes advanced filtering, custom reports, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "AI-Powered Code Assistant",
      description: "VS Code extension that provides intelligent code suggestions and automated refactoring using machine learning. Supports multiple programming languages and integrates with popular frameworks.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["TypeScript", "Machine Learning", "VS Code API", "TensorFlow"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "E-commerce Recommendation Engine",
      description: "Machine learning system that provides personalized product recommendations using collaborative filtering and content-based algorithms.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Python", "Scikit-learn", "MongoDB", "Flask"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging, file sharing, and video calls. Built with modern web technologies and WebSocket integration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Weather Prediction Model",
      description: "Deep learning model for weather forecasting using historical data and satellite imagery. Achieved 85% accuracy in 7-day predictions.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Computer Vision", "API"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI, data analysis, and full-stack development
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="alive" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
