//import express module
const express = require('express')

// Utils - connecting to database
const { db } = require('./utils/database');

//import routers
const {usersRouter} = require('./routes/users.routes')
const {transferRouter} = require('./routes/transfers.routes')

//import Models 
// const { User } = require('./models/user.model')
// const { Repair } = require('./models/repair.model')

//init express app
const app = express()

// Enable incoming JSON data
app.use(express.json());

//ENDPOINTS
//http://localhost:6000/api/v1/users - users endpoint
app.use('/api/v1/users', usersRouter)

//http://localhost:6000/api/v1/transfers - repairs endpoint
app.use('/api/v1/transfers', transferRouter)

//autenticando base de datos
db.authenticate()
  .then(()=> console.log('exitosa la conexion'))
  .catch((err) => console.log(err))
  
// 1 User <----> M repairs
// User.hasMany(Repair);
// Repair.belongsTo(User);


//sincronizar modelos 
db.sync()
	.then(() => console.log('Database synced'))
	.catch(err => console.log(err));

// Spin up server

//define the port
const PORT = process.env.PORT || 6000
//start server and listen request
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`)
})