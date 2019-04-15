var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.on('conected', function(){
    console.log('Database Connected');
});
module.exports = mongoose;