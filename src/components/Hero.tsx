import { motion } from "framer-motion";
import { useState } from "react";
import { User, Mail, Phone, Send, Download } from "lucide-react";
import BrochureModal from "./BrochureModal";

const HeroBackground = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
    {/* Clean Professional Hero Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
    
    {/* Subtle Overlay for Better Text Contrast */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-orange-900/20" />
    
    {/* Professional Mesh Overlay - Reduced Opacity */}
    <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
    
    {/* Subtle Grid Pattern - Reduced Opacity */}
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    
    {/* Professional Floating Elements - Reduced Opacity */}
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  </div>
);

// Dark Professional Floating Elements Component
const FloatingElements = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Dark Professional Geometric Shapes */}
    <motion.div
      className="absolute top-20 left-10 w-10 h-10 border border-blue-400/20 rounded-lg"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    
    <motion.div
      className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-full"
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    <motion.div
      className="absolute bottom-40 left-20 w-12 h-12 border border-orange-400/15 rounded-full"
      animate={{
        rotate: [0, -360],
        scale: [1, 0.9, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    
    {/* Subtle Glowing Lines */}
    <motion.div
      className="absolute top-60 right-40 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
      animate={{
        scaleX: [0, 1, 0],
        opacity: [0, 0.4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 1,
      }}
    />
    
    <motion.div
      className="absolute bottom-60 left-40 w-20 h-0.5 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent"
      animate={{
        scaleX: [0, 1, 0],
        opacity: [0, 0.4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 2,
      }}
    />
  </div>
);

// Company Logos Component with Auto-sliding Animation
const CompanyLogos = () => {
  const companies = [
    { name: "Ai x", logo: "/images/companypng/1.png" },
    { name: "Tech Mahindra", logo: "/images/companypng/2.png" },
    { name: "CyberTech", logo: "/images/companypng/3.png" },
    { name: "CRMNEXT", logo: "/images/companypng/4.png" },
    { name: "AQM", logo: "/images/companypng/5.png" },
    { name: "Accenture", logo: "/images/companypng/6.png" },
    { name: "Capgemini", logo: "/images/companypng/7.png" },
    { name: "Infosys", logo: "/images/companypng/8.png" },
    { name: "Indieboon Avenues", logo: "/images/companypng/10.png" },
    { name: "Misco", logo: "/images/companypng/11.png" },
    { name: "Auditime", logo: "/images/companypng/12.png" },
    { name: "Plan IT", logo: "/images/companypng/13.png" },
    { name: "TCS", logo: "/images/companypng/14.png" },
    { name: "Immgate", logo: "/images/companypng/15.png" },
    { name: "2M Technologies", logo: "/images/companypng/16.png" },
    { name: "Nucsoft", logo: "/images/companypng/17.png" },
    { name: "SurePrep", logo: "/images/companypng/19.png" },
    { name: "TurtleDove", logo: "/images/companypng/20.png" },
    { name: "SWQA", logo: "/images/companypng/21.png" },
    { name: "Axioned", logo: "/images/companypng/22.png" },
    { name: "icrux System", logo: "/images/companypng/23.png" },
    { name: "Winsoft", logo: "/images/companypng/24.png" },
    { name: "Tax Genie", logo: "/images/companypng/25.png" },
    { name: "Aurionpro", logo: "/images/companypng/26.png" },
    { name: "Adapty", logo: "/images/companypng/28.png" },
    { name: "Xanthus", logo: "/images/companypng/29.png" },
    { name: "Nimap Infotech", logo: "/images/companypng/30.png" },
    { name: "Cateina", logo: "/images/companypng/31.png" },
    { name: "Dell Technologies", logo: "/images/companypng/32.png" },
    { name: "Agaetis", logo: "/images/companypng/33.png" },
    { name: "CM Thoughts", logo: "/images/companypng/34.png" },
    { name: "ATCS", logo: "/images/companypng/35.png" },
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mb-6 sm:mb-8 w-full"
      >
        <div className="overflow-hidden w-full">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-4 sm:gap-6 lg:gap-8 w-max"
          >
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-white border border-gray-200 hover:border-orange-400/50 transition-all duration-700 min-w-[100px] sm:min-w-[120px] lg:min-w-[150px] h-14 sm:h-16 lg:h-20 px-3 sm:px-4 lg:px-6 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 flex-shrink-0"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="max-h-10 sm:max-h-12 lg:max-h-16 max-w-[80px] sm:max-w-[100px] lg:max-w-[130px] object-contain transition-all duration-700 filter hover:brightness-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `
🎓 *QUASTECH Enquiry Form*
━━━━━━━━━━━━━━━━━━━
📱 Mobile: ${formData.phone}
👤 Name: ${formData.name}
📧 Email: ${formData.email}
━━━━━━━━━━━━━━━━━━━
Please provide course details and guidance.
    `.trim();
    
    const encodedMessage = encodeURIComponent(message);
    
    // QUASTECH WhatsApp number
    const whatsappNumber = "918422800381";
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] sm:min-h-[90vh] md:min-h-[85vh] flex flex-col justify-center overflow-hidden text-white"
    >
      <HeroBackground />
      <FloatingElements />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 overflow-visible">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-1 lg:order-1 w-full overflow-visible"
            >
              {/* Main Heading */}
              <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-5 md:mb-6 text-white drop-shadow-lg"
  style={{ lineHeight: 1.3 }}
>
  <div className="block bg-gradient-to-r from-blue-300 via-blue-300 to-orange-500 bg-clip-text text-transparent mb-3 md:mb-4">
    India&apos;s Leading and Trusted
  </div>

  <div className="block bg-gradient-to-r from-blue-300 via-blue-300 to-orange-500 bg-clip-text text-transparent mb-3 md:mb-4">
    IT Training Institute Offering
  </div>

  <div className="block bg-gradient-to-r from-blue-300 via-blue-300 to-orange-500 bg-clip-text text-transparent mb-3 md:mb-4">
    Classroom &amp; Online Training
  </div>

  <div className="block bg-gradient-to-r from-blue-300 via-blue-300 to-orange-500 bg-clip-text text-transparent">
    with 100% Placement
  </div>
</motion.h1>



              {/* In Association With Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-wrap">
                  <span className="text-white/90 text-sm sm:text-base font-semibold underline decoration-white/50">
                    In association with:
                  </span>
                  <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                    {/* NSDC Logo */}
                    <motion.div
                      className="flex items-center justify-center bg-white rounded-lg px-4 py-2 sm:px-5 sm:py-3 shadow-lg hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <img
                        src="/uploads/nsdeimg01.jpg"
                        alt="NSDC Logo"
                        className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                      />
                    </motion.div>
                    {/* Skill India Logo */}
                    <motion.div
                      className="flex items-center justify-center bg-white rounded-lg px-4 py-2 sm:px-5 sm:py-3 shadow-lg hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <img
                        src="/uploads/skillindia--.jpg"
                        alt="Skill India Logo"
                        className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsModalOpen(true)}
                  className="relative bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 transition-all text-white font-bold rounded-xl px-6 py-3 sm:px-8 sm:py-4 shadow-lg hover:shadow-xl text-base sm:text-lg overflow-hidden group flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="relative z-10">BOOK YOUR DEMO</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.button>
              </motion.div>

            </motion.div>

            {/* RIGHT SIDE — PROFESSIONAL FORM CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex flex-col items-center justify-center order-2 lg:order-2 w-full"
            >
              {/* Abstract Line Art Design */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Orange Line Art - Top Right */}
                <motion.div
                  className="absolute top-8 right-8 w-24 h-24"
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.path
                      d="M20 20 L80 20 L80 40 L60 40 L60 60 L40 60 L40 80 L20 80 Z"
                      stroke="rgb(249 115 22)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                    <motion.path
                      d="M30 30 L70 30 L70 50 L50 50 L50 70 L30 70 Z"
                      stroke="rgb(249 115 22)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                  </svg>
                </motion.div>

                {/* Blue Line Art - Bottom Left */}
                <motion.div
                  className="absolute bottom-8 left-8 w-20 h-20"
                  animate={{
                    rotate: [0, -3, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.path
                      d="M25 25 L75 25 L75 45 L55 45 L55 65 L35 65 L35 75 L25 75 Z"
                      stroke="rgb(59 130 246)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8,
                      }}
                    />
                    <motion.path
                      d="M35 35 L65 35 L65 55 L45 55 L45 65 L35 65 Z"
                      stroke="rgb(59 130 246)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                    />
                  </svg>
                </motion.div>

                {/* Orange Line Art - Top Left */}
                <motion.div
                  className="absolute top-16 left-12 w-16 h-16"
                  animate={{
                    rotate: [0, 8, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.path
                      d="M30 30 L70 30 L70 50 L50 50 L50 70 L30 70 Z"
                      stroke="rgb(249 115 22)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.9, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                    />
                  </svg>
                </motion.div>

                {/* Blue Line Art - Bottom Right */}
                <motion.div
                  className="absolute bottom-16 right-12 w-18 h-18"
                  animate={{
                    rotate: [0, -6, 0],
                    scale: [1, 1.06, 1],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.path
                      d="M25 25 L75 25 L75 40 L60 40 L60 60 L40 60 L40 75 L25 75 Z"
                      stroke="rgb(59 130 246)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.7,
                      }}
                    />
                  </svg>
                </motion.div>
              </div>
              
              {/* Professional Form Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                }}
                className="w-full max-w-sm sm:max-w-md bg-white/98 backdrop-blur-xl border border-white/40 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden relative group"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Form Header */}
                <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-orange-600 p-4 text-center shadow-lg relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative z-10"
                  >
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">Get Started</h3>
                    <p className="text-white/90 text-xs drop-shadow-sm">
                      Fill the form to get started
                    </p>
                  </motion.div>
                </div>

                {/* Form Content */}
                <div className="p-3 sm:p-4 bg-gradient-to-br from-white to-gray-50">
                  <form className="space-y-2 sm:space-y-3" onSubmit={handleSubmit}>
                    {[
                      { id: "phone", type: "tel", placeholder: "Enter 10-digit Mobile Number", icon: Phone, label: "Mobile Number" },
                      { id: "name", type: "text", placeholder: "Your Full Name", icon: User, label: "Full Name" },
                      { id: "email", type: "email", placeholder: "e.g. yourname@gmail.com", icon: Mail, label: "Email Address" },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="space-y-1"
                      >
                        <label className="block text-gray-700 text-xs font-semibold">
                          {field.label} <span className="text-orange-500">*</span>
                        </label>
                        <motion.div 
                          className="relative group"
                          whileHover={{ scale: 1.01 }}
                          whileFocus={{ scale: 1.01 }}
                        >
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                            <field.icon className="w-3 h-3 text-white" />
                        </div>
                        <motion.input
                          type={field.type}
                          id={field.id}
                          value={formData[field.id]}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))
                          }
                          required
                          placeholder={field.placeholder}
                            className="w-full pl-10 sm:pl-12 pr-3 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 font-medium text-sm hover:border-gray-300"
                            whileFocus={{ scale: 1.005 }}
                        />
                    </motion.div>
                  </motion.div>
                ))}

                    {/* Professional Submit Button */}
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    boxShadow: "0 10px 25px -5px rgba(255, 140, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                      className="w-full py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 font-bold text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group relative text-sm"
                    >
                      <motion.div
                        animate={{ rotate: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Send className="w-4 h-4" />
                      </motion.div>
                      <span className="relative z-10">Submit</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.button>
              </form>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Logos at Bottom of Hero Section */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-8 -mt-4">
        <div className="max-w-7xl mx-auto">
          <CompanyLogos />
        </div>
      </div>


      <BrochureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brochureUrl="/Quastech-Course-Brochure.pdf"
        brochureImageUrl={encodeURI("/images/bookyourdemo/ChatGPT Image Nov 7, 2025, 03_09_34 PM (1)[1].png")}
        whatsappNumber="+919876543210"
      />
    </section>
  );
}