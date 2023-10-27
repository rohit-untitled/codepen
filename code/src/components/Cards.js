import React, { useState } from 'react';

const panels = [
  {
    id: 'panel1',
    title: 'Fancy Rose',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 'panel2',
    title: 'Need Coffee?',
    image: 'https://images.unsplash.com/photo-1548688265-62dae8daeb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 'panel3',
    title: 'Pink & Art',
    image: 'https://images.unsplash.com/photo-1577703025450-4a543d6b4976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 'panel4',
    title: 'Sunflower Sweater',
    image: 'https://images.unsplash.com/photo-1577703691096-6de1c5c3fa85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
];

const Cards = () => {
  const [activePanel, setActivePanel] = useState('');

  const handlePanelClick = (id) => {
    setActivePanel(activePanel === id ? '' : id);
  };

  return (
    <div className="container">
      {panels.map((panel) => (
        <div
          key={panel.id}
          id={panel.id}
          className={`panel ${panel.id === activePanel ? 'active' : ''}`}
          onClick={() => handlePanelClick(panel.id)}
          style={{ backgroundImage: `url(${panel.image})` }}
        >
          {panel.id === activePanel && <h3>{panel.title}</h3>}
        </div>
      ))}
    </div>
  );
};

export default Cards;


