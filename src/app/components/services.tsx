import { motion } from 'motion/react';
import { Palette, Code, Rocket, Zap, Globe, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Distinctive visual identities that make your brand unforgettable.',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Lightning-fast, pixel-perfect websites built with cutting-edge tech.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform apps that users love to use.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that propel your business forward.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Zap,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces designed for maximum engagement.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Globe,
    title: 'E-Commerce',
    description: 'Online stores that convert visitors into loyal customers.',
    color: 'from-indigo-500 to-purple-500'
  }
];

export function Services() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full filter blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
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
            What We Do
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 px-4">
            Our <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto px-4"
          >
            From concept to launch, we bring your digital vision to life with unparalleled craftsmanship.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-slate-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 overflow-hidden h-full hover:border-slate-700"
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated border gradient */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100`}
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)`
                    }}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 2 }}
                  />
                  
                  <motion.div
                    className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} mb-4 sm:mb-6 relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 relative">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed relative">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-4 sm:mt-6 text-amber-400 font-semibold flex items-center gap-2 relative text-sm sm:text-base"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                    Learn more
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}