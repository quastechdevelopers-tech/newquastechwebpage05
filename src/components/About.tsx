import { motion, type Variants } from "framer-motion";
import React from "react"; // Import React for useMemo
import {
  Award,
  Users,
  Globe,
  BookOpen,
  Trophy,
  GraduationCap,
  DollarSign,
  Monitor,
  UserCheck,
  FolderOpen,
  Presentation,
  Briefcase,
  HeadphonesIcon,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";

// --- Reusable Marquee Component (animation speed is now faster) ---

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "normal" | "slow" | "fast";
}

const Marquee = ({
  children,
  direction = "left",
  speed = "normal",
}: MarqueeProps) => {
  const duration =
    speed === "slow" ? 45 : speed === "fast" ? 12 : 25;

  // Create enough duplicates to ensure seamless loop - more duplicates for smoother animation
  const duplicatedChildren = React.useMemo(() => [
    children, children, children, children, children, children, children, children, children, children
  ], [children]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, "-100%"] : [0, "100%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};


// --- Main About Component ---

const About = () => {
  // --- Data Arrays (unchanged) ---
  const whyUsFeatures = [
    { icon: GraduationCap, image: "/images/WhyChooseus/industrialrequirement.png", title: "Industry Requirement", description: "Industry-focused syllabus with practical approach and latest technologies", color: "from-blue-500 to-indigo-600" },
    { icon: DollarSign, image: "/images/WhyChooseus/costeffective.png", title: "Cost Effective", description: "Affordable fees with high-quality training and industry-relevant content", color: "from-green-500 to-teal-600" },
    { icon: Monitor, image: "/images/WhyChooseus/onlineoffline-training.png", title: "Online/Offline Training", description: "Flexible learning options with both online and offline modes of training", color: "from-orange-500 to-pink-600" },
    { icon: UserCheck, image: "/images/WhyChooseus/expertraning.png", title: "Expert Trainer", description: "Experienced mentors guiding students with real industry insights", color: "from-purple-500 to-fuchsia-600" },
    { icon: FolderOpen, image: "/images/WhyChooseus/projectassesment.png", title: "Projects & Assessment", description: "Real-world projects & assessments to meet Industry demands", color: "from-cyan-500 to-blue-600" },
    { icon: Presentation, image: "/images/WhyChooseus/guest leacture.png", title: "Guest Lecture", description: "Sessions by industry professionals sharing valuable insights & case studies", color: "from-indigo-500 to-pink-500" },
    { icon: Briefcase, image: "/images/WhyChooseus/placementlogopre.png", title: "Placement", description: "Strong placement support with resume building & HR interview preparations", color: "from-emerald-500 to-cyan-600" },
    { icon: HeadphonesIcon, image: "/images/WhyChooseus/continous suport.png", title: "Continuous Support", description: "Lifetime support, mentorship, and guidance even after placement", color: "from-rose-500 to-red-600" },
  ];
  // const achievements = [
  //   { icon: Users, value: "5000+", label: "Students Trained", color: "from-blue-500 to-cyan-500" },
  //   { icon: Award, value: "95%", label: "Placement Rate", color: "from-emerald-500 to-teal-500" },
  //   { icon: Globe, value: "500+", label: "Company Partners", color: "from-purple-500 to-pink-500" },
  //   { icon: BookOpen, value: "20+", label: "Courses Offered", color: "from-orange-500 to-red-500" }
  // ];
  const milestones = [
    { year: "2015", event: "QUASTECH Founded", description: "Started with a vision to transform IT education", icon: Star },
    { year: "2017", event: "ISO 9001:2015 Certified", description: "Achieved international quality standards", icon: Shield },
    { year: "2019", event: "First 1000 Placements", description: "Reached the milestone of 1000 successful placements", icon: Trophy },
    { year: "2021", event: "Online Learning Platform", description: "Launched comprehensive online learning platform", icon: Monitor },
    { year: "2023", event: "AI-Powered Courses", description: "Introduced cutting-edge AI and ML courses", icon: Zap },
    { year: "2024", event: "5000+ Alumni Network", description: "Built a strong network of successful professionals", icon: TrendingUp },
  ];
  const techCards = [
    "/images/icons/HTML.png",
    "/images/icons/CSS.png",
    "/images/icons/JS.png",
    "/images/icons/TS.png",
    "/images/icons/angular.png",
    "/images/icons/react.png",
    "/images/icons/node%20js.png",
    "/images/icons/express%20js.png",
    "/images/icons/rest.png",
    "/images/icons/Boot.png",
    "/images/icons/ASP%20net.png",
    "/images/icons/full%20stack%20java%20development.png",
    "/images/icons/mean%20logo.png",
    "/images/icons/mearn%20logo.png",
    "/images/icons/python.png",
    "/images/icons/pandsa.png",
    "/images/icons/django.png",
    "/images/icons/flask.png",
    "/images/icons/ai.png",
    "/images/icons/Mysql.png",
    "/images/icons/SQLZ.png",
    "/images/icons/mango%20db.png",
    "/images/icons/BI.png",
    "/images/icons/postman.png",
    "/images/icons/docker.png",
    "/images/icons/git.png",
    "/images/icons/github.png",
    "/images/icons/jira.png",
    "/images/icons/jmeter.png",
    "/images/icons/jenkis.png",
    "/images/icons/istq.png",
    "/images/icons/se.png",
    "/images/icons/loc.png",
    "/images/icons/C.png",
    "/images/icons/C%2B%2B.png",
    "/images/icons/MS.png",
    "/images/icons/AM.png",
    "/images/icons/num.png",
    "/images/icons/x.png",
    "/images/icons/yi.png"
  ];
  // --- Enhanced Reusable Components ---
  const Card = ({
    children, className = "", ...props
  }: {
    children: React.ReactNode; className?: string;[key: string]: any;
  }) => (
    <motion.div
      whileHover={{
        y: -15,
        scale: 1.02,
        rotateX: 5,
        rotateY: 2,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.4
        }
      }}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-500 ${className}`}
      {...props}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-slate-100/20 group-hover:from-blue-50/30 group-hover:via-white/20 group-hover:to-orange-50/30 transition-all duration-700"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-orange-400 rounded-full"
          animate={{
            y: [0, -8, 0],
            opacity: [0, 1, 0],
            scale: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 1
          }}
        />
      </div>

      {children}
    </motion.div>
  );

  const CardContent = ({ children }: { children: React.ReactNode }) => (
    <div className="p-6 md:p-8 relative z-10 flex flex-col h-full">{children}</div>
  );

  // --- Simple Animation Variants for Single Line Animation ---
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <section id="about" className="relative pt-0 pb-7">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* UNIFIED HERO SECTION - REMOVED/COMMENTED OUT */}
          {/* <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section-header"
          >
             <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold uppercase bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg mb-6 tracking-widest text-sm"
              >
                <Award className="w-5 h-5 text-white drop-shadow" />
                <span>ABOUT QUASTECH</span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="heading-institute"
              >
                Leading the Future of IT Education
              </motion.h1>
              <div className="section-divider" />
              <motion.p
                variants={itemVariants}
                className="section-subtitle"
              >
                Since 2015, QUASTECH has been at the forefront of IT education, transforming lives and careers through innovative learning experiences.
              </motion.p>
          </motion.div> */}

          {/* About Quastech - Image and Description Section - REMOVED/COMMENTED OUT */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
                      About QUASTECH
                    </span>
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mb-6" />
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-blue-600">Quastech (Future Through Innovations)</strong> established by <strong>Mrs. Navdeep Kaur</strong> with the motive <em className="text-orange-600">"To Provide excellent & smart working professional to IT industry"</em> Candidate who has an excellent command of Software Technology.
                  </p>

                  <p className="text-lg">
                    Quastech conducts unique and professional training for graduates and postgraduates, we are specialized in real-time industry training with the added advantage of domain knowledge. We believe in well-organized, Systematized and Standardized training.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 mt-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Award className="w-6 h-6 text-blue-600" />
                      <span className="bg-gradient-to-r from-[#6B5B95] via-[#9B6B8F] to-[#8B5A5A] bg-clip-text text-transparent">
                        SPECIALITY
                      </span>
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">Specialized and certified Faculty for each course.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">Training is 100% based on current industry requirements and real-time projects.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">Apart from technical knowledge, Quastech believes in the overall growth of the candidates.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div> */}

          {/* UNIFIED WHY US SECTION */}
          <div className="section-unified pb-6 md:pb-8">

            <div className="section-header -mt-4">
              <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                WHY CHOOSE US
              </div>
            </div>
            {/* UNIFIED GRID LAYOUT - Why Choose Us */}
            <div className="grid-features">
              {whyUsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group cursor-pointer"
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 2,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      duration: 0.3
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="card-unified hover-lift">
                    <div className="card-content h-full flex flex-col items-center text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 flex items-center justify-center">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-300">
                        {feature.description}
                      </p>

                      <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
            {achievements.map((achievement, index) => (
              <Card key={achievement.label} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={achievementCardVariants}>
                <CardContent className="text-center">
                  <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }} className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${achievement.color} p-3 md:p-4 mx-auto mb-4 md:mb-6 shadow-lg`}>
                    <achievement.icon className="w-full h-full text-white" />
                  </motion.div>
                  <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    {achievement.value}
                  </div>
                  <div className="text-sm md:text-base text-slate-600 font-medium">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div> */}

          {/* Enhanced Technologies Section */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-5 md:py-7"
          >
            <motion.div variants={itemVariants} className="section-header">
              <h2 className="heading-institute-lg">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Technologies We Master
                </span>
              </h2>
              <p className="section-subtitle">
                Our curriculum is built on the most in-demand technologies in the industry.
              </p>
            </motion.div>

            {/* Continuous Advertisement-Style Animation */}
            <div className="relative overflow-hidden py-4">
              <motion.div
                className="flex gap-4 md:gap-6 lg:gap-8"
                animate={{
                  x: [0, -1000]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
                style={{ width: "max-content" }}
              >
                {/* First set of cards */}
                {techCards.map((logo, index) => (
                  <div
                    key={`set1-${index}`}
                    className="flex-shrink-0 w-28 sm:w-32 lg:w-36"
                  >
                    <div className="w-full h-24 sm:h-28 lg:h-32 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <img
                        src={logo}
                        alt="technology logo"
                        className="max-w-[85%] max-h-[85%] object-contain"
                      />
                    </div>
                  </div>
                ))}

                {/* Second set of cards for seamless loop */}
                {techCards.map((logo, index) => (
                  <div
                    key={`set2-${index}`}
                    className="flex-shrink-0 w-28 sm:w-32 lg:w-36"
                  >
                    <div className="w-full h-24 sm:h-28 lg:h-32 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <img
                        src={logo}
                        alt="technology logo"
                        className="max-w-[85%] max-h-[85%] object-contain"
                      />
                    </div>
                  </div>
                ))}

                {/* Third set for extra smoothness */}
                {techCards.map((logo, index) => (
                  <div
                    key={`set3-${index}`}
                    className="flex-shrink-0 w-28 sm:w-32 lg:w-36"
                  >
                    <div className="w-full h-24 sm:h-28 lg:h-32 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <img
                        src={logo}
                        alt="technology logo"
                        className="max-w-[85%] max-h-[85%] object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline Section (already responsive) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          >
            {/* ... Your original Timeline content ... */}
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;