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

function Convert() {
  var s1 = Selected_1.options[Selected_1.selectedIndex].text;
  var s2 = Selected_2.options[Selected_2.selectedIndex].text;
  var a = input1.value;

  if (s1 == "mm Millimeter") {
    if (s2 == "mm Millimeter") {
      result = input1.value;
    } else if (s2 == "cm Centimeter") {
      result = a / 10;
    } else if (s2 == "m Meter") {
      result = a / 1000;
    } else if (s2 == "km Kilometer") {
      result = a / 1000000;
    } else if (s2 == "mi Mile") {
      result = a / 1609344;
    }
    
  }

  if (s1 == "cm Centimeter") {
    if (s2 == "cm Centimeter") {
      result = input1.value;
    } else if (s2 == "mi Millimeter") {
      result = a * 10;
    } else if (s2 == "m Meter") {
      result = a * 0.01;
    } else if (s2 == "km Kilometer") {
      result = a / 100000;
    } else if (s2 == "mi Mile") {
      result = a / 160934.4;
    }
  }
  if (s1 == "m Meter") {
    if (s2 == "m Meter") {
      result = input1.value;
    } else if (s2 == "mi Millimeter") {
      result = a * 1000;
    } else if (s2 == "cm Centimeter") {
      result = a / 100;
    } else if (s2 == "km Kilometer") {
      result = a * 0.001;
    } else if (s2 == "mi Mile") {
      result = a / 1609.344;
    }
  }
  if (s1 == "km Kilometer") {
    var a = input1.value;
    if (s2 == "km Kilometer") {
      result = input1.value;
    } else if (s2 == "mi Millimeter") {
      result = a * 1000000;
    } else if (s2 == "cm Centimeter") {
      result = a * 100000;
    } else if (s2 == "m Meter") {
      result = a * 1000;
    } else if (s2 == "mi Mile") {
      result = a * 0.62137;
    }
  }
  if (s1 == "mi Mile") {
    if (s2 == "mi Mile") {
      result = input1.value;
    } else if (s2 == "mm Millimeter") {
      result = a * 1609344;
    } else if (s2 == "cm Centimeter") {
      result = a * 160934.4;
    } else if (s2 == "m Meter") {
      result = a * 1609.344;
    } else if (s2 == "km Kilometer") {
      result = a * 1.609344;
    }
  }
  // result=result.toFixed(8)
    input2.value = result;
}
