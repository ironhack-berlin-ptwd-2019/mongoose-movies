const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Celebrity = require('./celebrity')

const movieSchema = new Schema({
  name: String,
  actors: [{ type: Schema.Types.ObjectId, ref: 'Celebrity' }]
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

module.exports = mongoose.model("Movie", movieSchema);