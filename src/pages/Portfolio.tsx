import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Filter } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
  ];

  const projects = [
    {
      id: 1,
      title: 'NTS Skills Training College',
      description: 'We designed and developed a responsive, five-page website that showcases...',
      longDescription: 'NTS Skills Training College, based in the Eastern Cape, South Africa, partnered with Secula Studios to bring their educational services online through a modern and accessible digital presence. We designed and developed a responsive, five-page website that showcases the college’s mission, academic programs, enrollment information, and contact details. The website serves as a central hub for students, staff, and prospective applicants, delivering clear information in an engaging and intuitive format.',
      image: '/public/portfolio/nts.png',
      features: [
        'Custom 5-page layout tailored to the college’s structure',
        'Responsive design optimized for desktop, tablet, and mobile',
        'Clean, informative sections highlighting course offerings and admissions',
        'Embedded contact form and Google Maps integrationy',
      ],
      liveUrl: 'https://ntsacademysa.com/',
    },
    {
      id: 2,
      title: 'Ever Sisters Decor',
      description: 'Ever Sisters Decor is a dynamic event styling company known for transforming spaces...',
      longDescription: 'Ever Sisters Decor is a dynamic event styling company known for transforming spaces into unforgettable experiences. With years of experience and a deep understanding of the latest trends in decoration, they offer a diverse range of services for events such as weddings, birthdays, corporate functions, and seasonal celebrations. Secula Studios worked closely with the brand to craft a visually elegant and functionally smooth online presence that captures their creative flair and service excellence.',
      image: '/public/portfolio/ever.png',
      features: [
        'Stylish, responsive design reflecting the brand’s aesthetic',
        'Photo galleries showcasing past events and décor themes',
        'Services section with detailed offerings for various event types',
        'Interactive inquiry form and integrated contact options',
      ],
      liveUrl: 'https://eversistersdecor.co.za/',
    },
    {
      id: 3,
      title: 'LA Automotive Engineering',
      description: 'developed a professional and technically focused website that reflects their expertise...',
      longDescription: 'LA Automotive Engineering is a cutting-edge service provider specializing in high-performance automotive solutions. Their team of highly skilled technicians brings years of experience to the table, paired with a commitment to innovation and precision. Secula Studios developed a professional and technically focused website that reflects their expertise and dedication to staying ahead of industry advancements. The platform highlights their services, team strengths, and commitment to quality engineering.',
      image: '/public/portfolio/la.png',
      features: [
        'Custom 5-page layout tailored to the college’s structure',
        'Responsive design optimized for desktop, tablet, and mobile',
        'Clean, informative sections highlighting course offerings and admissions',
        'Embedded contact form and Google Maps integrationy',
      ],
      liveUrl: 'https://laautomotive.s3.eu-west-1.amazonaws.com/index.html/',
    },
    {
      id: 6,
      title: 'Cindy’s Designs Logo',
      description: 'Cindy’s Designs sought a visually expressive logo to define their brand...',
      longDescription: 'Cindy’s Designs sought a visually expressive logo to define their brand in the competitive design space. Secula Studios responded with a design process that provided multiple logo options, ensuring the selected mark aligned with the company’s creative direction and aesthetic goals.',
      image: 'https://previews.dropbox.com/p/thumb/ACoqRYWufcBYhwLA16HJpjaoux6roslBejThWBm5pFQg99q6w-ubQ8wcemyobDpbSKYuPHYEpvlh62Xon5QhupSQpW2Eblw-mT4SGg3uBRvdQtvBUFlrZAaEqEmO-_7s_dKPY7Xh6qXKegwXOnZ5zpW1HrIaff9idY0xN2HNz7_FE6zF6MTVnDKKpGD47n6RDGA-kXnMyPoqw8QhM7HUSPHiaZtYchC5DrgvOi-fokg1hXUzrd2lCrW0puNMrkvbcx4xVmMgAdQRh-ZpzaVHjEO51hXTR96wdw_QsY2qHtLc7aCJWeVs3dzAXOHBzX3VRHs/p.jpeg',
      features: [
        'Bespoke logo creation tailored to client personality',
        'Basic graphic manual for brand asset consistency',
      ],
      liveUrl: '',
    },
    {
      id: 7,
      title: 'Gentle Rose',
      description: 'Secula Studios, a digital design and development agency, needed a logo that captured their innovative spirit...',
      longDescription: 'Gentle Rose, a luxury perfume brand, needed a compelling brand identity to appeal to a sophisticated audience. We crafted a refined logo and realistic 3D product mockups that embodied elegance and timelessness. The visual assets helped them enhance their promotional and packaging design across channels.',
      image: 'https://previews.dropbox.com/p/thumb/ACoqRYWufcBYhwLA16HJpjaoux6roslBejThWBm5pFQg99q6w-ubQ8wcemyobDpbSKYuPHYEpvlh62Xon5QhupSQpW2Eblw-mT4SGg3uBRvdQtvBUFlrZAaEqEmO-_7s_dKPY7Xh6qXKegwXOnZ5zpW1HrIaff9idY0xN2HNz7_FE6zF6MTVnDKKpGD47n6RDGA-kXnMyPoqw8QhM7HUSPHiaZtYchC5DrgvOi-fokg1hXUzrd2lCrW0puNMrkvbcx4xVmMgAdQRh-ZpzaVHjEO51hXTR96wdw_QsY2qHtLc7aCJWeVs3dzAXOHBzX3VRHs/p.jpeg',
      features: [
        'Elegant logo representing luxury and timeless beauty',
        'High-quality 3D mockups of perfume packaging',
        'Visual assets suitable for marketing, packaging, and social media',
      ],
      liveUrl: 'https://laautomotive.s3.eu-west-1.amazonaws.com/index.html/',
    },
    {
      id: 8,
      title: 'Dmarcs Service Providers',
      category: 'branding',
      description: 'Dmarcs Service Providers required a complete branding suite to present a strong and professional image...',
      longDescription: 'Dmarcs Service Providers required a complete branding suite to present a strong and professional image to clients. Secula Studios delivered a cohesive corporate identity, including a custom logo, branded stationery, and a professionally written company profile to support business presentations and client acquisition.',
      image: 'https://previews.dropbox.com/p/thumb/ACrKu2zCjlBswO5UxpK8P-HZE29Vm9P7tR_OWoNUD0t66yeAakZqid8dRaMt4zYpWMpYLrovRBjLySG1CxI8EqqHsVMPHqufCQM6LZ7W68Ckwl68dDUf3EXZRkmjfsXs0Pyt3hXJRofK8M_1WZ1JdR5b0aaJxAddKwtBzmBQVbUQ0DrwAmubTW8ea_QclGXJjNACQJdFTCAtaoGo5DIDs-aILz_2FfNukayCOsaxFO86gD_TFmfE3Xe9HK6gaUim5JD8w98LTHyMfaP8GXX4_Ab0m5woO9_uAh1PNfVlwBjawYAwR0nkjuZHJPqYYSQ4Wi0/p.png',
      features: [
        'Unique, modern logo expressing the company’s mission',
        'Business cards and letterhead design for corporate communication',
        'Professional company profile layout and content writing',
      ],
      liveUrl: 'https://laautomotive.s3.eu-west-1.amazonaws.com/index.html/',
    },
    {
      id: 9,
      title: 'Deploy Everywhere',
      category: 'branding',
      description: 'Secula Studios, a digital design and development agency, needed a logo that captured their innovative spirit...',
      longDescription: 'Deploy Everywhere required a diverse yet cohesive set of logos for its various business ventures. Secula Studios delivered a unified branding package featuring four distinct logos, each reflecting the identity of a different business entity under the Deploy Everywhere umbrella.',
      image: 'https://previews.dropbox.com/p/thumb/ACrKu2zCjlBswO5UxpK8P-HZE29Vm9P7tR_OWoNUD0t66yeAakZqid8dRaMt4zYpWMpYLrovRBjLySG1CxI8EqqHsVMPHqufCQM6LZ7W68Ckwl68dDUf3EXZRkmjfsXs0Pyt3hXJRofK8M_1WZ1JdR5b0aaJxAddKwtBzmBQVbUQ0DrwAmubTW8ea_QclGXJjNACQJdFTCAtaoGo5DIDs-aILz_2FfNukayCOsaxFO86gD_TFmfE3Xe9HK6gaUim5JD8w98LTHyMfaP8GXX4_Ab0m5woO9_uAh1PNfVlwBjawYAwR0nkjuZHJPqYYSQ4Wi0/p.png',
      features: [
        'Logo 1: Athabongwe – Sleek, modern identity',
        'Logo 2: Gods Capture Media – Creative, media-centric design',
        'Logo 3: Lavender Fresh Laundromat – Clean, fresh aesthetic',
        'Logo 4: Impumelelo Hair Salon – Elegant and expressive style',
      ],
      liveUrl: 'https://laautomotive.s3.eu-west-1.amazonaws.com/index.html/',
    },
    {
      id: 10,
      title: 'T&A Pixel Studio',
      category: 'branding',
      description: 'Impumelelo Hair Salon, a new venture in the beauty industry, needed a logo that captured their unique style...',
      longDescription: 'T&A Pixel Studio approached Secula Studios for a logo that could clearly express their brand identity in a clean and professional manner. By closely aligning with their vision, we delivered several concepts, one of which was selected to represent the brand. The final design laid the foundation for their visual identity and consistency across platforms.',
      image: 'https://previews.dropbox.com/p/thumb/ACrKu2zCjlBswO5UxpK8P-HZE29Vm9P7tR_OWoNUD0t66yeAakZqid8dRaMt4zYpWMpYLrovRBjLySG1CxI8EqqHsVMPHqufCQM6LZ7W68Ckwl68dDUf3EXZRkmjfsXs0Pyt3hXJRofK8M_1WZ1JdR5b0aaJxAddKwtBzmBQVbUQ0DrwAmubTW8ea_QclGXJjNACQJdFTCAtaoGo5DIDs-aILz_2FfNukayCOsaxFO86gD_TFmfE3Xe9HK6gaUim5JD8w98LTHyMfaP8GXX4_Ab0m5woO9_uAh1PNfVlwBjawYAwR0nkjuZHJPqYYSQ4Wi0/p.png',
      features: [
        'Tailored logo design based on client input',
        'Modern brand styling aligned with digital media standards',
        'Basic graphics standard manual for consistent usage',
      ],
      liveUrl: 'https://laautomotive.s3.eu-west-1.amazonaws.com/index.html/',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-blue-400">Portfolio</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 mb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GlassCard className="p-2">
            <div className="flex flex-wrap justify-center gap-2">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === category.id
                      ? 'bg-[#2596be] text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <GlassCard className="overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <span className="px-3 py-1 bg-[#2596be]/20 text-[#2596be] text-xs font-medium rounded-full">
                        {filterCategories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>
                    <p className="mb-4 text-white/70">{project.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="p-0 overflow-hidden">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute z-10 p-2 text-white transition-colors duration-300 rounded-full top-4 right-4 bg-black/50 backdrop-blur-sm hover:bg-black/70"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                    <span className="px-4 py-2 bg-[#2596be]/20 text-[#2596be] font-medium rounded-full">
                      {filterCategories.find(cat => cat.id === selectedProject.category)?.name}
                    </span>
                  </div>
                  
                  <p className="mb-8 text-lg text-white/80">{selectedProject.longDescription}</p>
                  
                  <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-white">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature: string) => (
                          <li key={feature} className="flex items-center space-x-2 text-white/70">
                            <div className="w-2 h-2 bg-[#2596be] rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex items-center space-x-2 px-6 py-3 bg-[#2596be] hover:bg-[#2596be]/80 text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Live</span>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-white/70">
              Let's create something amazing together. Contact us to discuss your project and see how we can bring your vision to life.
            </p>
            <button className=" group relative overflow-hidden px-8 py-4 bg-[#2596be] hover:bg-[#2596be]/80 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2596be]/25">
              Start Your Project
            </button>
          </GlassCard>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;