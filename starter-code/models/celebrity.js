const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const abc = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  image: String
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

module.exports = mongoose.model("Celeb", abc);