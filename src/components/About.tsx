import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const paragraphs = [
    "I am a Computer Science student and Software Engineer focused on building practical, scalable solutions that solve real problems. I turn ideas into functional products by combining clean design, efficient architecture, and a strong understanding of user needs.",

    "My experience spans the entire web development lifecycle from crafting responsive, pixel-perfect interfaces to designing secure and efficient backend systems. I have built and deployed multiple applications using React, Next.js, React Native, Node.js, Express, and MongoDB, among other technologies.",

    "I work confidently with modern technologies to build fast, maintainable, and production-ready applications. My approach emphasizes clean code, performance optimization, and reusable components that scale as projects grow.",

    "Beyond writing code, I focus on creating value by improving workflows, enhancing user experience, and delivering solutions that are reliable and easy to maintain. I thrive in collaborative environments, enjoy solving complex problems, and continuously refine my skills to deliver impactful digital products.",
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 relative"
    >
      <motion.div className="max-w-4xl mx-auto w-full" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        >
          <h2 className="text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8">
            About Me
          </h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-600 dark:text-gray-400">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <motion.p
            className="text-gray-500 dark:text-gray-500 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            "The only way to do great work is to love what you do."
          </motion.p>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          style={{ y }}
          className="absolute -right-20 top-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-10 hidden lg:block"
        />
      </motion.div>
    </section>
  );
}
