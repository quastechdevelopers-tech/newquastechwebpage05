// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

/**
 * Responsive Footer (updated: "Online Courses" styling)
 * - Mobile: collapsible panels (single-open behavior)
 * - Desktop: all panels expanded
 *
 * Drop-in replacement for your existing Footer file.
 */

/* ----------------------------- Small subcomponents ---------------------------- */

const IconLink = ({ Icon, href, label, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-9 h-9 md:w-10 md:h-10 bg-blue-800/50 rounded-full flex items-center justify-center text-gray-300 transition-all border border-blue-700/50 hover:border-white/30 ${className}`}
  >
    <Icon className="w-4 h-4 md:w-5 md:h-5" />
  </a>
);

const FooterLink = ({ href, name, smallArrow = false }) => {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const handleClick = (e) => {
    if (name === "Home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (name === "Faq's") {
      e.preventDefault();
      window.location.href = "/#faq";
    }
  };

  const baseCls =
    "flex items-center transition-colors text-sm group block w-full py-2"; // full width for mobile tap

  const arrowCls = smallArrow
    ? "w-3 h-3 mr-3 text-blue-200 group-hover:text-orange-400 transition-colors"
    : "w-3 h-3 mr-2 text-blue-400 group-hover:text-orange-400 transition-colors";

  return (
    <li>
      {isInternal ? (
        <Link to={href} onClick={handleClick} className={baseCls + " text-gray-300 hover:text-white"}>
          <ArrowRight className={arrowCls} />
          <span className="leading-tight">{name}</span>
        </Link>
      ) : (
        <a
          href={href}
          onClick={handleClick}
          className={baseCls + " text-gray-300 hover:text-white"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowRight className={arrowCls} />
          <span className="leading-tight">{name}</span>
        </a>
      )}
    </li>
  );
};

const SectionTitle = ({ children }) => (
  <div className="flex items-center justify-between md:block">
    <h3 className="text-lg md:text-xl font-extrabold mb-2 text-white uppercase tracking-wider border-b-2 border-orange-500 pb-2 inline-block">
      {children}
    </h3>
  </div>
);

/* ----------------------------- Main Component --------------------------- */

const Footer = () => {
  /* ----------------------------- Data / Links ----------------------------- */
  const placementCoursesWithAI = [
    { name: "Software Testing with AI", href: "/software-testing-training" },
    { name: "Full Stack Java with AI", href: "/full-stack-java-development" },
    { name: "Full Stack Python with AI", href: "/full-stack-python-development" },
    { name: "Full Stack .NET with AI", href: "/full-stack-dotnet-development" },
    { name: "Digital Marketing with AI", href: "/digital-marketing" },
    { name: "Data Science with AI", href: "/python-data-science" },
    { name: "Data Analytics with AI", href: "/data-analysis-visualization" },
  ];

  const certificationCourses = {
    softwareTesting: [
      // { name: "Software Testing", href: "/software-testing-training" },
      { name: "Manual Testing", href: "/manual-testing" },
      { name: "Selenium Automation", href: "/selenium-testing" },
      { name: "ISTQB Certification", href: "/istqb-certification" },
    ],
    fullstackDevelopment: [
      { name: "Full Stack Java", href: "/full-stack-java-development" },
      { name: "Full Stack Python", href: "/full-stack-python-development" },
      { name: "Full Stack Web", href: "/web-development-course" },
      { name: "Full Stack .NET", href: "/full-stack-dotnet-development" },
      { name: "MEAN Stack", href: "/mean-stack-development" },
      { name: "MERN Stack", href: "/mern-stack-development" },
    ],
    frontendDevelopment: [
      { name: "React JS", href: "/react-course" },
      { name: "Angular", href: "/angular-course" },
      { name: "Web Designing", href: "/web-designing-training" },
    ],
    dataScienceAnalytics: [
      { name: "Data Science with Python", href: "/python-data-science" },
      { name: "Data Analytics & Visualization", href: "/data-analysis-visualization" },
      { name: "Big Data Engineering", href: "/big-data-engineering" },
    ],
    otherCourses: [
      { name: "Java Development", href: "/java-training" },
      { name: "Python Development", href: "/python-training" },
      { name: "RPA Training", href: "/rpa" },
    ],
  };

  const dualDegreeLinks = [
    { name: "BCA (Bachelor of Computer Applications)", href: "/bca" },
    { name: "Quastech Degree Program", href: "/quastech-degree-program" },
  ];

  // THIS IS NOW "Online Courses" (matches screenshot)
  const onlineCourses = [
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Graphic Designing", href: "/graphic-designing" },
    { name: "Web Graphic Designing", href: "/web-graphic-designing" },
    { name: "Financial Accounting", href: "/financial-accounting" },
    { name: "Accounting", href: "/accounting" },
    { name: "Taxation", href: "/taxation" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "/about" },
    { name: "Placement", href: "/placement" },
    { name: "Contact Us", href: "/contact" },
    // { name: "Certificate Download", href: "#" },
    { name: "Payment Methods", href: "#" },
    { name: "Blogs", href: "/blog" },
    { name: "Faq's", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/QuasTech", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://twitter.com/quastech", color: "hover:text-sky-400" },
    { icon: Instagram, href: "https://www.instagram.com/quastech.in/", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/quastech-in/", color: "hover:text-blue-400" },
    { icon: Youtube, href: "https://www.youtube.com/c/QuasTech", color: "hover:text-red-500" },
  ];

  /* ----------------------------- Collapse state --------------------------- */
  // Sections ordering (mobile single-open behavior): 0: About, 1: Placement, 2: Certification, 3: More, 4: Programs
  const [openIndex, setOpenIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => {
      const md = window.matchMedia("(min-width: 768px)").matches;
      setIsDesktop(md);
      if (md) setOpenIndex(null);
      else if (openIndex === null) setOpenIndex(0);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (idx) => {
    if (isDesktop) return;
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  /* ----------------------------- Animation variants ------------------------ */
  const panelVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  /* ----------------------------- Render ------------------------------ */
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white mt-6 md:mt-8">
      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* ---------------- Column 1: About & Contact ---------------- */}
          <div className="lg:col-span-1">
            <div className="rounded-md bg-transparent">
              <button
                onClick={() => toggle(0)}
                aria-expanded={openIndex === 0 || isDesktop}
                className="w-full md:hidden flex justify-between items-center py-2"
              >
                <span className="font-semibold text-sm">About QUASTECH</span>
                <span className="text-gray-300">{openIndex === 0 ? "▴" : "▾"}</span>
              </button>

              <AnimatePresence initial={false}>
                {(isDesktop || openIndex === 0) && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                    transition={{ duration: 0.25 }}
                    className="pt-2"
                  >
                    <img
                      src="/uploads/64f34837-4f64-4bbc-886b-305630eefd79.png"
                      alt="QUASTECH Logo"
                      className="h-10 w-auto mb-3 invert brightness-0"
                    />
                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                      Leading IT education institute with ISO 9001:2015 certification. Transforming careers through
                      innovative technology training.
                    </p>

                    <div className="space-y-3 bg-blue-900/30 rounded-lg p-3 border border-blue-800/50 mb-4">
                      <h5 className="text-white font-bold mb-2 text-sm">📍 Thane Branch</h5>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                        <span className="text-xs text-gray-300 leading-relaxed">
                          201, Anant Laxmi Chambers, Dada Patil Marg, opp. Waman Hari Pethe Jewellers, Thane (W),
                          Maharashtra 400602
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        <a
                          href="https://wa.me/918422800381"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2"
                        >
                          +91 8422800381
                          <span className="text-xs text-green-400">(WhatsApp)</span>
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        <a href="mailto:info@quastech.in" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">
                          info@quastech.in
                        </a>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-bold mb-2 text-white text-sm">Connect With Us</h5>
                      <div className="flex gap-3">
                        {socialLinks.map((s, i) => (
                          <IconLink key={i} Icon={s.icon} href={s.href} label={`Open social ${i}`} className={s.color} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ---------------- Column 2: Placement + Quick Links ---------------- */}
          <div>
            <div>
              <button
                onClick={() => toggle(1)}
                aria-expanded={openIndex === 1 || isDesktop}
                className="w-full md:hidden flex justify-between items-center py-2"
              >
                <span className="font-semibold text-sm">Placement Courses</span>
                <span className="text-gray-300">{openIndex === 1 ? "▴" : "▾"}</span>
              </button>

              <AnimatePresence initial={false}>
                {(isDesktop || openIndex === 1) && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                    transition={{ duration: 0.25 }}
                    className="pt-2"
                  >
                    <SectionTitle>Placement Courses with AI</SectionTitle>
                    <ul className="space-y-1 mt-3 mb-4">
                      {placementCoursesWithAI.map((link) => (
                        <FooterLink key={link.name} {...link} />
                      ))}
                    </ul>

                    <SectionTitle>Quick Links</SectionTitle>
                    <ul className="space-y-1 mt-3">
                      {quickLinks.map((link) => (
                        <FooterLink key={link.name} {...link} />
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ---------------- Column 3: Certification (part 1) ---------------- */}
          <div>
            <div>
              <button
                onClick={() => toggle(2)}
                aria-expanded={openIndex === 2 || isDesktop}
                className="w-full md:hidden flex justify-between items-center py-2"
              >
                <span className="font-semibold text-sm">Certification Courses</span>
                <span className="text-gray-300">{openIndex === 2 ? "▴" : "▾"}</span>
              </button>

              <AnimatePresence initial={false}>
                {(isDesktop || openIndex === 2) && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                    transition={{ duration: 0.25 }}
                    className="pt-2"
                  >
                    <SectionTitle>Certification Courses</SectionTitle>

                    <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-2">Software Testing</h5>
                    <ul className="space-y-1">
                      {certificationCourses.softwareTesting.map((link) => (
                        <FooterLink key={link.name} {...link} />
                      ))}
                    </ul>

                    <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-3">Frontend Development</h5>
                    <ul className="space-y-1">
                      {certificationCourses.frontendDevelopment.map((link) => (
                        <FooterLink key={link.name} {...link} />
                      ))}
                    </ul>

                    <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-3">Other Courses</h5>
                    <ul className="space-y-1">
                      {certificationCourses.otherCourses.map((link) => (
                        <FooterLink key={link.name} {...link} />
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ---------------- Column 4: Fullstack & Data Science ---------------- */}
          <div>
            <div>
              <button
                onClick={() => toggle(3)}
                aria-expanded={openIndex === 3 || isDesktop}
                className="w-full md:hidden flex justify-between items-center py-2"
              >
                <span className="font-semibold text-sm">More Courses</span>
                <span className="text-gray-300">{openIndex === 3 ? "▴" : "▾"}</span>
              </button>

              <AnimatePresence initial={false}>
                {(isDesktop || openIndex === 3) && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                    transition={{ duration: 0.25 }}
                    className="pt-2 md:pt-12 lg:pt-[104px] xl:pt-[108px]"
                  >
                    <h5 className="text-sm font-semibold text-blue-300 mb-2">Fullstack Development</h5>
                    <ul className="space-y-1">
                      {certificationCourses.fullstackDevelopment.map((link) => (
                        <FooterLink key={link.name} {...link} />
                      ))}
                    </ul>

                    <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-3">Data Science & Analytics</h5>
                    <ul className="space-y-1">
                      {certificationCourses.dataScienceAnalytics.map((link) => (
                        <FooterLink key={link.name} {...link} />
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ---------------- Column 5: Dual Degree & ONLINE COURSES ---------------- */}
          <div>
            <div>
              <button
                onClick={() => toggle(4)}
                aria-expanded={openIndex === 4 || isDesktop}
                className="w-full md:hidden flex justify-between items-center py-2"
              >
                <span className="font-semibold text-sm">Programs & More</span>
                <span className="text-gray-300">{openIndex === 4 ? "▴" : "▾"}</span>
              </button>

              <AnimatePresence initial={false}>
                {(isDesktop || openIndex === 4) && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                    transition={{ duration: 0.25 }}
                    className="pt-2"
                  >
                    <SectionTitle>Dual Degree</SectionTitle>
                    <ul className="space-y-1 mt-2">
                      {dualDegreeLinks.map((link) => (
                        <FooterLink key={link.name} {...link} />
                      ))}
                    </ul>

                    {/* Online Courses: styled like your screenshot */}
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-blue-200 mb-2">Online Courses</h5>
                      <ul className="space-y-2">
                        {onlineCourses.map((link) => (
                          // pass smallArrow={true} to make arrow slimmer and slightly more spaced (matches screenshot)
                          <FooterLink key={link.name} {...link} smallArrow />
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------- Bottom Bar ---------------------------- */}
      <div className="border-t border-blue-800/50 bg-blue-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} QUASTECH. All rights reserved. | ISO 9001:2015 Certified
            </div>
            <div className="flex gap-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
