const m=require("./mynode");
const avg=m(12,45,64);
console.log("avg is"+avg)
console.log("Hello");
console.log("Node js");
let a=5;
const b=12;
var c=11;

console.log(a+b+c);

const findavg=(a,b,c)=>{
    console.log("finding avg");
    return(a+b+b)/3;
    
};
module.exports={findavg};