import React, { useState } from 'react';

export default function TextInput({ title, handleChange, placeholder = title, name, data = '', isRequired }) {

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleChange(name, value);
  };

  return (
    <>
      <div>
        <label htmlFor={name} className="block font-medium mb-1">
          {title}
        </label>
        <input
          placeholder={placeholder}
          type="text"
          id={name}
          name={name}
          value={data}
          onChange={handleInputChange}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required={isRequired}
        />
      </div>
    </>
  );
}
