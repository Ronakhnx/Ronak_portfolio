import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Download } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Led the development of enterprise-scale React applications and mentored junior developers.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2019 - 2021',
      description: 'Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL.',
    },
    {
      title: 'Web Developer',
      company: 'Creative Agency',
      period: '2017 - 2019',
      description: 'Created responsive websites and web applications for various clients.',
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2015 - 2017',
      description: 'Specialized in Web Technologies and Distributed Systems.',
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'State University',
      period: '2011 - 2015',
      description: 'Major in Software Engineering.',
    },
  ];

  return (
    <section id="resume" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Resume</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 glass-panel neon-hover"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Briefcase size={24} />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="glass-panel p-6"
                  >
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <div className="text-gray-400 mb-2">{item.company} | {item.period}</div>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-8">
                <GraduationCap size={24} />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="glass-panel p-6"
                  >
                    <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                    <div className="text-gray-400 mb-2">{item.institution} | {item.period}</div>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;