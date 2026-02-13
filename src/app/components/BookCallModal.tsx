import { motion } from "motion/react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function BookCallModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!name || !email || !details) {
      alert("Please fill all fields 😌");
      return;
    }

    const phoneNumber = "917529074394";

    const message = `Hi Zenith Design 👋

Name: ${name}
Email: ${email}

Project Details:
${details}
`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="relative bg-slate-950 border border-slate-800 rounded-2xl p-10 w-[520px] shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-white mb-2">
          Let’s Collaborate
        </h2>

        <p className="text-slate-400 mb-8">
          Tell us about your project.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-transparent border border-slate-800 rounded-xl text-white outline-none focus:border-amber-400 transition-colors"
          />

          <input
            type="email"
            placeholder="Enter your mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-transparent border border-slate-800 rounded-xl text-white outline-none focus:border-amber-400 transition-colors"
          />

          <textarea
            placeholder="Tell us about your project"
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-4 py-3 bg-transparent border border-slate-800 rounded-xl text-white outline-none focus:border-amber-400 transition-colors"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          className="mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 rounded-xl font-semibold hover:shadow-[0_0_35px_rgba(251,191,36,0.35)] transition-all"
        >
          Continue on WhatsApp →
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
