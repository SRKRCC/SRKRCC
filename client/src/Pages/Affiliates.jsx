import React, { useEffect } from 'react';
import { Download, Users, Award, BookOpen, Code, Zap, Gift, Trophy, Star, Ticket, Codepen, Lightbulb, TrendingUp } from 'lucide-react';
import Title from '../Components/Title';
import ScrollToTopButton from '../Components/ScrollToTop';

const AffiliatesPage = () => {

  useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

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
      icon: <BookOpen className="w-10 h-10" />,
      title: "Exclusive Learning Resources",
      description: "Learn through courses conducted by our club, with live sessions covering the latest technologies and industry-relevant skills."
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Hands-on Project Opportunities",
      description: "Gain practical knowledge through hands-on workshops, focusing on modern technologies and industry practices."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Networking & Mentorship",
      description: "Connect with industry professionals and senior students for guidance"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Certification Programs",
      description: "Access to specialized certification courses and skill development programs."
    },
    {
      icon: <Ticket className="w-10 h-10" />,
      title: "Exclusive Priority Event Access",
      description: "Get priority and Early registration and special discounts for SRKR Coding Club events, workshops, hackathons."
    },
    {
      icon: <Codepen className="w-10 h-10" />,
      title: "Daily Coding Challenges",
      description: "Sharpen your skills with daily problems (POTD) on the CodeQuest platform, for all levels — from beginner to advanced."
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Competition Opportunities",
      description: "Engage in events like HackOverflow and IconCoders, where deal with real-world challenges and showcase your skills."
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Recognition & Awards",
      description: "Earn certificates and recognition for your contributions to the Events of the Club."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Workshops & Growth",
      description: "Earn certificates and recognition for your contributions to the Events of the Club."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Hackathons & Innovations",
      description: "Earn certificates and recognition for your contributions to the Events of the Club."
    }
  ];

  const yearMapping = {
    '1st Year': '2025',
    '2nd Year': '2024',
    '3rd Year': '2023',

  };

  const downloadYears = ['2025', '2024', '2023'];

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
    <div className="min-h-screen bg-muted/40">
      <div className="px-4 sm:px-6 md:px-8 py-20 sm:py-12 md:py-16">
        {/* Header */}
        <header className="text-center my-8 sm:mb-8">
          <Title value="Affiliates"/>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Affiliates are an essential part of SRKRCodingClub’s growth and success, contributing to events, ideas, and community engagement. Here, you can explore year-wise statistics, download affiliate data, and discover the benefits that come with being part of our dynamic and collaborative network.          </p>
        </header>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-20 bg-card/40" >
        {/* Who Are Affiliates Section */}
        <section className="rounded-lg mt-6 sm:mt-8 mb-6 sm:mb-8 ">
          <div className='flex justify-center'>
            <Title value="Who Are Affiliates?"/>
          </div>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4"></div>
          
          <div className="text-muted-foreground text-sm sm:text-base md:text-lg space-y-6 px-8 sm:px-16">
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

      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 sm:py-12 md:py-24 bg-muted/50">
        {/* Statistics Cards */}
        <section className="mb-6 sm:mb-8">
          <Title value="Affiliate Statistics"/>
          <div className="w-28 h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full mb-12"></div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Object.entries(affiliateStats).map(([year, count]) => (
              <div key={year} className="bg-card/40 rounded-lg p-4 sm:p-6 text-center border border-border card-hover">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">{count}</div>
                <div className="text-xs sm:text-sm font-semibold text-muted-foreground">{year} Students</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 ">
        {/* Download Section */}
        <section className=" rounded-lg mt-6 sm:mt-8 mb-6 sm:mb-8 ">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-6 flex justify-center items-center gap-3">
              <Download className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
              <Title value="Year-wise Data Downloads"/>
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-sm sm:text-base">
              Download comprehensive Excel sheets containing affiliate data organized by year.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 max-w-3xl mx-auto ">
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
        <section className="rounded-lg mt-6 sm:mt-8 ">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-8 sm:mb-4 text-center flex items-center justify-center gap-3">
            {/* <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-accent" /> */}
            <Title value="What You Get as an SCC Affiliate"/>
          </h2>
           <div className="w-28 h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 ">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg p-4 bg-card/40 hover:bg-card sm:p-6 text-center flex flex-col items-center"
              >
                <div className="text-accent mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300 ">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{benefit.title}</h3>
                {/* <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{benefit.description}</p> */}
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
      <ScrollToTopButton/>
    </div>
  );
};

export default AffiliatesPage;