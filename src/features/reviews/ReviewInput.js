import React, {useState} from "react";
import { useDispatch } from "react-redux";
import Reviews from "./Reviews";

function ReviewInput({onReviewSubmit}) {

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onReviewSubmit(comment);
    setComment("");
  }

  return <div>
    <form onSubmit={handleSubmit} >
      <label>Comment
        <textarea name="comment" onChange={handleChange} value={comment} />
      </label>
      <input type="submit" value="Add Review" />
    </form>
  </div>;
}

export default ReviewInput;
