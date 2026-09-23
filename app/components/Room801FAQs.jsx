'use client';
import { useState } from 'react';

export default function Room801FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can children play Room 801 APK?",
      answer: "Room 801 has an 18+ rating and adult themes. This game is suitable for mature people, not for children."
    },
    {
      question: "Is Room 801 difficult to play?",
      answer: "The controls are not complicated. The challenge comes more from paying attention. Understand what the game is trying to show you."
    },
    {
      question: "Is Room 801 good for gaming sessions?",
      answer: "Yes, Room 801 has a loop-based structure that allows you to play for a period and then return later. Room 801 does not require you to commit to a long gaming session."
    },
    {
      question: "Does Room 801 have a story?",
      answer: "Yes, Room 801 contains a story that players slowly discover by watching what happens around them. Some parts of the story remain open to interpretation, which adds to the mystery."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs"className="w-full py-6 md:py-8 relative z-10">
      <div className="site-container flex flex-col items-start text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-display text-[#E8E9E7]">
          Frequently Asked <span className="text-[#A9433E]">Questions</span>
        </h2>

        {/* FAQs */}
        <div className="w-full max-w-3xl space-y-3 font-sans">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-linear-to-br from-[#30363D] to-[#252930] border border-[#59616D]/40 hover:border-[#A9433E]/50 transition-all rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#E8E9E7] group-hover:text-white font-display pr-4 transition-colors">
                    {item.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-[#A9433E] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                    <p className="text-sm sm:text-base text-[#a9b0ba] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}