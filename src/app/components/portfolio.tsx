import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Quantum Finance',
    category: 'Fintech Platform',
    image: 'https://images.unsplash.com/photo-1758627506826-0658170e5cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzEwMDUwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Luxe Collective',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzA5ODY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    title: 'Neural Labs',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1736175549681-c24c552da1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwY29sb3JmdWwlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzEwMDk5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-pink-500'
  }
];

export function Portfolio() {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
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
            Portfolio
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 px-4">
            Featured <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto px-4"
          >
            A curated selection of our most impactful projects that set new industry standards.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] mb-6 border border-slate-800 group-hover:border-slate-700">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />
                  
                  {/* Overlay content with stagger animation */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <motion.span
                        className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium mb-3 text-white border border-white/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.title}
                      </h3>
                      <motion.div
                        className="mt-3 sm:mt-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                      >
                        <span className="text-xs sm:text-sm font-semibold">View Project</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 rounded-full font-semibold shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all text-sm sm:text-base"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}