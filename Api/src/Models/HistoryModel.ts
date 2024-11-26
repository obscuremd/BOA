import mongoose, { models } from "mongoose";

const historySchema = new mongoose.Schema(
  {
    userId:{type:String},
    title:{type:String},
    type:{type:Boolean},
    amount:{type:String},
    date:{type:String},
  },
  { timestamps: true } // Adds `createdAt` and `updatedAt` automatically
);

// Prevent re-compilation of the model in hot-reload environments
const History = models.HistoryData || mongoose.model("HistoryData", historySchema);

export default History;
