import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Users,
  Award,
  BookOpen,
  Code,
  Target,
  TrendingUp,
  Star,
  Phone,
  Mail,
  MessageCircle,
  X,
  Briefcase,
  Download,
  FileText,
  ChevronRight,
  Home,
  Plus,
  Minus,
  Database,
  Wrench,
  Calendar,
  MapPin,
  Laptop,
  MessageSquare,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  Monitor,
  UserCheck,
  CheckCircle,
  ClipboardList,
  Trophy,
  PresentationChartLine,
  FolderOpen,
  Certificate,
  ArrowUp,
  ArrowRight,
  UserCircle,
  BadgeCheck,
  Rocket
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { CourseStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";
import { useToast } from "@/hooks/use-toast";
import BranchSection from "@/components/BranchSection";
import CourseTechnologySection from "@/components/CourseTechnologySection";


const SoftwareTestingTraining = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with all form details
    const whatsappMessage = `*New Counselling Session Request*

- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Message: ${formData.message || 'No additional message'}
- Course Page: Software Testing Training

I am interested in booking a free counselling session. Please contact me at your earliest convenience.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "918422800381";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    console.log("Sending Counselling Request to WhatsApp:", whatsappMessage);
    const whatsappWindow = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    
    if (whatsappWindow) {
      toast({
        title: "WhatsApp opened",
        description: "Your counselling request is ready. Tap Send to share it.",
      });
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 2000);
    } else {
      toast({
        title: "Allow pop-ups",
        description: "Please enable pop-ups to send your request through WhatsApp.",
        variant: "destructive"
      });
      window.location.href = whatsappURL;
    }
  };

  // Hiring Partners logos from Placement component
  const partners = [
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

  const courseHighlights = [
    {
      title: "Pan India Placements",
      icon: MapPin,
      description: "Access to placement opportunities across India.",
    },
    {
      title: "80% Practical Training",
      icon: Laptop,
      secondaryIcon: Lightbulb,
      description: "Hands-on experience with real-world projects.",
    },
    {
      title: "2 Global Certifications",
      icon: Award,
      description: "Earn industry-recognized global certifications.",
    },
    {
      title: "Personalised Career Coach",
      icon: Users,
      secondaryIcon: Star,
      description: "Dedicated guidance for your career path.",
    },
    {
      title: "Instant Doubt Solving",
      icon: MessageSquare,
      secondaryIcon: Monitor,
      description: "Get your queries resolved instantly by experts.",
    },
    {
      title: "Alumni Network",
      icon: GraduationCap,
      secondaryIcon: Users,
      description: "Connect with a vast network of successful alumni.",
    },
    {
      title: " Interviews",
      icon: Users,
      secondaryIcon: HelpCircle,
      description: "Prepare for interviews across various domains.",
    },
    {
      title: "Profile Building Session",
      icon: FileText,
      secondaryIcon: UserCheck,
      description: "Enhance your professional profile for better opportunities.",
    },
  ];

  // Software Testing Curriculum Modules
  const curriculumModules = [
    {
      id: "module-1",
      title: "MySQL Database",
      category: "#Database",
      duration: "2 Weeks",
      topics: [
        "What is Data & Database",
        "DBMS vs RDBMS & Types of DBMS",
        "SQL Overview & Architecture",
        "Data Types & Operators",
        "DDL Commands (CREATE, ALTER, DROP)",
        "DML Commands (INSERT, UPDATE, DELETE)",
        "DCL & TCL (GRANT, REVOKE, COMMIT, ROLLBACK)",
        "DQL & Aggregate Functions",
        "Joins (Inner, Outer, Self, Cross)",
        "Subqueries & Nested Queries",
        "Constraints (PK, FK, Unique, Check)",
        "Stored Procedures & Functions",
        "Views & Materialized Views",
        "Database Triggers",
        "GROUP BY & HAVING Clauses"
      ]
    },
    {
      id: "module-2",
      title: "Basic Java",
      category: "#Programming",
      duration: "1 Week",
      topics: [
        "Introduction to Java, JVM & JDK",
        "Java Data Types & Type Casting",
        "Identifiers & Naming Conventions",
        "Variables, Scope & Lifetime",
        "Operators & Expressions",
        "Control Statements (if, switch)",
        "Loop Constructs (for, while, do-while)",
        "Arrays & String Handling",
        "Methods, Parameters & Return Types"
      ]
    },
    {
      id: "module-3",
      title: "Manual Testing",
      category: "#Testing",
      duration: "5 Weeks",
      topics: [
        "Introduction & Principles of Software Testing",
        "SDLC Models & QA vs QC",
        "Verification & Validation Concepts",
        "STLC Phases (Requirement to Closure)",
        "Test Levels & Test Types",
        "Requirement Analysis & Test Planning",
        "Test Scenario & Test Case Design",
        "Reviews, Walkthroughs & Inspections",
        "Defect Life Cycle & Reporting",
        "Test Metrics, Traceability & Reporting"
      ]
    },
    {
      id: "module-4",
      title: "Manual Testing Project",
      category: "#Project",
      duration: "3 Weeks",
      topics: [
        "Application Walkthrough & Requirement Study",
        "Test Case Documentation & Reviews",
        "Bug Logging & Defect Triage",
        "Test Execution, Reporting & Sign-off"
      ]
    },
    {
      id: "module-5",
      title: "JIRA",
      category: "#Tools",
      duration: "1 Week",
      topics: [
        "JIRA Introduction & Installation",
        "Project Setup & Configuration",
        "Issue Types, Workflows & Boards",
        "Sprint Planning & Backlog Grooming",
        "Defect Management & Reporting",
        "Xray Installation & Configuration",
        "Test Case Management & Traceability",
        "Dashboards & Custom Reports"
      ]
    },
    {
      id: "module-6",
      title: "API Testing",
      category: "#Tools",
      duration: "1 Week",
      topics: [
        "API & Web Services Fundamentals",
        "REST vs SOAP Architecture",
        "Postman Workspace Setup",
        "Request, Headers & Payload Design",
        "API Response Validations & Assertions",
        "Environment, Global & Collection Variables",
        "Automating Collections & Test Suites",
        "Documentation & Reporting"
      ]
    },
    {
      id: "module-7",
      title: "JMeter",
      category: "#Tools",
      duration: "1 Week",
      topics: [
        "Performance Testing Fundamentals",
        "JMeter Installation & UI Overview",
        "Test Plan & Thread Group Design",
        "Samplers, Controllers & Config Elements",
        "Assertions, Timers & Listeners",
        "Parameterization with CSV Data",
        "JDBC Connectivity & Database Testing",
        "Performance Reports & Analysis"
      ]
    },
    {
      id: "module-8",
      title: "Advance Java & OOPs",
      category: "#Programming",
      duration: "2 Weeks",
      topics: [
        "OOP Concepts & Pillars",
        "Classes, Objects & Constructors",
        "Method Overloading & Overriding",
        "Inheritance (Single, Multilevel, Hierarchical)",
        "Polymorphism (Compile-time & Runtime)",
        "Encapsulation & Abstraction",
        "Interfaces & Abstract Classes",
        "this, super, static & final keywords",
        "Exception Handling & Collections Overview"
      ]
    },
    {
      id: "module-9",
      title: "Selenium WebDriver Automation",
      category: "#Automation",
      duration: "5 Weeks",
      topics: [
        "Introduction to Automation Testing",
        "Selenium Architecture & Components",
        "Setting Up Selenium WebDriver",
        "Locators Strategy & WebDriver Methods",
        "Handling Checkbox, Radio Button & Text Box",
        "Dropdowns, Alerts & Multiple Windows",
        "Implicit, Explicit & Fluent Waits",
        "Actions Class & Advanced User Interactions",
        "Screenshots, Logs & Reporting",
        "Page Object Model & Page Factory",
        "Data Driven Framework with Apache POI",
        "Keyword & Hybrid Driven Frameworks",
        "Database Testing Integration",
        "TestNG (Annotations, Parameters, Assertions)",
        "BDD with Cucumber Overview",
        "Maven Build Management",
        "Jenkins"
      ]
    },
    {
      id: "module-10",
      title: "Automation Project",
      category: "#Project",
      duration: "1 Week",
      topics: [
        "Framework Design End-to-End",
        "Test Data & Environment Management",
        "Continuous Integration Demo",
        "Reporting, Metrics & Sign-off"
      ]
    },
    {
      id: "module-11",
      title: "Jenkins",
      category: "#DevOps",
      duration: "4 Hours (Sundays Only)",
      topics: [
        "Jenkins Overview & Installation",
        "Creating & Scheduling Pipelines",
        "Integrating Maven, TestNG & Selenium",
        "Automated Test Execution & Reporting"
      ]
    }
  ];

  const careerOpportunities = [
    "Software Test Engineer",
    "QA Analyst",
    "Test Automation Engineer",
    "Performance Test Engineer",
    "Mobile App Tester",
    "API Test Engineer"
  ];

  return (
    <DarkModeProvider>
      <SEO 
        title="Software Testing Training Course with Placement"
        description="Master Software Testing with comprehensive training in Manual Testing, Selenium, Automation Testing, API Testing, and ISTQB certification. Get hands-on experience with real projects and 100% placement assistance at QUASTECH."
        keywords="software testing course, selenium training, automation testing, manual testing, ISTQB certification, QA testing course, software testing training Mumbai, testing certification"
        canonical="/software-testing-training"
        ogImage="/images/software testing/software testing.png"
        category="IT Courses"
      />
      <CourseStructuredData 
        name="Software Testing Training Course"
        description="Complete Software Testing training covering Manual Testing, Automation Testing with Selenium, API Testing, Performance Testing, and ISTQB certification preparation with guaranteed placement support."
        url="https://quastech.co.in/software-testing-training"
        duration="P4M"
        courseMode="blended"
        image="https://quastech.co.in/images/software testing/software testing.png"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Courses", url: "/#courses" },
          { name: "Software Testing Training", url: "/software-testing-training" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <Header />
        
        {/* Hero Banner Section - Rectangular Banner */}
        <section 
          className="relative w-full min-h-[600px] md:h-[600px] flex items-center overflow-hidden py-8 md:py-0"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)'
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10 w-full container mx-auto px-4 py-4">
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-center h-full">
              {/* Left Content Section */}
              <div className="relative z-10 flex flex-col space-y-5 md:space-y-7">
                {/* Breadcrumbs */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-white/90 text-sm -mt-2 mb-5 md:mb-7"
                >
                  <Link to="/" className="hover:text-white flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span>IT Courses</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white font-semibold">Software Testing Training Program</span>
                </motion.div>

                {/* Course Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2"
                >
                  Software Testing Training Program
                </motion.h1>

                {/* Course Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg text-white/90 max-w-2xl mb-5"
                >
                  Learn how to master software testing and quality assurance. Enroll now to learn from expert test engineers and get industry-ready.
                </motion.p>

                {/* Ratings Section */}
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="space-y-3 mb-2"
               >
                 {/* Main Rating Row */}
                 <div className="flex items-center gap-3 flex-wrap mb-2">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                   ))}
                   <span className="text-white font-semibold text-base">4.8 out of 5</span>
                 </div>
               
                 {/* Platform Ratings Row */}
                 <div className="flex items-center gap-3 flex-wrap mb-2">
                   {[
                     {
                       id: "google",
                       name: "Google",
                       rating: "4.8 / 5",
                       abbrev: "G",
                       color: "#4285F4",
                       url: "https://g.page/r/CYpuYaIzlF7AEAE/review"
                     },
                     {
                       id: "facebook",
                       name: "Facebook",
                       rating: "4.9 / 5",
                       abbrev: "f",
                       color: "#1877F2",
                       url: "https://www.facebook.com/Quastech/"
                     },
                     {
                       id: "justdial",
                       name: "Just Dial",
                       rating: "4.8 / 5",
                       abbrev: "JD",
                       color: "#F28C00",
                       url: "https://www.justdial.com/Thane/Quastech-IT-Institute-Opp-Waman-Hari-Pethe-Jewellers-Thane-West/022PXX22-XX22-180515154522-L9N1_BZDET"
                     },
                     {
                       id: "glassdoor",
                       name: "Glassdoor",
                       rating: "4.7 / 5",
                       abbrev: "GD",
                       color: "#0CAA41",
                       url: "https://www.glassdoor.co.in/Reviews/QUASTECH-Thane-Reviews-"
                     }
                   ].map((platform) => (
                     <motion.button
                       key={platform.id}
                       className="flex items-center gap-2 bg-white rounded-full 
                                  px-3 py-1.5 cursor-pointer border border-gray-200 
                                  hover:bg-gray-50 transition-all duration-200 shadow-sm"
                       whileHover={{ scale: 1.03 }}
                       whileTap={{ scale: 0.98 }}
                       type="button"
                       onClick={() => window.open(platform.url, "_blank")}
                     >
                       {/* small circle abbrev */}
                       <div
                         className="w-6 h-6 rounded-full flex items-center justify-center 
                                    bg-gray-100 text-xs font-bold"
                         style={{ color: platform.color }}
                       >
                         {platform.abbrev}
                       </div>
               
                       {/* name + rating */}
                       <div className="flex items-center gap-2">
                         <span
                           className="text-xs font-semibold"
                           style={{ color: platform.color }}
                         >
                           {platform.name}
                         </span>
                         <span className="text-yellow-500 font-semibold text-xs">
                           {platform.rating}
                         </span>
                       </div>
                     </motion.button>
                   ))}
                 </div>
               </motion.div>

                {/* Course Details Section */}



                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 mb-4"
                >
                  {/* Course Details Box */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 grid grid-cols-3 gap-2 md:gap-3 border border-white/20">
                    <div className="text-center">
                      <div className="text-base md:text-xl font-bold text-white">5.5 Month</div>
                      <div className="text-white/80 text-[10px] md:text-xs mt-1">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs md:text-xl font-bold text-white leading-tight">Online/Offline</div>
                      <div className="text-white/80 text-[10px] md:text-xs mt-1">Format</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base md:text-xl font-bold text-white">LMS</div>
                      <div className="text-white/80 text-[10px] md:text-xs mt-1">Only Access</div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
               <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 pt-3"
>

  {/* 1) SELECT COURSES */}
  <motion.button
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.02 }}
    className="w-full md:w-auto text-white font-semibold px-5 py-3 rounded-md 
               bg-orange-500 hover:bg-orange-400 shadow-sm transition-colors duration-150 
               flex items-center justify-center gap-2 text-sm"
    type="button"
  >
    SELECT COURSES
    <ArrowRight className="w-4 h-4" />
  </motion.button>

  {/* 2) LEARN FROM EXPERTS */}
  <motion.button
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.02 }}
    className="w-full md:w-auto text-white font-semibold px-5 py-3 rounded-md 
               bg-blue-600 hover:bg-blue-500 shadow-sm transition-colors duration-150 
               flex items-center justify-center gap-2 text-sm"
    type="button"
  >
    LEARN FROM EXPERTS
    <ArrowRight className="w-4 h-4" />
  </motion.button>

  {/* 3) PROJECTS */}
  <motion.button
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.02 }}
    className="w-full md:w-auto text-white font-semibold px-5 py-3 rounded-md 
               bg-teal-500 hover:bg-teal-400 shadow-sm transition-colors duration-150 
               flex items-center justify-center gap-2 text-sm"
    type="button"
  >
    PROJECTS
    <ArrowRight className="w-4 h-4" />
  </motion.button>

  {/* ⭐ 4) MOCK & ASSESSMENT (NEW BUTTON) */}
  <motion.button
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.02 }}
    className="w-full md:w-auto text-white font-semibold px-5 py-3 rounded-md 
               bg-purple-600 hover:bg-purple-500 shadow-sm transition-colors duration-150 
               flex items-center justify-center gap-2 text-sm"
    type="button"
  >
    MOCK & ASSESSMENT
    <ArrowRight className="w-4 h-4" />
  </motion.button>

  {/* 5) INTERVIEW CALLS */}
  <motion.button
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.02 }}
    className="w-full md:w-auto text-white font-semibold px-5 py-3 rounded-md 
               bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-colors duration-150 
               flex items-center justify-center gap-2 text-sm"
    type="button"
  >
    <FileText className="w-4 h-4" />
    INTERVIEW CALLS
  </motion.button>

  {/* ⭐ 6) IS STUDENT PLACED (NEW LAST BUTTON) */}
  <motion.button
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.02 }}
    className="w-full md:w-auto text-white font-semibold px-5 py-3 rounded-md 
               bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-colors duration-150 
               flex items-center justify-center gap-2 text-sm"
    type="button"
  >
    <FileText className="w-4 h-4" />
    STUDENT PLACED
  </motion.button>

</motion.div>


              </div>

              {/* Right Side - Counselling Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative h-full flex items-center"
              >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full">
                  {/* Form Header - Blue Section */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 md:p-5 relative">
                    <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-white/20 absolute top-2 md:top-3 right-2 md:right-3" />
                    <div className="relative z-10">
                      <p className="text-white/90 text-[10px] md:text-xs mb-1">Book A Free</p>
                      <h2 className="text-lg md:text-2xl font-bold text-white mb-1 leading-tight">Counselling Session</h2>
                      <p className="text-white/80 text-[10px] md:text-xs">we train you to get hired.</p>
                    </div>
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleFormSubmit} className="p-5 space-y-3">
                    <div>
                      <Input
                        type="text"
                        placeholder="Full Name*"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full h-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full h-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-600 font-medium text-sm">(+91)</span>
                          <ChevronRight className="w-3 h-3 text-gray-400" />
                        </div>
                        <Input
                          type="tel"
                          placeholder="Phone No*"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="w-full h-11 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-all pl-20 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Message Details"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-all resize-none text-sm"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-11 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                    >
                      SUBMIT
                    </Button>
                  </form>
                </div>
            </motion.div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-8 md:py-12 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Course Overview
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Our Software Testing Training program is designed to provide you with comprehensive knowledge and hands-on experience in all aspects of software testing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Manual Testing", desc: "Learn fundamental testing concepts" },
                { icon: Code, title: "Automation Testing", desc: "Master Selenium and other tools" },
                { icon: TrendingUp, title: "Performance Testing", desc: "Optimize application performance" },
                { icon: Star, title: "Industry Best Practices", desc: "Follow industry standards" }
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
                  <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Specialization Buttons */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Explore Specialized Testing Courses
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our specialized training programs tailored to your career goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Manual Testing Button Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <Link to="/manual-testing">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 h-full flex flex-col">
                    {/* Icon Badge */}
                    <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative flex items-center justify-center">
                        <ClipboardList className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" strokeWidth={1.5} />
                        <CheckCircle className="w-6 h-6 text-blue-600 -ml-2 -mt-2 group-hover:scale-110 transition-transform" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800 group-hover:text-blue-600 transition-colors">
                      Manual Testing
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center mb-6 leading-relaxed flex-grow">
                      Master the fundamentals of manual testing with comprehensive training in test case design, defect management, SDLC, STLC, and QA methodologies. Perfect for beginners starting their testing career.
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>Test Case Design & Execution</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>Defect Management & Reporting</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>JIRA, API Testing & JMeter</span>
                      </div>
                    </div>

                    {/* Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Explore Manual Testing Course</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>

              {/* Automation Selenium Testing Button Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <Link to="/selenium-testing">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 h-full flex flex-col">
                    {/* Icon Badge */}
                    <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative flex items-center justify-center">
                        <Code className="w-12 h-12 text-orange-600 group-hover:text-orange-700 transition-colors" strokeWidth={1.5} />
                        <Rocket className="w-6 h-6 text-orange-600 -ml-2 -mt-2 group-hover:scale-110 transition-transform" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800 group-hover:text-orange-600 transition-colors">
                      Automation Selenium Testing
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center mb-6 leading-relaxed flex-grow">
                      Become an automation testing expert with hands-on training in Selenium WebDriver, Java, TestNG, Maven, Jenkins, and advanced automation frameworks. Ideal for advancing your testing career.
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>Selenium WebDriver & Java</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>TestNG, Maven & Jenkins CI/CD</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>POM, Data-Driven & Hybrid Frameworks</span>
                      </div>
                    </div>

                    {/* Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Explore Automation Testing Course</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum Section - Industry Oriented Design */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Software Testing Training Curriculum
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-[350px_1fr] gap-8 max-w-7xl mx-auto">
              {/* Left Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 text-white h-fit sticky top-24 shadow-xl"
              >
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Industry Oriented Curriculum</h3>
                <p className="text-white/90 mb-8 leading-relaxed text-sm">
                  Explore each topic in-depth through interactive sessions, real-world use cases, and tool-based learning. You'll not only understand the theory but also build practical skills that matter in actual roles.
                </p>

                {/* Stats Cards */}
                 <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">30+</div>
                        <div className="text-sm text-gray-600 font-medium">Case Studies & Projects</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Wrench className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">20+</div>
                        <div className="text-sm text-gray-600 font-medium">Languages & Tools</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">100+</div>
                        <div className="text-sm text-gray-600 font-medium">Live Sessions </div>
                      </div>
                    </div>
                  </div>
                </div>

               {/* <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </motion.button> */}
              </motion.div> 

              {/* Main Curriculum Content */}
              <div className="relative">
                {/* Vertical Timeline Line - Dashed */}
                <div 
                  className="absolute left-6 top-0 bottom-0 w-0.5 hidden lg:block"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 8px, #3b82f6 8px, #3b82f6 16px)'
                  }}
                />
                
                <div className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    {curriculumModules.map((module, index) => (
                      <AccordionItem
                        key={module.id}
                        value={module.id}
                        className="border border-blue-200 rounded-lg mb-4 bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden relative"
                      >
                        <AccordionTrigger className="px-6 py-5 hover:no-underline">
                          <div className="flex items-center justify-between w-full pr-4">
                            <div className="flex items-center gap-4 flex-1">
                              {/* Timeline Dot */}
                              <div className="relative z-10 flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-white shadow-lg" />
                              </div>
                              
                              <div className="flex-1 text-left">
                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                  <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200">
                                    {module.category}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Clock className="w-4 h-4 text-blue-600" />
                                  <span>{module.duration}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="ml-14 grid md:grid-cols-2 gap-4 pt-2">
                            {module.topics.map((topic, topicIndex) => (
                              <motion.div
                                key={topicIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: topicIndex * 0.05 }}
                                className="flex items-end gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{topic}</span>
                              </motion.div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Key Highlights in Software Testing Training
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
                Every Feature Empowers The Career You've Always Wanted
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {courseHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100 group"
                >
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                    <highlight.icon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors" strokeWidth={1.5} />
                    {highlight.secondaryIcon && (
                      <highlight.secondaryIcon className="absolute -bottom-1 -right-1 w-6 h-6 text-orange-500 bg-white rounded-full p-1 shadow-sm group-hover:scale-110 transition-transform" strokeWidth={2} />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CourseTechnologySection courseSlug="software-testing-training" />

        {/* Career Resources Section */}
        <section className="py-8 md:py-12 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Heading Left (on desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[360px] lg:w-[420px] flex-shrink-0 text-center md:text-left mb-2 md:mb-0"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3 md:mb-0">
                  <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                    Get exclusive access to career resources upon completion
                  </span>
                </h2>
              </motion.div>
              {/* Cards Right (on desktop) */}
              <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
                {/* Mock Session Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center md:text-left w-full md:w-[270px]"
                >
                  <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <MessageSquare className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors" strokeWidth={1.5} />
                      <HelpCircle className="w-6 h-6 text-blue-600 -ml-3 -mt-2 group-hover:scale-110 transition-transform" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">Mock Session</h3>
                 
                </motion.div>
                {/* LMS Learning Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center md:text-left w-full md:w-[270px]"
                >
                  <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <Monitor className="w-10 h-10 text-orange-500 group-hover:text-orange-600 transition-colors" strokeWidth={1.5} />
                      <BadgeCheck className="w-6 h-6 text-orange-500 -ml-3 -mt-2 group-hover:scale-110 transition-transform" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-500 transition-colors">LMS Learning</h3>
                 
                </motion.div>
                {/* Career Support Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center md:text-left w-full md:w-[270px]"
                >
                  <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <UserCheck className="w-10 h-10 text-blue-500 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                      <Star className="w-6 h-6 text-blue-400 -ml-3 -mt-2 group-hover:scale-110 transition-transform" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-500 transition-colors">Career Support</h3>
                  
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Mock Interviews Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Left Column - Mock Interviews Content */}
              <div>
                {/* Mock Interviews Title */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative">
                    <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                      Mock Interviews
                    </span>
                    <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                  </h2>
                </motion.div>

                {/* Bullet Points */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6 mb-12"
                >
                  <div className="flex items-end gap-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 leading-relaxed">
                      Prepare & Practice for real-life job interviews by joining the Mock Interviews drive at Quastech and learn to perform with confidence with our expert team.
                    </p>
                  </div>
                  <div className="flex items-end gap-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 leading-relaxed">
                      Not sure of Interview environments? Don't worry, our team will familiarize you and help you in giving your best shot even under heavy pressures.
                    </p>
                  </div>
                  <div className="flex items-end gap-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 leading-relaxed">
                      Our Mock Interviews are conducted by trailblazing industry-experts having years of experience and they will surely help you to improve your chances of getting hired in real.
                    </p>
                  </div>
                </motion.div>

                {/* How Mock Interview Works - Circular Process Diagram */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
                    <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                      How Quastech Mock Interview Works?
                    </span>
                  </h3>
                  
                  {/* Circular Process Diagram - 3D Animated & Professional */}
                  <div className="relative w-full max-w-lg mx-auto" style={{perspective: '1000px'}}>
                    <motion.div 
                      className="relative w-full aspect-square"
                      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                      whileHover={{ scale: 1.05, rotateZ: 2, transition: { duration: 0.3 } }}
                      viewport={{ once: true }}
                      style={{transformStyle: 'preserve-3d'}}
                    >
                      <svg className="w-full h-full" viewBox="0 0 400 400" style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))'}}>
                        {/* Step 1: Program Selection - Light Blue (Top, 12 o'clock) */}
                        <g className="group">
                          <path
                            d="M 200 200 L 200 50 A 150 150 0 0 1 329.9 125 Z"
                            fill="#60a5fa"
                            className="hover:opacity-90 transition-opacity cursor-pointer"
                            style={{filter: 'drop-shadow(0 4px 6px rgba(59, 130, 246, 0.4))'}}
                          />
                          <text x="250" y="95" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">STEP 1</text>
                          <text x="250" y="115" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Program</text>
                        </g>

                        {/* Step 2: Expert Mentors - Dark Blue (2 o'clock) */}
                        <g>
                          <path
                            d="M 200 200 L 329.9 125 A 150 150 0 0 1 329.9 275 Z"
                            fill="#2563eb"
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                          />
                          <text x="315" y="185" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">STEP 2</text>
                          <text x="315" y="205" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">Expert</text>
                          <text x="315" y="222" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">Mentors</text>
                        </g>

                        {/* Step 3: Project Preparation - Teal (4 o'clock) */}
                        <g>
                          <path
                            d="M 200 200 L 329.9 275 A 150 150 0 0 1 200 350 Z"
                            fill="#14b8a6"
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                          />
                          <text x="250" y="295" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">STEP 3</text>
                          <text x="250" y="315" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Project</text>
                          <text x="250" y="330" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Preparation</text>
                        </g>

                        {/* Step 4: Assignment - Orange (8 o'clock) */}
                        <g>
                          <path
                            d="M 200 200 L 200 350 A 150 150 0 0 1 70.1 275 Z"
                            fill="#f97316"
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                          />
                          <text x="150" y="295" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">STEP 4</text>
                          <text x="150" y="315" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">Assignment</text>
                          <text x="150" y="332" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">Process</text>
                        </g>

                        {/* Step 5: Grooming Session - Pink (10 o'clock) */}
                        <g>
                          <path
                            d="M 200 200 L 70.1 275 A 150 150 0 0 1 70.1 125 Z"
                            fill="#ec4899"
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                          />
                          <text x="85" y="185" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">STEP 5</text>
                          <text x="85" y="205" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Grooming</text>
                          <text x="85" y="222" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Session</text>
                        </g>

                        {/* Step 6: Student Placed - Green (11 o'clock) */}
                        <g>
                          <path
                            d="M 200 200 L 70.1 125 A 150 150 0 0 1 200 50 Z"
                            fill="#10b981"
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                          />
                          <text x="150" y="95" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">STEP 6</text>
                          <text x="150" y="115" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">STUDENT</text>
                          <text x="150" y="132" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">PLACED</text>
                        </g>

                        {/* Center Circle - Clean & Professional */}
                        <defs>
                          <radialGradient id="centerGrad">
                            <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#f0f9ff', stopOpacity: 1}} />
                          </radialGradient>
                        </defs>
                        <circle cx="200" cy="200" r="75" fill="url(#centerGrad)" style={{filter: 'drop-shadow(0 8px 16px rgba(30, 64, 175, 0.3))'}} />
                        <text x="200" y="190" fill="#1e40af" fontSize="26" fontWeight="extrabold" textAnchor="middle">MOCK</text>
                        <text x="200" y="220" fill="#1e40af" fontSize="22" fontWeight="extrabold" textAnchor="middle">INTERVIEW</text>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Banner, Form, Contact Info */}
              <div className="space-y-8">
                {/* Banner */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 flex items-center justify-between shadow-lg"
                >
                  <div className="text-white">
                    <p className="text-xl font-bold">Not just learning</p>
                    <p className="text-xl font-bold">we train you to get hired.</p>
                  </div>
                  <Briefcase className="w-16 h-16 text-white opacity-80" />
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
                >
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Inquiry Form</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone No <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-semibold">(+91)</span>
                        </div>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="flex-1"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message Details
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full min-h-[100px]"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      SUBMIT
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Phone (For Voice Call):</p>
                        <p className="text-lg font-bold text-gray-800">+918422800381</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">WhatsApp (For Call & Chat):</p>
                        <p className="text-lg font-bold text-gray-800">+918422800381</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Projects Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                    Projects
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
                </h2>
                {/* Introductory Paragraph */}
                <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                  The belief at Quastech is in the practical application of theoretical knowledge. There is how our students participate in a dynamic learning process, and create projects based on the concepts.
                </p>
              </motion.div>

              {/* 3D Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    text: "Students immerse themselves into practical projects, transferring theoretical knowledge to real-life situations thus promoting a better understanding of the topics covered.",
                    icon: Code
                  },
                  {
                    text: "Teamwork encouraged, students work together on projects that reflect the collaborative nature of their professional work environment",
                    icon: Users
                  },
                  {
                    text: "Projects act as a reflection of real life issues which prepare student for the rigors and responsibilities that their future careers will demand.",
                    icon: Target
                  },
                  {
                    text: "Mentorship and advice from industry experts will ensure that our students' projects meet current workplace benchmarks",
                    icon: Award
                  },
                  {
                    text: "Students are making use of the most recent tools and technologies while working on projects that are both educational, but also engage with current trends in industry.",
                    icon: Rocket
                  },
                  {
                    text: "Through repeated design processes, students adjust and improve their projects learning valuable skills about project management as well as optimization.",
                    icon: TrendingUp
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.02,
                      rotateY: 5,
                      rotateX: 5
                    }}
                    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    {/* 3D Effect Background Gradient */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    
                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Icon with Q badge */}
                      <div className="flex items-end gap-4 mb-4">
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-md group-hover:shadow-lg transition-shadow">
                            <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm border-2 border-white">
                            <span className="text-white font-bold text-xs">Q</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description Text */}
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {item.text}
                      </p>
                    </div>
                    
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Features Section */}
        <section className="py-8 md:py-12 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative inline-block">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  TRAINING FEATURES
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full"></div>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Expert Trainers */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Expert Trainers:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn from Industry experts who provide you with moving knowledge about what is going-on in the industry now.
                </p>
              </motion.div>

              {/* Projects */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <FolderOpen className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Projects:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Submerge yourself in practical projects bridging the gap between theory and practice. Put this knowledge in practical terms and practice it hands-on, learning from your mistakes
                </p>
              </motion.div>

              {/* Certification */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 relative">
                  <FileText className="w-7 h-7 text-blue-600" />
                  <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Certification:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete your training and earn industry-recognized certifications. Now validate your skills in the competitive job market and bolster credibility.
                </p>
              </motion.div>

              {/* 100% Placements */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-4 relative">
                  <Briefcase className="w-7 h-7 text-amber-700" />
                  <ArrowUp className="w-4 h-4 text-orange-500 absolute -top-1 -right-1" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">100% Placements:</h3>
                <p className="text-gray-600 leading-relaxed">
                  100% placement support is available with an unwavering commitment to your success. Use our strategic alliances and career placement services to launch your new job immediately
                </p>
              </motion.div>

              {/* HR Session */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 relative">
                  <FileText className="w-7 h-7 text-blue-600" />
                  <UserCircle className="w-5 h-5 text-amber-700 absolute bottom-0 right-0" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">HR Session:</h3>
                <p className="text-gray-600 leading-relaxed">
                  In addition, participate in customized HR sessions that reveal industry expectations and give tips on resume building as well as successful job hunting strategies.
                </p>
              </motion.div>

              {/* Mock Interviews */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-4 relative">
                  <Users className="w-6 h-6 text-amber-700" />
                  <MessageSquare className="w-5 h-5 text-blue-600 absolute top-1 right-1" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Mock Interviews:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Participate in realistic mock interviews conducted by professionals from the industry to improve your interview skills. Get specific feedback aimed at improving your performance and increasing self-confidence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hiring Partners Section */}
        <section className="py-8 md:py-12 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-12 max-w-7xl mx-auto">
              {/* Left Column - Animated Company Logos */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                    <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                      Hiring Partners
                    </span>
                  </h2>
                </motion.div>

                {/* Split partners into three unique groups */}
                {(() => {
                  const total = partners.length;
                  const col1 = partners.slice(0, Math.ceil(total / 3));
                  const col2 = partners.slice(col1.length, col1.length + Math.ceil((total - col1.length) / 2));
                  const col3 = partners.slice(col1.length + col2.length);
                  
                  return (
                    <div className="grid grid-cols-3 gap-2 md:gap-3 relative overflow-hidden">
                      {/* Column 1 - Fastest Speed */}
                      <div className="relative overflow-hidden h-[500px]">
                        <motion.div
                          className="flex flex-col gap-2"
                          animate={{ y: [0, -600] }}
                          transition={{
                            y: {
                              repeat: Infinity,
                              duration: 20,
                              ease: "linear",
                            },
                          }}
                        >
                          {/* Duplicate logos for seamless loop */}
                          {[
                            ...col1,
                            ...col1,
                            ...col1,
                            ...col1
                          ].map((partner, index) => (
                            <div
                              key={`col1-${index}`}
                              className="flex-shrink-0 h-16 bg-white border border-gray-200 rounded-md flex items-center justify-center p-2 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
                            >
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-10 max-w-full object-contain transition-all duration-300"
                                title={partner.name}
                              />
                            </div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Column 2 - Medium Speed */}
                      <div className="relative overflow-hidden h-[500px]">
                        <motion.div
                          className="flex flex-col gap-2"
                          animate={{ y: [0, -600] }}
                          transition={{
                            y: {
                              repeat: Infinity,
                              duration: 30,
                              ease: "linear",
                            },
                          }}
                        >
                          {/* Duplicate logos for seamless loop */}
                          {[
                            ...col2,
                            ...col2,
                            ...col2,
                            ...col2
                          ].map((partner, index) => (
                            <div
                              key={`col2-${index}`}
                              className="flex-shrink-0 h-16 bg-white border border-gray-200 rounded-md flex items-center justify-center p-2 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300"
                            >
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-10 max-w-full object-contain transition-all duration-300"
                                title={partner.name}
                              />
                            </div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Column 3 - Slowest Speed */}
                      <div className="relative overflow-hidden h-[500px]">
                        <motion.div
                          className="flex flex-col gap-2"
                          animate={{ y: [0, -600] }}
                          transition={{
                            y: {
                              repeat: Infinity,
                              duration: 40,
                              ease: "linear",
                            },
                          }}
                        >
                          {/* Duplicate logos for seamless loop */}
                          {[
                            ...col3,
                            ...col3,
                            ...col3,
                            ...col3
                          ].map((partner, index) => (
                            <div
                              key={`col3-${index}`}
                              className="flex-shrink-0 h-16 bg-white border border-gray-200 rounded-md flex items-center justify-center p-2 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300"
                            >
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-10 max-w-full object-contain transition-all duration-300"
                                title={partner.name}
                              />
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Right Column - Statistics */}
              <div className="flex flex-col justify-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent mb-2">
                    800+
                  </div>
                  <div className="text-xl font-semibold text-gray-800">
                    Hiring companies
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent mb-2">
                    10k+
                  </div>
                  <div className="text-xl font-semibold text-gray-800">
                    Learners already placed
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 max-w-7xl mx-auto items-center">
              {/* Left Panel - Text and Logos */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Main Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                  <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                    Earn Certificates Backed by High-Quality, Industry-Standard Training.
                  </span>
                </h2>

                {/* Key Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-end gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Earn Certificates Backed by High-Quality, Industry-Standard Training.
                    </p>
                  </div>
                  <div className="flex items-end gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Verified Through Secure Digital Validation for Employer Trust.
                    </p>
                  </div>
                  <div className="flex items-end gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Boosts Your Career Profile with Recognized and Credible Certification.
                    </p>
                  </div>
                </div>

                {/* Collaboration Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">in Collaboration with</h3>
                  <div className="h-px bg-gray-300 mb-6"></div>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {[
                      { name: "NSDC", logo: "/uploads/nsdeimg01.jpg" },
                      { name: "Skill India", logo: "/uploads/skillindia--.jpg" }
                    ].map((partner, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white border-2 border-blue-200 rounded-lg p-4 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-16 max-w-full object-contain transition-all duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>                <div className="flex flex-col sm:flex-row gap-4">
                     {/* <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
                  >
                    Get a Sample Certificate
                  </motion.button> */}
                </div>
              </motion.div>

              {/* Right Panel - Certificate Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <img
                   src="/images/Certificate/WhatsApp Image 2025-11-18 at 9.11.20 PM.jpeg"
                    alt="Certificate Of Achievement"
                    className="w-full h-auto object-contain"
                  />
                  {/* Sample Watermark Overlay (optional) */}
                  <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-blue-600 font-bold text-sm">SAMPLE</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
       {/* <section className="py-8 md:py-12 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
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
                    <p className="text-gray-600 text-sm">High demand role in IT industry</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQs Section - Professional */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-blue-100 shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="text-xs font-semibold text-blue-700 tracking-widest">FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-blue-600  to-orange-500 bg-clip-text text-transparent">
                  Everything you need to know
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Clear, concise answers about our Software Testing Training curriculum, format, placement, and more.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 max-w-7xl mx-auto items-end">
              {/* Right - FAQ Accordions */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full order-2"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">What is included in the Software Testing Training Program?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      The program covers Manual Testing, Automation with Selenium Java, SQL fundamentals, tools like JIRA & JMeter, ISTQB concepts, profile building, and interview preparation with case-study projects.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">Do you provide placement assistance?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      Yes. You get resume polishing, mock interviews, HR preparation, and interview opportunities through our hiring partners. Many learners secure offers within weeks of completion.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">Is the training available online and offline? Do I get LMS access?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      The course is offered in both formats. You also receive lifetime LMS access to recordings, notes, code repositories, and assignments.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">What is the course duration and weekly schedule?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      Typical duration is 5.5 Month depending on the track. Sessions are planned on weekdays/weekends with additional practice and doubt-clearing support.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-5" className="group bg-white border border-blue-100 rounded-2xl mb-1 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">Who can join — do I need coding experience?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      No prior coding is required for the Manual Testing track. Basic programming is introduced gradually for the Automation track with simple, guided practice.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>

              {/* Left - Image Side */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="order-1"
              >
                <div className="relative">
                  <img
                    src="/uploads/FAQ (1) (1) (1).png"
                    alt="Frequently Asked Questions"
                    className="w-full h-auto object-contain max-h-[580px]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-blue-600  to-orange-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Ready to Start Your Testing Journey?
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who have transformed their careers with our Software Testing Training.
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

        <BranchSection />

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default SoftwareTestingTraining;



