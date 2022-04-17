alert("welcome")

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


