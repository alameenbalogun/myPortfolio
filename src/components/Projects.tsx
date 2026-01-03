import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "./../figma/ImageWithFallback";
import standout from "../assets/images/standout.png";
import pms from "../assets/images/pms.png";
import ayomama from "../assets/images/ayomama.png";
import lukeman from "../assets/images/lukeman.png";
import marvel from "../assets/images/marvel.png";

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const projects = [
    {
      title: "StandOut Treats | Wears",
      description:
        "A full-featured online shopping platform with user authentication, product management, shopping cart, and payment integration.",
      image: standout,
      tags: ["React", "Postgress", "Tailwind", "Supabase"],
      github: "https://github.com/alameenbalogun/standout-duo-commerce",
      demo: "https://standout.shopping",
    },
    {
      title: "Patient and Healhth Management System",
      description:
        "A comprehensive web application for managing patient records, appointments, and healthcare services with secure user authentication and role-based access control.",
      image: pms,
      tags: ["Next.js", "Javascript", "Shadcn", "Tailwind", "REST API"],
      github: "https://github.com/alameenbalogun/PMS",
      demo: "https://pms-m97j.vercel.app/",
    },
    {
      title: "MarvelRecruit",
      description:
        "A recruitment platform connecting job seekers with employers, featuring job listings, application tracking, and user profiles.",
      image: marvel,
      tags: [
        "React.js",
        "Typescript",
        "Shadcn",
        "Tailwind",
        "Supabase",
        "Paystack Integration",
      ],
      github: "https://github.com/Acepro-ai/nigerian-tech-hive",
      demo: "https://marvelrecruits.com/",
    },
    {
      title: "Lukeman Balogun and Sons.",
      description:
        "An e-commerce platform for a family-owned business, featuring product listings, shopping cart functionality, and secure checkout process.",
      image: lukeman,
      tags: ["React", "JavaScript", "Tailwind", "Clerk"],
      github: "https://github.com/alameenbalogun/daddy-website",
      demo: "https://lukeman-balogun-and-sons.vercel.app/",
    },
    {
      title: "Ayomama",
      description:
        "A maternal health tracking app for Africans and Nigeria Mothers.",
      image: ayomama,
      tags: ["React Native", "JavaScript", "REST API", "Tailwind", "Zustand"],
      github: "https://github.com/alameenbalogun",
      demo: "https://expo.dev/accounts/biodun42/projects/ayomama/builds/81d651f0-1cde-436c-8cd8-9b1e503d0f78",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 relative"
    >
      <motion.div className="max-w-6xl mx-auto w-full" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 md:mb-16">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
              }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 order-2 md:order-1 rounded-lg"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video "
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Icons on Hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Github className="w-6 h-6 text-gray-900 dark:text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <ExternalLink className="w-6 h-6 text-gray-900 dark:text-white" />
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                  className="space-y-3 sm:space-y-4 order-1 md:order-2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.h3
                    className="text-gray-900 dark:text-white"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex  sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <a
                href="https://github.com/alameenbalogun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          style={{ y }}
          className="absolute -right-32 top-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl -z-10 hidden lg:block"
        />
      </motion.div>
    </section>
  );
}
