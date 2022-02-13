import React from "react";
import Review from "./Review";

function Reviews({reviews}) {

  return <ul>{reviews.map(review => {
    return <Review key={review.id} review={review} />
  })}</ul>;
}

export default Reviews;
