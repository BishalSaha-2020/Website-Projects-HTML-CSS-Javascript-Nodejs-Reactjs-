const { urlencoded } = require("express");
const express=require("express");
const path =require("path");
const fs=require("fs")
const app=express();
const port=80;
//for serving static files
app.use('/static',express.static('Static'))
//fetching data to express
app.use(express.urlencoded())
//set the template engine as pug
app.set('view engine','pug')
//set the views directory
app.set('views',path.join(__dirname,'views'))
//our pug demo endpoint   views=template
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res)=>{
    // console.log(req.body)

    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    let outputTowrite=`the name of the clint is ${name},${age} year old,${gender},resideng at ${address},More about him ${more}`
    fs.appendFileSync('output.txt',outputTowrite)

    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'message': 'Your Form has been submitted Successfully'}
    res.status(200).render('index.pug', params);
})

// app.get('/',(req,res)=>{
//     res.status(200).render('index.pug');})


// app.get("/",(req,res)=>{
//     res.send("This is my first home page with express");

// })

// app.get("/about",(req,res)=>{
//     res.send("This is my first about page with express");

// })

// app.post("/about",(req,res)=>{
//     res.send("This is my first about page with express");

// })

// app.post("/this",(req,res)=>{
//     res.status(404).send("This page is not found");

// })

app.listen(port,()=>{
    console.log(`The application started successfullly on port ${port}`);
})