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

var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");
var result = document.getElementById("result");
var result_category = document.getElementById("result_category");
function Calculate() {
  let w = input_1.value;
  let h = input_2.value/100;
  ans = w / (h * h);
  ans=ans.toFixed(2)
  result.innerText = ans;
  if (ans < 18.5) {
    result_category.innerText = "UNDERWEIGHT";
  } else if (ans < 25.0) {
    result_category.innerText = "NORMAL";
  } else {
    result_category.innerText = "OVERWEIGHT";
  }
}
