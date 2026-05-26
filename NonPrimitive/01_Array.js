const myArr = [0, 1, 2 ,3 , 4 ,5 , true , "Ayush"]

const myArr2 = new Array(1, 2, 3 ,4)
//ShallowCopy => share same reference
//DeepCopy => donot share  same reference

// Array Methods

myArr.push(6)
//pop
//console.log(myArr);

myArr.unshift(2)
myArr.shift()
//console.log(myArr);

//console.log(myArr.includes(4)); =>trrue false
//indexof() 
 const newArr = myArr.join() //=>convert to string 
 //console.log(newArr);

 //slice splice

 const my1 = myArr.slice(1,4)
 console.log(my1);
 console.log("A" , myArr);

 const my2 = myArr.splice(1 ,4)
 console.log(my2);
 console.log( "B", myArr);
 

 



