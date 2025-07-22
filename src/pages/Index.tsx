import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Chain of Density Toolkit",
      description: "A Python-based multilingual summarization pipeline that achieved >70% information retention using GPT-4 and OpenAI API.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      technologies: ["Python", "GPT-4", "OpenAI API", "NLP"]
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Interactive data visualization platform built with React and D3.js, processing real-time metrics for 10K+ users.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"]
    },
    {
      title: "AI-Powered Code Assistant",
      description: "VS Code extension that provides intelligent code suggestions and automated refactoring using machine learning.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      technologies: ["TypeScript", "Machine Learning", "VS Code API", "TensorFlow"]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
    "AI & ML": ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face"],
    "Web Development": ["React", "Node.js", "Express", "FastAPI", "Tailwind CSS"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Vector DBs"],
    "Tools & Platforms": ["Docker", "AWS", "Git", "Jupyter", "VS Code"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face" alt="Profile" />
            <AvatarFallback className="text-2xl">DW</AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Djoko Waluyo
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI Engineer & Data Analyst
            </p>
            <p className="text-lg md:text-xl text-primary font-semibold max-w-2xl mx-auto">
              Building Intelligent Systems for Smarter Decisions
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm an AI engineer passionate about developing innovative solutions that leverage natural language processing and data-driven insights to solve complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Explore My Projects
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Get in Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my best work in AI, data analysis, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              With over 5 years of experience in AI and data analysis, I specialize in transforming complex data into actionable insights. My journey began in computer science, where I discovered my passion for machine learning and natural language processing.
            </p>
            <p>
              I believe in the power of technology to solve real-world problems and am constantly exploring new ways to leverage AI for social good. When I'm not coding, you'll find me contributing to open-source projects or mentoring aspiring developers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new opportunities and exciting projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center gap-8">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t bg-muted/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Djoko Waluyo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
