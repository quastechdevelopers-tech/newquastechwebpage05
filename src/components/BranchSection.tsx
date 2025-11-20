import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";

const branchesData = [
  {
    id: "Thane",
    name: "Thane Branch",
    address:
      "201, Anant Laxmi Chambers, Dada Patil Marg, opp. Waman Hari Pethe Jewellers, Thane (W), Maharashtra 400602",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://www.google.com/search?q=quastech+thane",
    images: [
      "/images/branches/Thane/WhatsApp Image 2025-11-07 at 14.31.15_883f6ac6.jpg",
      "/images/branches/Thane/WhatsApp Image 2025-11-07 at 14.31.16_8e30c1bd.jpg",
      "/images/branches/Thane/WhatsApp Image 2025-11-07 at 14.31.16_82cda6dc.jpg",
      "/images/branches/Thane/WhatsApp Image 2025-11-07 at 14.31.16_c93f5b30.jpg",
      "/images/branches/Thane/WhatsApp Image 2025-11-07 at 14.31.16_fca9beb3.jpg",
      "/images/branches/Thane/WhatsApp Image 2025-11-07 at 14.31.17_4e91f2a8.jpg",
      "/images/branches/Thane/WhatsApp Image 2025-11-07 at 14.31.17_7a38ae88.jpg",
      "/images/branches/Thane/WhatsApp Image 2025-11-07 at 14.31.17_46f3917f.jpg"
    ]
  },
  {
    id: "Borivali",
    name: "Borivali Branch",
    address:
      "A/401, Court Chamber, Swami Vivekananda Rd, opp. Moksh Plaza, Borivali West, Maharashtra 400092",
    phone: "+91 8422800384",
    email: "info@quastech.in",
    map: "https://www.google.com/search?q=quastech+borivali",
    images: [
      // "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.26.33_aafdd705.jpg",
      // "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.26.34_4743ad0e.jpg",
      // "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.26.34_70160b73.jpg",
      "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.26.35_3df2090d.jpg",
      "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.27.02_25db2b8a.jpg",
      "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.27.02_4eadf964.jpg",
      "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.27.02_b57cd856.jpg",
      "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.27.03_61f66642.jpg",
      "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.27.03_82c3527d.jpg",
      "/images/branches/borivali/WhatsApp Image 2025-11-07 at 14.27.03_b664b22d.jpg"
    ]
  },
  {
    id: "Vashi",
    name: "Vashi Branch",
    address:
      "Corporate Wing, Haware Fantasia Business Park, F-185(A, behind Inorbit Mall, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
    phone: "+91 8422800381",
    email: "info@quastech.in",
    map: "https://www.google.com/search?q=quastech+vashi",
    images: [
      "/images/branches/Vashi/WhatsApp Image 2025-11-07 at 14.26.30_112c067d.jpg",
      "/images/branches/Vashi/WhatsApp Image 2025-11-07 at 14.26.32_000f716f.jpg",
      "/images/branches/Vashi/WhatsApp Image 2025-11-07 at 14.26.32_f0bc8f33.jpg",
      "/images/branches/Vashi/WhatsApp Image 2025-11-07 at 14.26.33_dc8d2836.jpg"
    ]
  },
  {
    id: "Mohali",
    name: "Mohali Branch",
    address:
      "SCF 62, Third Floor, Phase 7, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062",
    phone: "+91 7208008461",
    email: "info@quastech.in",
    map: "https://www.google.com/search?q=quastech+mohali",
    images: [
      "/images/branches/Mohali/WhatsApp Image 2025-11-07 at 14.26.02_47f1da4c.jpg",
      "/images/branches/Mohali/WhatsApp Image 2025-11-07 at 14.26.02_a440567e.jpg",
      "/images/branches/Mohali/WhatsApp Image 2025-11-07 at 14.26.03_8d26de21.jpg",
      "/images/branches/Mohali/WhatsApp Image 2025-11-07 at 14.26.03_9a156689.jpg",
      "/images/branches/Mohali/WhatsApp Image 2025-11-07 at 14.26.03_e01e412a.jpg",
      "/images/branches/Mohali/WhatsApp Image 2025-11-07 at 14.26.04_3af71400.jpg",
      "/images/branches/Mohali/WhatsApp Image 2025-11-07 at 14.26.04_fd416c82.jpg"
    ]
  }
];

