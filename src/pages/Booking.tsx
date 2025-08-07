
import React, { useEffect } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import { Clock, CheckCircle, Headphones, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookingSteps = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Select a Date & Time",
      description: "Choose your preferred date and time from our availability calendar."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Tell Us About Your Event",
      description: "Provide details about your project type, nature, and specific requirements."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Consultation Call",
      description: "Our team will contact you to discuss your needs in detail."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Confirmation",
      description: "Receive your booking confirmation and prepare for an amazing development."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Book Our Services</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              From fintech tools to AI-powered portals, we design, develop, and deliver custom software solutions tailored to your vision.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Process */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">How Booking Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our simple four-step process makes booking our services easy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step, index) => (
              <div
                key={index}
                className="glassmorphism p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-psyco-green-DEFAULT/50">
                    <MoveRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Calendar */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Select a Date & Time</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our available slots and tell us about your event
            </p>
          </div>
          
          <BookingCalendar />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our booking process and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
    question: "How soon should I book a project with you?",
    answer: "We recommend booking at least 2–3 weeks in advance so we can properly plan, scope, and allocate resources. For urgent timelines, we can discuss fast-tracking options."
  },
  {
    question: "Is there an upfront payment required?",
    answer: "Yes, we require a 30% upfront deposit to initiate the project. The remaining amount is paid in milestones or upon final delivery, depending on the project scope."
  },
  {
    question: "What happens after I submit the booking form?",
    answer: "You'll receive a confirmation email, and our team will reach out within 24–48 hours to discuss your idea, finalize details, and send a formal proposal."
  },
  {
    question: "Can I request changes during the project?",
    answer: "Absolutely. We follow an agile approach and welcome client feedback during development. However, major scope changes may affect the timeline and budget."
  },
  {
    question: "What if I don’t know exactly what I need?",
    answer: "No problem! Just describe your idea in simple terms. We’ll guide you through planning and suggest the best tech solution based on your goal and budget."
  },
  {
    question: "What’s your cancellation or refund policy?",
    answer: "If canceled within the first 7 days (before development starts), the deposit is fully refundable. Once development begins, the deposit becomes non-refundable."
  }
            ].map((faq, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Direct Contact */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Need to Speak With Us Directly?</h2>
                <p className="text-gray-300 mb-6">
                  If you have specific questions or prefer to discuss your requirements over the phone, our team is here to help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-psyco-green-DEFAULT" />
                    <span className="text-white">++923396800123</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-psyco-green-DEFAULT" />
                    <span className="text-white">neurovis.site@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-psyco-green-DEFAULT" />
                    <span className="text-white">Mon-Fri: 9am-6pm | Sat: 10am-4pm</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Emergency Support</h3>
                    <p className="text-gray-300">24/7 support line for existing bookings</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Custom Packages</h3>
                    <p className="text-gray-300">Speak with our team about bespoke solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Site Visits</h3>
                    <p className="text-gray-300">Request a office assessment before your meeting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add Calendar and MessageSquare components for the icons
const Calendar = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const MessageSquare = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default Booking;
