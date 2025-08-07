import React, { useEffect } from 'react';
import {
  Download,
  Users,
  Award,
  BookOpen,
  Code,
  Zap,
  Gift,
  Trophy,
  Star,
} from 'lucide-react';

const Affiliates = () => {
  const affiliateStats = {
    '1st Year': 145,
    '2nd Year': 128,
    '3rd Year': 95,
    '4th Year': 67,
  };

  const allAffiliateData = {
    '1st Year': 145,
    '2nd Year': 128,
    '3rd Year': 95,
    '4th Year': 67,
    '5th Year': 89,
    '6th Year': 76,
  };

  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Exclusive Learning Resources',
      description: 'Access to premium coding tutorials, documentation, and technical resources',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Hands-on Project Opportunities',
      description: 'Participate in real-world projects and collaborative development initiatives',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Networking & Mentorship',
      description: 'Connect with industry professionals and senior students for guidance',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certification Programs',
      description: 'Access to specialized certification courses and skill development programs',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Priority Event Access',
      description: 'Early registration and special discounts for workshops and tech events',
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Exclusive Merchandise',
      description: 'Official SCC branded items and special affiliate-only merchandise',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Competition Opportunities',
      description: 'Fingernail hackathons, coding competitions, and technical challenges',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Recognition & Awards',
      description: 'Annual recognition program and achievement certificates',
    },
  ];

  const yearMapping = {
    '1st Year': '2025',
    '2nd Year': '2024',
    '3rd Year': '2023',
    '4th Year': '2022',
    '5th Year': '2021',
    '6th Year': '2020',
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

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .stagger-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  if (!Object.keys(affiliateStats).length) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center text-muted-foreground text-lg">
          No affiliate data available.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12 md:py-16 bg-muted/50">
        <header className="text-center mb-7 mt-7 reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-5 text-accent">
            Affiliates
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of tech enthusiasts and unlock exclusive opportunities for growth and learning
          </p>
        </header>
      </div>

      {/* Who Are Affiliates */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12 md:py-16">
        <section className="bg-card rounded-lg mt-7 mb-7 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3 justify-center">
            <Users className="w-8 h-8 text-accent" />
            Who Are Affiliates?
          </h2>
          <div className="text-muted-foreground text-base md:text-lg space-y-4 px-6 md:px-10 pb-8">
            <p>
              SCC Affiliates are passionate students who have demonstrated exceptional interest and commitment to computer science and technology.
            </p>
            <p>
              As an affiliate, you become part of an exclusive network that bridges the gap between academic learning and industry requirements.
            </p>
          </div>
        </section>
      </div>

      {/* Affiliate Statistics */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12 md:py-16 bg-muted/50">
        <section className="mb-7 mt-7">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center reveal">
            Affiliate Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
            {Object.entries(affiliateStats).map(([year, count]) => (
              <div key={year} className="bg-card rounded-lg p-6 text-center border border-border card-hover">
                <div className="text-3xl font-bold text-accent mb-2">{count}</div>
                <div className="text-sm font-semibold text-muted-foreground">{year} Students</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Download Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12 md:py-16">
        <section className="bg-card rounded-lg mt-7 mb-7 reveal">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex justify-center items-center gap-3">
              <Download className="w-8 h-8 text-accent" />
              Year-wise Data Downloads
            </h2>
            <p className="text-muted-foreground">
              Download comprehensive Excel sheets containing affiliate data organized by year.
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-2xl mx-auto stagger-reveal">
            {downloadYears.map((actualYear) => (
              <div key={actualYear} className="bg-muted rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
                  <h3 className="font-bold text-xl text-foreground">{actualYear} Affiliates Details</h3>
                  <button
                    onClick={() => handleDownload(actualYear)}
                    className="bg-accent text-primary-foreground px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-accent/90 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12 md:py-16 bg-muted/50">
        <section className="rounded-lg mt-7 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Gift className="w-8 h-8 text-accent" />
            What You Get as an SCC Affiliate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-muted rounded-lg p-6 border border-border">
                <div className="text-accent mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 mb-7">
            <button className="bg-accent text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-accent/90">
              Apply for Affiliate Membership
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Affiliates;
