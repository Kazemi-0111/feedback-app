import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) return <p>no feedback yet</p>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={i} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
