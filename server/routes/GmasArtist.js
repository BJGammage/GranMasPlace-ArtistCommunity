const Artist = require('../controller/gmasArtist');

module.exports = app => {
    app.get("/api/artist", Artist.findAll)
    app.post("/api/artist", Artist.create)
    app.get("/api/artist/:id", Artist.findOne)
    app.put("/api/artist/:id", Artist.update)
    app.delete("/api/artist/:id", Artist.delete)
}