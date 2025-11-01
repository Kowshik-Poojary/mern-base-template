import express from "express";
import { createRecord, getRecords, updateRecord, deleteRecord } from "../controllers/recordController.js";

const router = express.Router();

router.post("/", createRecord);
router.get("/", getRecords);
router.put("/:id", updateRecord);
router.delete("/:id", deleteRecord);
// do not touch this file 
export default router;
