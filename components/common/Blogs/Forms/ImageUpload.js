import React, { useState } from 'react';

const ImageUploader = ({ name, title, onFileChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileChange(file, name);
  };

  return (
    <div >
      <label htmlFor={name} className="block font-medium mb-2">
          {title}
      </label>
      <input type="file" accept="image/*" onChange={handleFileChange}
      className='border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 p-3'
        />
    </div>
  );
};

export default ImageUploader;