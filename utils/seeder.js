const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
const studentsData = require('../data/students.json')

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections
  const studentdb={}
  studentdb.students=new Datastore()
  studentdb.students.loadDatabase()
  db.developers = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  studentdb.students.insert(studentsData)
  db.developers.insert(developerData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.students=studentdb.students.find(studentsData)
  app.locals.developers = db.developers.find(developerData)
  console.log(`${app.locals.developers.query.length} developers seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}
