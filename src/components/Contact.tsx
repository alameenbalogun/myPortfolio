import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-100px', '100px']);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 relative"
    >
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 md:mb-12">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 sm:space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label
                htmlFor="name"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500"
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label
                htmlFor="email"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label
              htmlFor="message"
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hi..."
                rows={8}
                required
                className="border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 resize-none"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.div>
            </Button>
          </motion.div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-14 md:mt-16 pt-6 sm:pt-7 md:pt-8 border-t border-gray-200 dark:border-gray-800 grid sm:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left"
        >
          {[
            { label: 'Email', value: 'alameenbalogun61@gmail.com', link: 'mailto:alameenbalogun61@gmail.com' },
            { label: 'Location', value: 'Nigeria' },
            { label: 'Availability', value: 'Open for opportunities' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                {item.label}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-900 dark:text-white">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          style={{ y }}
          className="absolute -left-32 bottom-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl -z-10 hidden lg:block"
        />
      </div>
    </section>
  );
}