const BranchSection = () => {
  const [selectedBranch, setSelectedBranch] = useState("Thane");
  const currentBranch = branchesData.find((b) => b.id === selectedBranch);

  return (
    <section
      id="branches"
      className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 md:pt-6 md:pb-20:py-24 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-10 left-5 md:left-20 w-40 h-40 md:w-72 md:h-72 bg-indigo-300 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-5 md:right-10 w-44 h-44 md:w-80 md:h-80 bg-pink-300 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14
             bg-gradient-to-r from-blue-500 to-orange-400
             bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 md:px-6 md:py-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-xs md:text-sm font-semibold">
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
            OUR LOCATIONS
          </div>

          <h2  className="text-2xl md:text-4xl lg:text-5xl font-extrabold 
               bg-gradient-to-r from-blue-500 to-orange-400 
               bg-clip-text text-transparent mb-3">
            Explore Our Branches
          </h2>

          <div className="h-0.5 w-20 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-orange-500" />
        </motion.div>

        {/* Branch Selector */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
            {branchesData.map((branch) => (
              <button
  key={branch.id}
  onClick={() => setSelectedBranch(branch.id)}
  className={`relative px-3 md:px-4 py-1.5 md:py-2 text-base md:text-lg font-semibold transition-colors
    ${selectedBranch === branch.id
      ? "bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent"
      : "text-gray-500 hover:text-indigo-500"
    }`}
>
  {branch.id}

  {selectedBranch === branch.id && (
    <motion.div
      layoutId="underline"
      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
    />
  )}
</button>

            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* Info Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <h3  className="text-2xl md:text-3xl font-bold mb-5 md:mb-6
             bg-gradient-to-r from-blue-500 to-orange-400 
             bg-clip-text text-transparent">
                {currentBranch?.name}
              </h3>

              <div className="space-y-4 md:space-y-5">
                
                {/* Address */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50"
                >
                  <MapPin className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm md:text-base">
                    {currentBranch?.address}
                  </p>
                </motion.div>

                {/* Phone */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={`tel:${currentBranch?.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-gray-600 hover:text-indigo-600 transition text-sm md:text-base"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  {currentBranch?.phone}
                </motion.a>

                {/* Email */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={`mailto:${currentBranch?.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-pink-50 text-gray-600 hover:text-pink-600 transition text-sm md:text-base"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {currentBranch?.email}
                </motion.a>

                {/* Directions */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={currentBranch?.map}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 
           bg-gradient-to-r from-blue-500 to-orange-400 
           text-white rounded-full shadow hover:shadow-lg 
           mt-4 text-sm md:text-base"

                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </motion.a>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel */}
          <motion.div
            key={selectedBranch + "-images"}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
          >
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              slidesPerView={1}
              className="branch-swiper"
            >
              {currentBranch?.images.map((src, idx) => {
                const imageSrc = encodeURI(src);
                return (
                  <SwiperSlide key={idx}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="aspect-[4/3] w-full overflow-hidden relative group"
                    >
                      <img
                        src={imageSrc}
                        alt={`${currentBranch?.name} ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-110"
                        loading="lazy"
                        style={{ filter: "brightness(1.2) contrast(1.05)" }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-sm font-medium flex justify-between">
                        <span>{currentBranch?.name}</span>
                        <span>
                          {idx + 1}/{currentBranch?.images.length}
                        </span>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>

        </div>
      </div>

      {/* Swiper Styles */}
      <style>{`
        .branch-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.7);
          width: 8px;
          height: 8px;
          transition: transform 0.3s;
        }
        .branch-swiper .swiper-pagination-bullet-active {
          background: #6366f1;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
};

export default BranchSection;
