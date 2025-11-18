import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Building,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

// Branch data
const branchesData = [
  {
    id: "Thane",
    name: "Thane Branch",
    address:
      "201, Anant Laxmi Chambers, Dada Patil Marg, opp. Waman Hari Pethe Jewellers, Thane (W), Maharashtra 400602",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9488881234!2d72.97089!3d19.19178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzMwLjQiTiA3MsKwNTgnMTUuMiJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionUrl: "https://www.google.com/search?q=quastech+thane",
  },
  {
    id: "Borivali",
    name: "Borivali Branch",
    address:
      "A/401, Court Chamber, Swami Vivekananda Rd, opp. Moksh Plaza, Borivali West, Maharashtra 400092",
    phone: "+91 8422800384",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9488881234!2d72.85581!3d19.23083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzUxLjAiTiA3MsKwNTEnMjAuOSJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionUrl: "https://www.google.com/search?q=quastech+borivali",
  },
  {
    id: "Vashi",
    name: "Vashi Branch",
    address:
      "Corporate Wing, Haware Fantasia Business Park, F-185(A, behind Inorbit Mall, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d73.00787!3d19.07618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM0LjIiTiA3M8KwMDAnMjguMyJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionUrl: "https://www.google.com/search?q=quastech+vashi",
  },
  {
    id: "Mohali",
    name: "Mohali Branch",
    address:
      "SCF 62, Third Floor, Phase 7, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062",
    phone: "+91 7208008461",
    email: "info@quastech.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.69124!3d30.70332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzEyLjAiTiA3NsKwNDEnMjguNSJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionUrl: "https://www.google.com/search?q=quastech+mohali",
  },
];

const ContactPage = () => {
  const [selectedBranch, setSelectedBranch] = useState("Thane");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*Contact Form Submission*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📱 *Phone:* ${formData.phone}\n📚 *Course Interest:* ${
      formData.course || "Not specified"
    }\n💬 *Message:* ${
      formData.message || "No additional message"
    }\n\nI would like to get in touch with you regarding the course.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "918422800381";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const currentBranch = branchesData.find((b) => b.id === selectedBranch);

  const contactCards = [
    {
      title: "Corporate Training",
      email: "corporate@quastech.in",
      icon: "🏢",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Student Query",
      email: "enquiry@quastech.in",
      icon: "🎓",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Admission Info",
      email: "admission@quastech.in",
      icon: "📝",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "HR & Placement",
      email: "hr@quastech.in",
      icon: "💼",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Become A Partner",
      email: "partners@quastech.in",
      icon: "🤝",
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: "Become Instructor",
      email: "instructor@quastech.in",
      icon: "👨‍🏫",
      color: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <DarkModeProvider>
      <SEO
        title="Contact Us - Get in Touch with QUASTECH"
        description="Contact QUASTECH IT Training Institute - Multiple branches across Mumbai, Mumbai, and Pune. Get course details, visit our centers, or enquire about placements. Call us or visit our locations for free career counseling."
        keywords="contact QUASTECH, IT training contact, course enquiry, visit training center, Mumbai IT institute contact, career counseling, free demo class"
        canonical="/contact"
        category="Contact"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" },
        ]}
      />
      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
      >
        <Header />

        {/* Animated Background Elements */}
        {/* make it absolute on mobile to avoid scroll issues, fixed only on large */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none lg:fixed lg:inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Banner */}
        <section className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-14 lg:pb-16 min-h-[420px] lg:min-h-[480px]">

          {/* Base gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-orange-900/20" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* big animated circles — hide on small if they overflow */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
             className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-gradient-to-br from-blue-600/20 to-orange-500/20 rounded-full blur-3xl"
          />

          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl w-full text-white relative text-center lg:text-left"
            >
              {/* Floating particles behind text (hide on very small) */}
              <div className="hidden sm:block">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.sin(i) * 20, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute w-2 h-2 rounded-full bg-white/30 blur-sm"
                    style={{
                      top: `${15 + i * 10}%`,
                      left: `${10 + i * 12}%`,
                    }}
                  />
                ))}
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-orange-100 bg-clip-text text-transparent border-l-4 border-orange-500 pl-4 inline-block text-left">
                  GET IN TOUCH
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto lg:mx-0 lg:pl-6"
              >
                In this competitive world where each industry demands more, we
                help you in transforming your skill base that drives measurable
                impact on your professional life.
              </motion.p>

              {/* Contact Details in Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
               className="mt-6 w-full lg:pl-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto lg:mx-0">
                  {/* Call Us */}
                  <motion.a
                    href="tel:+918422800381"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Call Us
                    </h3>
                    <p className="text-white/90 font-medium">
                      +91 8422800381
                    </p>
                  </motion.a>

                  {/* Email Us */}
                  <motion.a
                    href="mailto:info@quastech.in"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Email Us
                    </h3>
                    <p className="text-white/90 font-medium">
                      info@quastech.in
                    </p>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/918422800381"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-white/90 font-medium">
                      +91 8422800381
                    </p>
                  </motion.a>
                </div>

                <div className="text-center mt-6 pt-6 border-t border-white/20">
                  <p className="text-white/80 text-lg">
                    Available 24/7 for your career guidance needs
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE — mobile below, desktop right */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
               className="w-full flex justify-center lg:justify-end mb-4 lg:mb-0"
            >
               <div className="relative w-64 sm:w-80 md:w-96 lg:w-[500px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-2xl pointer-events-none"
                />
                <motion.img
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src="/images/studentreviewnamesaspercourses/contect us.png"
                  alt="Contact Us"
                  className="relative w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 sm:w-24 sm:h-24" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-3xl opacity-50 sm:w-24 sm:h-24" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                          Send Us A Message
                        </h3>
                        <p className="text-gray-600">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name *"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all outline-none"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address *"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all outline-none"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number *"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all outline-none"
                        />
                        <select
  name="course"
  value={formData.course}
  onChange={handleInputChange}
  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all outline-none"
