import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, Mail, MapPin, Calendar } from "lucide-react";

const About = () => {
  const experience = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading AI research and development initiatives, building scalable machine learning systems that serve millions of users.",
      achievements: ["Improved model accuracy by 25%", "Led team of 8 engineers", "Deployed 15+ AI models to production"]
    },
    {
      title: "Data Scientist",
      company: "DataVision Analytics",
      period: "2020 - 2022",
      description: "Developed predictive models and analytics solutions for enterprise clients across various industries.",
      achievements: ["Built recommendation engine", "Reduced processing time by 40%", "Generated $2M in cost savings"]
    },
    {
      title: "Software Developer",
      company: "StartupXYZ",
      period: "2018 - 2020",
      description: "Full-stack development of web applications using modern technologies and agile methodologies.",
      achievements: ["Launched 3 major features", "Improved app performance by 60%", "Mentored junior developers"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2016 - 2018",
      focus: "Specialization in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "UC Berkeley",
      period: "2012 - 2016",
      focus: "Magna Cum Laude, Dean's List"
    }
  ];

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Professional Data Engineer",
    "Microsoft Azure AI Engineer Associate",
    "TensorFlow Developer Certificate"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate AI engineer with over 6 years of experience building intelligent systems 
                that solve real-world problems. I specialize in machine learning, natural language processing, 
                and full-stack development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="alive" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </div>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Available for new projects
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Avatar className="w-80 h-80 border-8 border-primary/20">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                    alt="Djoko Waluyo"
                  />
                  <AvatarFallback className="text-6xl">DW</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-semibold">6+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-primary font-medium mb-2">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.period}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Badge variant="secondary" className="mb-4 text-xs px-3 py-1">
                    Certified
                  </Badge>
                  <p className="font-medium text-sm leading-relaxed">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Beyond Work</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              When I'm not building AI systems, I'm passionate about contributing to open-source projects 
              and mentoring the next generation of developers. I believe in the power of community and 
              knowledge sharing to drive innovation forward.
            </p>
            <p>
              I enjoy hiking in the Bay Area mountains, experimenting with new cooking recipes, and 
              reading about the latest breakthroughs in quantum computing. I'm also an amateur photographer 
              who loves capturing the intersection of technology and nature.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;