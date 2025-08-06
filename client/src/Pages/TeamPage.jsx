import React, { useState, useEffect } from 'react';
import { Users, UserPlus, Award, Star, Code, Trophy, Camera, X, ChevronLeft, ChevronRight, Heart, Sparkles, Play } from 'lucide-react';

// Header Component
const Header = () => (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900 dark:to-slate-800 border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="relative container mx-auto px-6 py-12">
            <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6 shadow-lg animate-bounce">
                    <Users className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-foreground">Our </span>
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Team</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Meet the passionate individuals behind SRKR Coding Club who are dedicated to
                    <span className="font-semibold text-orange-600 mx-1">Learn • Build • Innovate</span>
                </p>
            </div>
        </div>
    </div>
);

// Convener Component
const Convener = ({ convener }) => (
    <section>
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-orange-600" />
                <h2 className="text-4xl font-bold text-foreground">Club Convener</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
            {/* <div className="bg-card rounded-3xl shadow-1xl border border-border overflow-hidden group hover:shadow-3xl transition-all duration-500"> */}
            <div className="bg-card rounded-3xl shadow-1xl border-[0.5px] border-border overflow-hidden group hover:shadow-3xl transition-all duration-500">

                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-[3px]">
                    <div className="bg-card/95 rounded-2xl p-8">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="relative flex-shrink-0">
                                <div className="w-48 h-48 rounded-full overflow-hidden  border-orange-500 shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-500">
                                    <img
                                        src={convener.image}
                                        alt={convener.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-180 transition-transform duration-500">
                                    <Star className="w-6 h-6 text-white fill-current" />
                                </div>
                            </div>

                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-foreground mb-2">
                                    {convener.name}
                                </h3>
                                <p className="text-xl text-orange-600 font-semibold mb-1">{convener.title}</p>
                                <p className="text-base text-muted-foreground mb-4">{convener.department}</p>
                                <p className="text-card-foreground leading-relaxed mb-6">
                                    {convener.bio}
                                </p>
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                                    <span className="text-orange-600 font-semibold">{convener.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Team Photo Modal Component
const TeamPhotoModal = ({ isOpen, onClose, photos, currentIndex, setCurrentIndex }) => {
    if (!isOpen) return null;

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors z-10"
                >
                    <X className="w-8 h-8" />
                </button>

                <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src={photos[currentIndex].src}
                        alt={photos[currentIndex].title}
                        className="w-full h-[60vh] object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">{photos[currentIndex].title}</h3>
                            <p className="text-gray-200">{photos[currentIndex].description}</p>
                        </div>
                    </div>

                    <button
                        onClick={prevPhoto}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextPhoto}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    {photos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-orange-500' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Team Photo Button Component
const TeamPhotoButton = ({ onClick }) => (
    <div className="fixed bottom-8 right-8 z-40">
        <button
            onClick={onClick}
            className="group relative bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        >
            <Camera className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <Play className="w-3 h-3 text-white fill-current" />
            </div>
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                View Team Memories
            </div>
        </button>
    </div>
);

// Leadership Team Component
const LeadershipTeam = ({ heads, animateCards }) => (
    <section>
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core leadership driving innovation, community growth, and technical excellence.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {heads.map((head, index) => (
                <div
                    key={index}
                    className={`group transform transition-all duration-500 ${animateCards ? 'animate-fadeInUp' : 'opacity-0'
                        }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                >
                    <div className="bg-card rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-border hover:border-orange-300 dark:hover:border-orange-700 overflow-hidden h-full">
                        <div className="relative overflow-hidden">
                            <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 group-hover:from-orange-200 group-hover:to-red-200 dark:group-hover:from-orange-800/30 dark:group-hover:to-red-800/30 transition-colors duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <img
                                        src={head.image}
                                        alt={head.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                            </div>
                            <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-180 transition-transform duration-500">
                                <Code className="w-5 h-5 text-white" />
                            </div>
                        </div>

                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-orange-600 transition-colors">
                                {head.name}
                            </h3>
                            <p className="text-lg text-orange-600 font-semibold mb-2">{head.title}</p>
                            <p className="text-sm text-muted-foreground font-medium">{head.vertical}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

// Core Team Component
const CoreTeam = ({ coreMembers, animateCards }) => {
    return (
        <section>
            {/* Section Heading */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold text-foreground mb-4">Core Team</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                    Meet the brilliant minds driving our mission forward with innovation and passion.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Grid of Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
                {coreMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`transform transition-all duration-700 ${animateCards ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
                            }`}
                        style={{
                            animationDelay: `${index * 100}ms`,
                            animationFillMode: 'forwards',
                        }}
                    >
                        <div className="rounded-2xl  hover:shadow-2xl transition-all duration-500 overflow-hidden relative group  hover:border-orange-400 dark:hover:border-orange-600">
                            {/* Hover Border Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                            {/* Profile Image */}
                            <div className="flex justify-center mt-6">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-[6px] border-orange-200 dark:border-orange-800 group-hover:border-orange-500 dark:group-hover:border-orange-600 shadow-md group-hover:shadow-orange-100 dark:group-hover:shadow-orange-800 transition-all duration-500">
                                    <img
                                        src={member.image}
                                        alt={member.name || 'Team Member'}
                                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>

                            </div>

                            {/* Info */}
                            <div className="text-center py-6 px-4">
                                <h3 className="text-xl font-semibold text-foreground group-hover:text-orange-600 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-orange-500 font-medium mt-1">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


// Executive Body Component


const ExecutiveBody = ({ executiveMembers, animateCards }) => (
    <section>
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Executive Body Members</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our enthusiastic executive members who support various club activities and contribute to our community's growth.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {executiveMembers.map((member, index) => (
                <div
                    key={index}
                    className={`group text-center transform transition-all duration-500 ${animateCards ? 'animate-fadeInUp' : 'opacity-0'
                        }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div className="relative mb-3">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                            {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>
                    </div>

                    <h3 className="font-bold text-card-foreground group-hover:text-orange-600 transition-colors mb-1 text-sm">
                        {member.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">{member.department} • {member.year}</p>
                    <span className="inline-block px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-colors">
                        {member.specialization}
                    </span>
                </div>
            ))}
        </div>
    </section>
);

// Join Team Component
const JoinTeam = () => (
    <section>
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative p-12 text-center text-white">
                <div className="max-w-3xl mx-auto">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                        <UserPlus className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Join Our Executive Team</h2>
                    <p className="text-lg text-orange-100 mb-8 leading-relaxed">
                        Ready to be part of SRKR Coding Club's executive body? Join us in organizing events,
                        workshops, and building an amazing tech community. Help us continue our mission to
                        <span className="font-bold"> Learn • Build • Innovate</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3">
                            <Trophy className="w-5 h-5" />
                            Apply Now
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-3">
                            <Sparkles className="w-5 h-5" />
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Main Team Page Component
const TeamPage = () => {
    const [animateCards, setAnimateCards] = useState(false);
    const [showPhotoModal, setShowPhotoModal] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimateCards(true), 200);
    }, []);

    // Sample data - replace with your actual team data
    const convener = {
        name: "Dr. David Raju Kuppala",
        title: "Club Convener",
        image: "/sample.jpg",
        bio: "Leading SRKR Coding Club with a vision to empower students in technology and innovation. Guiding the next generation of developers and tech enthusiasts.",
        email: "davidraju@gmail.com",
        department: "Computer Science & Engineering"
    };

    const heads = [
        {
            name: "Ankith",
            title: "President",
            image: "/sample.jpg",
            vertical: "Overall Leadership & Strategy"
        },
        {
            name: "Likitha",
            title: "Vice President",
            image: "/sample.jpg",
            vertical: "Events & Community Engagement"
        },
        {
            name: "Yogendra",
            title: "Technical Secretary",
            image: "/sample.jpg",
            vertical: "Technical Operations & Development"
        }
    ];

    const coreMembers = [
        {
            name: "Rahul Krishna",
            role: "Web Development Lead",
            image: "/sample.jpg"
        },
        {
            name: "Sneha Agarwal",
            role: "UI/UX Design Lead",
            image: "/sample.jpg"
        },
        {
            name: "Karthik Nair",
            role: "Mobile App Lead",
            image: "/sample.jpg"
        },
        {
            name: "Divya Rao",
            role: "Data Science Lead",
            image: "/api/placeholder/160/160"
        },
        {
            name: "Ankit Gupta",
            role: "DevOps Lead",
            image: "/api/placeholder/160/160"
        },
        {
            name: "Meera Singh",
            role: "Content & Marketing Lead",
            image: "/api/placeholder/160/160"
        }
    ];

    const executiveMembers = [
        { name: "Aadhya Patel", department: "CSE", year: "3rd Year", specialization: "Frontend" },
        { name: "Rohit Mehta", department: "CSE", year: "2nd Year", specialization: "Backend" },
        { name: "Kavya Reddy", department: "IT", year: "3rd Year", specialization: "UI/UX" },
        { name: "Suresh Kumar", department: "CSE", year: "4th Year", specialization: "DevOps" },
        { name: "Nithya Sree", department: "CSE", year: "2nd Year", specialization: "Data Science" },
        { name: "Harish Babu", department: "IT", year: "3rd Year", specialization: "Mobile Dev" },
        { name: "Lavanya Devi", department: "CSE", year: "2nd Year", specialization: "AI/ML" },
        { name: "Manoj Varma", department: "IT", year: "4th Year", specialization: "Cloud" },
        { name: "Sruthi Rao", department: "CSE", year: "3rd Year", specialization: "Security" },
        { name: "Deepak Singh", department: "CSE", year: "2nd Year", specialization: "Blockchain" },
        { name: "Pooja Agarwal", department: "IT", year: "3rd Year", specialization: "Content" },
        { name: "Ravi Teja", department: "CSE", year: "4th Year", specialization: "Full Stack" },
        { name: "Bhavana Kumari", department: "CSE", year: "2nd Year", specialization: "Game Dev" },
        { name: "Sai Krishna", department: "IT", year: "3rd Year", specialization: "AR/VR" },
        { name: "Varsha Reddy", department: "CSE", year: "3rd Year", specialization: "IoT" },
        { name: "Naveen Kumar", department: "IT", year: "4th Year", specialization: "Cybersecurity" }
    ];

    const teamPhotos = [
        { id: 1, src: "/api/placeholder/800/600", title: "Annual Tech Fest 2024", description: "Our team at the biggest tech event of the year" },
        { id: 2, src: "/api/placeholder/800/600", title: "Hackathon Winners", description: "Celebrating our victory at the inter-college hackathon" },
        { id: 3, src: "/api/placeholder/800/600", title: "Workshop Series", description: "Teaching and learning together in our weekly workshops" },
        { id: 4, src: "/api/placeholder/800/600", title: "Team Retreat 2024", description: "Building bonds beyond code at our annual retreat" },
        { id: 5, src: "/api/placeholder/800/600", title: "Coding Competition", description: "Intense coding sessions during our internal competition" },
        { id: 6, src: "/api/placeholder/800/600", title: "Community Outreach", description: "Teaching coding to local school students" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="space-y-0"> {/* remove vertical spacing between sections */}

                {/* Convener */}
                <div className="bg-muted/50">
                    <div className="container mx-auto px-6 py-16">
                        <Convener convener={convener} />
                    </div>
                </div>

                {/* Leadership Team */}
                <div className="bg-background">
                    <div className="container mx-auto px-6 py-16">
                        <LeadershipTeam heads={heads} animateCards={animateCards} />
                    </div>
                </div>

                {/* Core Team */}
                <div className="bg-muted/50">
                    <div className="container mx-auto px-6 py-16">
                        <CoreTeam coreMembers={coreMembers} animateCards={animateCards} />
                    </div>
                </div>

                {/* Executive Body */}
                <div className="bg-background">
                    <div className="container mx-auto px-6 py-16">
                        <ExecutiveBody executiveMembers={executiveMembers} animateCards={animateCards} />
                    </div>
                </div>

                {/* Join Team */}
                <div className="bg-muted/50">
                    <div className="container mx-auto px-6 py-16">
                        <JoinTeam />
                    </div>
                </div>

            </div>

            <TeamPhotoButton onClick={() => setShowPhotoModal(true)} />

            <TeamPhotoModal
                isOpen={showPhotoModal}
                onClose={() => setShowPhotoModal(false)}
                photos={teamPhotos}
                currentIndex={currentPhotoIndex}
                setCurrentIndex={setCurrentPhotoIndex}
            />

            <style jsx>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeInUp {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `}</style>
        </div>

    );

};

export default TeamPage;