import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CounsellorForm from "@/components/CounsellorForm";
import {
  Code,
  Database,
  Globe,
  Brain,
  Shield,
  Clock,
  ArrowRight,
  PhoneCall,
  MoreHorizontal,
  Calendar,
  Briefcase,
  Award,
  Rocket,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Courses = () => {
  // Carousel features that rotate
  const carouselFeatures = [
    { text: "Running Projects", icon: Rocket, color: "from-purple-600 to-purple-700" },
    { text: "Unlimited Interviews", icon: Briefcase, color: "from-blue-600 to-blue-700" },
    { text: "Integrated Internship", icon: Award, color: "from-orange-500 to-orange-600" },
    { text: "100% Job Assistance", icon: TrendingUp, color: "from-green-600 to-green-700" }
  ];

  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [techAnimationActive, setTechAnimationActive] = useState<{ [key: number]: boolean }>({});
  const [showCounsellorForm, setShowCounsellorForm] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!showEnrollForm) {
      setSelectedCourse(null);
      setStudentName("");
      setStudentPhone("");
    }
  }, [showEnrollForm]);

  // Course page mapping
  const coursePageMap: { [key: string]: string } = {
    "Software Testing with AI": "/software-testing-training",
    "Full Stack Java Development with AI": "/full-stack-java-development",
    "Full Stack Python Development with AI": "/full-stack-python-development",
    "Full Stack .NET Development with AI": "/full-stack-dotnet-development",
    "Digital Marketing with AI": "/digital-marketing",
    "Data Science with AI": "/python-data-science",
    "Data Analytics with AI": "/data-analysis-visualization"
  };

  const WHATSAPP_NUMBER = "918422800381";

  // Define courses array first - AI-Enhanced Placement Courses
  const courses = [
    {
      icon: Shield,
      title: "Software Testing with AI",
      duration: "6-8 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      features: [
        "/images/icons/python.png",
        "/images/icons/se.png",
        "/images/icons/jmeter.png",
        "/images/icons/postman.png",
        "/images/icons/SQLZ.png",
        "/images/icons/Mysql.png"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Code,
      title: "Full Stack Java Development with AI",
      duration: "7-9 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      features: [
        "/images/icons/full%20stack%20java%20development.png",
        "/images/icons/Boot.png",
        "/images/icons/angular.png",
        "/images/icons/react.png",
        "/images/icons/Mysql.png",
        "/images/icons/docker.png"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Code,
      title: "Full Stack Python Development with AI",
      duration: "6-8 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      features: [
        "/images/icons/python.png",
        "/images/icons/django.png",
        "/images/icons/flask.png",
        "/images/icons/HTML.png",
        "/images/icons/CSS.png",
        "/images/icons/JS.png"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Full Stack .NET Development with AI",
      duration: "7-9 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      features: [
        "/images/icons/ASP%20net.png",
        "/images/icons/MS.png",
        "/images/icons/SQLZ.png",
        "/images/icons/HTML.png",
        "/images/icons/CSS.png",
        "/images/icons/TS.png"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing with AI",
      duration: "5-7 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      features: [
        "/images/icons/ai.png",
        "/images/icons/HTML.png",
        "/images/icons/CSS.png",
        "/images/icons/JS.png",
        "/images/icons/x.png",
        "/images/icons/yi.png"
      ],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Brain,
      title: "Data Science with AI",
      duration: "8-10 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      features: [
        "/images/icons/python.png",
        "/images/icons/pandsa.png",
        "/images/icons/num.png",
        "/images/icons/SQLZ.png",
        "/images/icons/ai.png",
        "/images/icons/docker.png"
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Data Analytics with AI",
      duration: "6-8 Months",
      trainingType: "Classroom & Online Training",
      batchTypes: "Weekday and Weekend Batches",
      features: [
        "/images/icons/python.png",
        "/images/icons/pandsa.png",
        "/images/icons/num.png",
        "/images/icons/BI.png",
        "/images/icons/SQLZ.png",
        "/images/icons/Mysql.png"
      ],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  // Navigation helpers
  const handleCoursePrevious = () => {
    setCurrentCourseIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleCourseNext = () => {
    setCurrentCourseIndex((prev) => (prev + 1) % courses.length);
  };

  const handleEnrollClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setShowEnrollForm(true);
  };

  const handleEnrollSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!studentName.trim() || !studentPhone.trim() || !selectedCourse) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = encodeURIComponent(
      `Hello, I am interested in the ${selectedCourse} course.\nName: ${studentName.trim()}\nPhone: ${studentPhone.trim()}`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setShowEnrollForm(false);
  };

  // Toggle technology animation on hover
  const handleTechAnimationStart = (index: number) => {
    setTechAnimationActive((prev) => ({ ...prev, [index]: true }));
  };

  const handleTechAnimationStop = (index: number) => {
    setTechAnimationActive((prev) => ({ ...prev, [index]: false }));
  };

  // Navigate to course page
  const handleKnowMore = (courseTitle: string) => {
    const pagePath = coursePageMap[courseTitle];
    if (pagePath) {
      navigate(pagePath);
    }
  };

  return (
    <section id="courses" className="section-spacing-compact bg-gradient-mesh relative z-10 max-w-full pt-6 md:pt-8">
      <div className="container mx-auto container-padding px-4 sm:px-6 md:px-8 max-w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-6 mt-2 md:mt-3"
        >
          <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-3 md:mb-4 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
            <Brain className="w-4 h-4 md:w-5 md:h-5" />
            AI-ENHANCED COURSES
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent mb-3">
            Transform Your Career with AI Technology
          </h2>
          <div className="h-0.5 w-24 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-orange-500" />
        </motion.div>

        {/* Courses Slider with Professional Cards */}
        <div className="relative py-4 md:py-6 max-w-full overflow-visible">
          {/* Mobile: Single Card with Navigation */}
          <div className="block md:hidden relative py-2 max-w-full">
            {/* Mobile Navigation Arrows (always on top) */}
            <motion.button
              onClick={handleCoursePrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-[9999] pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center shadow-2xl transition-all"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            <motion.button
              onClick={handleCourseNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-[9999] pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center shadow-2xl transition-all"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            {/* Display Single Course Card */}
            <div className="flex justify-center px-4 sm:px-8 max-w-full">
              {(() => {
                const course = courses[currentCourseIndex];
                return (
                  <motion.div
                    key={`${course.title}-${currentCourseIndex}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    // lowered zIndex so arrows remain above cards
                    whileHover={{ y: -8, scale: 1.03, zIndex: 40 }}
                    className="group w-full max-w-md relative z-10 hover:z-40"
                  >
                    <Card className="w-full h-auto md:h-[520px] overflow-hidden border-2 border-blue-100 shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] hover:border-blue-300 transition-all duration-700 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 transform-gpu">
                      <CardContent className="p-4 sm:p-5 flex flex-col h-full">
                        {/* Main Content - Course Icon Left, Details Right */}
                        <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4 min-h-[60px] md:min-h-[85px]">
                          {/* Course Icon - Left Side */}
                          <motion.div
                            className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 flex-shrink-0 relative overflow-hidden"
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                            <course.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" />
                          </motion.div>

                          {/* Course Details */}
                          <div className="flex-1 flex flex-col justify-center min-w-0">
                            <h3 className="text-base sm:text-lg font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-1.5 sm:mb-2 leading-tight line-clamp-2">
                              {course.title}
                            </h3>
                            <div className="flex items-center gap-1.5 mb-1">
                              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-institute-blue flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-gray-600 leading-tight truncate">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-institute-orange flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-gray-600 leading-tight line-clamp-1">{course.batchTypes}</span>
                            </div>
                          </div>
                        </div>

                        {/* Technology Logos - Hover/Click Controlled Animation */}
                        <div
                          className="mb-3 md:mb-4 relative overflow-hidden cursor-pointer touch-pan-y"
                          onMouseEnter={() => handleTechAnimationStart(currentCourseIndex)}
                          onMouseLeave={() => handleTechAnimationStop(currentCourseIndex)}
                          onTouchStart={() => handleTechAnimationStart(currentCourseIndex)}
                          onTouchEnd={() => handleTechAnimationStop(currentCourseIndex)}
                          onClick={() => {
                            if (!techAnimationActive[currentCourseIndex]) {
                              handleTechAnimationStart(currentCourseIndex);
                            } else {
                              handleTechAnimationStop(currentCourseIndex);
                            }
                          }}
                        >
                          <div className="relative h-12 sm:h-14 flex items-center">
                            <motion.div
                              className="flex gap-2 absolute"
                              animate={techAnimationActive[currentCourseIndex] ? { x: [0, -300] } : { x: 0 }}
                              transition={{
                                x: {
                                  repeat: techAnimationActive[currentCourseIndex] ? Infinity : 0,
                                  duration: 8,
                                  ease: "linear"
                                }
                              }}
                            >
                              {course.features.slice(0, 6).map((imgSrc, idx) => (
                                <motion.div
                                  key={`orig-${idx}`}
                                  className="w-12 h-12 bg-white rounded-lg shadow-md border-2 border-blue-100 flex-shrink-0 overflow-hidden p-1"
                                  whileHover={{ scale: 1.15, y: -3, rotate: 5, borderColor: "#3b82f6" }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <img src={imgSrc} alt="Tech" className="w-full h-full object-contain" />
                                </motion.div>
                              ))}
                              {course.features.slice(0, 6).map((imgSrc, idx) => (
                                <motion.div
                                  key={`dup-${idx}`}
                                  className="w-12 h-12 bg-white rounded-lg shadow-md border-2 border-blue-100 flex-shrink-0 overflow-hidden p-1"
                                  whileHover={{ scale: 1.15, y: -3, rotate: 5, borderColor: "#3b82f6" }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <img src={imgSrc} alt="Tech" className="w-full h-full object-contain" />
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>
                        </div>

                        {/* Feature Badges */}
                        <div className="mb-3 md:mb-4 flex flex-col gap-1 md:gap-2">
                          {carouselFeatures.map((feature, idx) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <div
                                key={idx}
                                className={`bg-gradient-to-r ${feature.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 sm:gap-2 shadow-md`}
                              >
                                <FeatureIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                <span className="truncate">{feature.text.toUpperCase()}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Bottom Buttons */}
                        <div className="mt-auto space-y-2 pb-2 sm:pb-4">
                          <div className="flex gap-2">
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 text-[10px] sm:text-xs transition-all duration-300 font-semibold min-w-0 max-w-[50%] px-1.5 py-1.5 sm:py-2 overflow-hidden"
                            >
                              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center justify-center gap-1 sm:gap-1.5">
                                <PhoneCall className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                                <span className="relative z-10 truncate whitespace-nowrap overflow-hidden text-ellipsis">Call Now</span>
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleKnowMore(course.title)}
                              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-[10px] sm:text-xs min-w-0 max-w-[50%] px-1.5 py-1.5 sm:py-2 overflow-hidden cursor-pointer"
                            >
                              <MoreHorizontal className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1 flex-shrink-0" />
                              <span className="truncate whitespace-nowrap overflow-hidden text-ellipsis">Know More</span>
                            </Button>
                          </div>

                          <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} onClick={() => handleEnrollClick(course.title)} className="cursor-pointer">
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 hover:from-blue-700 hover:via-blue-800 hover:to-orange-600 text-white font-semibold py-2 sm:py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group text-xs sm:text-sm border-0"
                            >
                              <motion.span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2" whileHover={{ x: 1 }}>
                                <span>Enroll Now</span>
                                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                              </motion.span>
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })()}
            </div>
          </div>

          {/* Desktop: Manual Navigation with Arrows */}
          <div className="hidden md:block relative py-4 max-w-full overflow-visible">
            {/* Course Cards Display - Show 3 at a time */}
            <div className="flex gap-4 md:gap-5 lg:gap-6 justify-center px-8 md:px-12 lg:px-16 max-w-full relative">
              {/* Desktop arrows (always on top) */}
              <motion.button
                onClick={handleCoursePrevious}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-[9999] pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center shadow-2xl transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>

              <motion.button
                onClick={handleCourseNext}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-[9999] pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center shadow-2xl transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>

              {[0, 1, 2].map((offset) => {
                const courseIndex = (currentCourseIndex + offset) % courses.length;
                const course = courses[courseIndex];
                return (
                  <motion.div
                    key={`${course.title}-${offset}`}
                    className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px] group relative z-10 hover:z-40"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    // lowered zIndex so arrows remain above cards
                    whileHover={{ y: -12, scale: 1.04, zIndex: 40 }}
                  >
                    <Card className="h-auto md:h-[500px] w-full overflow-hidden border-2 border-blue-100 shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] hover:border-blue-300 transition-all duration-700 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 transform-gpu">
                      <CardContent className="p-4 md:p-5 flex flex-col h-full">
                        {/* Main Content - Course Icon Left, Details Right */}
                        <div className="flex gap-3 md:gap-4 mb-3 md:mb-4 min-h-[60px] md:min-h-[90px]">
                          {/* Course Icon - Left Side */}
                          <motion.div
                            className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 flex-shrink-0 relative overflow-hidden"
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                            <course.icon className="w-8 h-8 text-white relative z-10" />
                          </motion.div>

                          {/* Course Details */}
                          <div className="flex-1 flex flex-col justify-center min-w-0">
                            <h3 className="text-base md:text-lg font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-1.5 md:mb-2 leading-tight line-clamp-2">
                              {course.title}
                            </h3>
                            <div className="flex items-center gap-1.5 mb-1">
                              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-institute-blue flex-shrink-0" />
                              <span className="text-xs md:text-sm text-gray-600 leading-tight truncate">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-institute-orange flex-shrink-0" />
                              <span className="text-xs md:text-sm text-gray-600 leading-tight line-clamp-1">{course.batchTypes}</span>
                            </div>
                          </div>
                        </div>

                        {/* Technology Logos */}
                        <div
                          className="mb-3 md:mb-4 relative overflow-hidden cursor-pointer touch-pan-y"
                          onMouseEnter={() => handleTechAnimationStart(courseIndex)}
                          onMouseLeave={() => handleTechAnimationStop(courseIndex)}
                          onTouchStart={() => handleTechAnimationStart(courseIndex)}
                          onTouchEnd={() => handleTechAnimationStop(courseIndex)}
                          onClick={() => {
                            if (!techAnimationActive[courseIndex]) {
                              handleTechAnimationStart(courseIndex);
                            } else {
                              handleTechAnimationStop(courseIndex);
                            }
                          }}
                        >
                          <div className="relative h-12 md:h-14 flex items-center">
                            <motion.div
                              className="flex gap-2 absolute"
                              animate={techAnimationActive[courseIndex] ? { x: [0, -320] } : { x: 0 }}
                              transition={{
                                x: {
                                  repeat: techAnimationActive[courseIndex] ? Infinity : 0,
                                  duration: 8,
                                  ease: "linear"
                                }
                              }}
                            >
                              {course.features.slice(0, 6).map((imgSrc, idx) => (
                                <motion.div
                                  key={`orig-${idx}`}
                                  className="w-12 h-12 bg-white rounded-lg shadow-md border-2 border-blue-100 flex-shrink-0 overflow-hidden p-1"
                                  whileHover={{ scale: 1.15, y: -3, rotate: 5, borderColor: "#3b82f6" }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <img src={imgSrc} alt="Tech" className="w-full h-full object-contain" />
                                </motion.div>
                              ))}
                              {course.features.slice(0, 6).map((imgSrc, idx) => (
                                <motion.div
                                  key={`dup-${idx}`}
                                  className="w-12 h-12 bg-white rounded-lg shadow-md border-2 border-blue-100 flex-shrink-0 overflow-hidden p-1"
                                  whileHover={{ scale: 1.15, y: -3, rotate: 5, borderColor: "#3b82f6" }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <img src={imgSrc} alt="Tech" className="w-full h-full object-contain" />
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>
                        </div>

                        {/* Feature Badges */}
                        <div className="mb-3 md:mb-4 flex flex-col gap-1 md:gap-2">
                          {carouselFeatures.map((feature, idx) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <div
                                key={idx}
                                className={`bg-gradient-to-r ${feature.color} text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[10px] md:text-xs font-semibold flex items-center gap-1.5 md:gap-2 shadow-md`}
                              >
                                <FeatureIcon className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" />
                                <span className="truncate">{feature.text.toUpperCase()}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Bottom Buttons */}
                        <div className="mt-auto space-y-2 pb-2 md:pb-4">
                          <div className="flex gap-2">
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 text-[10px] md:text-xs transition-all duration-300 font-semibold min-w-0 max-w-[50%] px-1.5 py-1.5 overflow-hidden"
                            >
                              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center justify-center gap-1 md:gap-1.5">
                                <PhoneCall className="w-2.5 h-2.5 md:w-3 md:h-3 flex-shrink-0" />
                                <span className="relative z-10 truncate whitespace-nowrap overflow-hidden text-ellipsis">Call Now</span>
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleKnowMore(course.title)}
                              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-[10px] md:text-xs min-w-0 max-w-[50%] px-1.5 py-1.5 overflow-hidden cursor-pointer"
                            >
                              <MoreHorizontal className="w-2.5 h-2.5 md:w-3 md:h-3 mr-0.5 flex-shrink-0" />
                              <span className="truncate whitespace-nowrap overflow-hidden text-ellipsis">Know More</span>
                            </Button>
                          </div>

                          <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} onClick={() => handleEnrollClick(course.title)} className="cursor-pointer">
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 hover:from-blue-700 hover:via-blue-800 hover:to-orange-600 text-white font-semibold py-2 md:py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group text-xs md:text-sm border-0"
                            >
                              <motion.span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2" whileHover={{ x: 1 }}>
                                <span>Enroll Now</span>
                                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                              </motion.span>
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-6 md:mt-8">
          <div className="bg-gradient-hero rounded-2xl p-6 md:p-8 lg:p-10 text-white shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Transform Your Career with Expert Guidance</h3>
            <p className="text-sm md:text-base mb-5 md:mb-6 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Connect with our industry-expert career counselors for personalized course recommendations tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" className="text-sm md:text-base font-semibold hover:scale-105 transition-transform" onClick={() => setShowCounsellorForm(true)}>
                Get Free Career Counseling →
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={showEnrollForm} onOpenChange={setShowEnrollForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enroll in {selectedCourse ?? "a course"}</DialogTitle>
            <DialogDescription>Share your details and we&apos;ll connect with you on WhatsApp right away.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEnrollSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="course-name">Course</Label>
              <Input id="course-name" value={selectedCourse ?? ""} readOnly className="font-semibold text-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-name">Full Name</Label>
              <Input id="student-name" placeholder="Enter your full name" value={studentName} onChange={(event) => setStudentName(event.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-phone">Phone Number</Label>
              <Input id="student-phone" type="tel" placeholder="Enter your phone number" value={studentPhone} onChange={(event) => setStudentPhone(event.target.value)} required />
            </div>
            <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <Button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-green-500 via-green-600 to-blue-600 hover:from-green-600 hover:via-green-700 hover:to-blue-700">
                Send on WhatsApp
              </Button>
              <Button type="button" variant="outline" asChild className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                <a href={`tel:+${WHATSAPP_NUMBER}`}>Call Now +{WHATSAPP_NUMBER}</a>
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Counsellor Form Modal */}
      <CounsellorForm isOpen={showCounsellorForm} onClose={() => setShowCounsellorForm(false)} />
    </section>
  );
};

export default Courses;
