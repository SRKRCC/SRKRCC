import React, { useEffect, useState } from 'react';
import { Button } from '../Components/ui/button';
import FAQs from '../Components/Faqs';
import ScrollToTopButton from '../Components/ScrollToTop';
import Title from '../Components/Title';

// Location Pin Icon
const LocationIcon = () => (
    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

// Phone Icon
const PhoneIcon = () => (
    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

// Email Icon
const EmailIcon = () => (
    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);


// Club Logo
const ClubLogo = () => (
    <div className="absolute top-4 right-4 bg-white text-primary-foreground rounded-lg shadow-md w-20 h-16 overflow-hidden">
        <img
            src="/clublogolight.png"
            alt="SRKR Coding Club Logo"
            className="w-full h-full object-cover"
            onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
            }}
        />
        <div style={{ display: 'none' }} className="w-full h-full flex flex-col items-center justify-center p-2">
            <svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span className="font-bold text-xs">srkr</span>
            <span className="text-[10px] tracking-wider">coding club</span>
        </div>
    </div>
);


export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const [openFAQ, setOpenFAQ] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const faqData = [
        {
            question: "How can I join SRKR Coding Club?",
            answer: "You can join by filling out the registration form on our Affiliates page. Membership is open to all SRKR Engineering College students."
        },
        {
            question: "Are there any membership fees?",
            answer: "No, membership to SRKR Coding Club is completely free. We believe in providing equal opportunities to all students."
        },
        {
            question: "How can I participate in events?",
            answer: "Event announcements are made on our website and social media channels. You can register for events through the links provided in the event details."
        },
        {
            question: "Can I volunteer for club activities?",
            answer: "Yes, we welcome volunteers! Please reach out to us through the contact form or email us at contact@srkrcodingclub.org with your areas of interest."
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        console.log('Form submitted:', formData);
        // Add a user-friendly message on submission
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <>
            {/* CSS Animations */}
            <style >{`
                @keyframes spin-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes bounce-gentle {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-8px) scale(1.1); }
                }
                @keyframes sway {
                    0%, 100% { transform: rotate(-5deg); }
                    50% { transform: rotate(5deg); }
                }
                @keyframes stretch {
                    0%, 100% { transform: scaleX(1); }
                    50% { transform: scaleX(1.3); }
                }
                @keyframes particle-1 {
                    0% { transform: translate(0, 0) scale(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translate(50px, -100px) scale(1); opacity: 0; }
                }
                @keyframes particle-2 {
                    0% { transform: translate(0, 0) scale(0); opacity: 0; }
                    15% { opacity: 1; }
                    85% { opacity: 1; }
                    100% { transform: translate(-60px, -80px) scale(1); opacity: 0; }
                }
                @keyframes particle-3 {
                    0% { transform: translate(0, 0) scale(0); opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { transform: translate(40px, -120px) scale(1); opacity: 0; }
                }
                @keyframes particle-4 {
                    0% { transform: translate(0, 0) scale(0); opacity: 0; }
                    25% { opacity: 1; }
                    75% { opacity: 1; }
                    100% { transform: translate(-40px, -90px) scale(1); opacity: 0; }
                }
                @keyframes particle-5 {
                    0% { transform: translate(0, 0) scale(0); opacity: 0; }
                    30% { opacity: 1; }
                    70% { opacity: 1; }
                    100% { transform: translate(70px, -110px) scale(1); opacity: 0; }
                }
                @keyframes wave {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes wave-reverse {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes slideInUp {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                .animate-bounce-gentle {
                    animation: bounce-gentle 3s ease-in-out infinite;
                }
                .animate-sway {
                    animation: sway 4s ease-in-out infinite;
                }
                .animate-stretch {
                    animation: stretch 5s ease-in-out infinite;
                }
                .animate-particle-1 {
                    animation: particle-1 6s ease-out infinite;
                    animation-delay: 0s;
                }
                .animate-particle-2 {
                    animation: particle-2 7s ease-out infinite;
                    animation-delay: 1s;
                }
                .animate-particle-3 {
                    animation: particle-3 5s ease-out infinite;
                    animation-delay: 2s;
                }
                .animate-particle-4 {
                    animation: particle-4 8s ease-out infinite;
                    animation-delay: 1.5s;
                }
                .animate-particle-5 {
                    animation: particle-5 6s ease-out infinite;
                    animation-delay: 3s;
                }
                .animate-wave {
                    animation: wave 12s ease-in-out infinite;
                }
                .animate-wave-reverse {
                    animation: wave-reverse 15s ease-in-out infinite;
                    animation-delay: 2s;
                }
                .animate-slideInUp {
                    animation: slideInUp 0.8s ease-out forwards;
                }
            `}</style>

            {/* Header Section */}
            <div className="bg-muted py-24 px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Title value="Contact Us" />
                    <div className="w-28 h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full mb-4"></div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Looking to share an idea, ask a question, or explore collaboration? Our team is always ready to listen and respond. Drop us a message—we’ll get back to you as soon as possible
                    </p>
                </div>
            </div>

            <div className="bg-background flex items-center justify-center p-4 font-sans py-16 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Animated Geometric Shapes */}
                    <div className="absolute top-16 left-16 w-32 h-8 border-2 border-primary/20 animate-spin-slow"></div>
                    <div className="absolute top-32 right-24 w-6 h-6 bg-accent/15 rotate-45 animate-bounce-gentle"></div>
                    <div className="absolute bottom-40 left-20 w-4 h-16 bg-primary/10 animate-sway"></div>
                    <div className="absolute bottom-24 right-16 w-12 h-4 bg-accent/12 rounded-full animate-stretch"></div>

                    {/* Particle System */}
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/25 rounded-full animate-particle-1"></div>
                    <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-accent/30 rounded-full animate-particle-2"></div>
                    <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-primary/20 rounded-full animate-particle-3"></div>
                    <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-accent/25 rounded-full animate-particle-4"></div>
                    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/30 rounded-full animate-particle-5"></div>

                    {/* Wave Lines */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-wave"></div>
                    <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/8 to-transparent animate-wave-reverse"></div>
                </div>                {/* New wrapper to position the info card correctly */}
                <div className="relative w-full max-w-3xl mx-auto z-10">
                    {/* Main grid container for image and form */}
                    <div className="relative w-full max-w-3xl mx-auto bg-card rounded-xl shadow-lg hover:shadow-2xl grid lg:grid-cols-3 border border-border transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 animate-slideInUp">

                        {/* Left Side: Image */}
                        <div className="relative min-h-[300px] lg:min-h-[450px] lg:col-span-1 overflow-hidden rounded-l-xl">
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            {/* Info Card for MOBILE - visible on small screens */}
                            <div className="absolute top-1/2 left-5 -translate-y-1/2 bg-card/95 backdrop-blur-sm p-5 rounded-lg shadow-md w-64 border border-border lg:hidden">
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-2">
                                        <LocationIcon />
                                        <div>
                                            <h3 className="font-bold text-card-foreground text-sm">Location</h3>
                                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                                SRKR Engineering College<br />
                                                Bhimavaram, Andhra Pradesh<br />
                                                India - 534204
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <EmailIcon />
                                        <div>
                                            <h3 className="font-bold text-card-foreground text-sm">Email Us</h3>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                srkrcodingclubofficial@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <PhoneIcon />
                                        <div>
                                            <h3 className="font-bold text-card-foreground text-sm">Phone</h3>
                                            <a href="tel:+91 9100579797">
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    9100579797
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="relative p-6 md:p-8 bg-card lg:col-span-2 min-h-[450px] flex flex-col justify-start">

                            <ClubLogo />
                            <h2 className="text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-5 flex-1">
                                <div>
                                    <label htmlFor="fullName" className="block text-xs font-semibold text-muted-foreground mb-1">Your Name</label>
                                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full p-2 text-sm bg-input rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-accent transition text-foreground" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-1">Your Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-2 text-sm bg-input rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-accent transition text-foreground" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-xs font-semibold text-muted-foreground mb-1">Subject</label>
                                    <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full p-2 text-sm bg-input rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-accent transition text-foreground">
                                        <option value="">Select a subject</option>
                                        <option value="General Enquiry">General Enquiry</option>
                                        <option value="Event Information">Event Information</option>
                                        <option value="Membership">Membership</option>
                                        <option value="Sponsorship">Sponsorship</option>
                                        <option value="Collaboration">Collaboration</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground mb-1">Message</label>
                                    <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleInputChange} className="w-full p-2 text-sm bg-input rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-accent transition text-foreground" required></textarea>
                                </div>
                                <div className='flex flex-row justify-center'>
                                    <Button variant="formative" className="w-32">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Info Card for DESKTOP - visible on large screens */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 hidden lg:block bg-card/95 backdrop-blur-sm p-5 rounded-lg shadow-md w-64 border border-border">
                        <div className="space-y-4">
                            <div className="flex items-start space-x-2">
                                <LocationIcon />
                                <div>
                                    <h3 className="font-bold text-card-foreground text-sm">Location</h3>
                                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                        SRKR Engineering College<br />
                                        Bhimavaram, Andhra Pradesh<br />
                                        India - 534204
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <EmailIcon />
                                <div>
                                    <h3 className="font-bold text-card-foreground text-sm">Email Us</h3>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        srkrcodingclubofficial@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-2">
                                <PhoneIcon />
                                <div>
                                    <h3 className="font-bold text-card-foreground text-sm">Phone</h3>
                                    <a href="tel:+91 9100579797">
                                        <p className="text-xs text-muted-foreground mt-1">
                                            9100579797
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQs faqs={faqData} />
            <ScrollToTopButton />
        </>
    );
}
