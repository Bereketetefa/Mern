console.log(example);
let example = "I'm the example!";    

// 1
console.log(hello);                                   
var hello = 'world';    

// 2
var needle;
    needle = 'haystack';
    test();
    function test() {
        var needle;
        needle = 'magnet'
        console.log(needle);
        }
// Output: magnet

// 3
var brendan;
    brendan = 'super cool';
    function print() {
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan);
 // Ouput: 'super cool'. The function is not invoked.

// 4
var food;
    food = 'chicken';
    console.log(food);
    eat();
    function eat() {
        var food;
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
    }
// Output: chicken, half-chicken

// 5
var mean;
    mean();
    console.log(food);
    mean = function () {
        food = "chicken";
        console.log(food);
        var food = "fish";
        console.log(food);
    }
    console.log(food);
//Output: "mean is not a function" error

// 6
var genre;
var rewind;
    console.log(genre);
    genre = "disco";
    rewind();
    function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
    }
    console.log(genre);
//Output: "mean is not a function" error

// 7
    var dojo;
    var learn;
    dojo = "san jose";
    console.log(dojo);
    learn();
    function learn() {
        dojo = "seattle";
        console.log(dojo);
        var dojo = "burbank";
        console.log(dojo);
    }
    console.log(dojo);
// Output: san jose, seattle, dojo, san jose

// 8
var makeDojo;
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students) {
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
            if (dojo.students > 50) {
                    dojo.hiring = true;
                }
            else if (dojo.students <= 0) {
                dojo = "closed for now";
                }
        return dojo;
    }
    // Output: Assignment to constant variable

