let date = new Date();
let today_date = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
const total_month = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
var navbarDate = document.getElementById("navbarDate");
navbarDate.innerText = `${total_month[month]} ${today_date}, ${year}`;
var Selected_1 = document.getElementById("Select_1");
var Selected_2 = document.getElementById("Select_2");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var unit_div1 = document.getElementById("unit_div1");
var unit_div2 = document.getElementById("unit_div2");
function Convert() {
  var s1 = Selected_1.options[Selected_1.selectedIndex].text;
  var s2 = Selected_2.options[Selected_2.selectedIndex].text;
  var a = input1.value;

  if (s1 == "Celsius") {
    unit_div1.innerHTML = "&deg;C";
    if (s2 == "Celsius") {
      result = input1.value;
    } else if (s2 == "Fahrenheit") {
      result = a * (9 / 5) + 32;
    } else if (s2 == "Kelvin") {
      result = a + 273;
    }
  }

  if (s1 == "Fahrenheit") {
    unit_div1.innerHTML = "&deg;F";
    if (s2 == "Fahrenheit") {
      result = input1.value;
    } else if (s2 == "Celsius") {
      result = (a - 32) * (5 / 9);
    } else if (s2 == "Kelvin") {
      result = (a - 32) * (5 / 9) + 273;
    }
  }
  if (s1 == "Kelvin") {
    unit_div1.innerHTML = "K";
    if (s2 == "Kelvin") {
      result = input1.value;
    } else if (s2 == "Celsius") {
      result = a - 273;
    } else if (s2 == "Fahrenheit") {
      result = (a - 273) * (9 / 5) + 32;
    }
  }

  if (s2 == "Celsius") {
    unit_div2.innerHTML = "&deg;C";
  } else if (s2 == "Fahrenheit") {
    unit_div2.innerHTML = "&deg;F";
  } else if (s2 == "Kelvin") {
    unit_div2.innerHTML = "K";
  }
  result=result.toFixed(2);
  input2.value=result;
}
