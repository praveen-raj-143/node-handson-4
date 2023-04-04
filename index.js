const express=require("express");
const app=express();
const route = require("./Routes/routes");
const cors=require("cors");
app.use(express.json())
app.use(cors({
    origin:"*"
}));
app.use(route);
app.listen(4065, ()=>{
    console.log("server is running...")
})