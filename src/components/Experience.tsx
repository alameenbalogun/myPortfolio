import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      role: 'Frontend Engineer (Intern)',
      company: 'ActiveEdge Technologies Limited',
      location: 'Lagos, Nigeria',
      period: '04/2025 – Present',
      responsibilities: [
        'Developed and maintained scalable web applications using Next.js.',
        'Optimized backend APIs, reducing average response time by 35%.',
        'Collaborated with a team of 6 engineers using Agile methodology.',
        'Worked closely with UI/UX designers to implement user-centric features with pixel-perfect precision.',
      ],
    },
    {
      role: 'Full-Stack Developer (Intern)',
      company: 'Codveda Technologies',
      location: 'Remote',
      period: '08/2024 – 09/2024',
      responsibilities: [
        'Built and maintained scalable web applications with Next.js and Node.js.',
        'Integrated APIs and improved backend performance for seamless user experience.',
        'Participated in Agile sprints, contributing to team deliverables and knowledge-sharing.',
        'Ensured responsive UI/UX integration.',
      ],
    },
    {
      role: 'Junior Web Developer (Intern)',
      company: 'Dervac Global Services Enterprise',
      location: 'Lagos, Nigeria',
      period: '07/2024 – 08/2024',
      responsibilities: [
        'Tutored students on HTML, CSS, and JavaScript concepts.',
        'Facilitated hands-on sessions to bridge theory with real-world coding.',
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 relative"
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 md:mb-16">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="hidden md:flex absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"
                />

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="md:ml-20 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-lg p-5 sm:p-6 md:p-8 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="text-gray-900 dark:text-white mb-2"
                    >
                      {exp.role}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-3"
                    >
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Responsibilities */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                    className="space-y-2 text-gray-600 dark:text-gray-400"
                  >
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.8 + respIndex * 0.1 }}
                        className="flex gap-3 text-sm sm:text-base"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1.5 shrink-0">
                          •
                        </span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <motion.div
          style={{ y }}
          className="absolute -right-32 top-1/2 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-3xl -z-10 hidden lg:block"
        />
      </motion.div>
    </section>
  );
}
