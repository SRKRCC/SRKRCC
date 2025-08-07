import { Calendar, Image, MapPin, Trophy, Users } from 'lucide-react'
import { Badge } from '../../../Components/ui/badge'
import { Card, CardContent } from '../../../Components/ui/card'
import { Button } from '../../../Components/ui/button'
import { Link } from "react-router-dom";
import PastIconCoderz from './PastIconcoderz';
import FAQs from './FAQs';
import ScrollToTopButton from '../../../Components/ScrollToTop';
import { useEffect } from 'react';

const IconCoderz = () => {
        useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []); 
    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div className="flex flex-col space-y-6">
                            <Badge className="w-fit bg-accent text-white hover:bg-accent/80">Annual Coding Competition</Badge>
                            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">IconCoderz 2024</h1>
                            <p className="text-lg text-muted-foreground md:text-xl">
                                Test your skills against the best! A premier coding competition for students of all levels.
                            </p>
                            <div className="space-y-4 rounded-lg bg-muted/80 p-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    <span>May 10-11, 2024</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>SRKR Campus, Computer Science Department</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Users className="h-5 w-5 text-primary" />
                                    <span>Individual and team registrations</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" asChild>
                                    <Link href="#register">Register Now</Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="#details">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="w-full max-w-2xl flex justify-center items-center bg-white rounded-lg shadow-xl">
                            <img
                                src="/demo/Iconcoderz/cover.jpg"
                                alt="IconCoderz"
                                width={600}
                                height={380}
                                className="w-full h-auto max-h-96 rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Details Section */}
            <section id="details" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Event Details</h2>
                        <p className="mb-12 text-lg text-muted-foreground">
                            IconCoderz is SRKR Coding Club's flagship competitive programming event. Participants will solve challenging algorithmic problems in a time-bound environment.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Calendar className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Schedule</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>
                                        <strong>Day 1 (May 10):</strong> Opening Ceremony, Beginner Round, Expert Round
                                    </li>
                                    <li>
                                        <strong>Day 2 (May 11):</strong> Final Round, Live Scoreboard, Awards Ceremony
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Eligibility</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>Open to all college students</li>
                                    <li>Participants can compete individually or in pairs</li>
                                    <li>Two categories: Beginner and Expert</li>
                                    <li>Participants must bring their own laptops and chargers</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Trophy className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Prizes & Rewards</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>
                                        <strong>Expert 1st Place:</strong> ₹25,000 + Tech Gadgets
                                    </li>
                                    <li>
                                        <strong>Expert 2nd Place:</strong> ₹15,000 + Internship Opportunities
                                    </li>
                                    <li>
                                        <strong>Beginner 1st Place:</strong> ₹10,000 + Swag Kits
                                    </li>
                                    <li>
                                        <strong>Beginner 2nd Place:</strong> ₹5,000 + Certificates
                                    </li>
                                    <li>
                                        <strong>All participants:</strong> Participation Certificates
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Past Events Section */}
            <PastIconCoderz />

            {/* Registration Section */}
            <section id="register" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Register for IconCoderz 2024</h2>
                        <p className="mb-8 text-lg text-muted-foreground">
                            Ready to take on the challenge? Register now to secure your spot in IconCoderz 2024!
                        </p>
                        <Button size="lg" asChild>
                            <Link href="https://forms.example.com/iconcoderz2024" target="_blank">
                                Register Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <FAQs />

            <ScrollToTopButton />
        </div>
    )
}

export default IconCoderz;