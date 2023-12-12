const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(
    cors(),
    express.json(),
    express.urlencoded( {extended:true} )
);

require("./config/mongoose")

// require routes
require("./routes/GmasArtist")(app);


app.listen( port, () => console.log(`We are Listening on Port ${port}, my Lord!`));