import { useState, useRef, useEffect } from 'react';

/**
 * Contact Component - Modern contact section
 * Displays contact information with animated cards
 */
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Contact information data
  const contacts = [
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: 'achrefbouali335@gmail.com',
      href: 'mailto:achrefbouali335@gmail.com',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      value: 'o-MrNobody-o',
      href: 'https://github.com/o-MrNobody-o',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: 'fa-brands fa-whatsapp',
      label: 'WhatsApp',
      value: '+216 52961220',
      href: 'https://wa.me/21652961220',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fa-brands fa-linkedin',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/achref-bouali-x/',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section 
      id="contact" 
      className="scroll-mt-28 py-16 md:py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            {'// get in touch'}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-zinc-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-3xl border border-zinc-200/80 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.03] overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white text-xl shadow-lg ring-1 ring-white/20`}>
                <i className={contact.icon}></i>
              </div>
              
              {/* Info */}
              <div className="relative">
                <span className="block text-sm font-medium mb-1 text-zinc-500 dark:text-zinc-400">
                  {contact.label}
                </span>
                <span className="block font-semibold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                  {contact.value}
                </span>
              </div>
              
              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 transition-all duration-300 text-zinc-300 dark:text-zinc-600 group-hover:text-indigo-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                <i className="fa-solid fa-arrow-up-right"></i>
              </div>
            </a>
          ))}
        </div>

        {/* Quote CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl italic text-zinc-600 dark:text-zinc-400">
              "What we know is a drop, what we don't know is an ocean."
            </p>
            <cite className="block mt-3 text-sm font-medium text-zinc-500">
              — Isaac Newton
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Contact;
