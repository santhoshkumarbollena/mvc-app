const mongoose = require('mongoose')
const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  Given: {
    type: String,
    required: true,
    default: 'Given Name'
  },
  Family: {
    type: String,
    required: true,
    default: 'Family Name'
  },
  Email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  GPA: {
    type: Number,
    default: 'GPA'
  },
  GitHub: {
    type: String,
    required: true

  },
  Website: {
    type: String,
    required:true

  },
  SectionId: {
    type: Number,
    required:true

  }
})
module.exports = mongoose.model('Developer', DeveloperSchema)
