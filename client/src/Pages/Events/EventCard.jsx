import { Calendar, Camera, MapPin } from "lucide-react";

const EventCard = ({ event }) => {
  const getButtonText = () => {
    switch (event.status) {
      case "Ongoing":
        return "View Details";
      case "Upcoming":
        return "Learn More";
      case "Past":
        return "View Recap";
      default:
        return "View Details";
    }
  };

  // Map event status to background color classes
  const statusBgColor =
    {
      Ongoing: "bg-green-100 text-green-800",
      Upcoming: "bg-yellow-100 text-yellow-800",
      Past: "bg-red-100 text-red-800",
    }[event.status] || "bg-muted text-muted-foreground";

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      {/* Event Image Placeholder */}
      <div className="h-64 bg-background flex items-center justify-center relative">
        <div className="w-24 h-24  rounded-full flex items-center justify-center">
          <Camera size={100} color="#ccc" strokeWidth={2} />
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6 bg-muted">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${statusBgColor}`}
          >
            {event.status}
          </span>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-accent" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-accent" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-6">{event.description}</p>
        <button
          className={`bg-accent text-white hover:bg-accent/90 py-3 px-6 rounded-lg font-semibold `}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
