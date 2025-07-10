"use client";
import { FAQs } from './Faq1';

export const Faq1Exp = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Frequently Asked Questions 
        </h2>

        <FAQs
          faqs={[
            {
              question: "Here is a demo question to ask by us?",
              answer:
                "Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question.",
            },
            {
              question: "Here is a demo question to ask by us?",
              answer:
                "Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question.",
            },
            {
              question: "Here is a demo question to ask by us?",
              answer:
                "Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question.",
            },
            {
              question: "Here is a demo question to ask by us?",
              answer:
                "Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question.",
            },
            {
              question: "Here is a demo question to ask by us?",
              answer:
                "Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question. Here is the answer of the demo question.",
            },
          ]}
        />
      </div>
    </section>
  );
};
