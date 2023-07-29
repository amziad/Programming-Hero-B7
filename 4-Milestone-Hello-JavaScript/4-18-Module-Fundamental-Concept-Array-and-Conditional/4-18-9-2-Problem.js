// Define result of the students
var myResult = 85;
var tomResult = 66;
var janeResult = 95;
var peterResult = 56;
var johnResult = 40;


// Define which student's grade need to be calculated
var singleResult = johnResult; 

// Define if-else condition
if (singleResult <= 100 && singleResult >= 80){
    console.log('A Grade');
}
else if (singleResult < 80 && singleResult >= 60){
    console.log('B Grade');
}
else if (singleResult < 60 && singleResult >= 50){
    console.log('C Grade');
}
else if (singleResult < 50 && singleResult >= 40){
    console.log('D Grade');
}
else if (singleResult < 40 && singleResult >= 0){
    console.log('F Grade');
}
else{
    console.log('Wrong Value');
};