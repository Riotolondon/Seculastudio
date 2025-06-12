import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Code, Megaphone, Users, Star, TrendingUp, Award, CheckCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Development',
      description: 'Robust, scalable solutions built with cutting-edge technology.',
      features: ['Web Development', 'Mobile Apps', 'E-commerce']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Beautiful, user-centric designs that convert and inspire.',
      features: ['UI/UX Design', 'Prototyping', 'Design Systems']
    },
    {
      icon: Megaphone,
      title: 'Branding',
      description: 'Memorable brand identities that resonate with your audience.',
      features: ['Logo Design', 'Brand Strategy', 'Visual Identity']
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic guidance to accelerate your digital transformation.',
      features: ['Digital Strategy', 'Tech Consulting', 'Growth Planning']
    }
  ];

  const stats = [
    { icon: Users, value: '150+', label: 'Happy Clients' },
    { icon: Award, value: '200+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Secula Studios transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      content: 'Working with Secula was a game-changer. They delivered a stunning website that increased our conversion rate by 300%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      content: 'The team at Secula Studios is incredibly talented. They understood our vision and brought it to life beautifully.',
      rating: 5
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard heroCard={true} className="p-8 text-center md:p-16 lg:p-20">
              <motion.h1 
                className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Crafting Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-blue-400">
                  Experiences That Matter
                </span>
              </motion.h1>
              
              <motion.p 
                className="max-w-4xl mx-auto mb-8 text-xl md:text-2xl text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We blend creativity with technology to build stunning digital solutions that drive results and inspire action.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link
                  to="/contact"
                  className="group relative overflow-hidden px-8 py-4 bg-[#2596be] hover:bg-[#2596be]/80 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2596be]/25 flex items-center space-x-2"
                >
                  <span>Let's Build Together</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 font-semibold text-white transition-all duration-300 border rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20"
                >
                  View Our Work
                </Link>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Core Services
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              From concept to launch, we provide comprehensive digital solutions tailored to your unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <GlassCard key={service.title} delay={index * 0.1} className="h-full p-6">
                <div className="flex flex-col h-full">
                  <div className="relative mb-4">
                    <service.icon className="h-12 w-12 text-[#2596be] mb-4" />
                    <div className="absolute inset-0 bg-[#2596be] rounded-full blur-xl opacity-20"></div>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="flex-grow mb-4 text-white/70">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-white/60">
                        <CheckCircle className="h-4 w-4 text-[#2596be]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GlassCard className="p-8 md:p-12">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative mb-4">
                    <stat.icon className="h-8 w-8 text-[#2596be] mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-[#2596be] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  <div className="mb-2 text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={testimonial.name} delay={index * 0.1} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#2596be] fill-current" />
                  ))}
                </div>
                <p className="mb-6 italic text-white/80">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-white/70">
              Let's discuss your project and create something amazing together. Get started with a free consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#2596be] hover:bg-[#2596be]/80 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2596be]/25"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </GlassCard>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;