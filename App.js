import React from 'react';
import Accordion from './Accordion';

const accordionData = [
  {
    title: 'Section 1',
    content: "This is First section"
  },
  {
    title: 'Section 2',
    content: "This is Second section"
  },
  {
    title: 'Section 3',
    content: "This is Third section"
  }
];

const App = () => {
  return (
    <div>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
