const route=require("express").Router()
const bcrypt =require("bcrypt");
const saltround=10;
const arr=[];
route.post("/register", async (req, res)=>{
    const data=req.body;
    console.log((data))
    const hashpassword = await bcrypt.hash(data.password, saltround)
    const obj ={
        name: data.name,
        phonenumber:data.phonenumber,
        email:data.email,
        password:hashpassword
    }
    arr.push(obj)
res.send({msg:"successfully registered"})
})

route.post("/login",(req, res)=>{
    arr.forEach(async (event)=>{
        if(req.body.email === event.email) {
            const validate = await bcrypt.compare(req.body.password, event.password)
            if(validate) {
                res.send({msg:"successfully logged in "})
            }
            else{
                res.send({msg:"password is wrong"})
            }
        }
    })
})

module.exports=route;