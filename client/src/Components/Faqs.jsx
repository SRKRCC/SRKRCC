import { Link } from 'react-router-dom'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../Components/ui/accordion'
import { Button } from './ui/button'

const FAQs = ({faqs}) => {


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
                                <a href="mailto:hackoverflow@srkrcodingclub.org">srkrcodingclubofficial@gmail.com</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQs;