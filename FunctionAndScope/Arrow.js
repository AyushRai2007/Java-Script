const user ={
    username: "Ayush",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //context of user
        console.log(this);
        
    }
}
//user.welcomeMessage()
//user.username="Sam"
//user.welcomeMessage()
// console.log(this);
