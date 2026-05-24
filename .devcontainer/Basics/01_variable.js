const accID = 14453
let AccEmail = "ayush@google.com"
var AccPassword = "12345"
Acc_City = "Jaipur"
// accID = 2346 //not allowed
AccEmail = "hchc@google.com"
AccPassword = "65432"
Acc_City = "Bengaluru"
/*
  var is not block and functional scope
*/
let Acc_State
console.log(accID);
console.table([AccEmail , AccPassword , Acc_City , Acc_State]);