import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Users, Award, Target, Star, ChevronLeft, ChevronRight, Phone, Mail, CheckCircle2, FileText, Briefcase, Code, Terminal, GitBranch } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

// Our placement students for banner and stories - ALL from NewStudentReview folder
const students = [
  // Named students with course info from NewStudentReview - High Quality Images
  {
    name: "Dipesh Sawant",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/Dipesh sawant -Software Testing.png",
    company: "Plan IT Company",
    companyLogo: "/images/companypng/13.png" // Plan IT logo path - update manually
  },
  {
    name: "Nidhi Yelonde",
    role: "Full Stack Java Developer",
    course: "Full Stack Java Development",
    image: "/images/NewStudentReview/Nidhi Yelonde - Full stack java Development.png",
    company: "Cateina Technologies",
    companyLogo: "/images/companypng/31.png" // Cateina logo path - update manually
  },
  {
    name: "Amey Pakhare",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/Amey Pakhare-Software Testing.png",
    company: "Technopurple Company",
    companyLogo: "/images/companypng/TECHNOPURPLE.png" // Technopurple logo path - add manuallyD:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\TECHNOPURPLE.png
  },
  {
    name: "Ashish Raut",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/ashish raut -Software Testing.png",
    company: "Greeksoft Technologies Private Limited",
    companyLogo: "/images/companypng/GREEKSOFT.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\GREEKSOFT.png
  },
  {
    name: "Karishma Yadav",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/karishma yadav - Software Testing.png",
    company: "Reeble Platform India Private Limited",
    companyLogo: "/images/companypng/REEBLE.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\REEBLE.png
  },
  {
    name: "Prashant Karande",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/Prashant Karande -Software Testing.png",
    company: "AQM Technologies Pvt. Ltd.",
    companyLogo: "/images/companypng/5.png" // AQM logo path - update manually
  },
  {
    name: "Yesh Mhatre",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/Yesh Mhatre -Software Testing.png",
    company: "Rentokil PCI",
    companyLogo: "/images/companypng/rentokilpcl01.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\rentokilpcl01.png
  },
  {
    name: "Akshay Patil",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/Akshay patil -Software Testing.png",
    company: "Word Publishing",
    companyLogo: "/images/companypng/WP.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\WP.png
  },
  {
    name: "Barkha Tiwari",
    role: "Java Developer",
    course: "Java Development",
    image: "/images/NewStudentReview/Barkha Tiwari - Java Development.png",
    company: "Mobicule Technologies Pvt. Ltd.",
    companyLogo: "/images/companypng/mobicule01.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\mobicule01.png
  },
  {
    name: "Kanchan Rane",
    role: "Java Developer",
    course: "Java Development",
    image: "/images/NewStudentReview/Kanchan Rane - Java Developer.png",
    company: "Miscot Systems Pvt. Ltd.",
    companyLogo: "/images/companypng/11.png" // Miscot Systems logo path - add manually
  },
  {
    name: "Mahalaxmi Karthesan",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/Mahalaxmi Karthesan -Software Testing.png",
    company: "Planit Testing India Pvt Ltd",
    companyLogo: "/images/companypng/13.png" // Planit Testing logo path - add manually
  },
  {
    name: "Mayur Hedau",
    role: "Java Developer",
    course: "Java Development",
    image: "/images/NewStudentReview/Mayur Hedau- Java Developer.png",
    company: "MITR Learning & Media",
    companyLogo: "/images/companypng/MITR.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\MITR.png
  },
  {
    name: "Parav Thakur",
    role: "Full Stack Python Developer",
    course: "Full Stack Python Development",
    image: "/images/NewStudentReview/Parav Thakur  - Full Stack Python.png"
  },
  {
    name: "Rohan Kute",
    role: ".NET Developer",
    course: ".NET Development",
    image: "/images/NewStudentReview/Rohan Kute - .Net Development.png",
    company: "Domex Technical Information Pvt Ltd",
    companyLogo: "/images/companypng/DOMAXX.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\DOMAXX.png
  },
  {
    name: "Roshni Pathak",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/Roshni Pathak - Software Testing.png",
    company: "Quantique Metadata Private Limited",
    companyLogo: "/images/companypng/quantique.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\quantique.png
  },
  {
    name: "Sarjerao Patil",
    role: "Software Testing Engineer",
    course: "Software Testing",
    image: "/images/NewStudentReview/Sarjerao Patil  -Software Testing.png",
    company: "BarrierBreak Solutions Private Limited",
    companyLogo: "/images/companypng/barrierbreak.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\barrierbreak.png
  },
  {
    name: "Viraj Bagul",
    role: "QA Tester",
    course: "Digital marketing Intern",
    image: "/images/NewStudentReview/Viraj Bagul - Digital marketing Intern - Universal Mediaa.png", // Add image path manually
    company: "Universal Mediaa",
    companyLogo: "/images/companypng/Universal Media (1).png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\Universal Media (1).png
  },
  {
    name: "Trishali Mahesh Raut",
    role: " QA Tester",
    course: "Software Testing",
    image: "/images/NewStudentReview/Trishali Mahesh Raut - QA Tester - SEQURETEK Pvt Ltd.png", // Add image path manually
    company: "SEQURETEK Pvt Ltd",
    companyLogo: "/images/companypng/sequretek01.png" // D:\quaastechwebsite005\quastechwebpagev04-main\public\images\NewStudentReview\Trishali Mahesh Raut - QA Tester - SEQURETEK Pvt Ltd.png
  },

  //D:\quaastechwebsite005\quastechwebpagev04-main\public\images\companypng\sequretek01.png
  // Additional students for variety (keeping some old ones for more content)
  {
    name: "Saurabh Devlekar",
    role: "Software Engineer",
    course: "Full Stack Development",
    image: "/images/studentreviews01/RewSaurabhDevlekar.jpg"
  },
  {
    name: "Omkar Bhagojikarkare",
    role: "DevOps Engineer",
    course: "DevOps & Cloud",
    image: "/images/studentreviews01/RewOmkarBhagojikarkare.jpg"
  },
  {
    name: "Pooja Khapar",
    role: "Mobile App Developer",
    course: "Mobile Development",
    image: "/images/studentreviews01/RewPoojaKhapar.jpg"
  },
  {
    name: "Student 7",
    role: "Data Analyst",
    course: "Data Analytics",
    image: "/images/studentreviews01/IMG-20251102-WA0002.jpg"
  }
];

