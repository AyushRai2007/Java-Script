//for each loop do not return the values

 //const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((item) => item>5)
// console.log(newnums);
// const  print = mynums.map((num) => {return num +10})
// console.log(print);

//chaining

// const newnums = mynums.map((num) => num*10).map((num)=>num+1)
// //can do chaining anny number time of  map and map.filter  

// console.log(newnums);


//reduuce
const nums = [1,2,3, 4]
const total = nums.reduce((acc, curr) => acc+curr , 0)//at end initialization is given
console.log(total);
