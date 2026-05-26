//Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);

//let myCreateDate = new Date(2023,0,23,5,25)
//console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("01-14-2023")
//console.log(myCreateDate.toLocaleString());
let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let date = new Date()
console.log(date.getMonth()+1)
console.log(date.getDay());


console.log(
  date.toLocaleString('Default' ,{
    weekday : "long"
}))






