import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="min-h-screen py-20 relative section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-panel p-8">
                <h3 className="text-xl font-semibold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Mail size={24} />
                    </div>
                    <span className="text-lg">rronak4674@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Phone size={24} />
                    </div>
                    <span className="text-lg">+91 8200676228</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                      <MapPin size={24} />
                    </div>
                    <span className="text-lg">Surat, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form className="glass-panel p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-futuristic"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-futuristic"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input-futuristic resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="futuristic-button w-full flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;