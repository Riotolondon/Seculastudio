import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Megaphone, Users, CheckCircle, ArrowRight, Smartphone, Monitor, ShoppingCart, Zap, Target, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const serviceCategories = [
  ];

  const services = [
    {
      icon: Zap,
      title: 'Custom Software Development',
      description: 'Design and develop tailor-made software solutions built around your unique business needs, workflows, and goals—delivering performance, scalability, and control.',
      features: [
        'End-to-End Software Architecture',
        'Cross-Platform Application Development',
        'API & System Integration',
        'Scalable Backend Infrastructure',
        'Ongoing Maintenance & Feature Enhancements'
      ],
      price: 'Starting at $6,000',
      timeline: '4-8 weeks',
      deliverables: ['Strategy Document', 'Implementation Roadmap', 'KPI Framework']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build fast, secure, and scalable web applications using modern technologies.',
      features: [
        'Custom Web Applications',
        'Responsive Design',
        'Performance Optimization',
        'SEO Implementation',
        'Maintenance & Support'
      ],
      price: 'Starting at $8,000',
      timeline: '6-12 weeks',
      deliverables: ['Fully Functional Website', 'Source Code', 'Documentation']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide exceptional user experiences.',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Analytics Integration'
      ],
      price: 'Starting at $15,000',
      timeline: '8-16 weeks',
      deliverables: ['Mobile Application', 'App Store Deployment', 'User Manual']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment processing and inventory management.',
      features: [
        'Custom E-commerce Platform',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Customer Portal'
      ],
      price: 'Starting at $12,000',
      timeline: '8-14 weeks',
      deliverables: ['E-commerce Platform', 'Admin Dashboard', 'Training Materials']
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Modernize your operations with innovative technologies that streamline processes and boost productivity.',
      features: [
        'Business Process Automation',
        'Cloud Integration & Migration',
        'Data-Driven Strategy & Insights',
        'Technology Stack Modernization',
        'Change Management Support'
      ],
      price: 'Starting at $4,000',
      timeline: '4-6 weeks',
      deliverables: ['Brand Strategy Document', 'Messaging Guide', 'Implementation Plan']
    },
    {
      icon: Brush,
      title: 'Brand Identity Design',
      description: 'Comprehensive brand identity that reflects your values and resonates with your audience.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Color Palette',
        'Typography System',
        'Marketing Materials'
      ],
      price: 'Starting at $3,000',
      timeline: '3-6 weeks',
      deliverables: ['Brand Identity Package', 'Style Guide', 'Logo Variations']
    },
    {
      icon: Users,
      title: 'Technical Consulting',
      description: 'Expert technical guidance to help you make informed technology decisions.',
      features: [
        'Technology Assessment',
        'Architecture Review',
        'Best Practices',
        'Team Training',
        'Ongoing Support'
      ],
      price: 'Starting at $2,500',
      timeline: '2-4 weeks',
      deliverables: ['Technical Assessment', 'Recommendations', 'Action Plan']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create intuitive and beautiful user experiences that drive engagement and conversions.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ],
      price: 'Starting at $5,000',
      timeline: '4-8 weeks',
      deliverables: ['Design System', 'High-fidelity Mockups', 'Interactive Prototypes']
    },
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      {/* Hero Section */}
      <section className="px-4 mb-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-blue-400">Services</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              Comprehensive digital solutions tailored to your business needs. From design to development, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 mb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GlassCard className="p-2">
            <div className="flex flex-wrap justify-center gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-[#2596be] text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="flex flex-col h-full p-6">
                  <div className="relative mb-6">
                    <service.icon className="h-12 w-12 text-[#2596be] mb-4" />
                    <div className="absolute inset-0 bg-[#2596be] rounded-full blur-xl opacity-20"></div>
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="flex-grow mb-6 text-white/70">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="mb-3 font-medium text-white">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm text-white/60">
                          <CheckCircle className="h-4 w-4 text-[#2596be] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Our Process
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              We follow a proven methodology to ensure every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', description: 'We start by understanding your goals, challenges, and requirements.' },
              { step: '02', title: 'Strategy', description: 'We develop a comprehensive plan and roadmap for your project.' },
              { step: '03', title: 'Execution', description: 'Our team brings your vision to life with precision and expertise.' },
              { step: '04', title: 'Launch', description: 'We deploy and support your solution for optimal performance.' }
            ].map((phase, index) => (
              <GlassCard key={phase.step} delay={index * 0.1} className="p-6 text-center">
                <div className="text-4xl font-bold text-[#2596be] mb-4">{phase.step}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">{phase.title}</h3>
                <p className="text-white/70">{phase.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-white/70">
              Let's discuss your project and determine the best approach to achieve your goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group relative overflow-hidden px-8 py-4 bg-[#2596be] hover:bg-[#2596be]/80 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2596be]/25 flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 font-semibold text-white transition-all duration-300 border rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20"
              >
                Request Quote
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;