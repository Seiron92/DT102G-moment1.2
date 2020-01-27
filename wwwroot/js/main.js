var displayDate = document.getElementById("date");
var today = new Date();
var month = today.getMonth() + 1;

var start = document.getElementById("start");
var about = document.getElementById("about");
var razor = document.getElementById("razor");
var scolor = document.getElementById("scolor");
var acolor = document.getElementById("acolor");
var rcolor = document.getElementById("rcolor");

if (month <= 9) {
    month = "0" + month;
}
var date = today.getFullYear() + '-' + (month) + '-' + today.getDate();

//displayDate.innerHTML = "Dagens datum är: " +date;


if (window.location.href.indexOf("About") > -1) {
    about.style.background = "transparent";
    about.style.border = "1px solid white";
    document.querySelectorAll('ul li a')[1].style.color = "white";

    
} else if (window.location.href.indexOf("Razor") > -1) {
    razor.style.background = "transparent";
    razor.style.border = "1px solid white";
    document.querySelectorAll('ul li a')[2].style.color = "white";
} else {
    start.style.background = "transparent";
    start.style.border = "1px solid white";
    document.querySelectorAll('ul li a')[0].style.color = "white";
}

