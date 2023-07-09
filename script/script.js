form = document.forms['ac-form'];
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let dayError = document.getElementById("day-error");
let monthError = document.getElementById("month-error");
let yearError = document.getElementById("year-error");
let dayNum = document.getElementById("day-num");
let monthNum = document.getElementById("month-num");
let yearNum = document.getElementById("year-num");
let dayText = document.getElementById("day-txt");
let monthText = document.getElementById("month-txt");
let yearText = document.getElementById("year-txt");
let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let numberRegex = /^[0-9]*$/;

function validate() {
    if (day.value == "") {
        dayError.innerHTML = "Please enter a valid day";
    }
    if (month.value == "") {
        monthError.innerHTML = "Please enter a valid month";
    }
    if (year.value == "") {
        yearError.innerHTML = "Please enter a valid year";
    }
    if (day.value < 1 || day.value > 31) {
        yearError.innerHTML = "Please enter a valid year";
    }
    if (month.value < 1 || month.value > 12) {
        yearError.innerHTML = "Please enter a valid year";
    }
    if (year.value < 1000 || year.value > currentYear) {
        yearError.innerHTML = "Please enter a valid year";
    }
}


form.addEventListener("click", e => {
    e.preventDefault();
    validate();
});

