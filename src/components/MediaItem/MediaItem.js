import React from 'react';

function MediaItem({ src, alt, width, label, hiddenLegend }) {
  return (
    <div className='media-item'>
      <img
        src={src}
        width={width}
        alt={alt}
      />
      {!hiddenLegend &&
        <label className='media-label'>
          {label}
        </label>
      }
    </div>
  )
};

export default MediaItem; 