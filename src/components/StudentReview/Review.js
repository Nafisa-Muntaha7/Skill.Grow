import React from 'react';
import '../StudentReview/Review.css';

const Review = (props) => {
    const { img, name, review } = props.review;
    return (
        <div className="review">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>{review}</h3>
        </div>
    );
};

export default Review;