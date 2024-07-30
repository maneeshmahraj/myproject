const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors=require("cors");
const routes=require("./routes/routers")
require("dotenv").config();
const port=process.env.PORT || 7000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATABASE_NAME}`)
app.use(cors());
app.use("/api/user",routes)


app.listen(port,()=>{
    console.log("server is running 8000 port !!")
})