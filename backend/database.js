const mongoose = require('mongoose')

console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))