const dotenv=require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const cors=require('cors')
const connectTODB=require('./db/db')
const userRouter=require('./routes/user.routes');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes');



connectTODB();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users',userRouter);
app.use('/captains', captainRoutes);



module.exports=app;