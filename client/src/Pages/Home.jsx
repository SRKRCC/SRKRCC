import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
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
import ScrollToTopButton from "../Components/ScrollToTop"

// Counter component for animated numbers
function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const startValue = 0
    const endValue = parseInt(end)

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const currentCount = Math.floor(progress * (endValue - startValue) + startValue)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}+</span>
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('ongoing');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/50 py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-6 reveal">
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
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Events
                </Link>
                <Link
                  to="/join"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-accent hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Join Us
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center lg:justify-end reveal" style={{ animationDelay: '0.3s' }}>
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
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, number: "300", label: "ABR" },
              { icon: Users, number: "50", label: "EBR" },
              { icon: Code, number: "50", label: "Events" },
              { icon: Trophy, number: "30", label: "Awards" },
            ].map((stat, index) => (
              <div key={index} className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-primary/20 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">
                  <Counter end={stat.number} duration={2000 + index * 500} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
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
              <div key={index} className="bg-muted/30 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-primary/20 reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Spotlight */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-accent/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-bold mb-4">
              Event <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text">Spotlight</span>
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 reveal">
            <div className="bg-background rounded-lg p-1 shadow-sm border border-primary/20">
              <button
                onClick={() => setActiveTab('ongoing')}
                className={`px-4 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'ongoing'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Ongoing Events
              </button>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-4 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('flagship')}
                className={`px-4 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'flagship'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Flagship Events
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === 'ongoing' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "HackOverflow 2024",
                    image: "/placeholder.svg",
                    status: "Ongoing",
                    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
                    date: "June 15-17, 2024",
                    description: "Join our flagship hackathon event and showcase your innovative solutions to real-world problems."
                  },
                  {
                    title: "IconCoderZ Spring Challenge",
                    image: "/placeholder.svg",
                    status: "Ongoing",
                    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
                    date: "May 6, 2024",
                    description: "Test your coding skills in our competitive programming contest with challenges for all skill levels."
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-primary/20 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <img src={event.image} alt={event.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
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
            )}

            {activeTab === 'upcoming' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Code BattleGround",
                    image: "/placeholder.svg",
                    status: "Upcoming",
                    statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
                    date: "June 30, 2024",
                    description: "A team-based coding competition where groups compete to solve algorithmic challenges."
                  },
                  {
                    title: "Summer Coding Bootcamp",
                    image: "/placeholder.svg",
                    status: "Upcoming",
                    statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
                    date: "July 1-15, 2024",
                    description: "Intensive two-week training program covering web development, machine learning, and more."
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-primary/20 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <img src={event.image} alt={event.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
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
            )}

            {activeTab === 'flagship' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "HackOverflow",
                    image: "/placeholder.svg",
                    status: "Annual Event",
                    statusColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
                    nextEvent: "Next Event: April 15-17, 2025",
                    description: "Our annual hackathon where participants collaborate to create innovative solutions to real-world problems. Join us for 48 hours of coding, learning, and networking."
                  },
                  {
                    title: "IconCoderZ",
                    image: "/placeholder.svg",
                    status: "Competition Series",
                    statusColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
                    nextEvent: "Next Event: May 9, 2025",
                    description: "A competitive programming contest designed to test your coding skills and problem-solving abilities. Participate in beginner and expert categories."
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-primary/20 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <img src={event.image} alt={event.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold">{event.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.statusColor}`}>
                        {event.status}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">{event.nextEvent}</p>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
                    <Link
                      to="/events"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      <span className="group inline-flex items-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="text-center reveal">
            <Link
              to="/events"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, hsl(var(--accent)) 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
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
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-primary/20 reveal" style={{ animationDelay: `${index * 0.15}s` }}>
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
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="container mx-auto px-4 text-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold mb-4">
              Ready to <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text">Join Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Become a part of SRKR Coding Club and enhance your coding skills, participate in exciting events, and connect with like-minded individuals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Us <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-accent hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
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
              <div key={index} className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-primary/20 dark:border-primary/10 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <contact.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest updates on events, workshops, and opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto reveal" style={{ animationDelay: '0.2s' }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-muted-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
