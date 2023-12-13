const Artist = require('../models/GmasArtist');

module.exports = { 
    findAll: (req,res) => { 
        Artist.find()
        .then( allArtist => res.json(allArtist))
        .catch( err => res.status(400).json(err))        
    },

    findOne: (req,res) => {
        Artist.findById( req.params.id)
        .then( oneArtist => res.json(oneArtist))
        .catch( err => res.status(400).json(err))
    },

    create: (req,res) => {
        Artist.create( req.body)
        .then( newArtist => res.json(newArtist))
        .catch( err => res.status(400).json(err))
    },

    update: (req,res) => {
        Artist.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then( addedArt => res.json(addedArt))
        .catch( err => res.status(400).json(err))
    },

    delete: (req,res) => {
        Artist.findByIdAndDelete( req.params.id)
        .then( soldArt => res.json(soldArt))
        .catch( err => res.status(400).json(err))
    }
}