import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Terminal, Cpu } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Frontend Development', icon: Code2, level: 90 },
    { name: 'UI/UX Design', icon: Palette, level: 85 },
    { name: 'Backend Development', icon: Terminal, level: 80 },
    { name: 'System Architecture', icon: Cpu, level: 75 },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-panel p-6 h-full">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800"
                  alt="Profile"
                  className="w-full h-64 object-cover rounded-lg mb-6 neon-hover"
                />
                <p className="text-gray-300 leading-relaxed">
                  A passionate web developer with 5+ years of experience in creating modern, efficient, and scalable web applications. I specialize in React, Node.js, and modern web technologies, always staying at the forefront of digital innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6"
            >
              <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon size={20} />
                        <span>{skill.name}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;