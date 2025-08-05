import { useState } from 'react';
import { CalendarCheck, FileText, Trophy, Users, Image, Quote, Youtube, Link, Award } from 'lucide-react';

// Sample data for different event editions. This data would typically be fetched from an API.
const eventData = {
    '2K24': {
        title: 'Hackoverflow 2K24',
        description: 'A 24-hour hackathon focused on building innovative solutions for environmental sustainability. Participants developed projects ranging from waste management trackers to renewable energy dashboards. The event was a huge success, fostering collaboration and creative problem-solving.',
        winners: {
            first: {
                teamName: 'EcoCoders',
                projectLink: 'https://github.com/ecocoders/project-enviro',
                members: ['Alice Johnson', 'Bob Williams', 'Charlie Davis'],
            },
            second: {
                teamName: 'GreenTech Innovators',
                projectLink: 'https://github.com/greentech/smart-recycler',
                members: ['Diana Prince', 'Bruce Wayne', 'Clark Kent'],
            },
            third: {
                teamName: 'SustainaSolutions',
                projectLink: 'https://github.com/sustaina/water-saver-app',
                members: ['Eva Green', 'Frank Ocean', 'Grace Jones'],
            },
        },
        gallery: [
            { id: 1, url: 'https://placehold.co/800x600/60a5fa/fff?text=Photo+1', alt: 'Participants brainstorming' },
            { id: 2, url: 'https://placehold.co/800x600/34d399/fff?text=Photo+2', alt: 'Judges evaluating projects' },
            { id: 3, url: 'https://placehold.co/800x600/f87171/fff?text=Photo+3', alt: 'Award ceremony' },
            { id: 11, url: 'https://placehold.co/800x600/60a5fa/fff?text=Photo+1', alt: 'Participants brainstorming' },
            { id: 21, url: 'https://placehold.co/800x600/34d399/fff?text=Photo+2', alt: 'Judges evaluating projects' },
            { id: 31, url: 'https://placehold.co/800x600/f87171/fff?text=Photo+3', alt: 'Award ceremony' },
            { id: 1, url: 'https://placehold.co/800x600/60a5fa/fff?text=Photo+1', alt: 'Participants brainstorming' },
            { id: 12, url: 'https://placehold.co/800x600/34d399/fff?text=Photo+2', alt: 'Judges evaluating projects' },
            { id: 13, url: 'https://placehold.co/800x600/f87171/fff?text=Photo+3', alt: 'Award ceremony' },
            { id: 221, url: 'https://placehold.co/800x600/60a5fa/fff?text=Photo+1', alt: 'Participants brainstorming' },
            { id: 22, url: 'https://placehold.co/800x600/34d399/fff?text=Photo+2', alt: 'Judges evaluating projects' },
            { id: 33, url: 'https://placehold.co/800x600/f87171/fff?text=Photo+3', alt: 'Award ceremony' },
        ],
        testimonials: [
            { author: 'Jane Doe', quote: 'An incredible experience! The mentors were so helpful, and the energy was fantastic. We learned so much in just one weekend.' },
            { author: 'John Smith', quote: 'The best hackathon I\'ve ever been to. The focus on sustainability was inspiring and made us think deeply about our project\'s impact.' },
        ],
        feedback: 'Participants gave the event a 4.8/5 rating, highlighting the quality of the workshops and the event organization.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // A placeholder video link
        sponsors: ['TechCorp', 'GreenEnergy Inc.', 'Innovate Solutions'],
    },
    '2K23': {
        title: 'CodeVerse 2K23',
        description: 'A hackathon focused on developing web-based applications. The theme was "Future of Communication," challenging teams to build innovative platforms for connecting people.',
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
    '2K22': {
        title: 'Innovate 2K22',
        description: 'A beginner-friendly hackathon with the theme of "Social Good." The event was designed to introduce new developers to the world of hackathons and project-based learning.',
        winners: {
            first: {
                teamName: 'Team Alpha',
                projectLink: 'https://github.com/teamalpha/help-local',
                members: ['Luke Skywalker', 'Leia Organa', 'Han Solo'],
            },
            second: {
                teamName: 'Beta Builders',
                projectLink: 'https://github.com/betabuilders/community-garden-app',
                members: ['Darth Vader', 'Boba Fett', 'Kylo Ren'],
            },
            third: {
                teamName: 'Gamma Group',
                projectLink: 'https://github.com/gammagroup/volunteerease',
                members: ['Yoda', 'Obi-Wan Kenobi', 'Chewbacca'],
            },
        },
        gallery: [
            { id: 6, url: 'https://placehold.co/800x600/a78bfa/fff?text=Photo+X', alt: 'Event space' },
            { id: 7, url: 'https://placehold.co/800x600/f472b6/fff?text=Photo+Y', alt: 'Networking session' },
            { id: 8, url: 'https://placehold.co/800x600/6b7280/fff?text=Photo+Z', alt: 'Team presentation' },
        ],
        testimonials: [
            { author: 'Darth Sidious', quote: 'A very welcoming environment for beginners. The judging was fair, and the feedback was constructive. A great starting point for aspiring hackers.' },
        ],
        feedback: null,
        videoUrl: 'https://www.youtube.com/embed/p1J5rC7R7q0', // Another placeholder video link
        sponsors: ['Community Partners', 'Nexus Technologies'],
    },
};

export default function PastHackothons() {
    const [selectedEvent, setSelectedEvent] = useState('2K24');
    const currentEvent = eventData[selectedEvent];
    const eventYears = Object.keys(eventData).sort((a, b) => b.localeCompare(a)); // Sort years descending

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Centered header for the entire page */}
            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto max-w-3xl text-center mb-6">
                    <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                        Previous Editions
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Our past hackathons reflect a journey of innovation, collaboration, and hands-on problem-solving across diverse tech challenges.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-2">
                    {/* Sidebar for navigation */}
                    <aside className="lg:w-64 flex-shrink-0">
                        {/* On small/medium screens, the nav becomes a horizontally scrollable row */}
                        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-hidden p-4 bg-card rounded-lg lg:sticky lg:top-4">
                            {eventYears.map(year => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedEvent(year)}
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
                        <div className="bg-muted/50 rounded-lg border p-6 h-[calc(100vh-200px)] overflow-y-auto">
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
                                            src={`https://placehold.co/800x450/3b82f6/fff?text=${currentEvent.title.replace(/\s+/g, '+')}`}
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
                                            <div key={place} className="p-6 rounded-lg border bg-white hover:shadow-md transition-shadow">
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
                                                <a
                                                    href={winner.projectLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                                                >
                                                    <Link className="mr-1 w-4 h-4" />
                                                    Project Link
                                                </a>
                                            </div>
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

                            {/* Sponsors Section */}
                            <section className="mb-8">
                                <h3 className="mb-8  mt-8 text-xl font-bold text-center flex items-center">
                                    <Users className="mr-2 text-primary" />
                                    Sponsors
                                </h3>
                                <div className="relative overflow-hidden">
                                    <div className="flex animate-sponsors-scroll gap-6">
                                        {/* First set of sponsor logos */}
                                        {currentEvent.gallery.map((sponsor, index) => (
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
                                        {currentEvent.gallery.map((sponsor, index) => (
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
                                        {currentEvent.gallery.map((sponsor, index) => (
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
                                        ))}
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