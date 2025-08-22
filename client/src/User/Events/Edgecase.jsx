import { Calendar, Image, MapPin, Trophy, Users, TrendingUp, Globe, CheckCircle, Star, Clock, Award, BarChart2, Gift } from 'lucide-react'
import { Badge } from '../../Components/ui/badge'
import { Card, CardContent } from '../../Components/ui/card'
import { Button } from '../../Components/ui/button'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import ScrollToTopButton from '../../Components/ScrollToTop';


const schedule = null;
const prizes = null;
const theme = null;
const Edgecase = () => {
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
                            <Badge className="w-fit bg-orange-500 text-white hover:bg-orange-600">Biweekly Contest</Badge>
                            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">EdgeCase</h1>
                            <p className="text-lg text-muted-foreground md:text-xl">
                                Test your coding speed, logic, and problem-solving skills in exciting 90-minute challenges! Compete, track your progress, and rise on the leaderboard.
                            </p>
                            <div className="space-y-4 rounded-lg bg-muted/80 p-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <Globe className="h-5 w-5 text-primary" />
                                    <span>Platform: HackerRank – Participate from Anywhere</span>

                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                    <span>Features: Multiple Diffcult level Challenges • Performance Analytics • Leaderboards</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Users className="h-5 w-5 text-primary" />
                                    <span>Open to All SRKR Students</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <span className="font-bold text-accent">✨ Stay consistent, compete, and level up with EdgeCase!</span>
                            </div>
                        </div>
                        <div className="w-full max-w-2xl flex justify-center items-center bg-white rounded-lg shadow-xl">
                            <img
                                src="/demo/EventPosters/Edgecase.png"
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
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">How It Helps You</h2>
                        <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4"></div>

                        <p className="mb-12 text-lg text-muted-foreground">
                            Compete, Code, and Level Up Your Skills !
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <Users className="h-6 w-6 text-primary" />

                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold">How CodeQuest Works</h3>
                                </div>
                                {/* <h3 className="mb-2 text-xl font-bold">Eligibility</h3> */}
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <Calendar className="h-5 w-5 text-accent mt-1" />
                                        <span>Biweekly Challenges – Solve timed coding problems to test logic, speed, and problem-solving.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <BarChart2 className="h-5 w-5 text-accent mt-1" />
                                        <span>Track Your Performance – Analytics, streaks, and points to monitor your progress.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Award className="h-5 w-5 text-accent mt-1" />
                                        <span>Compete on Leaderboards – Friendly competition encourages engagement with peers.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Gift className="h-5 w-5 text-accent mt-1" />
                                        <span>Accessible Anywhere – Participate on HackerRank from any device.</span>
                                    </li>
                                </ul>

                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold">Benefits for Students</h3>
                                </div>
                                {/* <h3 className="mb-2 text-xl font-bold">Eligibility</h3> */}
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-accent mt-1" />
                                        <span>Sharpen Skills: Improve algorithms, problem-solving, and speed under time constraints.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Clock className="h-5 w-5 text-accent mt-1" />
                                        <span>Stay Consistent: Participate every 2nd & 4th Thursday to build coding discipline.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Users className="h-5 w-5 text-accent mt-1" />
                                        <span>Learn Together: Collaborate, share strategies, and grow with peers.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <TrendingUp className="h-5 w-5 text-accent mt-1" />
                                        <span>See Your Growth: Track progress and identify improvement areas.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Star className="h-5 w-5 text-accent mt-1" />
                                        <span>Recognition & Motivation: Friendly competition encourages engagement and skill development.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Themes Section */}
            {/* <section className=" py-16 md:py-20">
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
            </section> */}


            {/* Registration Section */}
            <section id="register" className="bg-muted/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Join the EdgeCase Challenge</h2>
                        <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4"></div>

                        <p className="mb-8 text-lg text-muted-foreground">
                            Test your coding speed, logic, and problem-solving in exciting biweekly challenges. Compete on HackerRank, track your progress, and rise on the leaderboard!                        </p>
                        <Button size="lg" asChild>
                            <Link href="https://forms.example.com/hackoverflow2024" target="_blank">
                                Join Now !
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            {/* <FAQs /> */}

            <ScrollToTopButton />
        </div>
    )
}

export default Edgecase;