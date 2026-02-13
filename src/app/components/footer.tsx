import { motion } from 'motion/react';
import { Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-slate-950 text-white py-20 relative overflow-hidden border-t border-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated gradient */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-1 tracking-tight">
                ZNTH DSGN
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 tracking-[0.2em] uppercase mb-4">
                Zenith Design
              </div>
            </motion.div>
            <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 max-w-md leading-relaxed">
              A premium digital agency specializing in elevated brand experiences,
              cutting-edge web development, and strategic digital solutions.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm sm:text-base">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <a href="mailto:hello@znthdesign.com" className="hover:text-amber-400 transition-colors break-all">
                hello@znthdesign.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Services', 'Work', 'About', 'Contact', 'Careers'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-sm sm:text-base text-slate-400 hover:text-amber-400 transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-white text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Brand Identity', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'E-Commerce'].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#"
                    className="text-sm sm:text-base text-slate-400 hover:text-amber-400 transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 sm:pt-8 border-t border-slate-800"
        >
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            © 2026 ZNTH DSGN. Elevating brands to their zenith.
          </p>
          
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-yellow-500/10 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-amber-400" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}