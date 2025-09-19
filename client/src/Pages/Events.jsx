import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Components/ui/button.jsx"
import { Link } from "react-router-dom";
import ScrollToTopButton from "../Components/ScrollToTop.jsx";

// Mock data
const mockOngoingEvents = [
    {
        id: 1,
        title: "HackOverFlow 2K25",
        description: "24-hour hackathon to build innovative solutions.",
        date: "Reveal Soon...",
        poster: "/demo/EventPosters/Hackoverflow2k24.png",
    },
];

const mockAllEvents = [
    {
        id: 1,
        title: "HackOverFlow 2K25",
        description: "24-hour hackathon to build innovative solutions.",
        date: "March 15-17, 2025",
        participants: "200+ Participants",
        prizes: "₹50,000",
        location: "SRKR Engineering College, Bhimavaram.",
        status: "upcoming",
        category: "Hackathon",
        poster: "/demo/EventPosters/Hackoverflow2k24.png",
    },
    {
        id: 2,
        title: "IconCoderZ 2K25",
        description: "Competitive programming contest for all skill levels",
        date: "April 5, 2025",
        participants: "150+ Participants",
        prizes: "₹25,000",
        location: "SRKR Engineering College, Bhimavaram",
        status: "upcoming",
        category: "Competition",
        poster: "demo/EventPosters/iconcoderz-2k25.png",
    },
    {
        id: 3,
        title: "Hridayam 2K25",
        description: "Cultural and technical fest celebration",
        date: "April 15, 2024",
        participants: "300+ Participants",
        prizes: "₹35,000",
        location: "Bhimavaram",
        status: "completed",
        category: "Cultural",
        poster: "demo/EventPosters/Hridayam.png",

    },
    {
        id: 4,
        title: "HackOverFlow 2K24",
        description: "Annual 24-hour hackathon to build innovative solutions.",
        date: "October 18-19, 2024",
        participants: "200+ Participants",
        prizes: "₹30,000",
        location: "SRKR Engineering College, Bhimavaram",
        status: "completed",
        category: "Hackathon",
        poster: "/demo/EventPosters/Hackoverflow2k24.png",
    },
    {
        id: 5,
        title: "IconCoderZ 2K24",
        description: "Coding competition with expert and beginner levels",
        date: "February 12, 2024",
        participants: "120 Participants",
        prizes: "₹30,000",
        location: "SRKR Engineering College, Bhimavaram",
        status: "completed",
        category: "Competition",
        poster: "demo/EventPosters/iconcoderz-2k24.jpg",
    },
];

const mockFlagshipEvents = [
    {
        title: "HackOverFlow",
        description:
            "HackOverflow is our annual 24-hour hackathon where participants collaborate to turn ideas into impactful solutions. With mentorship, workshops, networking opportunities, and a vibrant coding environment, it’s a space to learn, build, and showcase talent while creating innovative solutions to real-world problems",
        poster: "/demo/EventPosters/Hackoverflow2k24.png",
        category: "Hackathon",
        details: [
            "24-hour coding hackathon",
            "Mentorship from industry experts",
            "Exciting prizes and internship opportunities",
        ],
    },
    {
        title: "IconCoderZ",
        description:
            "A competitive programming contest designed to test coding skills and problem-solving abilities. With beginner and expert categories, it challenges participants to think critically, code efficiently, and win exciting prizes.",
        poster: "demo/EventPosters/iconcoderz-2k25.png",
        category: "Competitive Programming",
        details: [
            "Individual competition",
            "Multiple difficulty levels",
            "Algorithmic and data structure challenges",

        ],
    },
    {
        title: "Hridayam",
        description:
            "Hridayam is a social service initiative by our club members, dedicated to giving back to the community and making a positive impact through compassion and service.",
        poster: "/demo/EventPosters/Hridayam.png",
        category: "social service",
        details: [
            "Community Service Activities led by Club Members",
            "Spreading Kindness through Social Initiatives",
            "Creating a Positive Impact on Society",
        ],
    },
];

