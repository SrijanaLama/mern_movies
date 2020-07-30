const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//require the file
const moviesRouter = require('./routes/movies.route');
const userRouter = require('./routes/users.route');

const app = express();

//middleware
app.use(cors());
app.use(express.json()); //parse json

require('dotenv').config();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
});
const connection = mongoose.connection;
connection.once('open', () =>
    console.log("Mongo DB database is connected.")
);


app.use('/movies',moviesRouter);
app.use('/users',userRouter)

app.listen(port, () => 
    console.log(`Server is Listening on port: ${port}`)
);


