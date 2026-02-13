import { motion } from 'motion/react';
import { Heart, Users, Lightbulb, Trophy } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour dedication into every pixel and interaction.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Your vision combined with our expertise.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering tomorrow\'s digital experiences.'
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'Uncompromising quality in every detail.'
  }
];

export function About() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full filter blur-3xl"
        animate={{
          x: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full filter blur-3xl"
        animate={{
          x: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 text-amber-400 text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-amber-500/20"
          >
            About Us
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4"
          >
            We are a collective of visionary designers, strategic thinkers, and technical
            artisans who believe in creating digital experiences that transcend expectations.
            Every project is an opportunity to reach new heights.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 mb-4 sm:mb-6 relative overflow-hidden"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 relative z-10" />
                  </motion.div>
                </motion.div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full filter blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full filter blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
            >
              Ready to Elevate Your Brand?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            >
              Let's collaborate to create something extraordinary that sets you apart.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 rounded-full font-semibold shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all text-sm sm:text-base"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
