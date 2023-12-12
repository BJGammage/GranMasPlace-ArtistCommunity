const mongoose = require('mongoose');

const contact = {
    phone: {
        type: String,
        minLength: [10, "Phone Number must contain at least 10 digits"]
    },
    email: {
        type: String,
        required: [true, 'A Email Address is required'],
        minLength: [6, "Email must be at least 6 characters"]
    }
}

const ArtistSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        minLength: [2, "First Name must be at least 2 characters"]
    },
    
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        minLength: [2, "Last Name must be at least 2 characters"]
    },

    contact: {
        phone: {
            type: String,
            minLength: [10, "Phone Number must contain at least 10 digits"]
        },
        email: {
            type: String,
            required: [true, 'A Email Address is required'],
            minLength: [6, "Email must be at least 6 characters"]
        }
    }
        
    ,

    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, "Password must be at least 8 characters"]
    },
    confirmPassword: {
            type: String
        },
    biography: {
        type: String,
        required: [true, 'Biography is required'],
        minLength: [5, "Biography must be at least 5 characters"]
    },

    artCollection: {
        artAsset1: {
        name: String,
        desc: String,
        img: {
            data: Buffer,
            contentType: String
        }
    },

    artAsset2: {
        name: String,
        desc: String,
        img: {
            data: Buffer,
            contentType: String
        }
    },

    artAsset3: {
        name: String,
        desc: String,
        img: {
            data: Buffer,
            contentType: String
        }
    },

    artAsset4: {
        name: String,
        desc: String,
        img: {
            data: Buffer,
            contentType: String
        }
    },

    artAsset5: {
        name: String,
        desc: String,
        img: {
            data: Buffer,
            contentType: String
        }
    }
    }
}, {timestamps: true});

module.exports = mongoose.model("Artist", ArtistSchema);