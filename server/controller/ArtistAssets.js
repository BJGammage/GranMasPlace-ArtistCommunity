const ArtistAssets = require('./ArtistAssets');

module.exports = {

    findAll: (req,res) => { 
        ArtistAssets.find()
        .then( allArtistAssets => res.json(allArtistAssets))
        .catch( err => res.status(400).json(err))        
    },

    findOne: (req,res) => {
        ArtistAssets.findById( req.params.id)
        .then( oneArtistAsset => res.json(oneArtistAsset))
        .catch( err => res.status(400).json(err))
    },

    create: (req,res) => {
        ArtistAssets.create( req.body)
        .then( newArtistAsset => res.json(newArtistAsset))
        .catch( err => res.status(400).json(err))
    },

    update: (req,res) => {
        ArtistAssets.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then( addedArt => res.json(addedArt))
        .catch( err => res.status(400).json(err))
    },

    delete: (req,res) => {
        ArtistAssets.findByIdAndDelete( req.params.id)
        .then( soldArt => res.json(soldArt))
        .catch( err => res.status(400).json(err))
    }
};