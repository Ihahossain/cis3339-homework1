const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, trim: true },
  courseId: { type: String, required: true, trim: true },
});

// The same student can't enroll in the same course twice
enrollmentSchema.index({ studentId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);