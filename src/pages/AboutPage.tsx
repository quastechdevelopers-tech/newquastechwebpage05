import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Award,
  Users,
  Target,
  Eye,
  Heart,
  TrendingUp,
  Shield,
  Star,
  Zap,
  Globe,
  BookOpen,
  Trophy,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Rocket,
  Lightbulb,
  HandHeart,
  Clock,
  Code,
  Building2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BranchSection from "@/components/BranchSection";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

// Company logos for sliding effect
const companyList = [
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

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We've been a trusted name in IT education for over 15 years, consistently delivering quality training and outstanding placement results. Our track record speaks for itself with 10,000+ successful career transformations."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our curriculum to match industry demands, incorporating cutting-edge technologies and real-world projects. Our teaching methods combine traditional excellence with modern digital learning platforms."
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Every student matters. We provide personalized attention, dedicated mentorship, and comprehensive support throughout their learning journey. Our 95% placement rate reflects our commitment to student success."
    },
    {
      icon: Target,
      title: "Industry Alignment",
      description: "Our courses are designed in collaboration with industry experts and leading tech companies. We ensure our curriculum stays relevant, practical, and aligned with current market requirements and emerging technologies."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards of educational quality through ISO 9001:2015 certification, continuous improvement processes, and rigorous quality assurance measures. Our commitment to excellence ensures every student receives world-class training."
    }
  ];

  const achievements = [
    { icon: Users, value: "10,000+", label: "Students Trained", description: "Successfully trained and placed" },
    { icon: Building2, value: "800+", label: "Hiring Partners", description: "Trusted companies" },
    { icon: Trophy, value: "95%", label: "Placement Rate", description: "Career success rate" },
    { icon: Clock, value: "15+", label: "Years of Excellence", description: "Industry experience" },
    { icon: Award, value: "10 LPA", label: "Highest Package", description: "Top placement offer" },
    { icon: Globe, value: "5", label: "Cities", description: "Pan-India presence" }
  ];

  const whyChooseUs = [
    { icon: BookOpen, title: "Industry-Relevant Curriculum", description: "Updated courses aligned with current market demands and emerging technologies" },
    { icon: Users, title: "Expert Trainers", description: "Learn from industry professionals with 10+ years of real-world experience" },
    { icon: Briefcase, title: "100% Placement Support", description: "Dedicated placement cell with strong connections to top IT companies" },
    { icon: Code, title: "Hands-on Projects", description: "Real-world projects to build your portfolio and gain practical experience" },
    { icon: CheckCircle2, title: "Flexible Learning", description: "Online and offline modes to suit your schedule and learning preference" },
    { icon: Star, title: "Lifetime Support", description: "Continuous mentorship and career guidance even after course completion" }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "QUASTECH was founded with a vision to revolutionize IT education in India, bridging the gap between academic learning and industry requirements.",
      icon: Rocket
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management, establishing our commitment to excellence in education delivery.",
      icon: Shield
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Expanded to multiple cities with state-of-the-art training centers, bringing quality IT education closer to students across India.",
      icon: Globe
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched comprehensive online learning platform during pandemic, ensuring uninterrupted quality education for thousands of students.",
      icon: Zap
    },
    {
      year: "2022",
      title: "10K Students Milestone",
      description: "Celebrated training over 10,000 students, with many securing positions in top-tier companies including Google, Microsoft, Amazon, and TCS.",
      icon: GraduationCap
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as one of India's leading IT training institutes with 10,000+ successful placements and 800+ hiring partners.",
      icon: Star
    }
  ];

  return (
    <DarkModeProvider>
      <SEO 
        title="About QUASTECH - Leading IT Training Institute"
        description="Learn about QUASTECH - Mumbai's premier IT training institute with 10+ years of excellence, 5000+ students placed, and industry-leading courses. Discover our mission, vision, and commitment to transforming careers through quality education."
        keywords="about QUASTECH, IT training institute Mumbai, best software training center, placement success stories, IT education, professional training, coding bootcamp about us"
        canonical="/about"
        category="About"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />

        {/* Hero Banner with Gradient Background - Same as Hero Component */}
        <section className="relative px-4 pt-20 md:pt-24 pb-4 md:pb-6 overflow-hidden min-h-[350px] md:min-h-[420px] flex items-center">
          <div className="absolute inset-0 z-0">
            {/* Clean Professional Hero Gradient - Same as Hero Component */}
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

            {/* Animated Floating Elements */}
            <motion.div
              initial={{ y: 0, x: 0, rotate: 0 }}
              animate={{ 
                y: -20,
                x: 10,
                rotate: 8
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut" 
              }}
              className="absolute top-16 left-8 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full blur-3xl"
            />
            
            <motion.div
              initial={{ y: 0, x: 0, rotate: 0 }}
              animate={{ 
                y: 20,
                x: -10,
                rotate: -8
              }}
              transition={{ 
                duration: 9, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-12 right-8 w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full blur-3xl"
            />

            <motion.div
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ 
                scale: 1.15,
                opacity: 0.4
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-blue-600/20 to-orange-500/20 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6 items-center py-2">
            {/* Left Side - Text Content with 3D Effects */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              className="space-y-2 md:space-y-3"
            >
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-2xl mb-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                About Quastech
              </motion.h1>
              
              <motion.p
                className="text-base md:text-lg text-blue-200 leading-snug drop-shadow-lg mb-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Empowering Careers Through Excellence in IT Education
              </motion.p>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-sm md:text-base text-white/90 leading-snug">
                  Since 2010, we've been committed to transforming lives through quality education, industry-relevant training, and unwavering support for student success.
                </p>
                <p className="text-xs md:text-sm text-white/80 leading-snug">
                  QUASTECH (Future Through Innovations) is a leading IT training institute established with the mission "To Provide excellent & smart working professionals to IT industry."
                </p>
              </motion.div>

              {/* Stats Quick View */}
              <motion.div
                className="grid grid-cols-2 gap-2 pt-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {[
                  { value: "10,000+", label: "Students" },
                  { value: "800+", label: "Companies" },
                  { value: "95%", label: "Placement" },
                  { value: "15+", label: "Years" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-2.5 border border-white/20"
                    style={{ transformStyle: 'preserve-3d' }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: -3,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <div className="text-lg md:text-xl font-extrabold text-white mb-0.5">{stat.value}</div>
                    <div className="text-xs text-blue-200 font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Image with 3D Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <motion.div
                className="relative w-full max-w-md"
                whileHover={{
                  rotateY: -10,
                  rotateX: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  y: -10
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }
                }}
              >
                <div className="relative transform rotate-3 border-2 border-blue-400/50 rounded-xl overflow-hidden shadow-xl p-2 bg-gradient-to-br from-blue-500/20 to-transparent backdrop-blur-sm">
                  <img
                    src="/images/big-data-enegenering--training.png"
                    alt="Big Data Engineering Training"
                    className="w-full h-auto object-contain rounded-md max-h-[280px] md:max-h-[320px]"
                    onError={(e) => {
                      e.currentTarget.src = "/images/branches/IMG20240104153417.jpg";
                    }}
                  />
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-600/20 pointer-events-none rounded-md" />
                </div>

                {/* Floating Particles Effect */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${15 + (i % 2) * 30}%`,
                    }}
                    animate={{
                      y: -15,
                      opacity: 0.8,
                      scale: 1.3
                    }}
                    transition={{
                      y: {
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: i * 0.2
                      },
                      opacity: {
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: i * 0.2
                      },
                      scale: {
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: i * 0.2
                      }
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Us Section - Left Text, Right Image */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center md:text-left">
                About us
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                QUASTECH (Future Through Innovations) is a leading IT training institute established with the mission "To Provide excellent & smart working professionals to IT industry." We specialize in delivering unique and professional training for graduates and postgraduates, focusing on real-time industry training with domain knowledge.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Our training approach is well-organized, systematized, and standardized, ensuring every student receives quality education that prepares them for successful careers in the IT sector. We believe in the overall growth of candidates, combining technical expertise with professional development.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                With specialized and certified faculty for each course, our training is 100% based on current industry requirements and real-time projects. We take pride in our 95% placement rate and strong connections with 800+ hiring companies, helping over 10,000 students achieve their career goals.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/about_asset/images/AboutUs_iamge.jpg"
                  alt="Quastech Team"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/branches/IMG20240104153417.jpg";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
                  Our Achievements
                </span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                >
                  <achievement.icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-2">{achievement.value}</div>
                  <div className="text-sm font-medium text-gray-800 mb-1">{achievement.label}</div>
                  <div className="text-xs text-gray-600">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower individuals with industry-relevant skills and practical knowledge, enabling them to excel in the ever-evolving IT landscape. We bridge the gap between academic learning and industry requirements through hands-on training and real-world projects.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-900">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be India's most trusted and innovative IT education provider, recognized for producing job-ready professionals who drive technological advancement. We aspire to create a future where quality IT education is accessible to all aspiring tech professionals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
                  Our Core Values
                </span>
              </h2>
              <p className="text-gray-600">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
                  Why Choose QUASTECH?
                </span>
              </h2>
              <p className="text-gray-600">What makes us the preferred choice for IT education</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-100 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline with 3D Effect - NEW DESIGN YOU LIKED */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">Journey</span>
              </h2>
              <p className="text-gray-300 text-lg">Milestones in our path to excellence</p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-orange-500 hidden md:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.05, rotateZ: 2 }}
                        className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-blue-500/30 group hover:border-orange-500/50 transition-colors duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 shadow-lg shadow-blue-500/30">
                            <milestone.icon className="w-6 h-6 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text mb-2">
                              {milestone.year}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>

                        {/* 3D Decoration */}
                        <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                      </motion.div>
                    </div>

                    {/* Center Timeline Dot */}
                    <div className="hidden md:block">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 shadow-lg shadow-blue-500/50 ring-4 ring-slate-900" />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Partners Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
                  Our Hiring Partners
                </span>
              </h2>
              <p className="text-gray-600">Trusted by leading companies across industries</p>
            </motion.div>

            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-8"
              >
                {[...companyList, ...companyList].map((company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-40 h-24 bg-white border-2 border-blue-100 hover:border-blue-500 rounded-lg p-4 flex items-center justify-center grayscale hover:grayscale-0 hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <BranchSection />
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default AboutPage;

