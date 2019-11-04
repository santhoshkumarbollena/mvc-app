
const express = require('express')
const api = express.Router()

const find = require('lodash.find')
const notfoundstring = 'Could not find developer with id='

api.get('/findallstudents', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.students.query
  res.send(JSON.stringify(data))
})


api.get('/findonestudent/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.students.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})


module.exports = api
