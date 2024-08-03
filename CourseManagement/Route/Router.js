const express=require("express");
const myrouter=express.Router();
const connection=require('../DBConnect/dbConnect');

myrouter.get("/getFormForAdd",function(req,res){
    res.render("addCourse");
})
myrouter.post("/add",function(req,res){
    connection.query("insert into courses values(?,?,?,?)",[req.body.id,req.body.name,req.body.fees,req.body.duration],function(err,result){
        if(err){
            res.status(500).send("Data not inserted");
        }else{
            res.status(200).send("Data inserted successfully");
        }
    })
})
myrouter.get("/courses",function(req,res){
    connection.query("select *from courses",function(err,data,field){
        if(err){
            res.status(500).send("Data not found");
        }else{
            res.json(data);
        }
    })
})
myrouter.get("/courses/:id",function(req,res){
    connection.query("select *from courses where id=?",[req.params.id],function(err,data,field){
        if(err){
            res.status(500).send("id not found");
        }else{
            res.json(data[0]);
        }
    })
})
myrouter.get("/getFormforDelete",function(req,res){
    res.render("deleteCourse");
})
myrouter.post("/delete",function(req,res){
    connection.query("delete from courses where id=?",[req.body.id],function(err,data,field){
        if(err){
            res.status(500).send("NOT deleted");
        }else{
            res.status(200).send("Deleted successfully");
        }
    })
})
myrouter.get("/getFormForUpdate",function(req,res){
    res.render("updateCourse");
})
myrouter.post("/update",function(req,res){
    connection.query("update courses set name=?,fees=?,duration=? where id=?",[req.body.name,req.body.fees,req.body.duration,req.body.id],function(err,result){
        if(err){
            res.status(500).send("Not updated");
        }else{
            res.status(200).send("updated successully");
        }
    })
})

module.exports=myrouter;

