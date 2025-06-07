
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FAQ = () => {
  const shippingFAQs = [
    {
      question: "What are your shipping options?",
      answer: "We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free standard shipping is available on orders over $75."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to select international destinations. Shipping costs and delivery times vary by location. Please check our shipping calculator at checkout."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can track your package using this number on our website or the carrier's website."
    },
    {
      question: "When will my order be processed?",
      answer: "Orders are typically processed within 1-2 business days. During peak seasons, processing may take up to 3 business days."
    }
  ];

  const returnsFAQs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original condition with tags attached. Items must be returned in their original packaging."
    },
    {
      question: "How do I initiate a return?",
      answer: "Contact our customer service team at returns@edoreluxe.com with your order number. We'll provide you with a prepaid return label and instructions."
    },
    {
      question: "Are there any items that cannot be returned?",
      answer: "Undergarments, swimwear, and personalized items cannot be returned for hygiene reasons. Sale items are final sale."
    },
    {
      question: "When will I receive my refund?",
      answer: "Refunds are processed within 5-7 business days after we receive your returned item. The refund will be credited to your original payment method."
    }
  ];

  const sizingFAQs = [
    {
      question: "How do I find my size?",
      answer: "Use our size guide available on each product page. Measure yourself and compare with our size chart for the best fit. When in doubt, we recommend sizing up for our oversized styles."
    },
    {
      question: "Do your clothes run true to size?",
      answer: "Our sizing is generally true to size, but some pieces are designed with an oversized or relaxed fit. Check the product description and size guide for specific fit details."
    },
    {
      question: "Can I exchange for a different size?",
      answer: "Yes, size exchanges are free within 30 days. Contact customer service to arrange an exchange. We'll send you the new size and provide a return label for the original item."
    },
    {
      question: "What if an item doesn't fit?",
      answer: "If an item doesn't fit as expected, you can return or exchange it within our 30-day policy. We want you to love your EDORE LUXE pieces."
    }
  ];

  const generalFAQs = [
    {
      question: "What does 'Edoristic' mean?",
      answer: "Edoristic is our brand philosophy that represents the intersection of elegance, minimalism, and modern sophistication. It embodies our approach to creating timeless pieces that transcend trends."
    },
    {
      question: "What materials do you use?",
      answer: "We prioritize premium, sustainable materials including organic cotton, linen, wool, and eco-friendly synthetic blends. Each product page lists specific material composition."
    },
    {
      question: "How do I care for my EDORE LUXE pieces?",
      answer: "Care instructions are provided on each garment's label and product page. Generally, we recommend gentle machine wash or hand wash in cold water and air drying to maintain quality."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, digital gift cards are available in various denominations. They can be purchased on our website and are delivered via email."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, and policies
          </p>
        </div>

        {/* FAQ Tabs */}
        <Tabs defaultValue="shipping" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="returns">Returns</TabsTrigger>
            <TabsTrigger value="sizing">Sizing</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          <TabsContent value="shipping" className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {shippingFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`shipping-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="returns" className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {returnsFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`returns-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="sizing" className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {sizingFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`sizing-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="general" className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {generalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <h2 className="text-2xl font-serif font-light mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our customer service team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@edoreluxe.com"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Email Support
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Contact Form
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
