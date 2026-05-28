//var is not block scopic
//browser me global scope and node ke through global scope alag hai
// function(){}
const add2 = function(num){
    //expression
    return num+2
}

add2(5)
// function declare with variable access(hoisting) after declaration while not 
//simple function