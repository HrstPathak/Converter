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

  if (s1 == "Gram g") {
    unit_div1.innerHTML = "g";
    if (s2 == "Gram g") {
      input2.value = input1.value;
    } else if (s2 == "Kilogram Kg") {
      input2.value = a * 0.001
    } else if (s2 == "Tonne T") {
      input2.value = a /1000000;
    }
    else if (s2 == "Pound lb") {
        input2.value = a *0.002204;
      }
  }

  if (s1 == "Kilogram Kg") {
    unit_div1.innerHTML = "Kg";
    if (s2 == "Kilogram Kg") {
      input2.value = input1.value;
    } else if (s2 == "Gram g") {
      input2.value = a*1000;
    } else if (s2 == "Tonne T") {
      input2.value = a*0.001;
    }
    else if (s2 == "Pound lb") {
        input2.value = a * 2.205;
      }
  }
  if (s1 == "Tonne T") {
    unit_div1.innerHTML = "T";
    if (s2 == "Tonne T") {
      input2.value = input1.value;
    } else if (s2 == "Gram g") {
      input2.value = a * 1000000;
    } else if (s2 == "Kilogram Kg") {
      input2.value = a*1000;
    }
    else if (s2 == "Pound lb") {
        input2.value = a *2205;
      }
  }
  if (s1 == "Pound lb") {
    unit_div1.innerHTML = "Lb";
    if (s2 == "Pound lb") {
      input2.value = input1.value;
    } else if (s2 == "Gram g") {
      input2.value = a*453.6;
    } else if (s2 == "Kilogram Kg") {
      input2.value = a*0.4536
    }else if (s2 == "Tonne T") {
        input2.value = a*0.0004535
      }
  }

  if (s2 == "Gram g") {
    unit_div2.innerHTML = "g";
  } else if (s2 == "Kilogram Kg") {
    unit_div2.innerHTML = "Kg";
  } else if (s2 == "Tonne T") {
    unit_div2.innerHTML = "T";
  }else if (s2 == "Pound lb") {
    unit_div2.innerHTML = "Lb";

  }
}
