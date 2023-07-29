// Declare variable

var myMoney = 10;
var danishPrice = 45;
var butterBreadPrice = 35;
var toastBiscuitPrice = 20;

// Multi stage conditions
// Begin with if
// End with else
// In middle multiple else if

if(danishPrice <= myMoney){
    console.log('Let us get the danish');
}
else if(butterBreadPrice <= myMoney){
    console.log('Let us get the Butter Bread');
}
else if(toastBiscuitPrice <= myMoney){
    console.log('Let us get the Toast Biscuit');
}
else{
    console.log('Let us get nothing');
};
