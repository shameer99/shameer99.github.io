var x = 0;
var t = setInterval(update, 50);
var age_element = document.getElementById("age");
function update() {
  var now = Date.now();
  // I was born July 12, 1999 at 11:55 PM in Pakistan (UTC + 5)
  // take epoch from EDT 1:55 PM: 931802100
  var d = new Date(2018, 11, 24, 10, 33, 30, 0);
  var born = new Date(931802100000);
  console.log("now " + now);
  console.log("born " + born);
  var age = (now-born) / 31556952000;
  age = age.toFixed(8);
  console.log("age " + age);
  var age_element = document.getElementById("age");
  console.log(age_element.innerText)
  age_element.innerHTML = `I am ${age} years old.`;
  
}
