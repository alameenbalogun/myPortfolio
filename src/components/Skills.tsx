import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-50px', '50px']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const skills = [
    { 
      name: 'HTML5', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      category: 'Frontend' 
    },
    { 
      name: 'CSS3', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      category: 'Frontend' 
    },
    { 
      name: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      category: 'Frontend' 
    },
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      category: 'Frontend' 
    },
    { 
      name: 'React Native', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      category: 'Frontend' 
    },
    { 
      name: 'Tailwind CSS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      category: 'Frontend' 
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      category: 'Backend' 
    },
    { 
      name: 'Express', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      category: 'Backend' 
    },
    { 
      name: 'MongoDB', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      category: 'Backend' 
    },
    { 
      name: 'Mongoose', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg',
      category: 'Backend' 
    },
    { 
      name: 'Next.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      category: 'Learning' 
    },
    { 
      name: 'TypeScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      category: 'Learning' 
    },
  ];

  return (
    <section 
      ref={ref}
      id="skills" 
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 relative"
    >
      <motion.div 
        className="max-w-5xl mx-auto w-full"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 dark:text-white mb-2 sm:mb-3">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 md:mb-12 text-sm">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ 
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 10 }
              }}
              className="group"
            >
              <div className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 bg-white dark:bg-gray-900">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative shrink-0"
                >
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain dark:brightness-90"
                  />
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl -z-10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Also experienced with: Git, GitHub, REST APIs, Responsive Design,
            UI/UX Design, Agile Methodologies
          </p>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          style={{ y }}
          className="absolute -left-20 top-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl -z-10 hidden lg:block"
        />
      </motion.div>
    </section>
  );
}