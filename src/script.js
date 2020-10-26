// dark-light themes
var themeBtn = document.getElementById("theme");
var bodyObj = document.body;

themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
  if (themeBtn.name === "light") {
    bodyObj.style.color = "#E6E6E6";
    bodyObj.style.background = "#202027";
    themeBtn.name = "dark";
  } else {
    bodyObj.style.color = "#0A0A0A";
    bodyObj.style.background = "#FCFCFC";
    themeBtn.name = "light";
  }
}

// nav bar script
function navBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}