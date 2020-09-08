var hello;
console.log(hello); //logs undefined                                
hello = 'world'                                 
   

var needle;
function test(){
    var needle = 'magnet';
    console.log(needle); 
}
var needle = 'haystack';
test(); //logs magnet


var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
var brednan = 'super cool';
console.log(brendan); // logs 'super cool'


var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); // logs 'half-chicken'
    var food = 'gone';
}
var food = 'chicken';
console.log(food); // logs 'chicken'
eat();


mean(); // error 'mean' is not a function
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
console.log(food);



var genre;
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
var genre = "disco";
rewind(); // logs 'rock' and 'r&b'
console.log(genre); // logs 'disco'
console.log(genre); // logs 'disco'


function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo); // logs 'san jose'
learn(); // logs 'seattle' and 'burbank'
console.log(dojo); // logs 'san jose'



function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // error
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // true
console.log(makeDojo("Berkeley", 0)); // error