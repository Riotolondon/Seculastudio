import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  glowing?: boolean;
  heroCard?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  delay = 0,
  glowing = true,
  heroCard = false
}) => {
  const baseClasses = glowing 
    ? (heroCard ? 'hero-glow-border' : 'glow-border')
    : 'backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`
        ${baseClasses}
        shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/30
        transition-all duration-300 ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;