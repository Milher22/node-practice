const math = {};

function add(x1,x2){
    return x1+x2;
}
function substract(x1,x2){
    return x1-x2;
}
function multiply(x1,x2){
    return x1*x2;
}
function divide(x1,x2){
    if (x2==0){
        console.log("it can be divided by 0")
    } else{
        return x1/x2;
    }
}


math.add = add;
math.substract = substract;
math.divide = divide;
math.multiply = multiply;

/*function hello(name){
    console.log("hola" , name);   
}*/


module.math = math;
//module.exports = hello;

/*exports.add = add;
exports.substract = substract;
exports.adsubstractd = divide;
exports.substract = multiply;*/