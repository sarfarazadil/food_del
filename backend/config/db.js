import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sarfarazadil18:uRpFisSgWgkw8Z2I@cluster0.tatsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("db connected"));
};