// Actual company logos
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

// Placement roles by category
const placementCategories = [
  { key: 'all', label: 'All Placements' }
];

const getPlacements = (category) => {
  if(category === 'all') {
    // Show first 18 students (including the 2 new ones)
    return students.slice(0, 18).map((student) => ({
      name: student.name,
      role: student.role,
      image: student.image,
      company: student.company ? {
        name: student.company,
        logo: student.companyLogo || companyList.find(c => c.name.toLowerCase().includes(student.company?.toLowerCase().split(' ')[0] || ''))?.logo
      } : companyList[0]
    }));
  } else if (category === 'software-testing') {
    // Software Testing: All students who completed Software Testing course
    const testingStudents = students.filter(s => s.course === 'Software Testing');
    return testingStudents.map((student, i) => ({
      name: student.name,
      role: student.role,
      image: student.image,
      company: companyList[i % companyList.length],
    }));
  } else if (category === 'java-development') {
    // Java Development: All students who completed Java Development course
    const javaStudents = students.filter(s => s.course === 'Java Development' || s.course === 'Full Stack Java Development');
    return javaStudents.map((student, i) => ({
      name: student.name,
      role: student.role,
      image: student.image,
      company: companyList[(i + 8) % companyList.length],
    }));
  } else if (category === 'fullstack-development') {
    // Full Stack Development: Python, .NET, Java Full Stack
    const fullstackStudents = students.filter(s => 
      s.course === 'Full Stack Python Development' || 
      s.course === '.NET Development' ||
      s.course === 'Full Stack Java Development' ||
      s.course === 'Full Stack Development'
    );
    return fullstackStudents.map((student, i) => ({
      name: student.name,
      role: student.role,
      image: student.image,
      company: companyList[(i + 12) % companyList.length],
    }));
  } else if (category === 'data-analytics-science') {
    // Data Analytics / Data Science: Use old images for now
    return [
      { name: students[16].name, role: 'Data Scientist', image: students[16].image, company: companyList[16] }, // Saurabh
      { name: students[17].name, role: 'Data Analyst', image: students[17].image, company: companyList[17] }, // Omkar
      { name: students[18].name, role: 'Data Scientist', image: students[18].image, company: companyList[18] }, // Pooja
      { name: students[19].name, role: 'Data Analyst', image: students[19].image, company: companyList[19] }, // Student 7
    ];
  }
  return [];
};

