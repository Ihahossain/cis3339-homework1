const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, trim: true, unique: true },
  name: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Course', courseSchema);