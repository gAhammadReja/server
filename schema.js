import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  sl_no: Number,
  university_name: String,
  college_name: String,
  college_type: String,
  state_name: String,
  district_name: String,
  department: [String], // An array of strings
  admission_fees: String,
  semester_fees: String,
  exam_fees: String,
  field11: String,
  photo: String
});

const College = mongoose.model('College', collegeSchema);
export default College;