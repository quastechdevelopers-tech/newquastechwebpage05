import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  CheckCircle2,
  Clock,
  Users,
  Award,
  BookOpen,
  Code,
  Target,
  TrendingUp,
   ArrowRight,
  Star,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

const WebGraphicDesigning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseHighlights = [
    { icon: Clock, text: "3-6 Months Duration" },
    { icon: Users, text: "Live Project Training" },
    { icon: Award, text: "Industry Certification" },
    { icon: BookOpen, text: "Web Design Curriculum" }
  ];

  const curriculum = [
    "Web Design Fundamentals",
    "UI/UX Design Principles",
    "Adobe XD for Prototyping",
    "Figma for Web Design",
    "Sketch for Mac Users",
    "HTML5 & CSS3 Basics",
    "Responsive Web Design",
    "Mobile-First Design",
    "Wireframing & Mockups",
    "User Experience Design",
    "Web Typography",
    "Color Theory for Web"
  ];

  const careerOpportunities = [
    "Web Designer",
    "UI/UX Designer",
    "Web Graphic Designer",
    "Frontend Designer",
    "Digital Designer",
    "User Interface Designer"
  ];

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600  to-orange-500" />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-orange-100 bg-clip-text text-transparent">
                  Web Graphic Designing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Master web design and create stunning digital experiences
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {courseHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <highlight.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="tel:+918422800381"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
                <motion.a
                  href="mailto:info@quastech.in"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-orange-600 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Enroll Now
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Course Overview
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Web Graphic Designing program focuses on creating beautiful and functional web designs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Code, title: "Design Tools", desc: "Figma, Adobe XD, Sketch" },
                { icon: Target, title: "UI/UX Design", desc: "User interface & experience" },
                { icon: TrendingUp, title: "Responsive Design", desc: "Mobile-first approach" },
                { icon: Star, title: "Portfolio", desc: "Professional web portfolio" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Curriculum
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {curriculum.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Career Opportunities
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerOpportunities.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl text-center hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{role}</h3>
                    <p className="text-gray-600 text-sm">High demand role in web industry</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600  to-orange-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Ready to Master Web Design?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our comprehensive program and become a skilled web designer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+918422800381"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call +91 8422800381
                </motion.a>
                <motion.a
                  href="https://wa.me/918422800381"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-600 transition-colors flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default WebGraphicDesigning;







