function IsLoggedIn(username){
    if(username === undefined){
        console.log("Please enter username");
        return
        
    }
    return `${username} just logged in`
}

//console.log(IsLoggedIn())

function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(200, 400 ,500, 2000));

const user ={
    username:"Ayush",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);


}

handleObject(user)