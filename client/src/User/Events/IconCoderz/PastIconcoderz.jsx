import { useState, useRef, useEffect } from 'react';
import { CalendarCheck, FileText, Trophy, Users, Image, Quote, Youtube, Link, Award } from 'lucide-react';
import { Card, CardContent } from '../../../Components/ui/card';

// Sample data for different event editions. This data would typically be fetched from an API.
const eventData = {
    '2K23': {
        title: 'IconCoderz 2K23',
        description: 'A challenging competitive programming competition focused on advanced data structures and algorithms. The event brought together top student coders from across the region to solve complex problems under pressure.',
        winners: {
            expert: {
                first: {
                    teamName: 'Binary Braves',
                    members: ['Alice Johnson', 'Bob Williams'],
                },
                second: {
                    teamName: 'Code Crushers',
                    members: ['Charlie Davis', 'Diana Prince'],
                },
            },
            beginner: {
                first: {
                    teamName: 'Syntax Knights',
                    members: ['Eva Green'],
                },
                second: {
                    teamName: 'Logic Legends',
                    members: ['Frank Ocean', 'Grace Jones'],
                },
            },
        },
        gallery: [
            { id: 1, url: '../../../../public/demo/Iconcoderz/photo1.jpg', alt: 'Participants coding' },
            { id: 2, url: '../../../../public/demo/Iconcoderz/photo2.jpg', alt: 'Awards ceremony' },
            { id: 3, url: '../../../../public/demo/Iconcoderz/photo3.jpg', alt: 'Judges' },
            { id: 4, url: '../../../../public/demo/Iconcoderz/photo4.jpg', alt: 'Team photo' },
            { id: 5, url: '../../../../public/demo/Iconcoderz/photo5.jpg', alt: 'Coding in action' },
            { id: 6, url: '../../../../public/demo/Iconcoderz/photo7.jpg', alt: 'Event venue' },
            { id: 7, url: '../../../../public/demo/Iconcoderz/photo8.jpg', alt: 'Participants networking' },
        ],
        testimonials: [
            { author: 'Alice Johnson', quote: 'The problems were incredibly well-designed and tested my limits. Winning was a huge honor!' },
            { author: 'Frank Ocean', quote: 'As a beginner, I was nervous, but the problems were challenging yet approachable. A great learning experience.' },
        ],
        feedback: 'Participants rated the problem quality and event organization highly, with an average score of 4.7/5.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // A placeholder video link
    },
    '2K22': {
        title: 'CoderZ Battleground 2K22',
        description: 'Our inaugural coding competition, designed to spark interest in competitive programming. The event featured a mix of easy and medium-level problems, encouraging participation from all students.',
        winners: {
            expert: {
                first: {
                    teamName: 'Master Minds',
                    members: ['Luke Skywalker', 'Leia Organa'],
                },
                second: {
                    teamName: 'Data Jedi',
                    members: ['Han Solo', 'Chewbacca'],
                },
            },
            beginner: {
                first: {
                    teamName: 'Code Cadets',
                    members: ['Yoda'],
                },
                second: {
                    teamName: 'Syntax Soldiers',
                    members: ['Obi-Wan Kenobi'],
                },
            },
        },
        gallery: [
            { id: 4, url: 'https://placehold.co/800x600/fcd34d/fff?text=Photo+A', alt: 'Opening ceremony' },
            { id: 5, url: 'https://placehold.co/800x600/93c5fd/fff?text=Photo+B', alt: 'Group photo' },
            { id: 6, url: 'https://placehold.co/800x600/a78bfa/fff?text=Photo+X', alt: 'Event space' },
        ],
        testimonials: [
            { author: 'Luke Skywalker', quote: 'The competition was fierce, but the atmosphere was very supportive. I enjoyed every minute of it.' },
            { author: 'Obi-Wan Kenobi', quote: 'A fantastic way to get started with competitive programming. The mentors were great, and I learned a lot.' },
        ],
        feedback: null,
        videoUrl: 'https://www.youtube.com/embed/q3J0oQ_3zQ', // Another placeholder video link
    },
};

export default function PastIconCoderz() {
    const [selectedEvent, setSelectedEvent] = useState('2K23');
    const mainContentRef = useRef(null);
    const currentEvent = eventData[selectedEvent];
    const eventYears = Object.keys(eventData).sort((a, b) => b.localeCompare(a));

    const handleEventSelect = (year) => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        setSelectedEvent(year);
    };

    return (
        <div className="min-h-screen bg-muted/50 text-foreground">
            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto max-w-3xl text-center mb-6">
                    <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                        Previous Editions
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Our past competitions showcase a history of brilliant minds and challenging problems.
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
                                    </div>

                                    {/* Right side - Image */}
                                    <div className="aspect-video w-full rounded-lg overflow-hidden border bg-muted">
                                        <img
                                            src="../../../../public/demo/Iconcoderz/photo6.jpg"
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
                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* Expert Category */}
                                    <Card>
                                        <CardContent className="p-6 bg-muted/50">
                                            <div className="flex items-center mb-3">
                                                <Award className="w-6 h-6 mr-2 text-yellow-500" />
                                                <h4 className="text-xl font-bold">Expert Category</h4>
                                            </div>
                                            <p className="text-muted-foreground mb-2">
                                                <span className="font-semibold text-foreground">1st Place:</span> {currentEvent.winners.expert.first.teamName} - {currentEvent.winners.expert.first.members.join(', ')}
                                            </p>
                                            <p className="text-muted-foreground mb-4">
                                                <span className="font-semibold text-foreground">2nd Place:</span> {currentEvent.winners.expert.second.teamName} - {currentEvent.winners.expert.second.members.join(', ')}
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
                                                <span className="font-semibold text-foreground">1st Place:</span> {currentEvent.winners.beginner.first.teamName} - {currentEvent.winners.beginner.first.members.join(', ')}
                                            </p>
                                            <p className="text-muted-foreground mb-4">
                                                <span className="font-semibold text-foreground">2nd Place:</span> {currentEvent.winners.beginner.second.teamName} - {currentEvent.winners.beginner.second.members.join(', ')}
                                            </p>
                                        </CardContent>
                                    </Card>
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
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}