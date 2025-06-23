import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function JoinUs() {
  return (
    <button
      className="bg-accent text-white hover:bg-accent/90 h-9 px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
    >
      <Link to="/joinus">Join Us</Link>
    </button>
  );
}

