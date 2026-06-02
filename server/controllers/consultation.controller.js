import Consultation from "../models/consultation.model.js";

export const createConsultation = async (req, res) => {
  try {
    const data = req.body;

    const newConsultation = new Consultation(data);

    await newConsultation.save();

    res.status(201).json({
      success: true,
      message: "Consultation submitted successfully",
      data: newConsultation
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};