// Nested conditions to hire a teacher in a high school
// Declare variables
var math = true;
var english = false;
var geometry = true;

//Nested Conditions

if (math === true){
    if (english === true && geometry === true){
        console.log('You are a perfect teacher.');
    }

    else if (english != true && geometry === true){
        console.log('Have to improve english but we will hire you.');
    }
    else {
        console.log('We will hire you as junior teacher.');
    } 
}
else{
    console.log('We will not hire you.');

};
