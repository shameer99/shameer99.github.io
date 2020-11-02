var x = 0;
var t = setInterval(update_age, 50);
var age_element = document.getElementById("age");
function update_age() {
  var now = Date.now();
  // I was born approx 931802100 seconds from epoch.
  var birth = new Date(931802100000);

  //miliseconds to years
  var age = (now-birth) / 31556952000;
  age = age.toFixed(8); //8 decimal places

  //set age on page
  var age_element = document.getElementById("age");
  age_element.innerHTML = age;
}
