const express=require("express");
const path =require("path");
const app=express();
const port=80;
//for serving static files
app.use('/static',express.static('Static'))
//set the template engine as pug
app.set('view engine','pug')
//set the views directory
app.set('views',path.join(__dirname,'views'))
//our pug demo endpoint   views=template
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{index:'Hey',message:'Hello there Bishal! tell tell'})
});

app.get("/",(req,res)=>{
    res.send("This is my first home page with express");

})

app.get("/about",(req,res)=>{
    res.send("This is my first about page with express");

})

app.post("/about",(req,res)=>{
    res.send("This is my first about page with express");

})

app.post("/this",(req,res)=>{
    res.status(404).send("This page is not found");

})

app.listen(port,()=>{
    console.log(`The application started successfullly on port ${port}`);
})