>
  <option value="">Select Course</option>

  {/* =============================== */}
  {/*   E-CLASS COURSES               */}
  {/* =============================== */}
  <optgroup label="E-Class Courses">
    <option value="SOFTWARE TESTING TRAINING">SOFTWARE TESTING TRAINING</option>
    <option value="FULL STACK JAVA DEVELOPMENT TRAINING">FULL STACK JAVA DEVELOPMENT TRAINING</option>
    <option value="FULL STACK PYTHON DEVELOPMENT TRAINING">FULL STACK PYTHON DEVELOPMENT TRAINING</option>
    <option value="FULL STACK WEB DEVELOPMENT TRAINING">FULL STACK WEB DEVELOPMENT TRAINING</option>
    <option value="JAVA DEVELOPMENT TRAINING">JAVA DEVELOPMENT TRAINING</option>
    <option value="PYTHON DEVELOPMENT TRAINING">PYTHON DEVELOPMENT TRAINING</option>
    <option value="WEB DESIGNING TRAINING">WEB DESIGNING TRAINING</option>
    <option value="DATA SCIENCE WITH PYTHON">DATA SCIENCE WITH PYTHON</option>
    <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
  </optgroup>

  {/* =============================== */}
  {/*   DEGREE PROGRAMS               */}
  {/* =============================== */}
  <optgroup label="Degree Courses">
    <option value="BCA (Bachelor of Computer Applications)">
      BCA (Bachelor of Computer Applications)
    </option>
    <option value="Quastech Degree Program">Quastech Degree Program</option>
  </optgroup>

  {/* =============================== */}
  {/*   CERTIFICATION CATEGORIES      */}
  {/* =============================== */}
  <optgroup label="Certification Categories">
    <option value="Software Testing">Software Testing</option>
    <option value="Fullstack Development">Fullstack Development</option>
    <option value="Software Development">Software Development</option>
    <option value="Front End Development">Front End Development</option>
    <option value="Data Science & Analytics">Data Science & Analytics</option>
    <option value="Big Data Engineering / Other IT">
      Big Data Engineering / Other IT
    </option>
  </optgroup>

  {/* =============================== */}
  {/*   AI-ENABLED PLACEMENT COURSES  */}
  {/* =============================== */}
  <optgroup label="AI Placement Courses">
    <option value="Software Testing with AI">Software Testing with AI</option>
    <option value="Full Stack Java Development with AI">
      Full Stack Java Development with AI
    </option>
    <option value="Full Stack Python Development with AI">
      Full Stack Python Development with AI
    </option>
    <option value="Full Stack .NET Development with AI">
      Full Stack .NET Development with AI
    </option>
    <option value="Digital Marketing with AI">
      Digital Marketing with AI
    </option>
    <option value="Data Science with AI">Data Science with AI</option>
    <option value="Data Analytics with AI">Data Analytics with AI</option>
  </optgroup>

