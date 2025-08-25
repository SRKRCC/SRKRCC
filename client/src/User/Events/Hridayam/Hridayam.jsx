import React, { useState, useEffect } from 'react';
import { Calendar, Image, MapPin, Users, Home, Sun, Heart } from 'lucide-react';
import { Badge } from '../../../Components/ui/badge';
import { Card, CardContent } from '../../../Components/ui/card';
import { Button } from '../../../Components/ui/button';
import { Link } from "react-router-dom";
import HridayamPastEvents from './PastHridayam';
import ScrollToTopButton from '../../../Components/ScrollToTop';


const Hridayam = () => {
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
              <Badge className="w-fit bg-red-500 text-white hover:bg-red-600">Social Service</Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Hridayam 2025</h1>
              <div className="w-32 h-1 bg-accent dark:bg-gradient-to-r from-primary to-orange-500 rounded-full mb-4"></div>

              <p className="text-lg text-muted-foreground md:text-xl">
                Hridayam is a social service initiative by our club members, dedicated to giving back to the community and making a positive impact through compassion and service.                            </p>
              <div className="space-y-4 rounded-lg bg-muted/80 p-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>March 23, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Tabitha Old Age Home, Bhimavaram</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-5 w-5 text-primary" />
                  <span>SRKR Coding Club Representatives</span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-2xl flex justify-center items-center bg-white rounded-lg shadow-xl">
              <img
                src="/demo/EventPosters/Hridayam.png"
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
      {/* <section id="details" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Why Hridayam?</h2>
                        <div className="w-28 h-1 bg-accent dark:bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4"></div>

                        <p className="mb-12 text-lg text-muted-foreground">
                          Hridayam is about giving back—spreading smiles, sharing stories, and building connections. It shows that impact goes beyond coding, nurturing empathy, compassion, and the joy of service.                           </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
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
            </section> */}
      <section id="hridayam" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              What Hridayam Does
            </h2>
            <div className="w-28 h-1 bg-accent dark:bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Hridayam is our way of giving back—spreading smiles, sharing stories,
              and building connections. It shows that impact goes beyond coding by
              nurturing empathy, compassion, and the joy of service.
            </p>
          </div>

          {/* What We Do */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Blood Donation Drives</h3>
                <p className="text-muted-foreground text-sm">
                  Saving lives through collective effort and compassion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Old Age Home Support</h3>
                <p className="text-muted-foreground text-sm">
                  Bringing care, warmth, and companionship to elders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Seasonal Help</h3>
                <p className="text-muted-foreground text-sm">
                  Distributing essentials like coolers in summer for comfort.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Kindness in Action</h3>
                <p className="text-muted-foreground text-sm">
                  Small steps of service that create lasting change.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Impact Statement */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-lg font-medium text-muted-foreground">
              From saving lives to spreading hope, every initiative under Hridayam
              brings meaningful change to the community. Together, we create a
              culture of compassion. 🌿
            </p>
          </div>
        </div>
      </section>


      <HridayamPastEvents />
      <ScrollToTopButton />
    </div>
  )
}

export default Hridayam;
