import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../Components/ui/accordion'
import { Link } from 'react-router-dom'
import { Button } from '../../../Components/ui/button'



const FAQs = () => {
    const faqs = [
        {
            question: "Who can participate in HackOverflow?",
            answer:
                "HackOverflow is open to all college students. You can participate individually or as a team of up to 6 members.",
        },
        {
            question: "Do I need to have coding experience?",
            answer:
                "While some coding experience is helpful, we welcome participants of all skill levels. We have mentors available to help you throughout the event.",
        },
        {
            question: "Is there a registration fee?",
            answer:
                "No, participation in HackOverflow is completely free. We provide food, beverages, and swag to all participants.",
        },
        {
            question: "What should I bring?",
            answer:
                "You should bring your laptop, charger, any hardware you plan to use for your project, and your student ID. We'll provide food, drinks, and a place to work.",
        },
        {
            question: "How are the projects judged?",
            answer:
                "Projects are judged based on innovation, technical complexity, design, practicality, and presentation. Our panel of judges includes industry professionals and faculty members.",
        },
        {
            question: "Can I start working on my project before the hackathon?",
            answer:
                "No, all coding and design work must be done during the hackathon. You can, however, plan and brainstorm ideas beforehand.",
        },
    ]
    return (
        <div>
            {/* FAQs Section */}
            <section className="bg-muted/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="mb-6 text-center text-3xl font-bold tracking-tight md:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-4"></div>

                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <div className="mt-8 text-center">
                            <p className="text-muted-foreground">Still have questions? Feel free to reach out to us.</p>
                            <Button variant="link" asChild>
                                <Link href="mailto:hackoverflow@srkrcodingclub.org">srkrcodingclubofficial@gmail.com</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQs