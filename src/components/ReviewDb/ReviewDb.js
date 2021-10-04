import React, { useEffect, useState } from 'react';
import Review from '../StudentReview/Review';
import '../ReviewDb/ReviewDb.css'

const ReviewDb = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('../../../fakeData/Review.JSON')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="all-reviews">
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default ReviewDb;