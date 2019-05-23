const express = require('express')
const morgan = require('morgan')

// Initializations
const app = express()

// Setting
app.set('port', 3000)

// Middlewares
app.use(morgan())

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})