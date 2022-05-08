alert("welcome")

// This is Asolution of  Task 4
/*

var name = prompt("inter your name");

var gender = prompt("inter your gender -male/female");
switch (gender) {
    case "male":
        gender = "mr"
        break;

    case "female":
        gender = "miss"
        break;
}

var age = prompt("inter your age");
if (age <= 0) {
    alert("error in the age")
}

var welAlert = confirm("continue in welcome alert?");

switch (welAlert) {
    case true:
        alert("welcome " + gender + " " + name)
        break;

    default:
        break;
}
*/
//Task 6 :


let study = prompt("Are you an IT student ?").toLowerCase();
if (study === "yes") {
    console.log(study);
    your_study();
} else if (study === "no") {
    console.log(study);
} else {
    study = "invalid";
    console.log(study);
}

let nationality = prompt("Are you Jordanian ?").toLowerCase();
if (nationality === "yes") {
    console.log(nationality);
    your_nationality(nationality);
} else if (nationality === "no") {
    console.log(nationality);
} else {
    nationality = "invalid";
    console.log(nationality);
}

let job = prompt("Are you looking for a job ?").toLowerCase();
if (job === "yes") {
    console.log(job);
    your_job();
} else if (job === "no") {
    console.log(job);
} else {
    job = "invalid";
    console.log(job);
}


let arr1 = [];
arr1.push(study);
arr1.push(nationality);
arr1.push(job);


for (let i = 0; i < arr1.length; i++) {
    console.log((arr1[i]));
}

function your_study(study) {
    if (study = "yes") {
        alert("Good. lets see the next Question :) ");
    }
}

function your_nationality(nationality) {
    if (nationality = "yes") {
        alert("Good. lets see the next Question :) ");
    }
}

function your_job(job) {
    if (job = "yes") {
        alert("Then Go To LTUC :)");
    }
}


/*

function your_study(){

let study =prompt("Are you an IT student ?").toLowerCase();
if (study==="yes" || study==="no"){
    console.log(study);
}else{
    study = "invalid";
    console.log(study);
}
return 0;
}

let  your_nationality = () => {
let nationality =prompt("Are you Jordanian ?").toLowerCase();
if (nationality==="yes" || nationality==="no"){
    console.log(nationality);
}else{
    nationality = "invalid";
    console.log(nationality);
}
}

let your_job = () => {
let job =prompt("Are you looking for a job ?").toLowerCase();
if (job==="yes" || job==="no"){
    console.log(job);
}else{
    job = "invalid";
    console.log(job);
}
}

let study=your_study();
let nationality=your_nationality();
let job=your_job();


let arr=[];
arr.push( study);
arr.push( nationality);
arr.push( job);

//console.log(your_nationality());
for (let i=0 ; i < arr.length ; i++ ){
console.log ( arr[i] );
}

*/






