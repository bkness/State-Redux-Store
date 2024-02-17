const mongoose = require('mongoose');

 mongoose.connect(
     process.env.MONGODB_URI || 'mongodb+srv://bkness:ziggy@cluster0.pf0alen.mongodb.net/game_test_db'
   );


module.exports = mongoose.connection;
