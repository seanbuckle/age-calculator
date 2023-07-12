let form = document.getElementById("form");
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
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();
let monthsLen = ["31","28","31","30","31","30","31","31","30","31","30","31"];
let numsRegex = new RegExp(/^[0-9]*$/);

function days(){
    if(day.value === ""){
        dayError.innerHTML = "This field is required";
    }else {
        if(day.value.match(numsRegex) == null){
            dayError.innerHTML = "Invalid day";
        } else{
            if(day.value < 1 || day.value > 31){
                dayError.innerHTML = "Invalid day";
            } else{
                dayError.innerHTML = "";
            }
        }
    }
}
function months(){
    if(month.value === ""){
        monthError.innerHTML = "This field is required";
    }else{
        if(month.value.match(numsRegex) === null){
            monthError.innerHTML = "Invalid month";
        } else{
            if(month.value < 1 || month.value > 12){
                monthError.innerHTML = "Invalid month";
            } else{
                monthError.innerHTML = "";
            }
        }
    }
}
function years(){
    if(year.value === ""){
        yearError.innerHTML = "This field is required";
    }else{
        if(year.value.match(numsRegex) == null){
            yearError.innerHTML = "Invalid year";
        } else{
            if(year.value < 1900 || year.value > currentYear){
                yearError.innerHTML = "Invalid year";
            } else{
                yearError.innerHTML = "";
                
            }
        }
    }

}
function age(){
    let dayValue;
    let monthValue;
    let yearValue = currentYear - year.value;
    if(currentMonth < month.value){
        yearValue--;
        monthValue = 12 - month.value + currentMonth;
    }else{
        monthValue = currentMonth - month.value;
    }
    if(currentDay < day.value){
        monthValue--;
        dayValue = monthsLen[currentMonth - 2] - day.value + currentDay;
    }else{
        dayValue = currentDay - day.value;
    }
    if(dayValue == 1){
        dayText.innerHTML = "day";
    }else{
        dayText.innerHTML = "days";
    }
    if(monthValue == 1){
        monthText.innerHTML = "month";
    }else{
        monthText.innerHTML = "months";
    }
    if(yearValue == 1){
        yearText.innerHTML = "year";
    }else{
        yearText.innerHTML = "years";
    }
    dayNum.innerHTML = dayValue;
    monthNum.innerHTML = monthValue;
    yearNum.innerHTML = yearValue;
}
function validate(){
    let dayValid = false;
    let monthValid = false;
    let yearValid = false;
    if(day.value === ""){
        dayValid = false;
        dayError.innerHTML = "This field is required";
    } else if(day.value != day.value.match(numsRegex)){
        dayValid = false;
        dayError.innerHTML = "Invalid day";
    } else if(day.value < 1 || day.value > 31){
        dayValid = false;
        dayError.innerHTML = "Invalid day";
    } else {
        dayValid = true;
        dayError.innerHTML = "";
    }
    if(month.value === ""){
        monthValid = false;
        monthError.innerHTML = "This field is required";
    } else if(month.value != month.value.match(numsRegex)){
        monthValid = false;
        monthError.innerHTML = "Invalid month";
    } else if(month.value < 1 || month.value > 12){
        monthValid = false;
        monthError.innerHTML = "Invalid month";
    } else {
        monthValid = true;
        monthError.innerHTML = "";
    }
    if(year.value === ""){
        yearValid = false;
        yearError.innerHTML = "This field is required";
    } else if(year.value != year.value.match(numsRegex)){
        yearValid = false;
        yearError.innerHTML = "Invalid year";
    } else if(year.value < 1900 || year.value > currentYear){
        yearValid = false;
        yearError.innerHTML = "Invalid year";
    } else {
        yearValid = true;
        yearError.innerHTML = "";
    }
    if(dayValid && monthValid && yearValid == true){
    age();
    }
}

day.addEventListener("input", days);
month.addEventListener("input", months);
year.addEventListener("input", years);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});
