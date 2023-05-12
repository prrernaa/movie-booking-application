const express=require('express');
const app=express();
const moongoose = require('mongoose');
const userRouter=require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const moviesRouter = require('./routes/moviesRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const dotenv = require('dotenv');
dotenv.config();


// PORT NUMBER 
const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization'); 
    next();
    
})

// middleware routes
app.use(express.json());
app.use('/users',userRouter);
app.use('/admin',adminRouter);
app.use('/movies',moviesRouter);
app.use('/booking',bookingRouter)




moongoose.connect("mongodb+srv://prerna:UgWtOp8K6e12e9Kz@movies0.guigqgh.mongodb.net/?retryWrites=true&w=majority")

app.listen(5000, () => {
    
    console.log(`Connected to localhost port ${5000}`);
})

//UgWtOp8K6e12e9Kz
