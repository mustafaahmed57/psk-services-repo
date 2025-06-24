
import React, { useEffect } from "react";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingPlans = [
    {
      name: "Starter",
      price: "999",
      period: "starting from",
      description: "Perfect for small businesses and startups",
      icon: <Star className="h-6 w-6" />,
      features: [
        "Basic web application development",
        "Responsive design",
        "Database integration",
        "Admin panel included",
        "Basic API development",
        "3 months support",
        "Source code included",
        "Technical documentation"
      ],
      popular: false,
      buttonText: "Get Started",
      color: "border-gray-600"
    },
    {
      name: "Professional",
      price: "2999",
      period: "starting from", 
      description: "Ideal for growing businesses and comprehensive solutions",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Full-stack web development",
        "Mobile app development",
        "AI/ML integration",
        "Advanced dashboard & analytics",
        "Third-party API integrations",
        "Payment gateway integration",
        "6 months support & maintenance",
        "Custom features & modules",
        "Performance optimization"
      ],
      popular: true,
      buttonText: "Most Popular",
      color: "border-psyco-green-DEFAULT"
    },
    {
      name: "Enterprise",
      price: "5999",
      period: "starting from",
      description: "Complete solution for large-scale applications",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "Full ERP system development",
        "Multi-platform applications",
        "Advanced AI/ML solutions",
        "Microservices architecture",
        "Cloud deployment & scaling",
        "Advanced security features",
        "12+ months support",
        "Dedicated development team",
        "Custom integrations & modules",
        "Performance monitoring & analytics"
      ],
      popular: false,
      buttonText: "Contact Us",
      color: "border-yellow-500"
    }
  ];

  const addOns = [
    { name: "Mobile App", price: "1500", description: "iOS/Android native application" },
    { name: "AI Integration", price: "800", description: "GPT/ML features integration" },
    { name: "Advanced Analytics", price: "600", description: "Custom reporting dashboard" },
    { name: "Payment Gateway", price: "300", description: "Secure payment processing" },
    { name: "Cloud Deployment", price: "400", description: "AWS/Azure hosting setup" },
    { name: "Extra Support", price: "200", description: "Additional month of support" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Transparent Software Development Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Professional software solutions for businesses of all sizes. From web apps to enterprise systems, we deliver quality code at fair prices.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`glassmorphism p-8 rounded-2xl relative ${
                  plan.popular ? 'ring-2 ring-psyco-green-DEFAULT' : ''
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-psyco-green-DEFAULT text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    plan.popular ? 'bg-psyco-green-DEFAULT text-white' : 'bg-psyco-black-light text-psyco-green-DEFAULT'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-psyco-green-DEFAULT mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white btn-glow'
                      : 'bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Add-ons & Extensions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enhance your software with additional features and integrations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-medium text-white">{addon.name}</h3>
                  <span className="text-2xl font-bold text-psyco-green-DEFAULT">${addon.price}</span>
                </div>
                <p className="text-gray-300">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Development FAQ</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our software development services and pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's included in the base price?",
                answer: "All packages include full source code, technical documentation, basic deployment setup, and the specified support period. No hidden costs or licensing fees."
              },
              {
                question: "How long does development take?",
                answer: "Timeline varies by complexity: Starter projects (4-8 weeks), Professional projects (8-16 weeks), Enterprise projects (16+ weeks). We provide detailed timelines after requirements analysis."
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Yes! All packages include initial support period. We also offer extended maintenance contracts for bug fixes, updates, and feature additions."
              },
              {
                question: "What technologies do you use?",
                answer: "We work with modern tech stacks: React, Node.js, Python, Laravel, Flutter, React Native, AI/ML frameworks, and cloud platforms like AWS and Azure."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely! We specialize in integrating with existing systems, APIs, and databases. We can also help modernize legacy applications."
              },
              {
                question: "What's your payment structure?",
                answer: "We typically work with 50% upfront and 50% on delivery for smaller projects. Larger projects can be broken into milestones with payments tied to deliverables."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="glassmorphism p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss your requirements and create a software solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Request Quote
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
