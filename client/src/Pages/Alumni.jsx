import React from "react"
import { useEffect, useState } from "react"
import {
  Download,
  Users,
  Trophy,
  Star,
  Calendar,
  MapPin,
  Award,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  X,
  User
} from "lucide-react"
import { Card, CardContent } from "../Components/ui/card"

const Alumni = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const alumniData = [
    {
      year: "2025",
      image: "/demo/Hackoverflow/photo1.jpg",
      graduates: 62,
    },
    {
      year: "2024",
      image: "/",
      graduates: 48,
    },
  ]

  const successStories = [
    {
      name: "Rajesh Kumar",
      role: "Senior Software Engineer at Google",
      year: "2022",
      story:
        "Started as a beginner in our coding club, now leading innovative projects at one of the world's top tech companies. His journey from learning basic programming to architecting scalable systems inspires many.",
      image: "/placeholder.svg?height=200&width=200",
      achievement: "Led 3 major product launches",
      company: "Google",
      location: "Mountain View, CA",
    },
    {
      name: "Priya Sharma",
      role: "Founder & CEO at TechStart",
      year: "2021",
      story:
        "From participating in college hackathons to building her own successful startup with 50+ employees. Her innovative fintech solutions have revolutionized digital payments in rural areas.",
      image: "/placeholder.svg?height=200&width=200",
      achievement: "Raised $2M in funding",
      company: "TechStart",
      location: "Bangalore, India",
    },
    {
      name: "Arjun Reddy",
      role: "ML Engineer at Microsoft",
      year: "2023",
      story:
        "Discovered his passion for AI/ML through our club workshops and now works on cutting-edge machine learning projects. His research in computer vision has been published in top-tier conferences.",
      image: "/placeholder.svg?height=200&width=200",
      achievement: "Published 5 research papers",
      company: "Microsoft",
      location: "Seattle, WA",
    },
  ]

  const scrollContainer = (direction) => {
    const container = document.getElementById("alumni-scroll-container")
    if (container) {
      const scrollAmount = 400
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const openFullScreen = (index) => {
    setCurrentImageIndex(index)
    setIsFullScreen(true)
    document.body.style.overflow = "hidden"
  }

  const closeFullScreen = () => {
    setIsFullScreen(false)
    document.body.style.overflow = "unset"
  }

  const navigateFullScreen = (direction) => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) => (prev === 0 ? alumniData.length - 1 : prev - 1))
    } else {
      setCurrentImageIndex((prev) => (prev === alumniData.length - 1 ? 0 : prev + 1))
    }
  }

  const downloadImage = () => {
    const link = document.createElement("a")
    link.href = alumniData[currentImageIndex].image
    link.download = `Alumni_Batch_${alumniData[currentImageIndex].year}.jpg`
    link.click()
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isFullScreen) {
        if (e.key === "ArrowLeft") {
          navigateFullScreen("prev")
        } else if (e.key === "ArrowRight") {
          navigateFullScreen("next")
        } else if (e.key === "Escape") {
          closeFullScreen()
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isFullScreen])

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Full Screen Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeFullScreen}
            className="absolute top-6 right-6 z-60 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Download Button */}
          <button
            onClick={downloadImage}
            className="absolute top-6 right-20 z-60 p-3 bg-orange-500/80 hover:bg-orange-600/90 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Download className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={() => navigateFullScreen("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => navigateFullScreen("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Main Image Container with Gallery Styling */}
          <div className="flex items-center justify-center w-full h-full">
            <div className="relative w-[60vw] h-[70vh] overflow-hidden rounded-md shadow-2xl flex items-center justify-center bg-white">
              <img
                src={alumniData[currentImageIndex].image || "/placeholder.svg"}
                alt={`Alumni Batch ${alumniData[currentImageIndex].year}`}
                className="w-full h-full object-cover"
              />

              {/* Year Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-orange-500/90 to-orange-600/90 backdrop-blur-sm rounded-md text-white font-bold text-lg shadow-xl">
                {alumniData[currentImageIndex].year}
              </div>

              {/* Year and Graduate Info */}
              <div className="absolute bottom-6 left-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Batch {alumniData[currentImageIndex].year}</h3>
                  <p className="text-orange-200 font-bold text-md drop-shadow-md">
                    {alumniData[currentImageIndex].graduates} Graduates
                  </p>
                </div>
              </div>


            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold">
              {currentImageIndex + 1} / {alumniData.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
            {alumniData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? "bg-orange-500 scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>
      )}


      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 gradient-text text-4xl font-bold tracking-tight md:text-5xl">
              Our Alumni
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="mb-8 text-lg text-muted-foreground">
              Our alumni are the pride of  <span className="text-primary">SRKR </span><span className="text-accent font-semibold">&lt;CODING CLUB&gt;</span>. They
              are the brilliant minds who have graduated from our college and are now making significant
              contributions to the tech industry worldwide. From startup founders to senior engineers at top tech
              companies, our alumni continue to inspire and mentor the next generation of coders.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Gallery Section - Hotstar Style */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Alumni Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4"></div>

            <p className="text-muted-foreground text-xl">Celebrating our graduates through the years</p>
          </div>

          {/* Alumni Horizontal Scroll */}
          <div className="relative group">
            {/* Navigation Buttons */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => scrollContainer("left")}
                className="p-3 bg-card/90 hover:bg-card rounded-full shadow-xl border border-border hover:border-accent transition-all duration-200 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6 text-accent" />
              </button>
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => scrollContainer("right")}
                className="p-3 bg-card/90 hover:bg-card rounded-full shadow-xl border border-border hover:border-accent transition-all duration-200 backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6 text-accent" />
              </button>
            </div>

            {/* Scrollable Container */}
            <div
              id="alumni-scroll-container"
              className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 px-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {alumniData.map((alumni, index) => (
                <div
                  key={alumni.year}
                  className={`flex-shrink-0 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative group/item cursor-pointer" onClick={() => openFullScreen(index)}>
                    <div className="relative overflow-hidden rounded-md shadow-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                      <img
                        src={alumni.image || "/placeholder.svg"}
                        alt={`Alumni Batch ${alumni.year}`}
                        className="w-96 h-64 object-cover transition-transform duration-700 group-hover/item:scale-110"
                      />

                      {/* Download Icon */}
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover/item:opacity-100 transition-all duration-500 transform translate-x-4 translate-y-4 group-hover/item:translate-x-0 group-hover/item:translate-y-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            downloadImage()
                          }}
                          className="bg-gradient-to-br w-13 h-13 from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-accent-foreground p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </div>



                      {/* Year Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-accent/90 to-accent backdrop-blur-sm rounded-md text-accent-foreground font-bold text-lg shadow-xl">
                        {alumni.year}
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>

                    {/* Year Label Below Image */}
                    <div className="mt-4 text-center">
                      <h4 className="text-xl font-bold text-accent mb-1">Class of {alumni.year}</h4>
                      <p className="text-muted-foreground font-medium">{alumni.graduates} Alumni</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(alumniData.length / 3) }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-accent/50 transition-opacity duration-300 hover:opacity-100"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}

      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-5 text-center text-3xl font-bold tracking-tight md:text-4xl">Success Stories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-8"></div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">

                <p className="mb-4 text-muted-foreground">
                  HackOverflow was an incredible experience! The mentorship, resources, and collaborative environment
                  helped our team build something we're truly proud of. Can't wait for next year!
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-muted flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">Rahul Sharma</p>
                    <p className="text-sm text-muted-foreground">1st Place Winner, HackOverflow 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">

                <p className="mb-4 text-muted-foreground">
                  As a first-time hackathon participant, I was nervous, but the organizers created such a welcoming
                  environment. I learned so much and made great connections!
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-muted flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">Priya Patel</p>
                    <p className="text-sm text-muted-foreground">Participant, HackOverflow 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">

                <p className="mb-4 text-muted-foreground">
                  The quality of projects at HackOverflow was outstanding. The event was well-organized, and the
                  workshops provided valuable insights for all participants.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-muted flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Suresh Kumar</p>
                    <p className="text-sm text-muted-foreground">Judge, HackOverflow 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


        </div>
      </section>
    </div>
  )
}

export default Alumni