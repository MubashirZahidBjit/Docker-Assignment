const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    book: {
      type: mongoose.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    rating: {
      type: Number,
      required: false,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
