const mysql=require("mysql");
var mysqlConnection=mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'mayu1525',
  database:'courseExpress',
  port:3306  
})
mysqlConnection.connect((err)=>{
    if(!err){
        console.log("connection done!");
    }else{
        console.log(err);
    }
})
module.exports=mysqlConnection;