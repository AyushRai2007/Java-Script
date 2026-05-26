//Singleton

//using symbol
const mysym = Symbol("key1")

// object literals
const JsUser ={
    name: "Ayush" ,
    "Full name":"Ayush Rai",
    age: 18,
    location: "Gorakhpur",
    isLoggedIn: false,
    lastLoginDays:["Monday" , "Saturday"],
    [mysym]: "My Key 1"//=>using symbol in object

}

//console.log(JsUser.name);
//console.log(JsUser["Full name"]);//you cannot access such obj using dot 
//console.log(JsUser[mysym]);

JsUser.age = 19
//Object.freeze(JsUser)
JsUser.age =20
//console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js User, ${this[mysym]}`);

}

console.log(JsUser.greeting());
