import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JourneySection from "@/components/JourneySection";
import Courses from "@/components/Courses";
import Placement from "@/components/Placement";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import EnquiryForm from "@/components/EnquiryForm";
import BranchSection from "@/components/BranchSection";
import FAQSection from "@/components/FAQSection";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { OrganizationStructuredData } from "@/components/StructuredData";
import GoogleReviewsDrawer from "@/components/GoogleReviewsDrawer";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <DarkModeProvider>
      <SEO
        title="Best IT Training Institute in Mumbai with 100% Placement"
        description="QUASTECH - Premier IT training institute in Mumbai offering industry-leading courses in Full Stack Development, Data Science, Software Testing, Digital Marketing with guaranteed placements. Join 5000+ successful students!"
        keywords="IT training institute Mumbai, best IT courses, software development training, full stack developer course, data science training, digital marketing course, placement guarantee, coding bootcamp, programming classes Mumbai, professional IT certification"
        canonical="/"
        ogType="website"
      />
      <OrganizationStructuredData />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">

        <Header />
        <Hero />
        <Courses />
        <Reviews />
        <About />
        <JourneySection />
        <Placement />
        <Contact />
        <EnquiryForm />
        <BranchSection />
        <FAQSection />
        <Footer />

        {/* Fixed Google Rating Element - Desktop */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:block" style={{ marginRight: '-60px' }}>
          <GoogleReviewsDrawer>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              whileHover={{ scale: 1.05, x: -15 }}
              className="cursor-pointer"
            >
              <div
                className="bg-blue-600 rounded-lg shadow-xl flex items-center justify-center"
                style={{
                  transform: 'rotate(-90deg)',
                  transformOrigin: 'center center',
                  width: '150px',
                  height: '46px',
                  padding: '5px'
                }}
              >
                <img
                  src="/images/rating.gif"
                  alt="Google Rating"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </GoogleReviewsDrawer>
        </div>

        {/* Fixed Google Rating Element - Mobile & Tablet */}
        <div className="fixed bottom-6 right-4 z-30 block lg:hidden">
          <GoogleReviewsDrawer>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <div
                className="bg-blue-600 rounded-lg shadow-xl flex items-center justify-center"
                style={{
                  transform: 'rotate(0deg)',
                  width: '140px',
                  height: '50px',
                  padding: '8px'
                }}
              >
                <img
                  src="/images/rating.gif"
                  alt="Google Rating"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </GoogleReviewsDrawer>
        </div>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </DarkModeProvider>
  );
};

export default Index;

