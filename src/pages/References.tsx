
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, MoveRight } from "lucide-react";

const References = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      name: "Finlytix",
      type: "Fintech Dashboard",
      description: "Advanced fintech dashboard with real-time analytics, forecasting, and financial insights for investment firms. Built with React, Node.js, and advanced charting libraries.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "WebSocket"],
      features: ["Real-time data", "Advanced analytics", "Custom reports", "Portfolio tracking"]
    },
    {
      name: "Cartify ERP",
      type: "Manufacturing ERP",
      description: "Complete ERP solution for manufacturing industry with inventory management, production planning, quality control, and comprehensive reporting systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Docker"],
      features: ["Inventory management", "Production planning", "Quality control", "Multi-location support"]
    },
    {
      name: "AI Writer Pro",
      type: "SaaS Platform",
      description: "AI-powered content writing tool with GPT integration, helping businesses create compelling copy at scale with advanced editing and collaboration features.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Stripe", "Vercel"],
      features: ["GPT integration", "Multi-user collaboration", "Template library", "Export options"]
    },
    {
      name: "EduHub LMS",
      type: "Learning Management",
      description: "Comprehensive learning management system for educational institutions with course management, student tracking, and interactive learning modules.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      technologies: ["Django", "React", "PostgreSQL", "AWS", "Celery"],
      features: ["Course management", "Student progress tracking", "Interactive quizzes", "Video streaming"]
    },
    {
      name: "SmartRetail POS",
      type: "Retail Management",
      description: "Modern point-of-sale system with inventory management, customer relationship management, and comprehensive sales analytics for retail businesses.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
      technologies: ["Flutter", "Firebase", "Node.js", "Express", "MongoDB"],
      features: ["POS system", "Inventory tracking", "Customer management", "Sales analytics"]
    },
    {
      name: "HealthTrack Pro",
      type: "Healthcare Management",
      description: "Healthcare management platform for clinics and hospitals with patient records, appointment scheduling, and medical inventory management.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80",
      technologies: ["React Native", "Express.js", "PostgreSQL", "AWS", "Socket.io"],
      features: ["Patient records", "Appointment scheduling", "Medical inventory", "Telemedicine"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our Portfolio</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Explore our recent software development projects that have helped businesses transform their operations 
              and achieve their digital goals.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200"
            >
              Start Your Project
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real-world software solutions that have made a significant impact on our clients' businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glassmorphism overflow-hidden group card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-psyco-green-DEFAULT px-3 py-1 text-xs font-medium text-white rounded-full">
                    {project.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-psyco-black-light text-psyco-green-light px-2 py-1 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-psyco-green-DEFAULT/20 text-psyco-green-DEFAULT px-2 py-1 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4 border-t border-green-500/10">
                    <button className="flex items-center text-psyco-green-light hover:text-psyco-green-DEFAULT transition-colors text-sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </button>
                    <button className="flex items-center text-psyco-green-light hover:text-psyco-green-DEFAULT transition-colors text-sm">
                      <Github className="h-4 w-4 mr-1" />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss your project requirements and create a software solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Start Your Project
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default References;
