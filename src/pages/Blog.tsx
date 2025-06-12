import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'design', name: 'Design' },
    { id: 'development', name: 'Development' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'trends', name: 'Trends' }
  ];

  const posts = [
    {
      id: 1,
      title: 'The Future of Web Design: Embracing Glassmorphism',
      excerpt: 'Explore how glassmorphism is revolutionizing modern web design with its frosted glass aesthetics and depth.',
      content: 'Glassmorphism has emerged as one of the most compelling design trends, offering a perfect blend of minimalism and visual appeal...',
      category: 'design',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['UI/UX', 'Design Trends', 'Glassmorphism']
    },
    {
      id: 2,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn the essential patterns and practices for creating maintainable and scalable React applications.',
      content: 'As React applications grow in complexity, maintaining code quality and scalability becomes crucial...',
      category: 'development',
      author: 'Marcus Johnson',
      date: '2024-01-12',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'JavaScript', 'Best Practices']
    },
    {
      id: 3,
      title: 'Brand Strategy in the Digital Age: A Complete Guide',
      excerpt: 'Discover how to build a strong brand presence that resonates with your audience in today\'s digital landscape.',
      content: 'In an increasingly digital world, brand strategy must evolve to meet new challenges and opportunities...',
      category: 'strategy',
      author: 'Emma Thompson',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Strategy', 'Digital Marketing']
    },
    {
      id: 4,
      title: 'The Rise of AI in Design: Tools and Implications',
      excerpt: 'Examining how artificial intelligence is transforming the design process and what it means for designers.',
      content: 'AI-powered design tools are becoming increasingly sophisticated, offering new possibilities for creativity...',
      category: 'trends',
      author: 'Alex Rodriguez',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Design Tools', 'Future']
    },
    {
      id: 5,
      title: 'Performance Optimization: Making Web Apps Lightning Fast',
      excerpt: 'Essential techniques for optimizing web application performance and improving user experience.',
      content: 'Web performance directly impacts user experience and business metrics. Here are proven strategies...',
      category: 'development',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Performance', 'Web Development', 'Optimization']
    },
    {
      id: 6,
      title: 'Color Psychology in Digital Design',
      excerpt: 'Understanding how colors influence user behavior and emotions in digital interfaces.',
      content: 'Color choices in digital design go far beyond aesthetics – they fundamentally impact user psychology...',
      category: 'design',
      author: 'Sarah Chen',
      date: '2024-01-03',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Color Theory', 'Psychology', 'UI Design']
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-blue-400">Ideas</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from the world of design and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 focus:border-[#2596be]/50 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-[#2596be] text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:from-transparent lg:to-black/50"></div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-[#2596be]/20 text-[#2596be] text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-white/60 text-sm rounded-full">
                        {categories.find(cat => cat.id === filteredPosts[0].category)?.name}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-white/70 mb-6 text-lg">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-white/60">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{filteredPosts[0].readTime}</span>
                        </span>
                      </div>
                      <span className="text-white font-medium">{filteredPosts[0].author}</span>
                    </div>
                    <button className="flex items-center space-x-2 text-[#2596be] font-medium hover:text-blue-400 transition-colors duration-300 group">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <GlassCard className="p-12 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">No articles found</h3>
              <p className="text-white/70">Try adjusting your search or filter criteria.</p>
            </GlassCard>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="group cursor-pointer overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 bg-[#2596be]/20 text-[#2596be] text-sm font-medium rounded-full">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/70 mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center space-x-1 px-2 py-1 bg-white/10 text-white/60 text-xs rounded-md"
                          >
                            <Tag className="h-3 w-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 font-medium">{post.author}</span>
                        <button className="flex items-center space-x-1 text-[#2596be] hover:text-blue-400 transition-colors duration-300 group">
                          <span className="text-sm">Read More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 6 && (
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 backdrop-blur-sm bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Load More Articles
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights, tips, and trends in design and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 focus:border-[#2596be]/50 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-[#2596be] hover:bg-[#2596be]/80 text-white font-semibold rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </GlassCard>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;