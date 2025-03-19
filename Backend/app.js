const dotenv=require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const cors=require('cors')
const connectTODB=require('./db/db')
const userRouter=require('./routes/user.routes');
const morgan = require('morgan');

connectTODB();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users',userRouter);


module.exports=app;