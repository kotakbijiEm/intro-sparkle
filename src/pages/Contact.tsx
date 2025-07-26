import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "djoko.waluyo@email.com",
      description: "Best way to reach me"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available during business hours"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      description: "Open to remote work"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      description: "Usually faster on weekdays"
    }
  ];

  const services = [
    "AI System Development",
    "Data Analysis & Visualization", 
    "Machine Learning Consulting",
    "Full-Stack Development",
    "Technical Architecture",
    "Code Review & Optimization"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Work Together</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Send me a message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="Project collaboration opportunity" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  rows={6}
                />
              </div>
              
              <Button variant="alive" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.label}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Services */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Services I Offer</h2>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2 text-xs">
                    {service}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="flex-1">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary depending on scope and complexity. Small projects typically take 2-4 weeks, while larger systems can take 2-3 months. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with startups?",
                answer: "Absolutely! I love working with startups and early-stage companies. I offer flexible engagement models and can adapt to your budget and timeline requirements."
              },
              {
                question: "Can you help with existing projects?",
                answer: "Yes, I can help optimize, debug, or extend existing AI/ML systems. I'm experienced in code reviews, performance optimization, and legacy system modernization."
              },
              {
                question: "What's your preferred way to communicate?",
                answer: "I prefer email for initial contact and detailed discussions. For ongoing projects, I use Slack or similar tools for regular updates and quick questions."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;