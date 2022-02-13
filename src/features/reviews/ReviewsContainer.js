import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({restaurantId}) {

  const reviews = useSelector((state) => state.reviews.entities);
  const dispatch = useDispatch();

  function onReviewSubmit(comment) {
    dispatch(reviewAdded({comment, restaurantId: restaurantId}));
  }

  return (
    <div>
      <ReviewInput onReviewSubmit={onReviewSubmit} />
      <Reviews reviews={reviews.filter(review => review.restaurantId === restaurantId)} />
    </div>
  );
}

export default ReviewsContainer;
