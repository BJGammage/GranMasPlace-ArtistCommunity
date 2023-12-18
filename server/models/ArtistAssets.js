const mongoose = require('mongoose');

const ImgSchema = new mongoose.Schema( {

    artistAsset1: {
        type: String
    },

    artistAsset2: {
        type: String
    },

    artistAsset3: {
        type: String
    },

    artistAsset4: {
        type: String
    },
    
    artistAsset5: {
        type: String
    }

});

const ArtistAsset = new mongoose.model( "ArtistAssets", ImgSchema);


module.exports = ArtistAssets;