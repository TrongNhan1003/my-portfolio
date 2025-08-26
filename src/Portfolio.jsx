import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Facebook,
  Instagram,
  Palette,
  Target,
  Lightbulb,
  Users,
  Code,
  Figma,
  X,
  Menu,
  Download,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      title: "User-Centered",
      description: "Prioritize user needs",
      icon: "👤",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Visual Hierarchy",
      description: "Clear content flow",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Accessibility",
      description: "Inclusive design",
      icon: "♿",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Consistency",
      description: "Design system coherence",
      icon: "🎯",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const skills = [
    { name: "UI Design", level: 95, icon: Palette, color: "text-pink-500" },
    { name: "UX Research", level: 90, icon: Target, color: "text-blue-500" },
    { name: "Figma", level: 95, icon: Figma, color: "text-purple-500" },
    { name: "Prototyping", level: 88, icon: Lightbulb, color: "text-yellow-500" },
    { name: "ReactJS", level: 75, icon: Code, color: "text-cyan-500" },
    { name: "Team Work", level: 92, icon: Users, color: "text-green-500" },
  ];

  const projects = [
    {
      title: "Curely App",
      role: "UI Designer",
      description: "Mobile app design for cancer diagnosis using MRI.",
      skills: ["Figma", "Healthcare UI", "Accessibility"],
      gradient: "from-purple-400 via-pink-500 to-red-500",
      image: "🏥",
      link: "https://www.figma.com/design/vIOCqpY7YelJxDhl5mLyj9/Curely",
    },
    {
      title: "Airline Booking",
      role: "UI/UX Designer",
      description: "Booking experience design with usability focus.",
      skills: ["Figma", "Prototyping", "Usability"],
      gradient: "from-blue-400 via-cyan-500 to-teal-500",
      image: "✈️",
      link: "https://www.figma.com/design/SAsO7d22ygWMd1CvTG4b5R/AirPlaneTicketSelling",
    },
    {
      title: "Reading App",
      role: "UI Designer & Frontend Dev",
      description: "Mobile reading app with personalized features.",
      skills: ["Figma", "ReactJS", "Mobile UI"],
      gradient: "from-green-400 via-emerald-500 to-blue-500",
      image: "📚",
      link: "https://github.com/TrongNhan1003/AppDocTruyen",
    },
  ];

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Trnhan
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors font-medium hover:text-purple-600 ${
                  activeSection === item.toLowerCase()
                    ? "text-purple-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-purple-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-100">
            <div className="flex flex-col space-y-4 pt-4">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors font-medium hover:text-purple-600 text-left ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden"
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-300 to-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform overflow-hidden">
              <img 
                src="images/avatar.png" 
                alt="avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              UI/UX Designer
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Nguyễn Hồ Trọng Nhân
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              I design{" "}
              <span className="font-semibold text-purple-600">user-centered</span>{" "}
              digital experiences that are{" "}
              <span className="font-semibold text-pink-600">beautiful</span> and{" "}
              <span className="font-semibold text-blue-600">functional</span>.
            </p>

            {/* UI/UX Principles Inline */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {principles.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 hover:scale-105 transform transition-transform shadow-md"
                >
                  <div className="text-3xl mb-2">{p.icon}</div>
                  <p className="text-sm font-semibold text-gray-900">{p.title}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-6 mb-12 flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all"
              >
                View Work
              </button>
              <a
                href="/assets/CV-NguyenHoTrongNhan.pdf"
                download
                className="flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>

            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-purple-500" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible.about
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    🎓 Background
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Software Engineering graduate from Van Lang University with
                    a passion for UI/UX design. Combining technical knowledge
                    with creative thinking to craft user experiences.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    🎯 Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To create digital experiences that are not only beautiful
                    but also solve real user problems.
                  </p>
                </div>
                {/* Download CV in About */}
                <a
                  href="/assets/CV-NguyenHoTrongNhan.pdf"
                  download
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      22
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Age</h4>
                      <p className="text-gray-600">Years Old</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Location</h4>
                      <p className="text-gray-600">Ho Chi Minh City</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white">
                      🎨
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Specialty</h4>
                      <p className="text-gray-600">UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
      <div className={`transition-all duration-1000 ${isVisible.skills?'translate-y-0 opacity-100':'translate-y-10 opacity-0'}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Design Skills</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill,index)=>(
      <div key={index} className={`bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all group ${skill.name==='ReactJS'?'opacity-60':''}`}>
      <div className="flex items-center space-x-4 mb-6">
      <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform`} />
      <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
      </div>
      <div className="relative">
      <div className="bg-gray-200 rounded-full h-3 mb-2">
      <div
      className={`bg-gradient-to-r ${skill.color==='text-pink-500'?'from-pink-400 to-pink-600':
      skill.color==='text-blue-500'?'from-blue-400 to-blue-600':
      skill.color==='text-purple-500'?'from-purple-400 to-purple-600':
      skill.color==='text-yellow-500'?'from-yellow-400 to-yellow-600':
      skill.color==='text-cyan-500'?'from-cyan-400 to-cyan-600':
      'from-green-400 to-green-600'} h-3 rounded-full transition-all duration-1000 ease-out` }
      style={{ width: `${skill.level}%` }}
      ></div>
      </div>
      <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
      </div>
      </div>
      ))}
      </div>
      </div>
      </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
  <div className="max-w-6xl mx-auto px-6">
    <div
      className={`transition-all duration-1000 ${
        isVisible.projects
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </h2>
      <p className="text-xl text-gray-600 text-center mb-16">
        Showcasing my design process and problem-solving approach
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div
              className={`bg-gradient-to-br ${project.gradient} p-1 rounded-3xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500`}
            >
              <div className="bg-white rounded-3xl p-8 h-full">
                <div className="text-6xl mb-6 text-center">{project.image}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-purple-600 mb-4">
                  {project.role}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((s, si) => (
                    <span
                      key={si}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 font-semibold group-hover:translate-x-2 transition-transform"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

     {/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <div className={`transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Create Something Amazing Together</h2>
      <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
        Ready to bring your next project to life with thoughtful design and seamless user experience?
      </p>

      {/* Contact Info Grid */}
      <div className="grid md:grid-cols-5 gap-8 mb-12">
        {/* Email */}
        <a href="https://myaccount.google.com/?gar=WzEyMF0&hl=vi&utm_source=OGB&utm_medium=act" className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all block">
          <Mail className="w-8 h-8 mx-auto mb-4 text-pink-300" />
          <h3 className="font-bold mb-2">Email</h3>
        </a>

        {/* Phone */}
        <a href="tel:0943567153" className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all block">
          <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-300" />
          <h3 className="font-bold mb-2">Phone</h3>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/trong.nhan.108847" target="_blank" rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all block">
          <Facebook className="w-8 h-8 mx-auto mb-4 text-blue-300" />
          <h3 className="font-bold mb-2">Facebook</h3>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/trnhan.nh/" target="_blank" rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all block">
          <Instagram className="w-8 h-8 mx-auto mb-4 text-pink-300" />
          <h3 className="font-bold mb-2">Instagram</h3>
        </a>

        {/* GitHub */}
        <a href="https://github.com/TrongNhan1003" target="_blank" rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all block">
          <svg className="w-8 h-8 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.08 1.84 1.25 1.84 1.25 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
          <h3 className="font-bold mb-2">GitHub</h3>
        </a>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center space-x-6">
        <a
          href="mailto:nguyenhotrongnhan1003@gmail.com"
          className="bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          Send Email
        </a>
        <a
          href="tel:0943567153"
          className="border-2 border-white/50 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
        >
          Call Now
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://www.facebook.com/trong.nhan.108847" target="_blank" rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-all transform hover:scale-110">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/trnhan.nh/" target="_blank" rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-4 rounded-full transition-all transform hover:scale-110">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="https://github.com/TrongNhan1003" target="_blank" rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 p-4 rounded-full transition-all transform hover:scale-110">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.08 1.84 1.25 1.84 1.25 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="bg-gray-900 text-white py-8 relative">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="text-gray-400">
      © 2025 Nguyễn Hồ Trọng Nhân. Designed with ❤️ and lots of ☕
    </p>
  </div>

  {/* Back to Top button */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 
               flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
  >
    ↑
  </button>
</footer>


</div>
);
};


export default Portfolio;