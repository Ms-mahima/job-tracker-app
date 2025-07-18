const express= require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


const userRoutes=require('./routes/userRoutes');

dotenv.config();

const app= express();
app.use(cors());
app.use(express.json());

//Routes

app.use("/api/users",userRoutes);


//mongodb connect

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(err));


//server start


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`);
});
