import React, { useState } from 'react';
import './Accordian.css';

const Accordion = () => {
  const [openPanel, setOpenPanel] = useState(null);  // Track which panel is open

  const togglePanel = (panel) => {
    // Toggle the panel: close if it's already open, or open if it's closed
    if (openPanel === panel) {
      setOpenPanel(null);
    } else {
      setOpenPanel(panel);
    }
  };

  // Define the panel content
  const panels = [
    {
      title: "Can education flashcards be used for all age groups?",
      content: "Yes, education flashcards can be tailored to different age groups and learning levels. There are Flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners."
    },
    {
      title: "How do education flashcards work?",
      content: "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition."
    },
    {
      title: "Can education flashcards be used for test preparation?",
      content: "Absolutely, flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams."
    }
  ];

  return (
    <div id="accordion-color">
      {panels.map((panel, index) => {
        const panelId = `accordion-color-body-${index + 1}`;
        const headingId = `accordion-color-heading-${index + 1}`;
        const isOpen = openPanel === panelId;

        return (
          <React.Fragment key={panelId}>
            <h2 id={headingId}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 rounded-t-xl gap-3"
                onClick={() => togglePanel(panelId)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span>{panel.title}</span>
                <svg
                  className={`w-3 h-3 shrink-0 transform ${isOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5L5 1 1 5" />
                </svg>
              </button>
            </h2>
            <div
              id={panelId}
              className={`border border-gray-200 dark:border-gray-700 p-5 ${!isOpen ? 'hidden' : ''}`}
              aria-labelledby={headingId}
            >
              <p className="text-gray-500 dark:text-gray-400">{panel.content}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;
