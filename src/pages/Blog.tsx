import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable AI Applications with React and Python",
      excerpt: "Learn how to create robust AI-powered applications that can handle thousands of users while maintaining performance and reliability.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Development",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
      slug: "building-scalable-ai-applications"
    },
    {
      title: "The Future of Natural Language Processing in 2024",
      excerpt: "Exploring the latest trends and breakthroughs in NLP, from large language models to real-world applications.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop",
      slug: "future-of-nlp-2024"
    },
    {
      title: "Data Visualization Best Practices for Developers",
      excerpt: "A comprehensive guide to creating meaningful and impactful data visualizations that tell compelling stories.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      slug: "data-visualization-best-practices"
    },
    {
      title: "Getting Started with FastAPI for AI Applications",
      excerpt: "A beginner-friendly tutorial on building high-performance APIs for machine learning models using FastAPI.",
      date: "2024-01-01",
      readTime: "15 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop",
      slug: "getting-started-fastapi"
    },
    {
      title: "Optimizing Database Performance for Large Datasets",
      excerpt: "Tips and techniques for improving database performance when working with millions of records and complex queries.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Database",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop",
      slug: "optimizing-database-performance"
    },
    {
      title: "Building Real-time Analytics Dashboards",
      excerpt: "Learn how to create interactive dashboards that process and display real-time data using modern web technologies.",
      date: "2023-12-22",
      readTime: "11 min read",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      slug: "realtime-analytics-dashboards"
    }
  ];

  const categories = ["All", "AI Development", "Machine Learning", "Data Science", "Web Development", "Database", "Analytics"];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about AI, data science, and software development
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "alive" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">Featured Post</Badge>
          </div>
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge variant="outline" className="mb-4">{blogPosts[0].category}</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button variant="alive" className="group">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="alive">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;