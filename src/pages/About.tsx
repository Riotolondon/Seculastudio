import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Heart, Award, Globe, Code, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const About = () => {
  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Founded with a vision to democratize great design and development for businesses of all sizes.'
    },
    {
      year: '2020',
      title: 'First Major Milestone',
      description: 'Completed 50+ projects and established our core team of talented designers and developers.'
    },
    {
      year: '2021',
      title: 'Expanding Horizons',
      description: 'Launched our branding and consulting services, helping startups build strong brand identities.'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Expanded internationally, working with clients across North America, Europe, and Asia.'
    },
    {
      year: '2023',
      title: 'Innovation Focus',
      description: 'Pioneered new approaches in AI-driven design and sustainable web development practices.'
    },
    {
      year: '2024',
      title: 'Leading the Future',
      description: 'Continuing to push boundaries with cutting-edge technologies and award-winning designs.'
    }
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years in digital product design and strategy.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Strategy', 'Leadership', 'Product Design']
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Design',
      bio: 'Award-winning designer specializing in user experience and brand identity.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['UI/UX Design', 'Branding', 'Design Systems']
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating scalable and performant applications.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'Node.js', 'Cloud Architecture']
    },
    {
      name: 'Emma Thompson',
      role: 'Brand Strategist',
      bio: 'Creative strategist helping brands find their unique voice and market position.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Brand Strategy', 'Marketing', 'Content']
    },
    {
      name: 'David Kim',
      role: 'Mobile Developer',
      bio: 'iOS and Android specialist creating seamless mobile experiences.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['iOS', 'Android', 'React Native']
    },
    {
      name: 'Lisa Wang',
      role: 'Project Manager',
      bio: 'Experienced project manager ensuring smooth delivery and client satisfaction.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Project Management', 'Agile', 'Client Relations']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, no matter how big or small.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best results come from working closely with our clients.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and it shows in the quality of our work.'
    }
  ];

  const tools = [
    { name: 'Figma', category: 'Design' },
    { name: 'Adobe Creative Suite', category: 'Design' },
    { name: 'React', category: 'Development' },
    { name: 'Node.js', category: 'Development' },
    { name: 'TypeScript', category: 'Development' },
    { name: 'AWS', category: 'Infrastructure' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' }
  ];

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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-blue-400">Secula Studios</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              We're a passionate team of designers, developers, and strategists dedicated to creating digital experiences that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 mb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8">
                <Globe className="h-12 w-12 text-[#2596be] mb-6" />
                <h2 className="mb-6 text-3xl font-bold text-white">Our Mission</h2>
                <p className="mb-6 text-lg text-white/80">
                  To empower businesses of all sizes with exceptional digital solutions that drive growth, 
                  enhance user experiences, and create lasting impact in the digital landscape.
                </p>
                <p className="text-white/70">
                  We believe that great design and development should be accessible to everyone, not just 
                  large corporations. That's why we work with startups, small businesses, and enterprises 
                  alike, bringing the same level of expertise and dedication to every project.
                </p>
              </GlassCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, value: '5+', label: 'Years Experience' },
                { icon: Users, value: '150+', label: 'Happy Clients' },
                { icon: Code, value: '200+', label: 'Projects Completed' },
                { icon: Palette, value: '98%', label: 'Success Rate' }
              ].map((stat, index) => (
                <GlassCard key={stat.label} delay={index * 0.1} className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-[#2596be] mx-auto mb-4" />
                  <div className="mb-2 text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 mb-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Our Journey</h2>
            <p className="text-xl text-white/70">
              From humble beginnings to industry recognition, here's how we've grown.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#2596be] to-blue-400"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <GlassCard className="p-6">
                    <div className="text-[#2596be] font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </GlassCard>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2596be] rounded-full border-4 border-black"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 mb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Our Values</h2>
            <p className="text-xl text-white/70">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1} className="p-6 text-center">
                <div className="relative mb-6">
                  <value.icon className="h-12 w-12 text-[#2596be] mx-auto" />
                  <div className="absolute inset-0 bg-[#2596be] rounded-full blur-xl opacity-20"></div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}

      {/* Tools Section */}
      <section className="px-4 mb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Tools We Use</h2>
            <p className="text-xl text-white/70">
              We leverage the latest technologies to deliver exceptional results.
            </p>
          </motion.div>

          <GlassCard className="p-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="p-4 text-center transition-colors duration-300 rounded-lg bg-white/5 hover:bg-white/10"
                >
                  <div className="mb-1 font-medium text-white">{tool.name}</div>
                  <div className="text-[#2596be] text-sm">{tool.category}</div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Want to Work With Us?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-white/70">
              We're always excited to take on new challenges and work with amazing clients. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group relative overflow-hidden px-8 py-4 bg-[#2596be] hover:bg-[#2596be]/80 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2596be]/25"
              >
                Get In Touch
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 font-semibold text-white transition-all duration-300 border rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20"
              >
                View Our Work
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </motion.div>
  );
};

export default About;