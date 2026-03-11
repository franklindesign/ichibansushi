'use client';

import { useState } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items?: FAQItem[];
};

const defaultFAQs: FAQItem[] = [
  {
    id: 1,
    question: "Do you take reservations?",
    answer:
      "Yes, we take reservations over the phone. Please call us at (661) 360-8526. We have plenty of accomodation for any size of party.",
  },
  {
    id: 2,
    question: "Do you offer takeout or delivery?",
    answer:
      "Yes! We take in-house to-go orders as well as online order delivery with our partners from Grubhub and UberEats.",
  },
  {
    id: 3,
    question: "Is the atmosphere casual?",
    answer:
      "Yes, the atmosphere is casual. Some customers found our restaurant to be trendy, contemporary, cozy, and warm. As well as pleasant and inviting.",
  },
  {
    id: 4,
    question: "Do you have outdoor seating available?",
    answer:
      "Yes! We have available outdoor seating (patio style) for any size party. Our patio has shaded tables, decorated plants, and heated lamps!  We also have a special 'POCHA' menu during 6PM to closing.",
  },
  {
    id: 5,
    question: "Do you offer AYCE (All You Can Eat) or Happy Hour specials?",
    answer:
      "We no longer have AYCE or happy hour specials as an option.",
  },
   {
    id: 6,
    question: "Is there parking available nearby and wheelchair access?",
    answer:
      "Yes, we have our own parking lot with designated, accessible disability parking space. You can also park at the plaza and we are accessible through the stairs.",
  },
];

export default function FAQAccordion({ items = defaultFAQs }: FAQAccordionProps) {
  const [openItemId, setOpenItemId] = useState<number | null>(items[0]?.id ?? null);

  const toggleItem = (id: number) => {
    setOpenItemId((current) => (current === id ? null : id));
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <h2 className="mb-6 md:text-2xl text-xl font-bold tracking-tight text-black dark:text-white">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = openItemId === item.id;

          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="pr-4 text-base font-semibold text-slate-900">{item.question}</span>
                <span className="text-2xl leading-none text-slate-600">{isOpen ? "-" : "+"}</span>
              </button>

              <div
                id={`faq-answer-${item.id}`}
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{item.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}