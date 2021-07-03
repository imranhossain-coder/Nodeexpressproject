const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;


const staticpath =path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
// const partials_path = path.join(__dirname,"../templates/partials");
// console.log(partials_path);


// template engine 
app.set('view engine', 'hbs');
app.set('views', templates_path);
// hbs.registerPartial(__dirname + '../templates/partials');

// static webstie


app.use(express.static(staticpath));

// app.engine('hbs', hbs({
//     extname: 'hbs', 
//     defaultLayout: 'index', 
//     layoutsDir: path.join(__dirname, '../templates/views'),
//     partialsDir  : [
//         //  path to your partials
//         path.join(__dirname, '../templates/partials'),
//     ]
// }));



// routing
app.get("/" , (req,res) =>{
    res.render("index");
})
app.get("/about" , (req,res) =>{
    res.render("about");
})
app.get("/weather" , (req,res) =>{
    res.render("weather");
})
app.get("*" ,(req,res) =>{
    res.render("404error",{
        errormsg:"Oops Page Not Found"
    });
})

app.listen(port , () =>{
    console.log("YOur express web listing to the server");
})