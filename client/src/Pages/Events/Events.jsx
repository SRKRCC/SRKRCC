import { useState } from "react";
import EventCards from "./EventCards";

const Events = ({ events }) => {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const filteredEvents = events.filter((event) => {
    if (activeTab === "Ongoing") return event.status === "Ongoing";
    if (activeTab === "Upcoming") return event.status === "Upcoming";
    if (activeTab === "Past") return event.status === "Past";
    return false;
  });

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {["Ongoing", "Upcoming", "Past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-accent text-white hover:bg-accent/90"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <EventCards events={filteredEvents} />
      </div>
    </section>
  );
};

export default Events;