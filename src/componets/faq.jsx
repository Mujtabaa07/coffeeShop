import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Updated FAQ questions and answers
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, browse our collection and click the 'Add to Cart' button. When you're ready, proceed to checkout.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Unfortunately, once an order is placed, it cannot be modified. However, you can cancel it and place a new one if needed.",
    },
    {
      question: "Is it safe to use my credit card on your site?",
      answer:
        "Yes, our website uses SSL encryption to ensure your payment information is secure.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, and other popular methods.",
    },
    {
      question: "How long will it take to receive my order?",
      answer:
        "Delivery typically takes 5-7 business days, depending on your location. You will receive a tracking number once your order is shipped.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping to most countries.",
    },
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same question is clicked
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-right">
        {faqs.map((q, idx) => (
          <div
            key={idx}
            className={`faq-item ${openIndex === idx ? "open" : ""}`}
            onClick={() => toggleAnswer(idx)}
          >
            <div className="faq-question">
              <h3>{q.question}</h3>
              <i
                className={`fas fa-chevron-${
                  openIndex === idx ? "up" : "down"
                }`}
              ></i>
            </div>
            <div className="faq-answer">
              <p>{q.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
