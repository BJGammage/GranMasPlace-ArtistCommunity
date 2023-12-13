const mongoose = require('mongoose');




const GmaArtistSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        required: [true, "Must have a First Name"],
        minLength: [2, "Name must be at least 2 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Must have a Last Name"],
        minLength: [2, "Name must be at least 2 characters"]
    },
    phone: {
        type: String,
        required: [true, "Must have a Phone Number"],
        minLength: [10, "Number must be at least 10 digits"]
    },
    email: {
        type: String,
        required: [true, "Must have a Email"],
        minLength: [5, "Email must be at least 5 characters"]
    },
    password: {
        type: String,
        required: [true, "Must have a Password"],
        minLength: [8, "Password must be at least 8 characters"]
    },
    biography: {
        type: String,
        required: [true, "Must have a Short Bio"],
        minLength: [5, "At Least 5 Characters Please"]
    }, 
    artAsset1: {
        type: String
    }
    
},{timestamps:true});

module.exports = mongoose.model("Artist", GmaArtistSchema);