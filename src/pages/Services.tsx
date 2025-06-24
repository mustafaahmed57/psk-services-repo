
import React, { useEffect } from "react";
import { Code, Smartphone, Database, Bot, Globe, GraduationCap, Server, Shield, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "portals",
      icon: <Database size={32} />,
      title: "Business Portals",
      description: "Custom dashboards, CRM, HRM, and automation tools designed to streamline your business operations and improve productivity across all departments.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      features: [
        "Custom CRM systems",
        "HR management portals",
        "Business intelligence dashboards",
        "Workflow automation tools",
        "Real-time analytics",
        "Multi-user access controls"
      ]
    },
    {
      id: "ai",
      icon: <Bot size={32} />,
      title: "AI Tools",
      description: "GPT-powered chatbots, data insights, and ML dashboards that bring intelligence to your workflows and automate complex decision-making processes.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      features: [
        "GPT-powered chatbots",
        "Natural language processing",
        "Predictive analytics",
        "ML model integration",
        "Automated content generation",
        "Data visualization dashboards"
      ]
    },
    {
      id: "erp",
      icon: <Code size={32} />,
      title: "ERP Systems",
      description: "Complete enterprise resource planning solutions with Purchase, Inventory, Sales, and Manufacturing modules designed for scalable business operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      features: [
        "Purchase order management",
        "Inventory tracking system",
        "Sales pipeline automation",
        "Manufacturing workflow",
        "Financial reporting",
        "Multi-location support"
      ]
    },
    {
      id: "mobile",
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      description: "Native Android and iOS applications for business automation, social platforms, or custom solutions tailored to your specific requirements.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      features: [
        "Native Android development",
        "iOS app development",
        "Cross-platform solutions",
        "Business app automation",
        "Social platform integration",
        "Real-time synchronization"
      ]
    },
    {
      id: "web",
      icon: <Globe size={32} />,
      title: "Web Platforms",
      description: "Modern admin panels, LMS systems, and SaaS dashboards built with cutting-edge technologies for optimal performance and user experience.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
      features: [
        "Admin panel development",
        "Learning management systems",
        "SaaS platform creation",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web apps"
      ]
    },
    {
      id: "fyp",
      icon: <GraduationCap size={32} />,
      title: "Final Year Projects",
      description: "Complete final year projects with comprehensive documentation, clean source code, and professional presentations to help students excel.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      features: [
        "Complete project development",
        "Comprehensive documentation",
        "Source code with comments",
        "Professional presentations",
        "Testing and deployment",
        "Academic support"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Server size={24} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services."
    },
    {
      icon: <Shield size={24} />,
      title: "Security Audits",
      description: "Comprehensive security assessments and vulnerability testing."
    },
    {
      icon: <Code size={24} />,
      title: "API Development",
      description: "RESTful APIs and microservices architecture."
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description: "Optimized database architecture and management."
    },
    {
      icon: <Globe size={24} />,
      title: "DevOps Services",
      description: "CI/CD pipelines and automated deployment solutions."
    },
    {
      icon: <Bot size={24} />,
      title: "Consulting",
      description: "Technical consulting and architecture planning."
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Comprehensive software development services designed to transform your ideas into powerful digital solutions. 
              From AI-powered applications to enterprise systems, we deliver results that drive growth.
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

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">What We Build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized software solutions tailored to your industry and business needs
            </p>
          </div>
          
          {mainServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="bg-psyco-black-light rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Additional Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized technical services to support and enhance your software solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Next Software Solution?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Our team of expert developers is ready to turn your vision into a powerful, scalable digital product.
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
                to="/references"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
