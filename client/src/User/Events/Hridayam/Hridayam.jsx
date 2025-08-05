import React, { useState, useEffect } from 'react';
import { Calendar, Image, MapPin, Users } from 'lucide-react';
import { Badge } from '../../../Components/ui/badge';
import { Card, CardContent } from '../../../Components/ui/card';
import { Button } from '../../../Components/ui/button';
import { Link } from "react-router-dom";
import HridayamPastEvents from './PastHridayam';


const Hridayam = () => {

    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div className="flex flex-col space-y-6">
                            <Badge className="w-fit bg-red-500 text-white hover:bg-red-600">Social Service</Badge>
                            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Hridayam 2024</h1>
                            <p className="text-lg text-muted-foreground md:text-xl">
                                A life-saving initiative to give back to the community. Join us in our annual blood donation camp and make a difference.
                            </p>
                            <div className="space-y-4 rounded-lg bg-muted/80 p-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    <span>September 22, 2024</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>SRKR Campus, Health Center</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Users className="h-5 w-5 text-primary" />
                                    <span>Open to all students, faculty, and staff</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-2xl flex justify-center items-center bg-white rounded-lg shadow-xl">
                            <img
                                src="../../../../public/demo/Hridayam/cover.jpg"
                                alt="Hridayam Blood Donation"
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
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Why Hridayam?</h2>
                        <p className="mb-12 text-lg text-muted-foreground">
                            Every blood donation is a life saved. Our "Hridayam" event is more than just a donation drive; it's a testament to our community's compassion and commitment to social responsibility.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Calendar className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Process</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>Registration and Health Checkup</li>
                                    <li>Blood Donation</li>
                                    <li>Rest and Refreshments</li>
                                    <li>Receive Certificate and Donor Card</li>
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
                                    <li>Age: 18-60 years</li>
                                    <li>Weight: Over 50 kg</li>
                                    <li>Healthy and free from infections</li>
                                    <li>Please check with a doctor if you have any medical conditions</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Image className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Impact</h3>
                                <p className="text-muted-foreground">
                                    Each donation can save up to three lives. By donating, you are providing crucial support to patients in emergencies, surgeries, and those battling chronic illnesses.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <HridayamPastEvents />

        </div>
    )
}

export default Hridayam;
