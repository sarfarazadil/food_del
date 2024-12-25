import mongoose from "mongoose";
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    required: true,
  },
});
const foodModel = mongoose.model.food || mongoose.model("food", foodSchema);
// if model is already there dont create it if not then create
export default foodModel;
