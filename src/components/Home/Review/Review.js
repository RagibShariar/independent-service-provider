import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import useReviews from '../../../hooks/useReviews';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div className="container mt-5">
          <h1 className='mb-5 text-center text-uppercase font-weight-bold'>Testimonials</h1>
            <div className="row mb-3">
          {reviews.slice(0,3).map((review) => (
            <div className="col-md-4">
              <div className="single-review mb-4" key={review.id}>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid review-thumb me-3 mb-3"
                    src={review.img}
                    alt=""
                  />
                  <h5 className="">{review.name}</h5>
                </div>
                <p className='rating'>
                <Rating className='me-2'
                  initialRating={review.rating}
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                  readonly
                ></Rating>({review.rating})
                </p>
                <p>{review.review}</p>
                
              </div>
            </div>
          ))}
        </div>
        </div>
    );
};

export default Review;