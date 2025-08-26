import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Reading App",
      desc: "Mobile app with Login/Register, Read stories, Favorites, Search",
      link: "https://github.com/TrongNhan1003/AppDocTruyen",
      img: "./public/images/appdoctruyen.png",
    },
    {
      title: "Airline Ticket Website",
      desc: "UI Prototype for booking website (Figma)",
      link: "https://www.figma.com/design/SAsO7d22ygWMd1CvTG4b5R/AirPlaneTicketSelling",
      img: "./public/images/airplane.png",
    },
    {
      title: "Curely App",
      desc: "Capstone Project – Cancer Diagnosis by MRI Image (UI in Figma)",
      link: "https://www.figma.com/design/vIOCqpY7YelJxDhl5mLyj9/Curely",
      img: "./public/images/curely.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12 text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Hình ảnh minh họa */}
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
