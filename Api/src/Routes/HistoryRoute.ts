import { Router } from "express";
import History from "../Models/HistoryModel"; // Adjust the path based on your project structure
const router = Router();

// Create a new history record
router.post("/create", async (req, res) => {
  try {
    const newHistory = new History(req.body);
    await newHistory.save();
    res.status(201).json({
      message: "History record created successfully",
      history: newHistory,
    });
  } catch (error) {
    console.error("Error creating history record:", error);
    res.status(500).json({
      error: "An error occurred while creating the history record",
      details: error,
    });
  }
});

// Find history record by ID
router.get("/:id", async (req, res) => {
  try {
    const history = await History.findById(req.params.id);
    (!history
      ?res.status(404).json("History record not found")
      :res.status(200).json(history))
  } catch (error) {
    console.error("Error fetching history record by ID:", error);
    res.status(500).json({
      error: "An error occurred while fetching the history record",
      details: error,
    });
  }
});

// Find all history records by userId
router.get("/user/:userId", async (req, res) => {
  try {
    const histories = await History.find({ userId: req.params.userId });
    (histories.length === 0 
       ?res.status(404).json("No history records found for the user") 
       :res.status(200).json(histories)
      )
  } catch (error) {
    console.error("Error fetching history records by userId:", error);
    res.status(500).json({
      error: "An error occurred while fetching history records",
      details: error,
    });
  }
});

// Update a history record by ID
router.put("/:id", async (req, res) => {
  try {
    const history = await History.findById(req.params.id);
    (!history && res.status(404).json("History record not found") )
    const updatedHistory = await History.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true } // Return the updated document and validate inputs
    );
    res.status(200).json({
      message: "History record updated successfully",
      history: updatedHistory,
    });
  } catch (error) {
    console.error("Error updating history record:", error);
    res.status(500).json({
      error: "An error occurred while updating the history record",
      details: error,
    });
  }
});

// Delete a history record by ID
router.delete("/:id", async (req, res) => {
  try {
    const history = await History.findById(req.params.id);
    (!history && res.status(404).json("History record not found"))
    await History.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "History record deleted successfully" });
  } catch (error) {
    console.error("Error deleting history record:", error);
    res.status(500).json({
      error: "An error occurred while deleting the history record",
      details: error,
    });
  }
});

export default router;
