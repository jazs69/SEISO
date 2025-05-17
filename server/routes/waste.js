const express = require("express");
const Waste = require("../models/waste");
const router = express.Router();
const { authUser } = require("../middleware/auth");
const User = require("../models/user");

router.post("/waste", async (req, res) => {
  const { wasteId, weight } = req.body;

  try {
    const newWaste = new Waste({ wasteId, weight });
    await newWaste.save();
    res.status(201).json({ message: "Waste registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering waste", error });
  }
});

router.get("varify-waste", authUser, async (req, res) => {
  const { wasteId } = req.query;

  try {
    const waste = await Waste.findOne({ wasteId });
    if (!waste) {
      return res.status(404).json({ message: "Waste not found" });
    }
    if (waste.status === "verified") {
      return res.status(400).json({ message: "Waste already verified" });
    }
    waste.status = "verified";
    await waste.save();
    const user = await User.findById(req.user._id);
    user.seisoAmount += waste.weight;
    user.seisoAmount += 1;
    await user.save();
    res.status(200).json({ message: "Waste verified successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error verifying waste", error });
  }
});

module.exports = router;
