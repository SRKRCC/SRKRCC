import { useState, useRef, useEffect } from 'react';
import { CalendarCheck, FileText, Trophy, Users, Image, Quote, Youtube, Link, Award, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../../../Components/ui/card';
import { Button } from '../../../Components/ui/button';



const hridayamGalleryImages = [
    { id: 1, url: '/demo/Hackoverflow/cover.jpg', alt: 'Teams' },
    { id: 2, url: '/demo/Hackoverflow/photo1.jpg', alt: 'Team' },
    { id: 3, url: '/demo/Hackoverflow/photo2.jpg', alt: 'Team' },
];

// Sample data for different event editions. This data would typically be fetched from an API.
const eventData = {
    '2K24': {
        title: 'Hackoverflow 2K24',
        description: 'A 24-hour hackathon focused on building innovative solutions for environmental sustainability. Participants developed projects ranging from waste management trackers to renewable energy dashboards. The event was a huge success, fostering collaboration and creative problem-solving.',
        location: 'SRKR Engineering College, Bhimavaram.',
        date: 'October 18-19, 2024',
        team: 'Teams of 1-6 participants',
        poster: '/demo/EventPosters/Hackoverflow2k24.png',
        gallerys: hridayamGalleryImages,
        winners: {
            first: {
                teamName: 'AIM',
                projectLink: 'IIIT RGUKT RK VALLEY',
                members: ['Panasa Viswanatha Vishnu','Ambati Vijaya Bhaskar Reedy','Vanapalli Madhu Deekshitha'],
            },
            second: {
                teamName: 'Team Arjuna',
                projectLink: 'SRKR Engineering College',
                members: ['Thirumalla sai naga manikanta','Nakka Veera vasu','Mekala Harish','Palivela Nikhileswar','Pedada Venkataramana','Dadala Rajesh'],
            },
            third: {
                teamName: 'Green Minds',
                projectLink: 'SRKR Engineering College',
                members: ['Tejassri Avinasha Ryali','Venkateswarlu Thanneru','T.Vigna Ramtej','Mohankrishna Puppala'],
            },
        },
        gallery: [
            // { id: 1, url: '/demo/Hackoverflow/photo2.jpg', alt: 'Participants brainstorming' },
            { id: 2, url: '/demo/Hackoverflow/photo7.jpg', alt: 'Judges evaluating projects' },
            { id: 3, url: '/demo/Hackoverflow/photo3.jpg', alt: 'Award ceremony' },
            { id: 4, url: '/demo/Hackoverflow/photo4.jpg', alt: 'Networking session' },
            { id: 5, url: '/demo/Hackoverflow/photo5.jpg', alt: 'Team presentations' },
            { id: 6, url: '/demo/Hackoverflow/photo6.jpg', alt: 'Hackathon venue' },
        ],
        testimonials: [
            { author: 'Jane Doe', quote: 'An incredible experience! The mentors were so helpful, and the energy was fantastic. We learned so much in just one weekend.' },
            { author: 'John Smith', quote: 'The best hackathon I\'ve ever been to. The focus on sustainability was inspiring and made us think deeply about our project\'s impact.' },
        ],
        feedback: 'Participants gave the event a 4.8/5 rating, highlighting the quality of the workshops and the event organization.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // A placeholder video link

        sponsors: [
            { id: 1, url: '/demo/Hackoverflow/edu expose.png', alt: 'Judges evaluating projects' },
            { id: 2, url: '/demo/Hackoverflow/Nareshhostel.png', alt: 'Award ceremony' },
            { id: 3, url: '/demo/Hackoverflow/Sp1.png', alt: 'Networking session' },
        ],
    },
    '2K23': {
        title: 'HackOverFlow 2K23',
        description: 'A hackathon focused on developing web-based applications. The theme was "Future of Communication," challenging teams to build innovative platforms for connecting people.',
        gallerys: hridayamGalleryImages,
        winners: {
            first: {
                teamName: 'Syntax Savants',
                projectLink: 'https://github.com/syntaxsavants/chat-app-plus',
                members: ['Oliver Queen', 'Felicity Smoak', 'Barry Allen'],
            },
            second: {
                teamName: 'Data Dynamos',
                projectLink: 'https://github.com/datadynamos/tele-sync',
                members: ['Sara Lance', 'Ray Palmer', 'Mick Rory'],
            },
            third: {
                teamName: 'Pixel Pioneers',
                projectLink: 'https://github.com/pixelpioneers/draw-together',
                members: ['Leonard Snart', 'Heat Wave', 'Captain Cold'],
            },
        },
        gallery: [
            { id: 4, url: 'https://placehold.co/800x600/fcd34d/fff?text=Photo+A', alt: 'Opening ceremony' },
            { id: 5, url: 'https://placehold.co/800x600/93c5fd/fff?text=Photo+B', alt: 'Group photo' },
        ],
        testimonials: [
            { author: 'Chris Evans', quote: 'The workshops on full-stack development were invaluable. The mentors were amazing and really helped us refine our idea.' },
        ],
        feedback: null,
        videoUrl: 'https://www.youtube.com/embed/q3J0oQ_3zQ', // Another placeholder video link
        sponsors: ['Global Communications', 'WebSphere Labs'],
    },
};

export default function PastHackothons() {
    const [selectedEvent, setSelectedEvent] = useState('2K24');
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
        <div className="min-h-screen bg-background text-foreground">
            {/* Centered header for the entire page */}
            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto max-w-3xl text-center mb-8">
                    <h1 className="my-6 text-3xl font-bold tracking-tight md:text-4xl">
                        Previous Editions
                    </h1>
                    <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4"></div>

                    <p className="text-lg text-muted-foreground">
                        Our past hackathons reflect a journey of innovation, collaboration, and hands-on problem-solving across diverse tech challenges.
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
                        {/* Attach the ref to the main content div */}
                        <div ref={mainContentRef} className="bg-muted/50 rounded-lg border p-6 h-[calc(100vh-200px)] overflow-y-auto">
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
                                    <Trophy className="mr-2 text-amber-500" />
                                    Winners Details
                                </h3>
                                <div className="grid gap-6 md:grid-cols-3">
                                    {['first', 'second', 'third'].map((place, index) => {
                                        const winner = currentEvent.winners[place];
                                        const placeText = index === 0 ? '1st Place' : index === 1 ? '2nd Place' : '3rd Place';
                                        const placeIconColor = index === 0 ? 'text-amber-500' : index === 1 ? 'text-gray-500' : 'text-orange-500';

                                        return (
                                            <Card>
                                                <CardContent key={place} className="p-6">
                                                    <div className="flex items-center mb-3">
                                                        <Award className={`w-6 h-6 mr-2 ${placeIconColor}`} />
                                                        <h4 className="text-xl font-bold">{placeText}</h4>
                                                    </div>
                                                    <p className="text-muted-foreground mb-2">
                                                        <span className="font-semibold text-foreground">Team:</span> {winner.teamName}
                                                    </p>
                                                    <p className="text-muted-foreground mb-4">
                                                        <span className="font-semibold text-foreground">Members:</span> {winner.members.join(', ')}
                                                    </p>
                                                    <p className="text-muted-foreground mb-4">
                                                        <span className="font-semibold text-primary">College:</span> {winner.projectLink}
                                                    </p>
                                                   
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
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
                                        {/* Third set to ensure no gaps */}
                                        {currentEvent.gallery.map(photo => (
                                            <div key={`${photo.id}-triple`} className="flex-shrink-0 w-80 rounded-lg overflow-hidden border hover:shadow-md transition-all duration-300 hover:scale-105">
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
                                        transform: translateX(calc(-336px * 7)); /* -(320px + 16px gap) * 7 images */
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

                            {/* Event Video Section
                            <section className="mb-8">
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

                            {/* Sponsors Section */}
                            <section className="mb-8">
                                <h3 className="mb-8  mt-8 text-xl font-bold text-center flex items-center">
                                    <Users className="mr-2 text-primary" />
                                    Sponsors
                                </h3>
                                <div className="relative overflow-hidden">
                                    <div className="flex animate-sponsors-scroll gap-6">
                                        {/* First set of sponsor logos */}
                                        {currentEvent.sponsors.map((sponsor, index) => (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 w-54 h-28 rounded-lg  overflow-hidden border hover:shadow-md transition-all duration-300 hover:scale-105"
                                            >
                                                <img
                                                    src={sponsor.url}
                                                    alt={`Sponsor ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                        {/* Duplicate set */}
                                        {currentEvent.sponsors.map((sponsor, index) => (
                                            <div
                                                key={`duplicate-${index}`}
                                                className="flex-shrink-0 w-54 h-28 rounded-lg overflow-hidden border hover:shadow-md transition-all duration-300 hover:scale-105"
                                            >
                                                <img
                                                    src={sponsor.url}
                                                    alt={`Sponsor duplicate ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                        {/* Third set (optional) */}
                                        {/* {currentEvent.sponsors.map((sponsor, index) => (
                                            <div
                                                key={`triple-${index}`}
                                                className="flex-shrink-0 w-54 h-28 rounded-lg overflow-hidden border hover:shadow-md transition-all duration-300 hover:scale-105"
                                            >
                                                <img
                                                    src={sponsor.url}
                                                    alt={`Sponsor triple ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))} */}
                                    </div>
                                </div>

                                <style jsx>{`
                                    @keyframes sponsors-scroll {
                                    from {
                                        transform: translateX(0);
                                    }
                                    to {
                                        transform: translateX(calc(-120px * 7)); /* width + gap (96 + ~24) * 7 */
                                    }
                                    }
                                    .animate-sponsors-scroll {
                                    animation: sponsors-scroll 20s linear infinite;
                                    display: flex;
                                    }
                                    .animate-sponsors-scroll:hover {
                                    animation-play-state: paused;
                                    }
                                `}</style>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}