import React, { useEffect } from 'react';
import { Download, Users, Award, BookOpen, Code, Zap, Gift, Trophy, Star } from 'lucide-react';

const AffiliatesPage = () => {
  const affiliateStats = {
    '1st Year': 145,
    '2nd Year': 128,
    '3rd Year': 95,
    '4th Year': 67
  };

  const allAffiliateData = {
    '1st Year': 145,
    '2nd Year': 128,
    '3rd Year': 95,
    '4th Year': 67,
    '5th Year': 89,
    '6th Year': 76
  };

  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Exclusive Learning Resources",
      description: "Access to premium coding tutorials, documentation, and technical resources"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Hands-on Project Opportunities",
      description: "Participate in real-world projects and collaborative development initiatives"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Networking & Mentorship",
      description: "Connect with industry professionals and senior students for guidance"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification Programs",
      description: "Access to specialized certification courses and skill development programs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Priority Event Access",
      description: "Early registration and special discounts for workshops and tech events"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Merchandise",
      description: "Official SCC branded items and special affiliate-only merchandise"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competition Opportunities",
      description: "Fingernail hackathons, coding competitions, and technical challenges"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Recognition & Awards",
      description: "Annual recognition program and achievement certificates"
    }
  ];

  const yearMapping = {
    '1st Year': '2025',
    '2nd Year': '2024',
    '3rd Year': '2023',
    '4th Year': '2022',
    '5th Year': '2021',
    '6th Year': '2020'
  };

  const downloadYears = ['2025', '2024', '2023', '2022', '2021', '2020'];

  const reverseYearMapping = Object.fromEntries(
    Object.entries(yearMapping).map(([academic, actual]) => [actual, academic])
  );

  const handleDownload = (actualYear) => {
    const filename = `${actualYear}_affiliates.xlsx`;
    const csvContent = `Name,Student ID,Email,Department,Join Date\nSample Student,12345,student@example.com,Computer Science,${actualYear}-01-15\n`;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Scroll observer for reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .stagger-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () =>
      reveals.forEach((el) => observer.unobserve(el));
  }, []);

  // Data check
  if (!Object.keys(affiliateStats).length) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center text-muted-foreground text-base sm:text-lg">
          No affiliate data available.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-muted/50">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8 reveal">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-accent">
            Affiliates
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our growing community of tech enthusiasts and unlock exclusive opportunities for growth and learning
          </p>
        </header>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        {/* Who Are Affiliates Section */}
        <section className="bg-card rounded-lg mt-6 sm:mt-8 mb-6 sm:mb-8 reveal">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3 justify-center">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            Who Are Affiliates?
          </h2>
          <div className="text-muted-foreground text-sm sm:text-base md:text-lg space-y-4 px-4 sm:px-6">
            <p>
              SCC Affiliates are passionate students who have demonstrated exceptional interest and commitment to computer science and technology.
              They serve as ambassadors of our club, helping to foster a collaborative learning environment and drive innovation within our community.
            </p>
            <p>
              As an affiliate, you become part of an exclusive network that bridges the gap between academic learning and industry requirements,
              providing you with unique opportunities to enhance your technical skills and professional development.
            </p>
          </div>
        </section>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 bg-muted/50">
        {/* Statistics Cards */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center reveal">
            Affiliate Statistics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-reveal">
            {Object.entries(affiliateStats).map(([year, count]) => (
              <div key={year} className="bg-card rounded-lg p-4 sm:p-6 text-center border border-border card-hover">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">{count}</div>
                <div className="text-xs sm:text-sm font-semibold text-muted-foreground">{year} Students</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16">
        {/* Download Section */}
        <section className="bg-card rounded-lg mt-6 sm:mt-8 mb-6 sm:mb-8 reveal">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 flex justify-center items-center gap-3">
              <Download className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              Year-wise Data Downloads
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Download comprehensive Excel sheets containing affiliate data organized by year.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 max-w-3xl mx-auto stagger-reveal">
            {downloadYears.map((actualYear) => (
              <div
                key={actualYear}
                className="bg-muted rounded-lg p-4 sm:p-6 border border-border"
              >
                <div className="flex  sm:flex-row items-center justify-between gap-4 ">
                  <div className="text-foreground">
                    <h3 className="font-bold text-lg sm:text-xl">{actualYear} Affiliates Details</h3>
                  </div>
                  <button
                    onClick={() => handleDownload(actualYear)}
                    className="bg-accent text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-accent/90 transition-colors w-fit sm:w-auto"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 bg-muted/50">
        {/* Benefits Section */}
        <section className="rounded-lg mt-6 sm:mt-8 reveal">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
            <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            What You Get as an SCC Affiliate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-reveal">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg p-4 sm:p-6 border border-border"
              >
                <div className="text-accent mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12 mb-6 sm:mb-8">
            <button className="bg-accent text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-base sm:text-lg hover:bg-accent/90 w-full sm:w-auto">
              Apply for Affiliate Membership
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AffiliatesPage;