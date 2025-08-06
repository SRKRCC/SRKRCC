import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../Components/ui/accordion'
import { Link } from 'react-router-dom'
import { Button } from '../../../Components/ui/button'



const FAQs = () => {
    const faqs = [
        {
            question: "Who can participate in IconCoderZ?",
            answer:
                "IconCoderZ is open to all college students. You can participate as an individual in either the beginner or expert category based on your coding experience.",
        },
        {
            question: "What programming languages are allowed?",
            answer: "Participants can use C, C++, Java, Python, or JavaScript to solve the problems.",
        },
        {
            question: "How are the categories defined?",
            answer:
                "The Beginner category is for students who are new to competitive programming or have limited experience. The Expert category is for students who have prior experience in competitive programming or have participated in coding contests before.",
        },
        {
            question: "Is there a registration fee?",
            answer: "No, participation in IconCoderZ is completely free for all students.",
        },
        {
            question: "How are participants evaluated?",
            answer:
                "Participants are evaluated based on the number of problems solved correctly and the time taken to solve them. Time penalties are applied for incorrect submissions.",
        },
        {
            question: "Can I participate remotely?",
            answer:
                "Yes, IconCoderZ has both in-person and online participation options. You can choose the mode that works best for you during registration.",
        },
    ]
    return (
        <div>
            {/* FAQs Section */}
            <section className="bg-muted/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
                            Frequently Asked Questions
                        </h2>

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
                                <Link href="mailto:hackoverflow@srkrcodingclub.org">hackoverflow@srkrcodingclub.org</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQs