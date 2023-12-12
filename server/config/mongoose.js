const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/grandmasplace-artist-community")
.then( ()=> console.log("We are Connected to The DB of Mongo my Lord!"))
.catch( err => console.log("It seems as if we have a complication my Lord =======>", err))