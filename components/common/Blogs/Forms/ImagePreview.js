import React from 'react';

const ImagePreview = ({ title, name, imageUrl, imagePlaceholder }) => {
  return (
    <div>
      <label htmlFor={name} className="block font-medium mb-2">
        {title}
      </label>
        <img
          src={imageUrl ? imageUrl : imagePlaceholder}
          alt="Preview"
          style={{ maxWidth: "100%", height: "auto" }}
          className='rounded border border-gray-300'
        />
    </div>
  );
};

export default ImagePreview;