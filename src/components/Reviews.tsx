import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  ThumbsUp,
  MessageCircle,
  Play,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

import { reviews } from "@/data/reviewsData";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const sortedReviews = [...reviews].sort(
    (a, b) => Number(a.hasVideo) - Number(b.hasVideo)
  );

  const displayedGridReviews = sortedReviews
    .filter((review) => !review.hasVideo)
    .slice(0, 8);

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "5000+", label: "Reviews", icon: MessageCircle },
    { value: "98%", label: "Recommend Us", icon: ThumbsUp }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const openVideoModal = (videoUrl: string) => {
    if (!videoUrl || videoUrl === "#") {
      return;
    }

    const match = videoUrl.match(/\/(?:p|reel)\/([^/?]+)/);
    const embedUrl = match
      ? `https://www.instagram.com/${videoUrl.includes("/reel/") ? "reel" : "p"}/${match[1]}/embed`
      : videoUrl;

    setCurrentVideoUrl(embedUrl);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideoUrl("");
  };

  return (
    <section id="reviews" className="pt-7 pb-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
      <div className="container mx-auto container-padding relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 mt-3 md:mt-4"
        >
          <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 mb-5 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg text-white text-sm md:text-base font-semibold">
            <Star className="w-4 h-4 md:w-5 md:h-5" />
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold 
               bg-gradient-to-r from-blue-500 to-orange-400 
               bg-clip-text text-transparent mb-3 pb-2 leading-tight">
            Alumni Transforming Their Careers
          </h2>
          {/* <div className="h-0.5 w-24 md:w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600  to-orange-500" /> */}
        </motion.div>

        {/* Featured Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto space-y-4 md:space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
            <div className="text-center md:text-left">
              <p className="uppercase tracking-[0.25em] text-xs font-semibold text-blue-600 mb-1">Featured Stories</p>
              <h3 className="text-2xl md:text-3xl font-bold 
             bg-gradient-to-r from-blue-500 to-orange-400 
             bg-clip-text text-transparent">Hear From Our Alumni</h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 md:gap-4 w-full md:w-auto">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-3 md:p-4 border-0 shadow-md h-full">
                  <CardContent className="p-0 flex flex-col items-center justify-center">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 mb-1.5" />
                    <div className="text-lg md:text-xl font-bold mb-0.5">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground leading-tight text-center">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-primary p-4 md:p-5 text-white relative">
              <Quote className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 opacity-30" />
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-white/20 flex-shrink-0">
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-2xl font-bold truncate">{reviews[currentReview].name}</h3>
                  <p className="text-white/90 text-sm md:text-base truncate">{reviews[currentReview].role}</p>
                  <p className="text-white/80 text-xs md:text-sm truncate">{reviews[currentReview].course}</p>
                  <div className="flex items-center gap-2 mt-1 md:mt-2">
                    <div className="flex">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs md:text-sm">({reviews[currentReview].rating}.0)</span>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-4 md:p-5">
              <blockquote className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                "{reviews[currentReview].review}"
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-3">
                {reviews[currentReview].hasVideo && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openVideoModal(reviews[currentReview].videoUrl)}
                    type="button"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>
                )}

                <div className="flex gap-2 ml-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevReview}
                    className="w-10 h-10 p-0"
                    type="button"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextReview}
                    className="w-10 h-10 p-0"
                    type="button"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Student Review Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <div className="text-center mb-5 md:mb-6 max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-blue-600 mb-1">Student Voices</p>
            <h3 className="text-2xl md:text-3xl font-bold 
             bg-gradient-to-r from-blue-500 to-orange-400 
             bg-clip-text text-transparent">What Learners Say About QUASTECH</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 max-w-7xl mx-auto">
            {displayedGridReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full min-h-[180px] max-h-[180px] border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-3 h-full flex flex-col">
                    <div className="flex gap-2.5 mb-2">
                      {/* Left Side - Image */}
                      <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Right Side - Name, Role, Stars */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm truncate leading-tight mb-0.5">{review.name}</h4>
                        <p className="text-xs text-muted-foreground truncate">{review.role}</p>
                        <div className="flex mt-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-xs text-muted-foreground line-clamp-3 flex-grow mb-2 leading-tight">
                      "{review.review.substring(0, 85)}..."
                    </blockquote>

                    {/* Buttons */}
                    <div className="flex items-center gap-1.5 mt-auto pt-2 border-t border-gray-100">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-6 px-2 flex-1"
                        type="button"
                        onClick={() => {
                          window.location.href = "/placement";
                        }}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 md:mt-5"
        >
          <div className="bg-gradient-hero rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-white shadow-lg max-w-7xl mx-auto">
            <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-[1.2fr_1fr] items-center">
              <div className="md:text-left text-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">
                  Ready to Write Your Success Story?
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-white/90 max-w-xl mx-auto md:mx-0">
                  Join thousands of successful professionals who transformed their careers with QUASTECH. Get personalized guidance, live projects, and 100% placement tailored to your goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 md:gap-3 justify-center md:justify-end">
                <Button
                  variant="glass"
                  size="lg"
                  className="text-xs md:text-sm lg:text-base font-semibold h-10 md:h-11 lg:h-12 px-5 md:px-6"
                  type="button"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Start Your Journey Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-primary text-xs md:text-sm lg:text-base h-10 md:h-11 lg:h-12 px-5 md:px-6"
                  type="button"
                  onClick={() => {
                    window.location.href = "/placement";
                  }}
                >
                  View Placements
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Instagram Embed */}
              <div className="w-full aspect-[9/16] bg-gray-100">
                <iframe
                  src={currentVideoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Student Video Review"
                />
              </div>

              {/* Video Info */}
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <h3 className="font-bold text-lg mb-1">{reviews[currentReview].name}</h3>
                <p className="text-sm text-white/90">{reviews[currentReview].role}</p>
                <p className="text-xs text-white/80 mt-1">{reviews[currentReview].course}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Reviews;