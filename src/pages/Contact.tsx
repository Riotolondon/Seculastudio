import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@seculastudios.com',
      description: 'Drop us a line anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+27 (63) 727-7356',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '7 Ritson Road,',
      description: 'Berea Durban, 4001'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon-Fri 9:00-18:00',
      description: 'PST (Pacific Standard Time)'
    }
  ];

  const services = [
    'Custom Software Development',
    'Web Development',
    'Mobile App Development',
    'E-commerce Solutions',
    'Digital transformation',
    'Brand Identity',
    'Digital Strategy',
    'Consulting',
    'UI/UX Design',
    'Other'
  ];

  const budgetRanges = [
    'Under R5,000',
    'R5,000 - R10,000',
    'R10,000 - R25,000',
    'R25,000 - R50,000',
    'R50,000+',
    'Let\'s discuss'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-blue-400">Connect</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to bring your vision to life? We'd love to hear about your project and explore how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <GlassCard key={info.title} delay={index * 0.1} className="p-6 text-center">
                <div className="relative mb-4">
                  <info.icon className="h-8 w-8 text-[#2596be] mx-auto" />
                  <div className="absolute inset-0 bg-[#2596be] rounded-full blur-lg opacity-20"></div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <div className="text-[#2596be] font-medium mb-1">{info.details}</div>
                <p className="text-white/60 text-sm">{info.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Get Started Today</h2>
                  <p className="text-white/70">
                    Fill out the form below and we'll get back to you within 24 hours to discuss your project.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 focus:border-[#2596be]/50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 focus:border-[#2596be]/50 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 focus:border-[#2596be]/50 transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-white font-medium mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 focus:border-[#2596be]/50 transition-all duration-300"
                      >
                        <option value="" className="bg-black">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-black">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 focus:border-[#2596be]/50 transition-all duration-300"
                    >
                      <option value="" className="bg-black">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-black">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 focus:border-[#2596be]/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#2596be] hover:bg-[#2596be]/80 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#2596be]/25 flex items-center justify-center space-x-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </GlassCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    '5+ years of experience',
                    '150+ successful projects',
                    '24/7 customer support',
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-white/80">
                      <CheckCircle className="h-5 w-5 text-[#2596be] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Process */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Our Process</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Initial Consultation', desc: 'We discuss your project requirements and goals.' },
                    { step: '2', title: 'Proposal & Planning', desc: 'We create a detailed proposal and project plan.' },
                    { step: '3', title: 'Design & Development', desc: 'Our team brings your vision to life.' },
                    { step: '4', title: 'Launch & Support', desc: 'We deploy your project and provide ongoing support.' }
                  ].map((phase) => (
                    <div key={phase.step} className="flex space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#2596be] rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {phase.step}
                      </div>
                      <div>
                        <div className="text-white font-medium">{phase.title}</div>
                        <div className="text-white/60 text-sm">{phase.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* CTA */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-[#2596be]/20 to-blue-600/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#2596be] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Our Office</h3>
                <p className="text-white/70">7 Ritson Road, </p>
                <p className="text-white/70">Berea Durban, 4001</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;