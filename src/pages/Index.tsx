
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { Code, Smartphone, Database, Bot, Globe, GraduationCap, MoveRight, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Business Portals",
      description: "Custom dashboards, CRM, HRM, and automation tools designed to streamline your business operations.",
      icon: <Database size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "/services#portals"
    },
    {
      title: "AI Tools",
      description: "GPT-powered chatbots, data insights, and ML dashboards that bring intelligence to your workflows.",
      icon: <Bot size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      link: "/services#ai"
    },
    {
      title: "ERP Systems",
      description: "Complete Purchase, Inventory, Sales, and Manufacturing modules for enterprise-level operations.",
      icon: <Code size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      link: "/services#erp"
    },
    {
      title: "Mobile Apps",
      description: "Native Android/iOS applications for business automation or social platforms.",
      icon: <Smartphone size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      link: "/services#mobile"
    },
    {
      title: "Web Platforms",
      description: "Admin panels, LMS systems, and SaaS dashboards built with modern technologies.",
      icon: <Globe size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
      link: "/services#web"
    },
    {
      title: "Final Year Projects",
      description: "Complete FYPs with documentation, source code, and professional presentations.",
      icon: <GraduationCap size={24} />,
      imageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      link: "/services#fyp"
    }
  ];

  const projects = [
    {
      name: "Finlytix",
      type: "Fintech Dashboard",
      description: "Advanced fintech dashboard with real-time analytics, forecasting, and financial insights for investment firms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      name: "Cartify ERP",
      type: "Manufacturing ERP",
      description: "Complete ERP solution for manufacturing industry with inventory management, production planning, and quality control.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      name: "AI Writer Pro",
      type: "SaaS Platform",
      description: "AI-powered content writing tool with GPT integration, helping businesses create compelling copy at scale.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechStart Inc",
      testimonial: "Neurovis delivered our fintech platform ahead of schedule. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1494790108755-2616b332c3de?auto=format&fit=crop&q=80"
    },
    {
      name: "Ahmad Khan",
      position: "Final Year Student",
      company: "FAST University",
      testimonial: "They helped me build an amazing AI-powered project for my FYP. The documentation and presentation were top-notch!",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a team of developers, designers, and problem-solvers passionate about building powerful, scalable digital products. 
              From fintech apps and AI tools to ERP systems and final year projects — we handle it all. Our mission is simple: 
              <span className="text-psyco-green-DEFAULT font-semibold"> Deliver results, not excuses.</span>
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">What We Build</h2>
              <p className="text-gray-400 max-w-2xl">
                Comprehensive software solutions tailored to your specific needs and industry requirements
              </p>
            </div>
            <Link 
              to="/services"
              className="mt-4 sm:mt-0 flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors"
            >
              View all services
              <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Recent Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Some of our latest software solutions that have helped businesses transform and grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glassmorphism overflow-hidden group card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-psyco-green-DEFAULT px-3 py-1 text-xs font-medium text-white rounded-full">
                    {project.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/references"
              className="inline-flex items-center bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              View All Projects
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real feedback from businesses and students who trusted us with their projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something Awesome Together</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to transform your idea into a powerful digital solution? Get in touch and let's discuss your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-psyco-green-DEFAULT/20 rounded-full mb-4">
                <Mail className="h-6 w-6 text-psyco-green-DEFAULT" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Email</h3>
              <p className="text-gray-300">hello@neurovis.com</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-psyco-green-DEFAULT/20 rounded-full mb-4">
                <Phone className="h-6 w-6 text-psyco-green-DEFAULT" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
              <p className="text-gray-300">+923478385839</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-psyco-green-DEFAULT/20 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-psyco-green-DEFAULT" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Location</h3>
              <p className="text-gray-300">Islambad, Pakistan</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Start a Project
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
