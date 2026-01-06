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
import { Button } from "../Components/ui/button"
import SEO from "../Components/SEO"

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
  // const [activeTab, setActiveTab] = useState('ongoing');

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
      <SEO 
        title="SRKR Coding Club"
        description="SRKR Coding Club is a student-led organization empowering students to enhance coding skills, foster innovation, and build a community of tech enthusiasts at SRKR Engineering College, Bhimavaram."
        keywords="SRKR Coding Club, SRKRCC, coding, programming, hackathon, SRKR Engineering College, Bhimavaram, tech community, learn programming, student developers"
        canonical="/"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/50 py-12 sm:py-16 lg:py-20 relative overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-4 sm:space-y-6 reveal text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-white text-xs sm:text-sm font-medium">
                Learn - Build - Innovate
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                SRKR{" "}<br />
                <span className="from-primary to-accent bg-gradient-to-r text-transparent bg-clip-text block sm:inline">&lt;Coding Club&gt;</span>{" "}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Empowering students to enhance their coding skills, foster innovation, and build a community of tech enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                <Button variant="formative" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
                  <Link to="/events"> Explore Events </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
                  <Link to="/joinus" >Join Us</Link>
                </Button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center lg:justify-end reveal order-first lg:order-last" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                  {/* Light theme logo */}
                  <img
                    src="/srkrcc-logo.png"
                    alt="SRKR Coding Club Logo"
                    className="w-full h-full object-contain dark:hidden transition-transform duration-300 hover:scale-105 sm:hover:scale-110"
                  />
                  {/* Dark theme logo */}
                  <img
                    src="/srkrcc-logo.png"
                    alt="SRKR Coding Club Logo"
                    className="w-full h-full object-contain hidden dark:block transition-transform duration-300 hover:scale-105 sm:hover:scale-110"
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
              { icon: Users, number: "600", label: "Affilites" },
              { icon: Users, number: "60", label: "EBR & ABR's" },
              { icon: Code, number: "10", label: "Events & Workshops" },
              { icon: Trophy, number: "70", label: "Alumini" },
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
            <div className="w-28 h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SRKR Coding Club is a student-led organization dedicated to fostering a culture of coding excellence and innovation at SRKR Engineering College.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Our Vision",
                description: "To motivate and empower students by fostering a culture of learning, collaboration, and innovation, creating a community where they grow together and inspire others."
              },
              {
                icon: Rocket,
                title: "Our Mission",
                description: "Our mission is to empower students to learn and apply technology, organize projects and events that enhance skills and creativity, and build a supportive community for growth and positive impact."
              },
              {
                icon: Shield,
                title: "Our Values",
                description: "we value learning, creativity, collaboration, integrity, and inclusivity, guiding our community to grow, innovate, and make a meaningful impact."
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
            <div className="w-28 h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SRKR Coding Club has been instrumental in my growth as a developer. The workshops and hackathons provided me with practical experience that I couldn't get elsewhere.",
                name: "Manoj Manfred",
                // title: "Software Developer at Google"
              },
              {
                quote: "The mentorship I received at SRKR Coding Club helped me land my dream job. The community is supportive and the learning resources are top-notch.",
                name: "Avinash",
                // title: "Frontend Developer at Microsoft"
              },
              {
                quote: "Participating in HackOverflow changed my perspective on problem-solving. The collaborative environment at SRKR Coding Club fosters innovation and creativity.",
                name: "Bhuvaneswar",
                // title: "Data Scientist at Amazon"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-primary/20 reveal flex flex-col justify-around" style={{ animationDelay: `${index * 0.15}s` }}>
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
            <div className="w-28 h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Register now to become a member of the SRKR Coding Club.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/joinus"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Us <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
            <div className="w-28 h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full mb-4"></div>
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
                content: [
                  "srkrcodingclubofficial@gmail.com",
                  "davidrajukuppala@srkrec.ac.in",
                ]
              },
              {
                icon: Phone,
                title: "Phone",
                content: [
                  "+91 8121702286",
                  "+91 9100579797",
                ]
              }
            ].map((contact, index) => (
              <div key={index} className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-primary/20 dark:border-primary/10 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <contact.icon className="w-8 h-8 text-primary mx-auto mb-1" />
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                {Array.isArray(contact.content) ? (
                  contact.content.map((email, i) => (
                    <p key={i} className="text-muted-foreground">{email}</p>
                  ))
                ) : (
                  <p className="text-muted-foreground">{contact.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
