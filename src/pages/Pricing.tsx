
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
      name: "Basic",
      price: "299",
      period: "per event",
      description: "Perfect for small gatherings and intimate events",
      icon: <Star className="h-6 w-6" />,
      features: [
        "Basic sound system setup",
        "Up to 50 guests",
        "4 hours of service",
        "Professional DJ included",
        "Basic lighting package",
        "Setup and breakdown included"
      ],
      popular: false,
      buttonText: "Get Started",
      color: "border-gray-600"
    },
    {
      name: "Premium",
      price: "599",
      period: "per event", 
      description: "Ideal for medium-sized events and corporate functions",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Professional sound system",
        "Up to 150 guests",
        "6 hours of service",
        "Expert DJ with MC services",
        "Dynamic lighting package",
        "Wireless microphones (2x)",
        "Setup and breakdown included",
        "Technical support on-site"
      ],
      popular: true,
      buttonText: "Most Popular",
      color: "border-psyco-green-DEFAULT"
    },
    {
      name: "Enterprise",
      price: "999",
      period: "per event",
      description: "Complete solution for large events and festivals",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "Full festival-grade sound system",
        "Unlimited guests",
        "8+ hours of service",
        "Multiple DJ stations",
        "Complete lighting production",
        "Wireless microphones (4x)",
        "LED screens and visual effects",
        "Dedicated technical crew",
        "Custom setup consultation"
      ],
      popular: false,
      buttonText: "Contact Us",
      color: "border-yellow-500"
    }
  ];

  const addOns = [
    { name: "Extra Hour", price: "75", description: "Extend your event coverage" },
    { name: "Photo Booth", price: "150", description: "Digital photo booth with props" },
    { name: "Fog Machine", price: "50", description: "Atmospheric fog effects" },
    { name: "Extra Microphone", price: "25", description: "Additional wireless microphone" },
    { name: "LED Screen", price: "200", description: "Large LED display for visuals" },
    { name: "Special Effects", price: "100", description: "CO2 jets and laser effects" }
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Professional sound and lighting packages for events of all sizes. No hidden fees, just exceptional service.
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
            <h2 className="text-3xl font-bold text-white mb-2">Add-ons & Extras</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enhance your event with our additional services and equipment
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
            <h2 className="text-3xl font-bold text-white mb-2">Pricing FAQ</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our pricing and packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's included in the base price?",
                answer: "All packages include equipment delivery, setup, operation during your event, and breakdown. Professional staff and basic technical support are always included."
              },
              {
                question: "Do you charge extra for travel?",
                answer: "Events within 50 miles of our base are included. Beyond that, we charge a reasonable travel fee based on distance and setup complexity."
              },
              {
                question: "Can I customize a package?",
                answer: "Absolutely! We can mix and match services to create the perfect package for your event. Contact us for a custom quote."
              },
              {
                question: "What's your payment policy?",
                answer: "We require a 30% deposit to secure your date, with the balance due one week before your event. We accept all major payment methods."
              },
              {
                question: "Do you offer discounts for multiple events?",
                answer: "Yes! We offer special rates for recurring events, wedding packages, and corporate clients. Contact us to discuss volume discounts."
              },
              {
                question: "What happens if I need to cancel?",
                answer: "Cancellations 30+ days before receive full deposit refund. 14-30 days receive 50% refund. Under 14 days are non-refundable."
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
              Ready to Book Your Event?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Get in touch with our team to discuss your requirements and receive a personalized quote for your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Book Now
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
