
const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  SchoolNumber: {
    type: String,
    minlength: 0,
    maxlength: 2,
    required: true
  },
  CourseNumber: {
    type: String,
    minlength: 0,
    maxlength: 3,
    required: true,
    default: 'Course Number'
  },
  Name: {
    type: String,
    minlength: 0,
    maxlength: 100,
    required: true,
    default: 'Course name'
  },
  inSpring: {
    type: Boolean,

    required: true

  },
  inSummer: {
    type: Boolean,

    required: true
  },
  inFall: {
    type: Boolean,

    required: true

  }

})
module.exports = mongoose.model('Developer', DeveloperSchema)
