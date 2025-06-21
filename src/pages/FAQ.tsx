
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in their original condition. Items must be returned with original packaging and tags attached."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. Free shipping is available on orders over $100."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. Please check our shipping page for specific rates."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all our products are 100% authentic. We work directly with manufacturers and authorized distributors to ensure product authenticity."
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes, most of our products come with manufacturer warranties. The warranty period varies by product and manufacturer. Details are provided on each product page."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "You can cancel or modify your order within 1 hour of placing it. After that, please contact our customer service team for assistance."
    },
    {
      question: "Do you have a physical store?",
      answer: "Currently, we operate online only. However, we're planning to open physical locations in the future. Sign up for our newsletter to stay updated!"
    },
    {
      question: "How do I contact customer service?",
      answer: "You can reach our customer service team via email at support@elitestore.com, phone at (555) 123-4567, or through our contact form."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600">Find answers to common questions about our products and services</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-slate-800 hover:text-slate-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Still have questions?</h2>
          <p className="text-slate-600 mb-6">
            Can't find the answer you're looking for? Our customer service team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;