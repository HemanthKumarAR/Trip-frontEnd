import React from 'react';
import StarsRating from 'react-awesome-stars-rating';

const DisplayStar = ({ rating }) => {
  return (
    <StarsRating
      value={rating} // Assuming rating is a numeric value between 0 and 5
      size={24} // You can adjust the size of the stars
      isEdit={false} // Set to true if you want the stars to be editable
    />
  );
};

export default DisplayStar;
