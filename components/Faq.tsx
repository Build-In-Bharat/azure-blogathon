'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import timeline from '@/public/FAQ/timeline.svg';
import arrowUp from '@/public/FAQ/arrowUp.svg'
interface Question {
  id: number;
  question: string;
  answer: string;
}

// Move questions array outside the component
const questions: Question[] = [
  {
    id: 1,
    question: "What is CopilotSprint?",
    answer: "CopilotSprint is a dynamic event that introduces developers to GitHub Copilot, an AI-powered coding assistant. It's an opportunity to learn, collaborate, and boost your coding skills."
  },
  {
    id: 3,
    question: "Who should attend Copilot Sprint?",
    answer: "Developers, coders, and coding enthusiasts of all levels are welcome! Whether you're a beginner or an experienced pro, you'll find value at our workshop."
  },
  {
    id: 4,
    question: "Is there a registration fee?",
    answer: "No, registration for Copilot Sprint is completely free!"
  },
  {
    id: 5,
    question: "What will I gain from the workshop?",
    answer: "Participants get to engage in interactive sessions led by Copilot experts. They will showcase real-world use cases, demonstrate Copilot's capabilities, and provide guidance on integrating it into daily coding practices."
  },
  {
    id: 6,
    question: "How can I register for the workshop?",
    answer: "Copilot Sprint aims to equip developers with practical skills to maximize the potential of GitHub Copilot. By attending, you'll learn how Copilot accelerates coding tasks, improves code quality, and integrates seamlessly into your development workflow."
  },
  {
    id: 7,
    question: "What is CopilotSprint?",
    answer: "CopilotSprint is a dynamic event that introduces developers to GitHub Copilot, an AI-powered coding assistant. It's an opportunity to learn, collaborate, and boost your coding skills."
  },
  {
    id: 8,
    question: "Who should attend Copilot Sprint?",
    answer: "Developers, coders, and coding enthusiasts of all levels are welcome! Whether you're a beginner or an experienced pro, you'll find value at our workshop."
  },
  {
    id: 9,
    question: "Is there a registration fee?",
    answer: "No, registration for Copilot Sprint is completely free!"
  },
  {
    id: 10,
    question: "What will I gain from the workshop?",
    answer: "Participants get to engage in interactive sessions led by Copilot experts. They will showcase real-world use cases, demonstrate Copilot's capabilities, and provide guidance on integrating it into daily coding practices."
  },
  {
    id: 11,
    question: "How can I register for the workshop?",
    answer: "Copilot Sprint aims to equip developers with practical skills to maximize the potential of GitHub Copilot. By attending, you'll learn how Copilot accelerates coding tasks, improves code quality, and integrates seamlessly into your development workflow."
  },
   {
    id: 12,
    question: "How can I register for the workshop?",
    answer: "Copilot Sprint aims to equip developers with practical skills to maximize the potential of GitHub Copilot. By attending, you'll learn how Copilot accelerates coding tasks, improves code quality, and integrates seamlessly into your development workflow."
  },
  {
    id: 13,
    question: "What is CopilotSprint?",
    answer: "CopilotSprint is a dynamic event that introduces developers to GitHub Copilot, an AI-powered coding assistant. It's an opportunity to learn, collaborate, and boost your coding skills."
  },
  {
    id: 14,
    question: "Who should attend Copilot Sprint?",
    answer: "Developers, coders, and coding enthusiasts of all levels are welcome! Whether you're a beginner or an experienced pro, you'll find value at our workshop."
  },
  {
    id: 15,
    question: "Is there a registration fee?",
    answer: "No, registration for Copilot Sprint is completely free!"
  },

  
  
];

const Faq: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [heights, setHeights] = useState<{ [key: number]: number }>({});
  const answerRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const updateHeights = React.useCallback(() => {
    const newHeights: { [key: number]: number } = {};
    questions.forEach(q => {
      if (answerRefs.current[q.id]) {
        newHeights[q.id] = answerRefs.current[q.id]?.scrollHeight || 0;
      }
    });
    setHeights(newHeights);
  }, []); // No dependencies needed since questions is now static

  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateHeights();
      window.addEventListener('resize', updateHeights);

      return () => window.removeEventListener('resize', updateHeights);
    }
  }, [updateHeights]);

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const setRef = (id: number) => (el: HTMLDivElement | null) => {
    answerRefs.current[id] = el;
  };

  return (
    <div className="w-full">
      {/* Timeline Section */}
      <section id="timeline" className="px-4 md:px-8">
        <div className="content flex flex-col justify-center items-center pt-10 pb-7 gap-5">
          <h1 className="text-4xl md:text-6xl text-[#28456F] text-center font-segoe font-semibold mb-6">
            Timeline For Phase 2
          </h1>
          <Image src={timeline} alt="timeline" className="w-full max-w-[800px] h-auto" />
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq" className=" flex justify-center py-8 sm:py-14 px-4">
        <section className="flex flex-col max-w-3xl md:max-w-5xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl text-[#28456F] font-segoe font-semibold">
              FAQs - Blogathon
            </h1>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {questions.map((q) => (
              <div
                key={q.id}
                className="p-3 sm:p-4 rounded-lg cursor-pointer border border-transparent hover:border-[#09EDE0]/20 transition-colors duration-200 mx-auto w-full"
                onClick={() => toggleQuestion(q.id)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3
                    className={`text-sm sm:text-base font-segoe font-semibold transition-colors duration-200 ${activeQuestion === q.id ? 'text-black' : 'text-black'}`}
                  >
                    <span className="mr-2">•</span>
                    {q.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-200 flex-shrink-0 ${activeQuestion === q.id ? '' : 'rotate-180'}`}
                  >
                    <Image alt="arrow" src={arrowUp} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div
                  ref={setRef(q.id)}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    height: activeQuestion === q.id ? `${heights[q.id]}px` : '0',
                  }}
                >
                  <p className="text-black font-normal mt-2 text-sm sm:text-base">
                    {q.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;