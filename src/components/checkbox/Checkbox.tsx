import React, { useState } from 'react';
import './Checkbox.css';
import { ReactComponent as Check } from '../../icons/check.svg'; 

const Checkbox = ({isChecked, isHovered} : any) => {

  return (
      <div
        className={`checklist-checkbox ${isChecked ? `checklist-checkbox-checked ${isHovered ? 'checkbox-checked-hover' : ''}` : `checklist-checkbox-unchecked ${isHovered ? 'checkbox-unchecked-hover' : ''}`}`}
      >
        {(isHovered || isChecked) && <Check
        height={20}
        width={20}
        fill={isChecked ? '#FFFFFF' : '#CDCDCD'}
        />}
      </div>
  );
};

export default Checkbox;