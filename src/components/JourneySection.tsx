import { motion } from "framer-motion";
import { TrendingUp, Award } from "lucide-react";

const JourneySection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-orange-50 via-white to-blue-50 section-spacing-compact">
      <div className="w-full">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-10 mt-3 md:mt-4">
          <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
            YOUR JOURNEY
          </div>
          {/* <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold 
               bg-gradient-to-r from-blue-500 to-orange-400 
               bg-clip-text text-transparent mb-3">
            From Learning to Success
          </h2>
          <div className="h-0.5 w-24 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600  to-orange-500" /> */}
        </div>
        {/* Journey Banner - Edge to Edge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img 
            src="/images/careerpath.jpg" 
            alt="Your Journey With Us" 
            className="w-full h-auto object-cover"
          />
        </motion.div> */}

        {/* Additional Journey Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <img 
            src="/journeyplcement\carrierpath (3) (1).png"
            alt="Career Path Journey" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
