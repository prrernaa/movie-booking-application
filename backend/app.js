const express = require('express');

const app = express();
const moongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();

const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization'); 
    next();
    
})
//middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use('/booking', bookingRouter);




moongoose.connect("mongodb+srv://prerna:UgWtOp8K6e12e9Kz@movies0.guigqgh.mongodb.net/?retryWrites=true&w=majority")

app.listen(5000, () => {
    
    console.log(`Connected to localhost port ${5000}`);
})

//UgWtOp8K6e12e9Kz
