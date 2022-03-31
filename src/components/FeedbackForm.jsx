import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import { useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useContext, useEffect } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    const textValue = e.target.value;
    if (textValue === ``) {
      setBtnDisabled(true);
      setMessage(null);
    } else if (textValue !== "" && textValue.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("must have at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(textValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 10) return;
    const newFeedback = {
      text,
      rating,
    };
    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    setText("");
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          select={(e) => {
            setRating(e);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button version="secondary" type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
