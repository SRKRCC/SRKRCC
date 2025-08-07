import { useState } from "react";
import Events from "./Events";

// Mock data
const mockEvents = [
  {
    id: 1,
    title: "EdgeCase",
    description:
      "Join our Biweekly coding competition to sharpen your skills and win exciting prizes.",
    date: "Every Month 2nd and 4th Thursday",
    location: "Online",
    status: "Ongoing",
    poster: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "CodeQuest",
    description:
      "Participate in our problem of the day challenge and enhance your coding abilities.",
    date: "Everyday",
    location: "Online",
    status: "Ongoing",
    poster: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "HackOverflow 2K25",
    description:
      "Join our flagship hackathon event and showcase your innovative solutions to real-world problems.",
    date: "October 10-11, 2025",
    location: "SRKR Campus, Main Auditorium",
    status: "Upcoming",
    poster: "/api/placeholder/600/400",
  },
  {
    id: 4,
    title: "CodeBattleGround",
    description:
      "A team-based coding competition where groups compete to solve algorithmic challenges.",
    date: "March 10, 2026",
    location: "SRKR Campus, CSE Block",
    status: "Upcoming",
    poster: "/api/placeholder/600/400",
  },

  {
    id: 5,
    title: "ICONCODERZ 2K25",
    description:
      "A premier coding competition that challenges participants to solve DSA problems.",
    date: "February 06, 2025",
    location: "SRKR Campus, Tech Center",
    status: "Past",
    poster: "/api/placeholder/600/400",
  },

  {
    id: 6,
    title: "HackOverflow 2K24",
    description:
      "Our annual hackathon that brought together over 200 participants to build innovative solutions.",
    date: "October 24-25, 2024",
    location: "SRKR Campus, CSE Block",
    status: "Past",
    poster: "/api/placeholder/600/400",
  },

  {
    id: 7,
    title: "HackOverflow 2K23",
    description:
      "Our annual hackathon that brought together over 150 participants to build innovative solutions.",
    date: "October 11-12, 2023",
    location: "SRKR Campus",
    status: "Past",
    poster: "/api/placeholder/600/400",
  },
];

const EventsPage = () => {
  const [events] = useState(mockEvents);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-accent">Events</span> & Activities
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Discover our exciting events, competitions, and workshops designed
            to enhance your coding journey
          </p>
        </div>
      </section>

      {/* Events Section with Filter */}
      <Events events={events} />

      {/* Call to Action Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to Stay Updated?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss an exciting event,
            workshop, or competition!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors ">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
