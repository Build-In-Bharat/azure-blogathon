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

    <div className=' '>
      {/* timeLines */}
      <section id='timeline' className='px-'>
        <div className="content flex flex-col justify-center items-center pt-10 pb-7 gap-5">
          <h1 className="w-[822px] h-[87px] flex-shrink-0 text-custom-blue text-center text-6xl font-segoe font-semibold text-[#28456F]">
            Timeline For Phase 2
          </h1>

          <Image src={timeline} alt="timeline" className='w-[800px] h-72' />
        </div>
      </section>

      {/* faq section */}
      <div id='faq' className='bg-faqbg  flex justify-center py-8 sm:py-14 px-4' >
        <section className='flex flex-col max-w-5xl'>
          <div className="text-center mb-6 sm:mb-8">
            <h1 className=' flex-shrink-0 text-custom-blue text-center text-6xl font-segoe font-semibold text-[#28456F]'>
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
          className={`text-base font-segoe sm:text-lg font-semibold ${activeQuestion === q.id ? 'text-black' : 'text-black'} transition-colors duration-200`}
        >
          <span className="mr-2">•</span>
          {q.question}
        </h3>
        <div
          className={`transform transition-transform duration-200 flex-shrink-0 ${activeQuestion === q.id ? '' : 'rotate-180'}`}
        >
          <Image alt='arrow' src={arrowUp} className={`${activeQuestion === q.id ? 'text-[#f1d2e0]' : 'text-black'} w-4 h-4 sm:w-4 sm:h-4`} />
        </div>
      </div>

      <div
        ref={setRef(q.id)}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: activeQuestion === q.id ? `${heights[q.id]}px` : '0',
        }}
      >
        <p className="text-black font-normal mt-2 text-sm sm:text">
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