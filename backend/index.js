const express = require('express')

// Initializations
const app = express()

// Setting
app.set('port', 3000)

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})