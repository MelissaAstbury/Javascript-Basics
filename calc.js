alert("CONNECTED");
var age = prompt("What is your age?");
var days = age * 365;
alert(age + " years is roughly " + days + " days");

//var daysLeft = 3;
//document.getElementById("membershipInDays").innerHTML = daysLeft;

let membershipDaysLeft = 50;

if (membershipDaysLeft <= 10) {
  console.log(8);
} else if (membershipDaysLeft > 10 && membershipDaysLeft < 20) {
  console.log(15);
} else {
  alert("help");
}
