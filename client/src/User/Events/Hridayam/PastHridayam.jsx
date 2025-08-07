import { useState, useRef, useEffect } from 'react';
import { CalendarCheck, Image, Users, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../../../Components/ui/card';
import { Button } from '../../../Components/ui/button';

// Sample data for the gallery images from the Hridayam component
const hridayamGalleryImages = [
    { id: 1, url: '/demo/Hridayam/photo1.jpg', alt: 'Event moment 1' },
    { id: 2, url: '/demo/Hridayam/photo2.jpg', alt: 'Event moment 2' },
    { id: 3, url: '/demo/Hridayam/photo3.jpg', alt: 'Event moment 3' },
    { id: 4, url: '/demo/Hridayam/photo4.jpg', alt: 'Event moment 4' },
    { id: 5, url: '/demo/Hridayam/photo5.jpg', alt: 'Event moment 5' },
    { id: 6, url: '/demo/Hridayam/photo6.jpg', alt: 'Event moment 6' },
    { id: 7, url: '/demo/Hridayam/photo7.jpg', alt: 'Event moment 7' },
];

// Sample data for different event editions, similar to PastHackothons but for Hridayam.
const hridayamEventData = {
    '2024': {
        title: 'Hridayam 2024',
        description: 'A life-saving initiative to give back to the community. Join us in our annual blood donation camp and make a difference.',
        location: 'SRKR Campus, Health Center',
        date: 'September 22, 2024',
        targetAudience: 'Open to all students, faculty, and staff',
        gallery: hridayamGalleryImages,
        impact: 'Each donation can save up to three lives. By donating, you are providing crucial support to patients in emergencies, surgeries, and those battling chronic illnesses.',
        process: [
            'Registration and Health Checkup',
            'Blood Donation',
            'Rest and Refreshments',
            'Receive Certificate and Donor Card',
        ],
        testimonials: [
            { author: 'Jane Doe', quote: 'An incredible experience! The mentors were so helpful, and the energy was fantastic. We learned so much in just one weekend.' },
            { author: 'John Smith', quote: 'The best hackathon I\'ve ever been to. The focus on sustainability was inspiring and made us think deeply about our project\'s impact.' },
        ],
    },
    '2023': {
        title: 'Hridayam 2023',
        description: 'The 2023 blood donation drive saw a record number of participants, strengthening our community bonds and saving countless lives. Your contribution truly makes a difference.',
        location: 'SRKR Main Auditorium',
        date: 'September 24, 2023',
        targetAudience: 'All students and faculty',
        gallery: [
            { id: 1, url: 'https://placehold.co/800x600/fcd34d/fff?text=Hridayam+2023', alt: 'Hridayam 2023 Event Photo' },
            { id: 2, url: 'https://placehold.co/800x600/93c5fd/fff?text=Hridayam+2023', alt: 'Hridayam 2023 Donation' },
        ],
        impact: 'Last year, we collected over 500 units of blood, directly helping local hospitals meet their critical needs. Thank you to everyone who participated!',
        process: [
            'Registration and Health Screening',
            'Blood Donation',
            'Post-Donation Care',
        ],
        testimonials: [
            { author: 'Chris Evans', quote: 'The organization was flawless. It felt great to contribute to such a meaningful cause.' },
        ],
    },
};

const HridayamPastEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState('2024');
    const mainContentRef = useRef(null);
    const currentEvent = hridayamEventData[selectedEvent];
    const eventYears = Object.keys(hridayamEventData).sort((a, b) => b.localeCompare(a));
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let interval;
        if (!isHovering) {
            interval = setInterval(() => {
                setActiveIndex((current) => (current + 1) % currentEvent.gallery.length);
            }, 3000); 
        }
        return () => clearInterval(interval);
    }, [isHovering, currentEvent.gallery.length]);

    const handleEventSelect = (year) => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        setSelectedEvent(year);
        setActiveIndex(0);
    };

    const handlePrev = () => {
        setActiveIndex((current) => (current - 1 + currentEvent.gallery.length) % currentEvent.gallery.length);
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % currentEvent.gallery.length);
    };

    const totalImages = currentEvent.gallery.length;
    const prevIndex = (activeIndex - 1 + totalImages) % totalImages;
    const nextIndex = (activeIndex + 1) % totalImages;

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Centered header for the entire page */}
            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto max-w-3xl text-center mb-6">
                    <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                        Past Hridayam Events
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        A look back at our annual blood donation drives and the impact we’ve made together.
                    </p>
                </div>
            </div>
            
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-2">
                    {/* Sidebar for navigation */}
                    <aside className="lg:w-40 flex-shrink-0">
                        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-hidden p-4 bg-card rounded-lg lg:sticky lg:top-4">
                            {eventYears.map(year => (
                                <button
                                    key={year}
                                    onClick={() => handleEventSelect(year)}
                                    className={`flex items-center justify-center lg:justify-start w-full min-w-[80px] lg:min-w-0 px-4 py-3 rounded-md font-medium transition-colors whitespace-nowrap ${selectedEvent === year
                                            ? 'bg-accent text-white'
                                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                        }`}
                                >
                                    <CalendarCheck className="mr-3 h-4 w-4 hidden lg:block" />
                                    {year}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Main content container with fixed height and scrolling */}
                    <main className="flex-1 min-w-0">
                        <div ref={mainContentRef} className="bg-muted/50 rounded-lg border p-8 h-[calc(100vh-200px)] overflow-y-auto">
                            <header className="mb-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <CalendarCheck className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
                                            <h2 className="text-2xl md:text-2xl font-bold">{currentEvent.title}</h2>
                                        </div>
                                        <p className="text-lg text-muted-foreground border-l-4 border-red-500 pl-4 py-2">{currentEvent.description}</p>
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <CalendarCheck className="h-5 w-5 text-red-500" />
                                                <span>{currentEvent.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-5 w-5 text-red-500" />
                                                <span>{currentEvent.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-5 w-5 text-red-500" />
                                                <span>{currentEvent.targetAudience}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side - Image */}
                                    <div className="aspect-video w-full rounded-lg overflow-hidden border bg-muted">
                                        <img
                                            src={currentEvent.gallery[0].url}
                                            alt={`${currentEvent.title} event image`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </header>

                            <section id="details" className="mb-8">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                                                <CalendarCheck className="h-6 w-6 text-red-500" />
                                            </div>
                                            <h3 className="mb-2 text- font-bold">Process</h3>
                                            <ul className="space-y-2 text-muted-foreground">
                                                {currentEvent.process.map((step, index) => (
                                                    <li key={index}>{step}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                                                <Image className="h-6 w-6 text-red-500" />
                                            </div>
                                            <h3 className="mb-2 text-xl font-bold">Impact</h3>
                                            <p className="text-muted-foreground">
                                                {currentEvent.impact}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            {/* Gallery Section with carousel from Hridayam component */}
                            <section className="mb-8">
                                <h3 className="mb-4 text-xl font-bold flex items-center">
                                    <Image className="mr-2 text-red-500" />
                                    Event Gallery
                                </h3>
                                <div
                                    className="relative overflow-hidden w-full flex justify-center items-center h-[200px] sm:h-[250px] md:h-[300px]"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    {/* Navigation buttons for small screens */}
                                    <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30 lg:hidden">
                                        <Button size="icon" variant="outline" onClick={handlePrev}>
                                            <ChevronLeft />
                                        </Button>
                                    </div>
                                    <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30 lg:hidden">
                                        <Button size="icon" variant="outline" onClick={handleNext}>
                                            <ChevronRight />
                                        </Button>
                                    </div>

                                    {currentEvent.gallery.map((image, index) => {
                                        let transformStyle;
                                        let zIndex = 10;
                                        let opacity = 0;

                                        if (index === prevIndex) {
                                            transformStyle = 'translateX(calc(-50% - 250px)) scale(0.6)';
                                            zIndex = 10;
                                            opacity = 1;
                                        } else if (index === activeIndex) {
                                            transformStyle = 'translateX(-50%) scale(1.0)';
                                            zIndex = 20;
                                            opacity = 1;
                                        } else if (index === nextIndex) {
                                            transformStyle = 'translateX(calc(-50% + 250px)) scale(0.6)';
                                            zIndex = 10;
                                            opacity = 1;
                                        } else {
                                            transformStyle = 'translateX(-50%) scale(0.6)';
                                            zIndex = 0;
                                            opacity = 0;
                                        }

                                        return (
                                            <img
                                                key={image.id}
                                                src={image.url}
                                                alt={image.alt}
                                                className={`absolute top-0 left-1/2 w-auto h-full aspect-[16/9] object-cover transition-all duration-[2000ms] ease-in-out shadow-lg ${index === activeIndex ? 'rounded-none' : 'rounded-xl'}`}
                                                style={{
                                                    transform: transformStyle,
                                                    zIndex: zIndex,
                                                    opacity: opacity,
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </section>

                            <section className="mb-8">
                                <h3 className="mb-4 text-l font-bold flex items-center">
                                    <Quote className="mr-2 text-red-500" />
                                    Testimonials
                                </h3>
                                <div className="grid gap-6 md:grid-cols-2">
                                    {currentEvent.testimonials.map((t, index) => (
                                        <div key={index} className="bg-muted/50 p-6 rounded-lg border">
                                            <p className="italic text-muted-foreground mb-4">"{t.quote}"</p>
                                            <p className="font-semibold text-red-500">- {t.author}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default HridayamPastEvents;