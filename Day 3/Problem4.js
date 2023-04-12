// Stored details in database
const stored_username = "Rajat_Rajput";
const stored_pwd = 54623;

// Login details
let username = "Rajat_Rajput";
let password = 54623;

if (stored_username !== username){
  console.log("Invalid Username!");
}
else if(stored_pwd !== password){
  console.log("Invalid Password");
}
else{
  console.log("Login");
}
