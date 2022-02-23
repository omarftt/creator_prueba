const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017/api-test'

mongoose.connect( uri , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .catch(err => console.log(err));

mongoose.connection.once('open', _ => {
    console.log('Database is connected to', uri);
})

mongoose.connection.on('error', err => {
    console.log(err, uri);
})
