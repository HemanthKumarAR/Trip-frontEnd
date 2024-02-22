import React, { useState } from 'react';

function DateTimePickerComp(props) {
  const { date, setDate, label } = props;

  return (
    <div>
      <label>{label}</label>
      <input 
        type="datetime-local"
        value={date ? date.toISOString().slice(0, -8) : ''}
        onChange={(e) => setDate(new Date(e.target.value))}
        disablePast
        closeOnSelect={false}
      />
    </div>
  );
}

export default DateTimePickerComp;
