
import React, { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: "ai-tools-business",
      title: "How AI Tools Are Transforming Modern Business Operations",
      excerpt: "Explore how artificial intelligence and machine learning are revolutionizing business processes, from automated customer service to predictive analytics.",
      date: "January 15, 2025",
      readTime: "8 min read",
      author: "Sarah Ahmed",
      category: "AI & ML",
      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      id: "modern-web-development",
      title: "The State of Modern Web Development in 2025",
      excerpt: "From React to Next.js, explore the latest trends and technologies shaping web development today and how they impact business applications.",
      date: "January 10, 2025",
      readTime: "6 min read",
      author: "Muhammad Hassan",
      category: "Web Development",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
    },
    {
      id: "erp-implementation-guide",
      title: "ERP Implementation: A Complete Guide for Growing Businesses",
      excerpt: "Learn how to successfully implement an ERP system in your organization, from planning and selection to deployment and training.",
      date: "January 5, 2025",
      readTime: "10 min read",
      author: "Fatima Khan",
      category: "ERP Systems",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      id: "mobile-app-trends",
      title: "Mobile App Development Trends That Will Shape 2025",
      excerpt: "Discover the latest mobile development trends including cross-platform frameworks, AI integration, and emerging user experience patterns.",
      date: "December 28, 2024",
      readTime: "7 min read",
      author: "Ahmed Ali",
      category: "Mobile Development",
      imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
    },
    {
      id: "saas-scaling-strategies",
      title: "Scaling SaaS Applications: Architecture and Performance Tips",
      excerpt: "Best practices for building scalable SaaS platforms that can handle growth, including database optimization and microservices architecture.",
      date: "December 20, 2024",
      readTime: "9 min read",
      author: "Zara Malik",
      category: "SaaS Development",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      id: "fyp-success-guide",
      title: "Final Year Project Success: From Idea to Implementation",
      excerpt: "A comprehensive guide for computer science students on how to choose, plan, and execute a successful final year project that stands out.",
      date: "December 15, 2024",
      readTime: "12 min read",
      author: "Dr. Imran Sheikh",
      category: "Academic Projects",
      imageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
    }
  ];
  
  const categories = [
    "All",
    "AI & ML",
    "Web Development",
    "Mobile Development",
    "ERP Systems",
    "SaaS Development",
    "Academic Projects"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Tech Insights & Tutorials</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Stay updated with the latest in software development, AI, and digital transformation from our expert team
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center animate-fade-in animation-delay-200">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-psyco-black-DEFAULT border-psyco-green-muted/50 w-full"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex gap-2 overflow-x-auto pb-2 no-scrollbar flex-nowrap md:justify-end">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-psyco-green-DEFAULT text-white"
                      : "bg-psyco-black-DEFAULT text-gray-300 hover:bg-psyco-black-card"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPost
                  key={post.id}
                  {...post}
                  className={`animate-fade-in ${post.featured ? "md:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">No posts found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Tech Insights</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest articles, development tips, and industry trends directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-psyco-black-DEFAULT border-psyco-green-muted/50 flex-grow"
              />
              <button className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
