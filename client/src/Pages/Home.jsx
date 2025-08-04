import { Link } from "react-router-dom"
import { 
  Users, 
  Calendar, 
  Code, 
  Trophy, 
  Lightbulb, 
  Rocket, 
  Shield, 
  MapPin, 
  Mail, 
  Phone,
  ArrowRight,
  Quote,
  User,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/80 text-black text-sm font-medium">
                Learn - Build - Innovate
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                SRKR{" "}
                <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text">&lt;Coding Club&gt;</span>{" "}
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Empowering students to enhance their coding skills, foster innovation, and build a community of tech enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Explore Events
                </Link>
                <Link
                  to="/join"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-accent hover:text-primary-foreground transition-colors"
                >
                  Join Us
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 flex items-center justify-center">
                  {/* Light theme logo */}
                  <img
                    src="/srkrcc-logo-light.png"
                    alt="SRKR Coding Club Logo"
                    className="w-104 h-104 object-contain dark:hidden rounded-full transition-transform duration-300 hover:scale-110"
                  />
                  {/* Dark theme logo */}
                  <img
                    src="/srkrcc-logo-dark.png"
                    alt="SRKR Coding Club Logo"
                    className="w-104 h-104 object-contain hidden dark:block rounded-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, number: "1500+", label: "Members" },
              { icon: Calendar, number: "50+", label: "Events" },
              { icon: Code, number: "200+", label: "Projects" },
              { icon: Trophy, number: "30+", label: "Awards" },
            ].map((stat, index) => (
              <div key={index} className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SRKR Coding Club is a student-led organization dedicated to fostering a culture of coding excellence and innovation at SRKR Engineering College.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Our Vision",
                description: "To create a vibrant community of coders who can solve real-world problems through technology and innovation."
              },
              {
                icon: Rocket,
                title: "Our Mission",
                description: "To provide a platform for students to learn, practice, and showcase their coding skills through various events and initiatives."
              },
              {
                icon: Shield,
                title: "Our Values",
                description: "Collaboration, innovation, continuous learning, and excellence in everything we do."
              }
            ].map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Spotlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Upcoming <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text">Events</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Ongoing Events */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Ongoing Events</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "HackOverflow 2024",
                    status: "Ongoing",
                    statusColor: "bg-green-100 text-green-800",
                    date: "June 15-17, 2024",
                    description: "Join our flagship hackathon event and showcase your innovative solutions to real-world problems."
                  },
                  {
                    title: "IconCoderZ Spring Challenge",
                    status: "Ongoing",
                    statusColor: "bg-green-100 text-green-800",
                    date: "May 6, 2024",
                    description: "Test your coding skills in our competitive programming contest with challenges for all skill levels."
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold">{event.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.statusColor}`}>
                        {event.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
                    <Link to="/events" className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      <span className="group inline-flex items-center">
                        Learn more
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Code BattleGround",
                    status: "Upcoming",
                    statusColor: "bg-blue-100 text-blue-800",
                    date: "June 30, 2024",
                    description: "A team-based coding competition where groups compete to solve algorithmic challenges."
                  },
                  {
                    title: "Summer Coding Bootcamp",
                    status: "Upcoming",
                    statusColor: "bg-blue-100 text-blue-800",
                    date: "July 1-15, 2024",
                    description: "Intensive two-week training program covering web development, machine learning, and more."
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold">{event.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.statusColor}`}>
                        {event.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
                    <Link
                      to="/events"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      <span className="group inline-flex items-center">
                        Learn more
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Our Flagship Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Flagship <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text">Events</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "HackOverflow",
                description: "Our annual hackathon where participants collaborate to create innovative solutions to real-world problems. Join us for 48 hours of coding, learning, and networking.",
                nextEvent: "Next Event: April 15-17, 2024"
              },
              {
                title: "IconCoderZ",
                description: "A competitive programming contest, designed to test your coding skills and problem-solving abilities. Participate in beginner and expert categories.",
                nextEvent: "Next Event: May 9, 2024"
              }
            ].map((event, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <p className="text-sm text-primary font-medium mb-4">{event.nextEvent}</p>
                <Link to="/events" className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  <span className="group inline-flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              What Our Members <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text">Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SRKR Coding Club has been instrumental in my growth as a developer. The workshops and hackathons provided me with practical experience that I couldn't get elsewhere.",
                name: "Rahul Sharma",
                title: "Software Developer at Google"
              },
              {
                quote: "The mentorship I received at SRKR Coding Club helped me land my dream job. The community is supportive and the learning resources are top-notch.",
                name: "Priya Patel",
                title: "Frontend Developer at Microsoft"
              },
              {
                quote: "Participating in HackOverflow changed my perspective on problem-solving. The collaborative environment at SRKR Coding Club fosters innovation and creativity.",
                name: "Amit Kumar",
                title: "Data Scientist at Amazon"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text">Join Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become a part of SRKR Coding Club and enhance your coding skills, participate in exciting events, and connect with like-minded individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Register Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-accent hover:text-primary-foreground transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Contact <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions or want to get involved? Reach out to us!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Location",
                content: "SRKR Engineering College, Bhimavaram, Andhra Pradesh, India"
              },
              {
                icon: Mail,
                title: "Email",
                content: "contact@srkrcodingclub.org"
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 1234567890"
              }
            ].map((contact, index) => (
              <div key={index} className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <contact.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest updates on events, workshops, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-muted-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
