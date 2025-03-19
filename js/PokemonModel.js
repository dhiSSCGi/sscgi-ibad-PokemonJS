import mongoose from "mongoose";
const PokemonSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
  },
  { timestamps: true }
);

export default mongoose.model("Pokemon", PokemonSchema);