// Ongoing Events Section with horizontal layout
const OngoingEventsSection = ({ events }) => {
    return (
        <section className="w-full bg-gradient-to-t from-accent/30 to-transparent">
            <div className="w-full h-72 overflow-hidden flex p-10">
                <div className="absolute top-64 right-1/4 w-8 h-8 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

                <div className="w-1/3 h-68 relative flex items-center justify-center p-2">
                    <img
                        src={events[0].poster}
                        alt={events[0].title}
                        width="600"
                        height="400"
                        className="rounded-lg object-cover w-full"
                    />
                </div>
                <div className="w-1/3 h-54 flex items-center justify-center">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {events[0].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Details: {events[0].description}
                        </p>
                        <div className="text-gray-500 dark:text-gray-400 mb-2">
                            LastDate to Register: {events[0].date}
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-64 flex items-center justify-center p-4">
                    <Button variant="default">
                        Coming Soon ....
                    </Button>
                </div>
            </div>
        </section>
    );
};

// All Events Section
const AllEventsSection = ({ events }) => {
    const scrollContainerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Smooth scroll handling
    const scrollContainer = (direction) => {
        const container = scrollContainerRef.current;
        const cardWidth = 384; // w-96 (384px)
        const cardsPerView = Math.floor(container.offsetWidth / cardWidth);
        const maxIndex = Math.max(0, events.length - cardsPerView);

        let newIndex =
            direction === "left"
                ? Math.max(0, currentIndex - cardsPerView)
                : Math.min(maxIndex, currentIndex + cardsPerView);

        setCurrentIndex(newIndex);
        container.scrollTo({
            left: newIndex * cardWidth,
            behavior: "smooth",
        });
    };

    // Intersection Observer for visibility animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (scrollContainerRef.current) {
            observer.observe(scrollContainerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-4 px-4 bg-background mb-16">

            <div className="max-w-7xl mx-auto">
                <div className="relative group">
                    {/* Navigation Buttons */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={() => scrollContainer("left")}
                            className="p-3 bg-card/90 hover:bg-card rounded-full shadow-xl border border-border hover:border-accent transition-all duration-200 backdrop-blur-sm"
                        >
                            <ChevronLeft className="w-6 h-6 text-accent" />
                        </button>
                    </div>

                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={() => scrollContainer("right")}
                            className="p-3 bg-card/90 hover:bg-card rounded-full shadow-xl border border-border hover:border-accent transition-all duration-200 backdrop-blur-sm"
                        >
                            <ChevronRight className="w-6 h-6 text-accent" />
                        </button>
                    </div>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth"
                        style={{
                            scrollBehavior: "smooth",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {events.map((event, index) => (
                            <div
                                key={event.id}
                                className={`flex-shrink-0 w-96 snap-center transform transition-all duration-700 ease-out ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-20 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="relative group/card bg-muted rounded-xl transition-all duration-500">
                                    {/* Image Container */}
                                    <div className="relative">
                                        <img
                                            src={event.poster || "/placeholder.svg"}
                                            alt={event.title}
                                            className="w-full h-64"
                                        />
                                        {/* Event Status Badge */}
                                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {event.status || "Ongoing"}
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="p-6">
                                        <h4 className="text-2xl font-semibold text-foreground">
                                            {event.title}
                                        </h4>
                                        <p className="mt-3 text-sm text-foreground">
                                            <span role="img" aria-label="calendar">
                                                📅
                                            </span>{" "}
                                            {event.date || "TBD"}
                                        </p>
                                        <p className="mt-2 text-sm text-foreground">
                                            <span role="img" aria-label="location">
                                                📍
                                            </span>{" "}
                                            {event.location || "TBD"}
                                        </p>
                                        {/* <p className="text-foreground mt-2 text-sm">
                                            {event.description}
                                        </p> */}
                                        <Button variant="formative" className="mt-4">
                                            <Link to={`/events/${event.title.toLowerCase()}`}> View Details</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicators */}
                    {/* Scroll Indicators */}
                    <div className="flex justify-center mt-8 gap-3">
                        {Array.from({
                            length: Math.max(
                                1,
                                Math.ceil(
                                    events.length /
                                    Math.max(1, Math.floor((scrollContainerRef.current?.offsetWidth || 0) / 384))
                                )
                            ),
                        }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    scrollContainerRef.current?.scrollTo({
                                        left: index * 384,
                                        behavior: "smooth",
                                    });
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? "bg-orange-500 scale-125"
                                    : "bg-gray-300 dark:bg-gray-600 hover:bg-orange-400"
                                    }`}
                            ></button>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

// Flagship Events Section
const FlagshipEventsSection = ({ events }) => {
    return (
        <section className="bg-muted py-16 md:py-20">

            <div className="container mx-auto px-4">

                <h2 className="mb-5 text-center text-3xl font-bold tracking-tight md:text-4xl">
                    Our Flagship Events
                </h2>

                <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-12"></div>
                <div className="space-y-32">

                    {events.map((event, index) => (
                        <div
                            key={event.title}
                            className="grid gap-8 md:grid-cols-2 md:items-center mb-12"
                        >

                            <div
                                className={`${index % 2 === 0 ? "order-2 md:order-1" : "order-1 md:order-1"
                                    }`}
                            >

                                <h3 className="mb-4 text-5xl font-bold">{event.title}</h3>
                                <div className="w-36 h-1 bg-gradient-to-b from-orange-600 to-accent  rounded-full mb-6"></div>

                                <p className="mb-6 text-md text-foreground">{event.description}</p>
                                <ul className="mb-6 text-md space-y-2">
                                    {event.details && event.details.length > 0 ? (
                                        event.details.map((detail, i) => (
                                            <li key={i} className="flex items-center">
                                                <span className="mr-2 text-primary">•</span> {detail}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-muted-foreground">
                                            No details available
                                        </li>
                                    )}
                                </ul>
                                <Button variant="formative" size="lg">
                                    <Link to={`/events/${event.title.toLowerCase()}`} > Learn More </Link>
                                </Button>
                            </div>
                            <div className={index % 2 === 0 ? "order-1 md:order-2" : ""}>
                                <img
                                    src={event.poster}
                                    alt={event.title}
                                    width="600"
                                    height="400"
                                    className="rounded-2xl object-cover w-full h-100 border shadow-2xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Main Events Page Component
const Events = () => {
    const [ongoingEvents] = useState(mockOngoingEvents);
    const [allEvents] = useState(mockAllEvents);
    const [flagshipEvents] = useState(mockFlagshipEvents);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div className="min-h-screen">

            {ongoingEvents.length > 0 && (
                <OngoingEventsSection events={ongoingEvents} />
            )}
            <section className="py-20 px-6">

                <div className="max-w-4xl mx-auto text-center">

                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                        <span className="text-orange-500">Events</span> & Activities
                    </h1>
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-96 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
                        <div className="absolute top-96 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                    </div>
                    <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4"></div>

                    <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
                        Discover our exciting events, competitions, and workshops designed
                        to enhance your coding journey
                    </p>

                </div>
            </section>

            <AllEventsSection events={allEvents} />
            {/* <div className="relativebottom-40 right-1/4 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div> */}


            <FlagshipEventsSection events={flagshipEvents} />

            <ScrollToTopButton />
        </div>
    );
};

export default Events;
