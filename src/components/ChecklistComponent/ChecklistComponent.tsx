import React, { useState } from 'react';
import './ChecklistComponent.css';
import './responsive.css';
import Checkbox from '../checkbox/Checkbox';

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

interface ChecklistComponentProps {
  onDone?: () => void;
}

const ChecklistComponent: React.FC<ChecklistComponentProps> = ({ onDone }) => {
  // Initial state with "All pages" and individual pages
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: 'page1', label: 'Page 1', checked: false },
    { id: 'page2', label: 'Page 2', checked: false },
    { id: 'page3', label: 'Page 3', checked: false },
    { id: 'page4', label: 'Page 4', checked: false },
  ]);

  // Handle checkbox toggle
  const handleToggle = (id: string) => {
    if (id === 'all') {
      // If "All pages" is toggled, update all items
      setItems((prevItems) => {
        const allChecked = !prevItems[0].checked;
        return prevItems.map(item => ({ ...item, checked: allChecked }));
      });
    } else {
      // Toggle individual item
      setItems((prevItems) => {
        return prevItems.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
      });
    }
  };

      const allIndividualChecked = items
        .filter(item => item.id !== 'all')
        .every(item => item.checked);

  // Handle Done button click
  const handleDone = () => {
    if (onDone) {
      onDone();
    }
    // For demo purposes, we'll log the selected items
    console.log('Selected items:', items.filter(item => item.checked));
  };

  return (
    <div className="checklist-container">
      {/* Render all checklist items */}
          <CheckboxItem key={'all'} label={'All pages'} onClick={() => handleToggle('all')} isChecked={allIndividualChecked}/>

      <div className="checklist-divider"></div>

      <div className="checklist-items">
        {items.map((item) => (
          <CheckboxItem key={item.id} label={item.label} onClick={() => handleToggle(item.id)} isChecked={item.checked}/>
        ))}
      </div>
      
      {/* Divider */}
      <div className="checklist-divider"></div>
      
      {/* Done button */}
      <button 
        className="checklist-button"
        onClick={handleDone}
      >
        Done
      </button>
    </div>
  );
};

export default ChecklistComponent;

const CheckboxItem = ({
  label,
  isChecked = false,
  onClick,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="checklist-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="checklist-label">
        {label}
      </div>
      <Checkbox isChecked={isChecked} isHovered={isHovered}/>
    </div>
  )
}