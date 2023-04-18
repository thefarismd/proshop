import React from 'react';

function Rating({ rating, text, color }) {
  return (
    <div className='rating'>
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 1
              ? 'fa-solid fa-star'
              : rating >= 0.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 2
              ? 'fa-solid fa-star'
              : rating >= 1.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 3
              ? 'fa-solid fa-star'
              : rating >= 2.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 4
              ? 'fa-solid fa-star'
              : rating >= 3.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 5
              ? 'fa-solid fa-star'
              : rating >= 4.5
              ? 'fa-regular fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  color: '#f8e825',
};

export default Rating;
