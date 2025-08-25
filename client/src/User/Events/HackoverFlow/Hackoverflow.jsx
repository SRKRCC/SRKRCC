import { Calendar, Image, MapPin, Trophy, Users } from 'lucide-react'
import { Badge } from '../../../Components/ui/badge'
import { Card, CardContent } from '../../../Components/ui/card'
import { Button } from '../../../Components/ui/button'
import { Link } from "react-router-dom";
import PastHackothons from './PastHackothons';
import FAQs from './FAQs';
import { useEffect } from 'react';
import ScrollToTopButton from '../../../Components/ScrollToTop';


const schedule = null;
const prizes = null;
const theme = null;
const Hackoverflow = () => {
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
                            <Badge className="w-fit bg-orange-500 text-white hover:bg-orange-600">Annual Hackathon</Badge>
                            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">HackOverflow 2K25</h1>
                            <p className="text-lg text-muted-foreground md:text-xl">
                                24 hours of coding, innovation, and collaboration. Join us for our flagship hackathon event!
                            </p>
                            <div className="space-y-4 rounded-lg bg-muted/80 p-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    <span>October , 2025  <i>[ Tentative ]</i></span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>SRKR Engineering College, Bhimavaram</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Users className="h-5 w-5 text-primary" />
                                    <span>Teams of 1-6 participants</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" asChild>
                                    <Link href="#register">Unfolding Soon…</Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="#details">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="w-full max-w-2xl flex justify-center items-center bg-white rounded-lg shadow-xl">
                            <img
                                src="/demo/Hackoverflow/cover.jpg"
                                alt="HackOverflow"
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
                        <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4"></div>

                        <p className="mb-12 text-lg text-muted-foreground">
                            HackOverflow is SRKR Coding Club's flagship hackathon event where participants collaborate to create
                            innovative solutions to real-world problems.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <Calendar className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold">Schedule</h3>
                                </div>
                                {/* <h3 className="mb-2 text-xl font-bold">Schedule</h3> */}
                                {schedule ? (
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>
                                            <strong>Day 1 (April 15):</strong> Registration, Opening Ceremony, Team Formation, Hacking Begins
                                        </li>
                                        <li>
                                            <strong>Day 2 (April 16):</strong> Continued Hacking, Mentorship Sessions, Workshops
                                        </li>
                                        <li>
                                            <strong>Day 3 (April 17):</strong> Project Submission, Presentations, Judging, Awards Ceremony
                                        </li>
                                    </ul>
                                ) : (
                                    // <div className="flex h-32 items-center justify-center">
                                    //     <span className="rounded-full bg-primary/10 px-6 py-3 text-primary text-lg font-semibold shadow-md">
                                    //         🚀 Schedule Announcing Soon
                                    //     </span>
                                    // </div>
                                    <div className=" bg-primary/10  flex h-40 flex-col items-center justify-center rounded-lg bg-muted/40">
                                        <Calendar className="mb-2 h-10 w-10  text-muted-foreground/50" />
                                        <span className=" text-primary text-xl font-semibold">Schedule Announcing Soon...</span>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <Users className="h-6 w-6 text-primary" />

                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold">Eligibility</h3>
                                </div>
                                {/* <h3 className="mb-2 text-xl font-bold">Eligibility</h3> */}
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>Open to all college students</li>
                                    <li>Teams of 1-6 participants</li>
                                    <li>Participants must bring their own laptops and necessary equipment</li>
                                    <li>All skill levels welcome - from beginners to experienced developers</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <Trophy className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Prizes & Rewards</h3>
                                </div>
                                {/* <h3 className="mb-2 te/xt-xl font-bold">Prizes & Rewards</h3> */}
                                {prizes ? (
                                    <ul className="mt-6 space-y-2 text-lg text-muted-foreground">
                                        <li>
                                            <strong>1st Place:</strong> ₹50,000 + Internship Opportunities
                                        </li>
                                        <li>
                                            <strong>2nd Place:</strong> ₹30,000 + Tech Gadgets
                                        </li>
                                        <li>
                                            <strong>3rd Place:</strong> ₹20,000 + Swag Kits
                                        </li>

                                    </ul>
                                ) : (
                                    // <div className="flex h-32 items-center justify-center">
                                    //     <span className="rounded-full bg-primary/10 px-8 py-3 text-primary font-semibold shadow-sm">
                                    //         Prizes & Rewards Announce Soon......
                                    //     </span>
                                    // </div>
                                    <div className="mt-8 bg-primary/10  flex h-40 flex-col items-center justify-center rounded-lg bg-muted/40">
                                        <Trophy className="mb-2 h-10 w-10  text-muted-foreground/50" />
                                        <span className=" text-primary text-xl font-semibold">Prizes & Rewards Announce Soon......</span>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Themes Section */}
            <section className="bg-muted/50 py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Hackathon Themes</h2>
                        <div className="w-36 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-6"></div>

                        <p className="mb-12 text-lg text-muted-foreground">
                            Choose from one of these themes for your project or propose your own innovative idea.
                        </p>
                    </div>
                    {theme ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-4 text-xl font-bold">Healthcare & Wellness</h3>
                                    <p className="text-muted-foreground">
                                        Develop solutions that address healthcare challenges, improve patient care, or promote wellness and
                                        healthy living.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-4 text-xl font-bold">Education Technology</h3>
                                    <p className="text-muted-foreground">
                                        Create innovative tools and platforms to enhance learning experiences, improve accessibility, or
                                        address educational challenges.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-4 text-xl font-bold">Sustainability & Environment</h3>
                                    <p className="text-muted-foreground">
                                        Build solutions that address environmental challenges, promote sustainability, or help communities
                                        adapt to climate change.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-4 text-xl font-bold">Smart Cities & Infrastructure</h3>
                                    <p className="text-muted-foreground">
                                        Develop applications that improve urban living, enhance infrastructure, or make cities more efficient
                                        and sustainable.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-4 text-xl font-bold">Financial Technology</h3>
                                    <p className="text-muted-foreground">
                                        Create solutions that address financial inclusion, improve financial literacy, or enhance financial
                                        services and transactions.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-4 text-xl font-bold">Open Innovation</h3>
                                    <p className="text-muted-foreground">
                                        Have a unique idea that doesn't fit into the above categories? You're welcome to propose your own
                                        innovative solution to any real-world problem.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ) : (
                        <div className="flex h-32 items-center justify-center">
                            <span className="rounded-full bg-primary/10 px-8 py-3 text-primary text-xl font-semibold shadow-sm">
                                Exciting hackathon themes will be revealed soon — stay tuned!
                            </span>
                        </div>
                    )}
                </div>
            </section>

            <PastHackothons />

            {/* Registration Section */}
            <section id="register" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Register for HackOverflow 2025</h2>
                        <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4"></div>

                        <p className="mb-8 text-lg text-muted-foreground">
                            Ready to showcase your skills and creativity? Register now to secure your spot in HackOverflow 2025!
                        </p>
                        <Button size="lg" asChild>
                            <Link href="https://forms.example.com/hackoverflow2024" target="_blank">
                                Coming Soon!
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

export default Hackoverflow