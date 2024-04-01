const userId = 12345;
let userEmail = "dharmik#mailinator.com";
var userPass = 'dharmik@123'; // old way ti assign a variable - having issue with scopes.
userCity = 'surat'; // ignore this way of assigning
let userState;


// userId = '123344'; // not allowed to change const

console.log(userId);

userEmail = "dharmik@gmail.com";
userPass = '212121221';
userCity = 'amreli';

console.table([userId, userEmail, userPass, userCity, userState]);