// Branch images for memories/campus drives
const branchImages = [
  "/images/branches/IMG20240104153417.jpg",
  "/images/branches/IMG20240104153434.jpg",
  "/images/branches/IMG20240104153526.jpg",
];

// Profile building sessions
const profileSessions = [
  {
    id: 1,
    title: "Resume Preparation",
    icon: FileText,
    description: "Difference between CV & Resume. Previewing resumes of professionals working at Google, Microsoft, Facebook etc. Do's & Don't of the resumes to stand out in the market.",
    image: "/images/branches/IMG20240104153417.jpg"
  },
  {
    id: 2,
    title: "Mock Interview",
    icon: Briefcase,
    description: "Building up the confidence level of candidates through continuous mock practice. Industry-oriented technical questions are asked during mocks. Cross faculty mocks are performed to brush up the technical skills.",
    image: "/images/branches/IMG20240104153434.jpg"
  },
  {
    id: 3,
    title: "Web Portfolio Development",
    icon: Code,
    description: "A web portfolio increases your chance of getting hired by 200%. Build your web portfolio by your own in just 3 hours time. Our team of experts will guide you in adding relevant skills, project images, videos and much more.",
    image: "/images/branches/IMG20240104153526.jpg"
  },
  {
    id: 4,
    title: "Linux Training",
    icon: Terminal,
    description: "Linux is used by more than 70% of the companies. Individuals are trained with strong knowledge of the operating system during the training period. Rich knowledge in Linux increases your chance of getting hired by 200%.",
    image: "/images/branches/IMG20240104153417.jpg"
  },
  {
    id: 5,
    title: "GIT Training",
    icon: GitBranch,
    description: "GIT is used by more than 99% of companies. We deliver a rich knowledge in GIT as Learners are supposed to use the same in programming. GIT is on high demand and the training improves your chance of getting hired.",
    image: "/images/branches/IMG20240104153434.jpg"
  },
];

// Upcoming placement drives
const upcomingDrives = [
  {
    company: "Sciative Solution Pvt Ltd",
    website: "www.sciative.com",
    position: "Data Science (Full Stack Developer)",
    openings: 5
  },
  {
    company: "Lenden club",
    website: "https://www.lendenclub.com",
    position: "Data Scientist",
    openings: 4
  },
  {
    company: "Prisma.ai",
    website: "https://www.prisma.ai",
    position: "Machine Learning Engineer",
    openings: 5
  },
  {
    company: "VSL",
    website: "https://vslmarine.com",
    position: "Jr.Web Application Developer",
    openings: 3
  },
];

const PlacementPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobileView(window.innerWidth < 768);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const placementStats = [
    { icon: Users, value: "10k+", label: "Learners Trained" },
    { icon: Award, value: "800+", label: "Hiring Companies" },
    { icon: Target, value: "100+", label: "Placement Drives conducted" },
    { icon: Star, value: "10LPA", label: "Highest Salary Drawn" },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const studentImages = students.map(s=>s.image);
  const placements = getPlacements(selectedCategory).map((item,i) => ({
    ...item,
    image: studentImages[i%studentImages.length]
  }));

  const testimonialsData = placements.slice(0, 6).map((item) => ({
    name: item.name,
    role: item.role,
    company: item.company?.name ?? "Top Company",
    image: item.image,
    review: `Recently placed at ${item.company?.name ?? "a leading organization"}. Thrilled to start this new chapter with the skills gained through QUASTECH.`
  }));

  const [selectedSession, setSelectedSession] = useState(1);
  const currentSession = profileSessions.find(s => s.id === selectedSession);
  
  // Video refs for autoplay control
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <DarkModeProvider>
      <SEO 
        title="100% Placement Assistance - Success Stories & Hiring Partners"
        description="Discover QUASTECH's proven placement record with 5000+ students placed in top companies like Google, Microsoft, TCS, Accenture. Get guaranteed interview opportunities and career support. View our success stories and placement process."
        keywords="placement assistance, IT job placement, guaranteed interview, hiring partners, placement success stories, career support, job guarantee, placement training, IT jobs"
        canonical="/placement"
        category="Placements"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Placements", url: "/placement" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        {/* 1. HERO BANNER - RESPONSIVE (desktop side-by-side, mobile stacked) */}
        <section className="relative px-4 pt-8 pb-16 lg:pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          {/* Hero Background Layers - unchanged */}
          <div className="absolute inset-0 -z-10">
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

            {/* Floating orbs & animated layers (kept as-is) */}
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

          {/* Content wrapper: stacked on mobile, two columns on md+ */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* LEFT: Text content (on mobile will be on top) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left py-4 md:py-8">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-orange-400 font-bold text-lg md:text-xl uppercase tracking-wider mb-4 md:mb-6"
              >
                STORY OF OUR SUCCESSFUL PLACEMENTS
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6"
              >
                <span className="bg-blue-700 text-white rounded-lg px-4 py-2 inline-block mb-2 text-base md:text-lg">Customer Stories</span>
                <br />
                <span className="text-blue-200 font-extrabold">That Inspire You</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-2 text-white/90 font-semibold mb-4 md:mb-6 max-w-xl"
              >
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">SUCCESS ISN'T JUST ABOUT REACHING THE GOAL.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">IT'S ABOUT THE JOURNEY, THE LESSONS, AND THE GROWTH.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed font-bold text-white">BE INSPIRED BY THOSE WHO MADE IT HAPPEN!</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full flex justify-center md:justify-start"
              >
                <div className="text-white/80 font-semibold text-sm md:text-lg">
                  <p className="mb-3">Quastech Alumni Work At Top Companies</p>

                  <div className="w-full overflow-x-hidden relative flex justify-start">
                    <div className="w-full pointer-events-none absolute bg-gradient-to-r from-slate-900 to-transparent left-0 top-0 h-full z-10" style={{width:'24px'}}/>
                    <div className="w-full pointer-events-none absolute bg-gradient-to-l from-slate-900 to-transparent right-0 top-0 h-full z-10" style={{width:'24px'}}/>
                    <div className="max-w-xs md:max-w-xl overflow-hidden">
                      <div className="flex gap-4 md:gap-6" style={{ animation: 'slideX 25s linear infinite' }}>
                        {companyList.slice(0, 6).map((logo, i) => (
                          <img 
                            key={logo.logo + '-' + i} 
                            src={logo.logo} 
                            alt={logo.name} 
                            title={logo.name} 
                            className="h-10 md:h-12 lg:h-16 w-auto rounded-lg bg-white shadow-md border border-white/40 transition-transform hover:scale-110 hover:shadow-xl" 
                            style={{minWidth:'90px'}} 
                          />
                        ))}
                        {companyList.slice(0, 6).map((logo, i) => (
                          <img 
                            key={'dupe-' + logo.logo + '-' + i} 
                            src={logo.logo} 
                            alt={logo.name} 
                            title={logo.name} 
                            className="h-10 md:h-12 lg:h-16 w-auto rounded-lg bg-white shadow-md border border-white/40 transition-transform hover:scale-110 hover:shadow-xl" 
                            style={{minWidth:'90px'}} 
                          />
                        ))}
                      </div>
                    </div>
                    <style>{`@keyframes slideX { to { transform: translateX(-50%); } }`}</style>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Student circular images grid (on mobile will appear below text) */}
            <div className="flex justify-center md:justify-end py-6 md:py-8">
              {/* Responsive grid: 3 cols on small, 4 on md, consistent spacing and sizing */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
                {students.slice(0, 16).map((student, idx) => (
                  <motion.div
                    key={`hero-student-${idx}-${student.name}`}
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08 * idx }}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white shadow-2xl bg-blue-500"
                  >
                    <motion.img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                      initial={{ y: 0 }}
                      animate={{
                        y: [-6, 6, -6],
                      }}
                      transition={{
                        duration: 3 + (idx * 0.1),
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 0.5 + idx * 0.02
                      }}
                      whileHover={{
                        scale: 1.08,
                        rotateY: 10,
                        transition: { duration: 0.25 }
                      }}
                      title={student.name}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Stats Section with 3D Effects */}
        <section className="w-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-12 px-3">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[#f6f8fa] rounded-xl shadow-[0_8px_30px_rgba(44,62,80,.19)] flex flex-col items-center p-8"
                style={{
                  minHeight: '188px',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2 shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </motion.div>
                <motion.div
                  className="font-extrabold text-2xl md:text-[1.75rem] text-[#182041] mt-1 mb-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-[#758389] text-sm font-medium text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Campus Placement's Drive Section */}
        <section className="w-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-10 md:py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-[260px_1fr] gap-6 items-end">
            <div className="hidden md:flex flex-col pt-2">
              <h2 className="heading-institute text-left leading-tight">
                Campus<br />Placement's<br />Drive
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-gray-700">
                  <div className="heading-institute-md mb-3">Placement Drive by Nimap Infotech</div>
                  <p className="text-gray-700 text-sm md:text-base max-w-3xl">
                    The campus placement drive is an opportunity for our Learners as well as companies to select the best & qualified candidate or company in a shorter period of time. Quastech is known in the market for providing the quality candidates and that is why 800+ companies have trusted us in hand picking the talent they require.
                  </p>
                </div>
                <a href="/contact" className="self-start md:self-auto bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white transition-colors px-5 py-2 font-bold rounded-md text-sm shadow-md whitespace-nowrap flex items-center">
                  Get a Free Counseling
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
              {/* Placement Cards Carousel */}
              <div className="w-full mt-6 overflow-hidden">
                <Swiper 
                  navigation={true} 
                  modules={[Navigation]} 
                  slidesPerView={1} 
                  spaceBetween={20} 
                  loop={true} 
                  className="w-full"
                  onSlideChange={(swiper) => {
                    // Pause all videos first
                    videoRefs.current.forEach(video => {
                      if (video) {
                        video.pause();
                        video.currentTime = 0;
                      }
                    });
                    // Play video on active slide
                    const activeVideo = videoRefs.current[swiper.realIndex];
                    if (activeVideo) {
                      activeVideo.play().catch(err => console.log('Autoplay prevented:', err));
                    }
                  }}
                  onSwiper={(swiper) => {
                    // Auto-play video on initial load if first slide is video
                    setTimeout(() => {
                      const activeVideo = videoRefs.current[swiper.realIndex];
                      if (activeVideo) {
                        activeVideo.play().catch(err => console.log('Autoplay prevented:', err));
                      }
                    }, 100);
                  }}
                >
                  {[
                    { label: "PLACEMENT DRIVE", title: "Saleman Digital Automation Pvt. Ltd. � Recruitment Day", image: "/images/placementdrive/saleman digial automation PVTLTD.jpg", type: "image" },
                    // { label: "PLACEMENTS", title: "Helping Learners Achieve Their Dream IT Jobs!", image: branchImages[1], type: "image" },
                    { label: "JOBS", title: "Conducting Megha Placement Drive for Students", video: "/uploads/TV Drive.mp4", type: "video" },
                    { label: "WELCOME", title: "Moment of the Warm Welcome", image: "/uploads/placementdrive01.jpg", type: "image" },
                    { label: "NSDC RECOGNITION", title: "Campus to Corporate Event with National Skill Development Corporation Congratulating Our Students", image: "/uploads/studentcertificate.jpg", type: "image" },
                    // { label: "MOCK", title: "Our Learners Appearing for Their Mock Interviews", image: branchImages[0], type: "image" },
                    { label: "PLACEMENT DRIVE", title: "Cateina Technologies � Campus Hiring Drive", image: "/images/placementdrive/121222.jpg", type: "image" },
                    { label: "PLACEMENT DRIVE", title: "Nimap Infotech � Interview Session", image: "/images/placementdrive/1212.jpg", type: "image" },
                    { label: "PLACEMENT DRIVE", title: "RPJ Associates � Talent Acquisition", image: "/images/placementdrive/rpj associates.jpg", type: "image" },
                  ].map((item, idx) => (
                    <SwiperSlide key={idx} className="!w-full">
                      <motion.div
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-200 w-full"
                        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                        whileHover={{
                          y: -10,
                          rotateY: 5,
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {item.type === "video" ? (
                          <>
                            <video 
                              ref={(el) => (videoRefs.current[idx] = el)}
                              src={item.video} 
                              className="w-full h-[360px] md:h-[420px] object-cover bg-black"
                              controls
                              preload="auto"
                              muted
                              playsInline
                              loop
                            >
                              Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white pointer-events-none"
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              <span className="uppercase text-xs tracking-widest text-blue-200 mb-2 block">{item.label}</span>
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug pr-4 md:pr-6 break-words max-w-full">{item.title}</h3>
                            </motion.div>
                          </>
                        ) : (
                          <>
                            <img 
                              src={encodeURI(item.image)} 
                              alt={item.title} 
                              className="w-full h-[360px] md:h-[420px] object-cover" 
                              style={{ objectPosition: 'center center' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white"
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              <span className="uppercase text-xs tracking-widest text-blue-200 mb-2 block">{item.label}</span>
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug pr-4 md:pr-6 break-words max-w-full">{item.title}</h3>
                            </motion.div>
                          </>
                        )}
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Learner Support Section */}
        <section className="w-full py-14 px-3 bg-gradient-to-br from-[#3551a6] to-[#102547] border-t border-blue-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 md:pr-12 min-w-[250px] text-white">
              <div className="text-xs font-semibold tracking-wider text-white/80 mb-2">FOR QUERIES, FEEDBACK OR ASSISTANCE</div>
              <div className="text-xl md:text-2xl font-extrabold mb-2">Contact Quastech Learner Support</div>
              <div className="text-sm font-medium text-white/90">Best of support with us</div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto max-w-[380px]">
              <motion.div
                className="flex flex-col items-end"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-[10px] font-bold uppercase text-white/70 ml-2 mb-1">FOR VOICE SUPPORT</span>
                <motion.a
                  href="tel:+919711526942"
                  className="flex items-center gap-3 bg-white ring-1 ring-gray-200 rounded px-4 py-2 shadow-md text-[#222] font-semibold w-full md:w-auto"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  whileHover={{
                    y: -5,
                    rotateY: 5,
                    scale: 1.05,
                    backgroundColor: '#eff6ff',
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5 text-red-500" />
                  +918422800381
                </motion.a>
              </motion.div>
              <motion.div
                className="flex flex-col items-end"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-[10px] font-bold uppercase text-white/70 ml-2 mb-1">FOR WHATSAPP SUPPORT</span>
                <motion.a
                  href="https://wa.me/919711526942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white ring-1 ring-gray-200 rounded px-4 py-2 shadow-md text-[#222] font-semibold w-full md:w-auto"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  whileHover={{
                    y: -5,
                    rotateY: 5,
                    scale: 1.05,
                    backgroundColor: '#f0fdf4',
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#19c03c" className="w-5 h-5"><path d="M16 2.001C8.271 2.001 2 8.271 2 16.001c0 2.633.686 5.217 1.983 7.487L2.021 29.98l6.623-1.927A13.91 13.91 0 0 0 16 30c7.729 0 14-6.27 14-14s-6.271-13.999-14-13.999zm7.726 20.096c-.338.95-1.973 1.828-2.717 1.948-.688.115-1.564.163-2.526-.162-.581-.19-1.326-.43-2.294-.842-4.034-1.684-6.654-5.396-6.857-5.65-.197-.253-1.632-2.174-1.632-4.149 0-1.974 1.045-2.946 1.416-3.344.37-.397.815-.497 1.087-.497.272 0 .544.002.782.013.247.012.58-.094.902.688.338.808 1.147 2.792 1.247 3.001.099.208.164.481.011.774-.153.292-.23.47-.45.732-.223.267-.47.595-.67.798-.208.212-.425.416-.184.832.242.416 1.076 1.778 2.307 2.839 1.591 1.416 2.885 1.861 3.306 2.07.421.208.669.173.922-.104.252-.273 1.02-1.107 1.294-1.489.274-.382.547-.315.918-.196.354.114 2.249 1.059 2.642 1.254.394.197.656.297.752.462.096.164.096.951-.242 1.898z" /></svg>
                  +918422800381
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Recent Placements */}
        <section className="relative bg-white py-14 px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-9">
              <h2 className="heading-institute-lg flex-1 tracking-tight">Recent Placements</h2>
              <span className="ml-3 bg-blue-50 text-blue-700 rounded-full px-4 py-1 text-xs font-bold shadow">2000+</span>
            </div>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <motion.button
            className="px-6 py-2 text-base rounded-full border font-bold shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-700"
            style={{ minWidth: 140 }}
            whileHover={{
              y: -5,
              scale: 1.08,
              boxShadow: '0 12px 30px rgba(37,99,235,0.35)',
              transition: { duration: 0.25 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            All Placements
          </motion.button>
        </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 32 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-6 mt-6"
              >
                {placements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.36, delay: 0.04 * i }}
                    className="rounded-2xl bg-white p-6 flex flex-col items-center shadow-lg border border-blue-50 group"
                    style={{
                      minHeight: 258,
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                    whileHover={
                      isMobileView ? undefined : {
                        y: -10,
                        rotateY: 8,
                        rotateX: -5,
                        scale: 1.05,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                        transition: { duration: 0.3 }
                      }
                    }
                  >
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="rounded-full w-20 h-20 object-cover mb-3 border-4 border-blue-200 bg-white shadow"
                      whileHover={isMobileView ? undefined : {  scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="font-bold text-lg text-[#19376D] text-center mb-1">{item.name}</div>
                    <div className="text-[13px] text-blue-900 font-semibold text-center mb-3" style={{minHeight:'16px'}}>{item.role}</div>
                    {/* Company Logo - Below student info */}
                    {(() => {
                      // Find student data to get company logo
                      const studentData = students.find(s => s.name === item.name);
                      const logoPath = studentData?.companyLogo || item.company?.logo;
                      const companyName = studentData?.company || item.company?.name;
                      
                      return logoPath && companyName ? (
                        <div className="flex flex-col items-center gap-2 mt-auto pt-2 border-t border-gray-100 w-full">
                          <img 
                            src={logoPath} 
                            alt={companyName} 
                            className="h-12 md:h-14 w-auto max-w-[140px] object-contain rounded bg-white border border-gray-200 shadow-sm p-1"
                            onError={(e) => {
                              // Fallback if image doesn't exist
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <span className="text-[10px] text-gray-600 font-medium text-center leading-tight px-1">{companyName}</span>
                        </div>
                      ) : null;
                    })()}
                  </motion.div>
                ))}
            </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 6. Placed Learner's Testimonials */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="heading-institute-lg text-center mb-12">Placed Learner's Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                  whileHover={{
                    y: -8,
                    rotateY: 5,
                    rotateX: -3,
                    scale: 1.03,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 truncate">{testimonial.name}</h3>
                      <p className="text-sm text-blue-600 truncate">{testimonial.role}</p>
                      <p className="text-xs text-gray-500 truncate">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-6">{testimonial.review}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Our Hiring Partners */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="heading-institute-lg text-center mb-4">Our Hiring Partners</h2>
            <p className="section-subtitle text-center mb-8">Organizations around the globe trusting our Learners technical skills and hiring them with good payscale</p>
            
            {/* First Row - Sliding from Right to Left */}
            <div className="overflow-hidden mb-6">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ['0%', '-50%']
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear'
                  }
                }}
              >
                {/* Duplicate the logos for seamless loop */}
                {[...companyList.slice(0, 6), ...companyList.slice(0, 6)].map((company, i) => (
                  <div
                    key={`first-${i}`}
                    className="flex-shrink-0 w-48 md:w-56 lg:w-64"
                  >
                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center h-24"
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second Row - Sliding from Left to Right */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ['-50%', '0%']
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear'
                  }
                }}
              >
                {/* Duplicate the logos for seamless loop */}
                {[...companyList.slice(6, 12), ...companyList.slice(6, 12)].map((company, i) => (
                  <div
                    key={`second-${i}`}
                    className="flex-shrink-0 w-48 md:w-56 lg:w-64"
                  >
                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center h-24"
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">800+</div>
                  <div className="text-gray-600">Companies partnered with us</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">10k+</div>
                  <div className="text-gray-600">Learners already placed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  Everything you need to know about Placements
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Clear, concise answers about our placement process, support, and opportunities.
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
                      <span className="text-gray-900">How does QUASTECH help with placements?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      We provide comprehensive placement support including resume building, profile preparation, mock interviews, HR rounds practice, and direct interview opportunities through our 800+ hiring partners. Our dedicated placement team guides you through the entire process.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">What companies are associated with QUASTECH for placements?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      We have partnerships with 800+ leading IT companies including TCS, Accenture, Capgemini, Infosys, Wipro, Cognizant, Mind Gate, AQM, GreytHR, and many more. These companies regularly conduct campus drives and hire our students.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">What is the placement process after course completion?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      After completing your training, you'll attend profile building sessions, participate in mock interviews, and get your resume reviewed. Then, we schedule interviews with our hiring partners. Most students secure placements within 2-4 weeks of course completion.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">What is the average placement package offered?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      Placement packages vary based on skills, experience, and company. Our students have secured positions ranging from entry-level (3-5 LPA) to senior roles (8-15 LPA). We focus on matching candidates with roles that align with their expertise and career goals.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-5" className="group bg-white border border-blue-100 rounded-2xl mb-4 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">Do you provide placement assistance for all courses?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      Yes, placement assistance is available for all our courses including IT Placement Courses, Non-IT Placement Courses, Online Courses, and Degree Programs. We ensure every student gets dedicated support to kickstart their career.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-6" className="group bg-white border border-blue-100 rounded-2xl mb-1 shadow-sm hover:shadow-lg transition-shadow">
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:no-underline">
                      <span className="text-gray-900">What support is provided during placement drives?</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                      During placement drives, we provide interview scheduling, pre-interview briefings, technical and HR preparation sessions, resume optimization, and post-interview feedback. Our team is available throughout the process to address any concerns and help you succeed.
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
                    alt="Frequently Asked Questions about Placements"
                    className="w-full h-auto object-contain max-h-[580px]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </DarkModeProvider>
  );
};
export default PlacementPage;

