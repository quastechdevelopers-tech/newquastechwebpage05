import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Briefcase, Users, Star, Globe, Award, Building2 } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 🔹 Type Definitions
type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

type Partner = {
  name: string;
  logo: string;
};

// 🔹 Stats
const stats: Stat[] = [
  { icon: Users, value: "5000+", label: "Students Placed" },
  { icon: Briefcase, value: "800+", label: "Hiring Partners" },
  { icon: Globe, value: "25+", label: "Global Recruiters" },
  { icon: Star, value: "95%", label: "Placement Rate" },
];

// 🔹 Hiring Partners (logos)
const partners: Partner[] = [
  { name: "Ai x", logo: "/images/companypng/1.png" },
  { name: "Tech Mahindra", logo: "/images/companypng/2.png" },
  { name: "CyberTech", logo: "/images/companypng/3.png" },
  { name: "CRMNEXT", logo: "/images/companypng/4.png" },
  { name: "AQM", logo: "/images/companypng/5.png" },//
  { name: "Accenture", logo: "/images/companypng/6.png" },
  { name: "Capgemini", logo: "/images/companypng/7.png" },
  { name: "Infosys", logo: "/images/companypng/8.png" },
  { name: "Indieboon Avenues", logo: "/images/companypng/10.png" },
  { name: "Miscot", logo: "/images/companypng/11.png" },
  { name: "Auditime", logo: "/images/companypng/12.png" },
  { name: "Plan IT", logo: "/images/companypng/13.png" },//
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
  { name: "Cateina", logo: "/images/companypng/31.png" },//
  { name: "Dell Technologies", logo: "/images/companypng/32.png" },
  { name: "Agaetis", logo: "/images/companypng/33.png" },
  { name: "CM Thoughts", logo: "/images/companypng/34.png" },
  { name: "ATCS", logo: "/images/companypng/35.png" },
];

// --- Sub Components ---
const Card = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200/50 bg-white p-4 md:p-5 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-8 md:mb-10 mt-3 md:mt-4"
  >
    <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
      <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
      PLACEMENT SUPPORT
    </div>
    <h2 className="heading-section gradient-text-primary mb-3 md:mb-4">
      {title}
    </h2>
    <div className="h-0.5 w-24 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600  to-orange-500" />
  </motion.div>
);

const Subtitle = ({ text, showBadge = false }: { text: string, showBadge?: boolean }) => (
  <div className="text-center mb-6 md:mb-8">
    <h3 className="heading-subsection gradient-text-primary">
      {text}
    </h3>
    <div className="mt-2 md:mt-3 h-0.5 w-20 md:w-24 mx-auto rounded-full bg-gradient-to-r from-blue-600  to-orange-500" />
  </div>
);

// --- Main Placement Component ---
const Placement = () => {
  const partnersStyles = `
        .swiper-button-next,
        .swiper-button-prev {
          color: #3154a6 !important;
          transition: transform 0.2s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.2);
        }
        .swiper-pagination-bullet-active {
          background-color: #f15a29 !important;
        }

        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-100% + 420px)); }
        }

        .animate-scroll-vertical { animation: scroll-vertical 15s linear infinite; will-change: transform; }
        .group:hover .animate-scroll-vertical { animation-duration: 30s; }
      `;

  return (
    <>
      {/* <style dangerouslySetInnerHTML={{ __html: partnersStyles }} /> */}

      <section id="placement" className="py-7 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header with Tag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-10 mt-3 md:mt-4"
          >
            <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
              <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              PLACEMENT SUCCESS
            </div>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold
               bg-gradient-to-r from-blue-500 to-orange-400
               bg-clip-text text-transparent mb-3">
              QUASTECH Stats at a Glance
            </h3>

            {/* <div className="h-0.5 w-24 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600  to-orange-500" /> */}
          </motion.div>

          {/* 📊 Stats */}
          <div className="mb-8">
            {/* <Subtitle text="Quastech Stats at a Glance" /> */}
            <Swiper
              loop
              autoplay={{ delay: 3000 }}
              navigation
              pagination={{ clickable: true }}
              modules={[Autoplay, Navigation, Pagination]}
              className="py-4"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {stats.map((s, i) => (
                <SwiperSlide key={i} className="pb-8">
                  <Card>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#3154a6] to-[#f15a29] shadow-lg">
                        <s.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-4xl font-bold text-[#3154a6]">{s.value}</h3>
                      <p className="mt-1 text-slate-700 font-medium">{s.label}</p>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 🤝 Hiring Partners - 3 Rows with Alternating Animations */}
          <div className="overflow-hidden bg-gradient-to-br from-blue-100 via-slate-100 to-orange-100 rounded-2xl py-8 md:py-10 px-4">
            <Subtitle text="Associated with 800+ Hiring partners" showBadge={true} />

            {/* Row 1 - Slide Left */}
            <div className="relative overflow-hidden mb-4 md:mb-5">
              <motion.div
                className="flex gap-4 md:gap-5"
                animate={{ x: [0, -1500] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                {/* First set */}
                {partners.slice(0, 6).map((p, i) => (
                  <div
                    key={`row1-set1-${i}`}
                    className="flex-shrink-0 w-40 h-20 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 px-3"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain" />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {partners.slice(0, 6).map((p, i) => (
                  <div
                    key={`row1-set2-${i}`}
                    className="flex-shrink-0 w-40 h-20 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 px-3"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain" />
                  </div>
                ))}
                {/* Third set for extra smoothness */}
                {partners.slice(0, 6).map((p, i) => (
                  <div
                    key={`row1-set3-${i}`}
                    className="flex-shrink-0 w-40 h-20 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 px-3"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Slide Right */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-4 md:gap-5"
                animate={{ x: [-1500, 0] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {/* First set */}
                {partners.slice(3, 9).map((p, i) => (
                  <div
                    key={`row2-set1-${i}`}
                    className="flex-shrink-0 w-40 h-20 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 px-3"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain" />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {partners.slice(3, 9).map((p, i) => (
                  <div
                    key={`row2-set2-${i}`}
                    className="flex-shrink-0 w-40 h-20 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 px-3"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain" />
                  </div>
                ))}
                {/* Third set */}
                {partners.slice(3, 9).map((p, i) => (
                  <div
                    key={`row2-set3-${i}`}
                    className="flex-shrink-0 w-40 h-20 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 px-3"
                  >
                    <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* View All Partners Button */}
            <div className="text-center mt-6 md:mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
              >
                View All Partners
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Placement;