</select>

                      </div>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all outline-none resize-none"
                      />

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                    Why Contact Us?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Get personalized course recommendations",
                      "Schedule a free demo class",
                      "Discuss flexible payment options",
                      "Talk to our career counselors",
                      "Visit our training centers",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">
                          Monday - Saturday
                        </p>
                        <p className="text-gray-600">9:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Sunday</p>
                        <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Contact Departments
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`group relative bg-gradient-to-br ${card.color} backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl flex-shrink-0">{card.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {card.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a
                      href={`mailto:${card.email}`}
                      className="text-blue-600 hover:text-orange-600 font-semibold transition-colors inline-flex items-center gap-2 group-hover:gap-3"
                    >
                      {card.email}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-orange-500"
                      >
                        →
                      </motion.span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-12 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.5) 0%, transparent 50%)",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-white lg:w-1/2 text-center lg:text-left"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Stay Connected with Us!
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Follow our social media channels for the latest updates,
                  events, and exclusive content. Don't miss out — join our
                  community today!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="grid grid-cols-4 gap-4 lg:w-1/2 justify-items-center"
              >
                {[
                  {
                    Icon: Facebook,
                    link: "https://facebook.com/quastech",
                    color: "#1877F2",
                  },
                  {
                    Icon: Instagram,
                    link: "https://instagram.com/quastech",
                    color: "#E4405F",
                  },
                  {
                    Icon: Linkedin,
                    link: "https://linkedin.com/company/quastech",
                    color: "#0A66C2",
                  },
                  {
                    Icon: Youtube,
                    link: "https://youtube.com/@quastech",
                    color: "#FF0000",
                  },
                  {
                    Icon: Twitter,
                    link: "https://twitter.com/quastech",
                    color: "#000000",
                  },
                  {
                    Icon: MessageCircle,
                    link: "https://wa.me/918422800381",
                    color: "#25D366",
                  },
                  {
                    Icon: Mail,
                    link: "mailto:info@quastech.in",
                    color: "#EA4335",
                  },
                  {
                    Icon: Phone,
                    link: "tel:+918422800381",
                    color: "#4285F4",
                  },
                ].map(({ Icon, link, color }, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
                    style={{ backgroundColor: "white" }}
                  >
                    <Icon className="w-8 h-8" style={{ color }} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
                <Building className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-blue-600 tracking-wide">
                  OUR BRANCHES
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Visit Our Branches
                </span>
              </h2>
              <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600  to-orange-500 mb-3" />
              <p className="text-lg text-slate-600">
                Choose your nearest location
              </p>
            </motion.div>

            {/* Branch Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {branchesData.map((branch) => (
                <motion.button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 sm:px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                    selectedBranch === branch.id
                      ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-xl scale-105"
                      : "bg-white text-gray-700 shadow-md hover:shadow-lg"
                  }`}
                >
                  {branch.name}
                </motion.button>
              ))}
            </div>

            {/* Branch Details */}
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-6 bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {currentBranch?.name}
                  </h3>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
                  >
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{currentBranch?.address}</p>
                  </motion.div>

                  <motion.a
                    whileHover={{ x: 5, scale: 1.02 }}
                    href={`tel:${currentBranch?.phone}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 text-gray-700 hover:text-green-600 transition"
                  >
                    <Phone className="w-6 h-6 flex-shrink-0" />
                    {currentBranch?.phone}
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 5, scale: 1.02 }}
                    href={`mailto:${currentBranch?.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 text-gray-700 hover:text-orange-600 transition"
                  >
                    <Mail className="w-6 h-6 flex-shrink-0" />
                    {currentBranch?.email}
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.open(currentBranch?.directionUrl, "_blank")
                    }
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </motion.button>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                  <iframe
                    src={currentBranch?.map}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default ContactPage;

