import Record from "../models/Record.js";

export const createRecord = async (req, res) => {
  try {
    const record = new Record(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

export const updateRecord = async (req, res) => {
  const { id } = req.params;
  const updated = await Record.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteRecord = async (req, res) => {
  const { id } = req.params;
  await Record.findByIdAndDelete(id);
  res.json({ message: "Record deleted" });
};
