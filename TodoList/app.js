//jshint esversion:6

const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

const app=express();

app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));

var today=new Date();
var currentDay=today.getDay();
var day= "";
var items=[];
var workitems=[];

app.get("/",function(req,res){
    var options ={
        weekday:"long",day:"numeric",month:"long"
    };

    var day=today.toLocaleDateString("en-US",options);

    
    res.render('list',{kindOfDay:day,newListItems: items});
});

 
app.post("/",function(req,res){
    var item=req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.get("/work",function(req,res){   
    res.render("list",{kindOfDay:"Work List",newListItems:workitems})
});

app.post("/work",function(req,res){
    let item=re.body.newItem;
    workitems.push(item);
    res.redirect("/work");
});


app.listen(3001 ,function(){
    console.log("Server started on port 3001");
});