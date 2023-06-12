import React from 'react';

export default function Category({title, placeholder= title, handleChange, name}) {
  return (
    <>
      <div>
        <label htmlFor={name} className="block font-medium">
          {title}
        </label>
        <input
          placeholder={placeholder}
          type="text"
          id={name}
          name={name}
          // value={formValues.nip}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </>
  );
}
