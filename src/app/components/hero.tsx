import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background orbs - more subtle and premium */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-amber-500/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
          </motion.div>
          <span className="text-amber-200 text-xs sm:text-sm font-medium tracking-wide">Premium Digital Experiences</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 sm:mb-8 leading-none tracking-tight"
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ZNTH
          </motion.span>
          <br />
          <motion.span
            className="inline-block bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              textShadow: '0 0 80px rgba(251, 191, 36, 0.3)'
            }}
          >
            DSGN
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-3 sm:mb-4 text-slate-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase"
        >
          Zenith Design
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Elevating brands to their pinnacle through exceptional design,
          strategic thinking, and flawless execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 rounded-full overflow-hidden transition-all shadow-[0_0_50px_rgba(251,191,36,0.3)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
              Begin Your Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-700 text-slate-300 rounded-full font-semibold hover:border-amber-500 hover:text-amber-400 transition-all backdrop-blur-sm text-sm sm:text-base"
          >
            Explore Portfolio
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-3 gap-4 sm:gap-8 text-slate-300 max-w-3xl mx-auto px-4"
        >
          {[
            { number: '200+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '25+', label: 'Industry Awards' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator with animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2 }, y: { duration: 2, repeat: Infinity } }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}