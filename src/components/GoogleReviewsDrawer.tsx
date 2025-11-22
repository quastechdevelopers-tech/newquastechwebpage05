import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { Star, X } from "lucide-react";
import { reviews } from "@/data/reviewsData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface GoogleReviewsDrawerProps {
    children: React.ReactNode;
}

const GoogleReviewsDrawer = ({ children }: GoogleReviewsDrawerProps) => {
    const totalReviews = 5266; // Mocked total count from image
    const averageRating = 4.8;
    const [activeFilter, setActiveFilter] = useState("All");

    // Mock distribution for the progress bars
    const distribution = [
        { stars: 5, count: 5266, percentage: 85 },
        { stars: 4, count: 988, percentage: 10 },
        { stars: 3, count: 198, percentage: 3 },
        { stars: 2, count: 34, percentage: 1 },
        { stars: 1, count: 98, percentage: 1 },
    ];

    // Extract unique courses for filters
    const courses = Array.from(new Set(reviews.map(review => review.course)));
    const filters = ["All", ...courses];

    // Filter reviews based on active filter
    const filteredReviews = activeFilter === "All"
        ? reviews
        : reviews.filter(review => review.course === activeFilter);

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xl p-0 flex flex-col bg-white border-l shadow-2xl">
                <SheetHeader className="p-4 border-b sticky top-0 bg-white z-10">
                    <div className="flex items-center justify-between">
                        <SheetTitle className="text-xl font-normal text-gray-800">Google Reviews</SheetTitle>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-gray-100">
                                <X className="h-4 w-4 text-gray-500" />
                                <span className="sr-only">Close</span>
                            </Button>
                        </SheetClose>
                    </div>
                </SheetHeader>

                <ScrollArea className="flex-1 w-full">
                    <div className="p-4 space-y-6 pb-10">
                        {/* Summary Section */}
                        <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-5xl font-normal text-gray-900">{averageRating}</span>
                                <div className="flex items-center gap-0.5 my-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`w-4 h-4 ${star <= Math.round(averageRating)
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "fill-gray-200 text-gray-200"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-500">{totalReviews.toLocaleString()} reviews</span>
                            </div>

                            <div className="flex-1 space-y-1">
                                {distribution.map((item) => (
                                    <div key={item.stars} className="flex items-center gap-2 text-xs">
                                        <span className="w-2">{item.stars}</span>
                                        <Progress value={item.percentage} className="h-2 bg-gray-100 [&>div]:bg-yellow-400" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Filters - Wrapping */}
                        <div className="flex flex-wrap gap-2 pb-2">
                            {filters.map((filter) => (
                                <Button
                                    key={filter}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setActiveFilter(filter)}
                                    className={`rounded-full text-xs h-8 px-3 whitespace-nowrap transition-colors ${activeFilter === filter
                                        ? "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:text-blue-800"
                                        : "text-gray-600 border-gray-300 hover:bg-gray-50"
                                        }`}
                                >
                                    {filter}
                                </Button>
                            ))}
                        </div>

                        <Separator />

                        {/* Reviews List */}
                        <div className="space-y-6">
                            {filteredReviews.length > 0 ? (
                                filteredReviews.map((review, index) => (
                                    <div key={index} className="flex gap-3">
                                        <Avatar className="w-8 h-8 md:w-10 md:h-10 border">
                                            <AvatarImage src={review.image} alt={review.name} />
                                            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-bold text-sm text-gray-900 truncate pr-2">{review.name}</h4>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3 h-3 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                                            }`}
                                                    />
                                                ))}
                                                {index === 0 && activeFilter === "All" && (
                                                    <span className="ml-2 text-[10px] font-bold bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                                                        NEW
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-700 leading-relaxed break-words">
                                                {review.review}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                Course: {review.course}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    No reviews found for this category.
                                </div>
                            )}
                        </div>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};

export default GoogleReviewsDrawer;
