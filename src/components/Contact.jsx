import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-center px-6">
      <motion.h2
        className="text-3xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Feel free to reach out if you’re interested in working together or have any questions!
      </motion.p>

      <div className="flex flex-wrap justify-center gap-10">
        {/* GitHub */}
        <motion.a
          href="https://github.com/TrongNhan1003"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-300 hover:text-blue-400"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub size={40} />
          <span className="mt-2 text-sm">GitHub</span>
        </motion.a>

        {/* Email */}
        <motion.a
          href="https://myaccount.google.com/?gar=WzEyMF0&hl=vi&utm_source=OGB&utm_medium=act"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-300 hover:text-red-400"
          whileHover={{ scale: 1.2 }}
        >
          <FaEnvelope size={40} />
          <span className="mt-2 text-sm">Email</span>
        </motion.a>

        {/* Phone */}
        <motion.a
          href="tel:0943567153"
          className="flex flex-col items-center text-gray-300 hover:text-green-400"
          whileHover={{ scale: 1.2 }}
        >
          <FaPhone size={40} />
          <span className="mt-2 text-sm">Phone</span>
        </motion.a>

        {/* Facebook */}
        <motion.a
          href="https://www.facebook.com/trong.nhan.108847"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-300 hover:text-blue-500"
          whileHover={{ scale: 1.2 }}
        >
          <FaFacebook size={40} />
          <span className="mt-2 text-sm">Facebook</span>
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/trnhan.nh/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-300 hover:text-pink-500"
          whileHover={{ scale: 1.2 }}
        >
          <FaInstagram size={40} />
          <span className="mt-2 text-sm">Instagram</span>
        </motion.a>
      </div>
    </section>
  );
}
