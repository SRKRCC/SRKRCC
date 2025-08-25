import { useState, useRef, useEffect } from 'react';
import { CalendarCheck, FileText, Trophy, Users, Image, Quote, Youtube, Link, Award, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../../../Components/ui/card';
import { Button } from '../../../Components/ui/button';


const iconcoderzGalleryImages = [
    { id: 1, url: '/demo/Iconcoderz/photo1.jpg', alt: 'Participants coding' },
    { id: 2, url: '/demo/Iconcoderz/photo2.jpg', alt: 'Awards ceremony' },
    { id: 3, url: '/demo/Iconcoderz/photo3.jpg', alt: 'Judges' },
    { id: 4, url: '/demo/Iconcoderz/photo4.jpg', alt: 'Team photo' },
    { id: 5, url: '/demo/Iconcoderz/photo5.jpg', alt: 'Coding in action' },

];
const iconcoderz24GalleryImages = [
    { id: 1, url: '/demo/Iconcoderz/ic24f.png', alt: 'Participants coding' },
    { id: 2, url: '/demo/Iconcoderz/ic24g.jpg', alt: 'Awards ceremony' },
    { id: 3, url: '/demo/Iconcoderz/ic24h.jpg', alt: 'Judges' },
    { id: 4, url: '/demo/Iconcoderz/ic24d.jpg', alt: 'Team photo' },
    { id: 5, url: '/demo/Iconcoderz/ic24e.jpg', alt: 'Coding in action' },

];
// Sample data for different event editions. This data would typically be fetched from an API.
const eventData = {
    '2K25': {
        title: 'IconCoderz 2K25',
        description: 'A challenging competitive programming competition focused on advanced data structures and algorithms. The event featured a mix of easy and medium-level problems, encouraging participation from all students.',
        location: 'SRKR Engineering College, Bhimavaram.',
        date: 'February 4th, 2K25',
        team: 'Beginners and Experts',
        poster: '/demo/EventPosters/iconcoderz-2k25.png',
        gallerys: iconcoderzGalleryImages,
        winners: {
            expert: {
                first: 'William Keri',
                second: 'Pulaparthi Arun Teja ',
            },
            beginner: {
                first: 'Chintalapudi Sathvik ',
                second: 'Nekkanti Surya Pravallika ',
            },
        },
        gallery: [
            { id: 1, url: '/demo/Iconcoderz/photo1.jpg', alt: 'Participants coding' },
            { id: 2, url: '/demo/Iconcoderz/photo2.jpg', alt: 'Awards ceremony' },
            { id: 3, url: '/demo/Iconcoderz/photo3.jpg', alt: 'Judges' },
            { id: 4, url: '/demo/Iconcoderz/photo4.jpg', alt: 'Team photo' },
            { id: 5, url: '/demo/Iconcoderz/photo5.jpg', alt: 'Coding in action' },
            { id: 6, url: '/demo/Iconcoderz/photo6.jpg', alt: 'Event venue' },
            { id: 7, url: '/demo/Iconcoderz/photo7.jpg', alt: 'Participants networking' },
        ],
        testimonials: [
            { author: 'Chintalapudi Sathvik', quote: 'Competing in the 2k25 beginner category was an amazing learning experience! The challenges pushed me to think differently.The problems were perfectly designed to test both skill and creativity.' },
            { author: 'William Keri', quote: 'The contest was tough but super rewarding. Winning the expert category gave us the confidence to aim higher in our coding journey. The organization was top-notch!' },
        ],
        feedback: 'Participants rated the problem quality and event organization highly, with an average score of 4.7/5.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // A placeholder video link
    },
    '2K24': {
        title: 'IconcoderZ 2K24',
        description: 'A challenging competitive programming competition focused on advanced data structures and algorithms. The event featured a mix of easy and medium-level problems, encouraging participation from all students.',
        location: 'SRKR Engineering College, Bhimavaram.',
        date: 'January 24th, 2024',
        team: 'Open to all SRKR Students',
        poster: '/demo/EventPosters/iconcoderz-2k24.jpg',
        gallerys: iconcoderz24GalleryImages,
        winners: {
            members: {
                first: "K Teja Venkata Vinesh Kumar - 20B91A5424 AIDS",
                second: "Marikanthi Sai - 21B91A54A4 AIDS",
                third: "Chandaka Balaji - 20B91A0435 ECE"
            }
        },
        gallery: [
            { id: 1, url: '/demo/Iconcoderz/ic24e.jpg', alt: 'Participants coding' },
            { id: 2, url: '/demo/Iconcoderz/ic24b.jpg', alt: 'Awards ceremony' },
            { id: 3, url: '/demo/Iconcoderz/ic24f.png', alt: 'Judges' },
            { id: 4, url: '/demo/Iconcoderz/ic24d.jpg', alt: 'Team photo' },
            { id: 5, url: '/demo/Iconcoderz/ic24c.jpg', alt: 'Coding in action' },
            { id: 6, url: '/demo/Iconcoderz/ic24d.jpg', alt: 'Event venue' },
            { id: 7, url: '/demo/Iconcoderz/ic24g.jpg', alt: 'Participants networking' },
        ],
        testimonials: [
            { author: 'Chakri Ramisetti', quote: 'This was my first coding competition and it exceeded my expectations. The smooth organization and exciting atmosphere made me want to come back next year!.' },
            { author: 'Siva Ramaraju Relangi', quote: 'I didn’t win this time, but I definitely learned a lot. The problems were challenging yet approachable, and the mentors were really supportive throughout the event' },
        ],
        feedback: null,
        videoUrl: 'https://www.youtube.com/embed/q3J0oQ_3zQ', // Another placeholder video link
    },
};

export default function PastIconCoderz() {
    const [selectedEvent, setSelectedEvent] = useState('2K25');
    const mainContentRef = useRef(null);
    const currentEvent = eventData[selectedEvent];
    const eventYears = Object.keys(eventData).sort((a, b) => b.localeCompare(a));
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let interval;
        if (!isHovering) {
            interval = setInterval(() => {
                setActiveIndex((current) => (current + 1) % currentEvent.gallerys.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isHovering, currentEvent.gallerys.length]);

    const handleEventSelect = (year) => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        setSelectedEvent(year);
    };
    const handlePrev = () => {
        setActiveIndex((current) => (current - 1 + currentEvent.gallerys.length) % currentEvent.gallerys.length);
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % currentEvent.gallerys.length);
    };

    const totalImages = currentEvent.gallerys.length;
    const prevIndex = (activeIndex - 1 + totalImages) % totalImages;
    const nextIndex = (activeIndex + 1) % totalImages;

    return (
        <div className="min-h-screen bg-muted/50 text-foreground mb-5">
            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto max-w-3xl text-center mb-6">
                    <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Previous Editions
                    </h1>
                    <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-muted-foreground">
                        Our past competitions showcase a history of brilliant minds and challenging problems.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
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
                        <div ref={mainContentRef} className="bg-background rounded-lg border p-6 h-[calc(100vh-200px)] overflow-y-auto">
                            <header className="mb-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {/* Left side - Description */}
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <CalendarCheck className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                                            <h2 className="text-2xl md:text-2xl font-bold">{currentEvent.title}</h2>
                                        </div>
                                        <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 py-2">{currentEvent.description}</p>
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
                                                <span>{currentEvent.team}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side - Image */}
                                    <div className="aspect-video w-full rounded-lg overflow-hidden border bg-muted">
                                        <img
                                            src={currentEvent.poster}
                                            alt={`${currentEvent.title} event image`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </header>

                            {/* Winners Section */}
                            <section className="mb-8">
                                <h3 className="mb-4 text-xl font-bold flex items-center">
                                    <Trophy className="mr-2 text-blue-500" />
                                    Winners Details
                                </h3>
                                {selectedEvent === "2K24" ? (
                                    <div className="grid mx-16">
                                        <Card>
                                            <CardContent className="p-6 bg-muted/50">
                                                <p className="text-muted-foreground mb-2">
                                                    <div className="flex items-center mb-3">
                                                        <Award className="w-6 h-6 mr-2 text-yellow-500" />
                                                        <span className="font-semibold text-foreground mr-2">1st Place: </span>
                                                        {currentEvent.winners.members.first}{" "}
                                                    </div>
                                                </p>
                                                <p className="text-muted-foreground mb-2">
                                                    <div className="flex items-center mb-3">
                                                        <Award className="w-6 h-6 mr-2 text-white-900" />
                                                        <span className="font-semibold text-foreground mr-2">2nd Place: </span>{" "}
                                                        {currentEvent.winners.members.second} {" "}
                                                    </div>
                                                </p>
                                                <p className="text-muted-foreground mb-">
                                                    <div className="flex items-center mb-3">
                                                        <Award className="w-6 h-6 mr-2 text-yellow-900" />
                                                        <span className="font-semibold text-foreground mr-2">3rd Place: </span>{" "}
                                                        {currentEvent.winners.members.third} {" "}
                                                    </div>
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ) : (
                                    <div className="grid gap-6 md:grid-cols-2">
                                        {/* Expert Category */}
                                        <Card>
                                            <CardContent className="p-6 bg-muted/50">
                                                <div className="flex items-center mb-3">
                                                    <Award className="w-6 h-6 mr-2 text-yellow-500" />
                                                    <h4 className="text-xl font-bold">Expert Category</h4>
                                                </div>
                                                <p className="text-muted-foreground mb-2">
                                                    <span className="font-semibold text-foreground">1st Place:</span> {currentEvent.winners.expert.first}
                                                </p>
                                                <p className="text-muted-foreground mb-4">
                                                    <span className="font-semibold text-foreground">2nd Place:</span> {currentEvent.winners.expert.second}
                                                </p>
                                            </CardContent>
                                        </Card>

                                        {/* Beginner Category */}
                                        <Card>
                                            <CardContent className="p-6 bg-muted/50">
                                                <div className="flex items-center mb-3">
                                                    <Award className="w-6 h-6 mr-2 text-gray-500" />
                                                    <h4 className="text-xl font-bold">Beginner Category</h4>
                                                </div>
                                                <p className="text-muted-foreground mb-2">
                                                    <span className="font-semibold text-foreground">1st Place:</span> {currentEvent.winners.beginner.first} 
                                                </p>
                                                <p className="text-muted-foreground mb-4">
                                                    <span className="font-semibold text-foreground">2nd Place:</span> {currentEvent.winners.beginner.second}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )}
                            </section>

                            {/* Gallery Section */}
                            <section className="mb-8">
                                <h3 className="mb-4 text-xl font-bold flex items-center">
                                    <Image className="mr-2 text-primary" />
                                    Gallery
                                </h3>
                                <div className="relative overflow-hidden">
                                    <div className="flex animate-infinite-scroll gap-4">
                                        {/* First set of images */}
                                        {currentEvent.gallery.map(photo => (
                                            <div key={photo.id} className="flex-shrink-0 w-80 rounded-lg overflow-hidden border hover:shadow-md transition-all duration-300 hover:scale-105">
                                                <img
                                                    src={photo.url}
                                                    alt={photo.alt}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </div>
                                        ))}
                                        {/* Duplicate set for seamless loop */}
                                        {currentEvent.gallery.map(photo => (
                                            <div key={`${photo.id}-duplicate`} className="flex-shrink-0 w-80 rounded-lg overflow-hidden border hover:shadow-md transition-all duration-300 hover:scale-105">
                                                <img
                                                    src={photo.url}
                                                    alt={photo.alt}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <style jsx>{`
                                    @keyframes infinite-scroll {
                                        from {
                                            transform: translateX(0);
                                        }
                                        to {
                                            transform: translateX(calc(-336px * ${currentEvent.gallery.length}));
                                        }
                                    }
                                    .animate-infinite-scroll {
                                        animation: infinite-scroll 30s linear infinite;
                                        display: flex;
                                    }
                                    .animate-infinite-scroll:hover {
                                        animation-play-state: paused;
                                    }
                                `}</style>
                            </section>

                            {/* Testimonials Section */}
                            <section className="mb-8">
                                <h3 className="mb-4 text-l font-bold flex items-center">
                                    <Quote className="mr-2 text-primary" />
                                    Testimonials
                                </h3>
                                <div className="grid gap-6 md:grid-cols-2">
                                    {currentEvent.testimonials.map((t, index) => (
                                        <div key={index} className="bg-muted/50 p-6 rounded-lg border">
                                            <p className="italic text-muted-foreground mb-4">"{t.quote}"</p>
                                            <p className="font-semibold text-primary">- {t.author}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Event Video Section */}
                            {/* <section className="mb-8">
                                <h3 className="mb-4 text-xl font-bold flex items-center">
                                    <Youtube className="mr-2 text-red-500" />
                                    Event Video
                                </h3>
                                <div className="max-w-2xl mx-auto">
                                    <div className="aspect-video w-full rounded-lg overflow-hidden border">
                                        <iframe
                                            className="w-full h-full"
                                            src={currentEvent.videoUrl}
                                            title="Event Highlights Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </section> */}
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

                                    {currentEvent.gallerys.map((image, index) => {
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
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}