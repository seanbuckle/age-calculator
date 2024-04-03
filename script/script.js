"use strict";
window.onload = () => {
    const form = document.getElementById("form");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const dayError = document.getElementById("day-error");
    const monthError = document.getElementById("month-error");
    const yearError = document.getElementById("year-error");
    const dayNum = document.getElementById("day-num");
    const monthNum = document.getElementById("month-num");
    const yearNum = document.getElementById("year-num");
    const dayText = document.getElementById("day-txt");
    const monthText = document.getElementById("month-txt");
    const yearText = document.getElementById("year-txt");
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const monthsLen = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const numsRegex = /^[0-9]*$/;

    function days() {
        if (day.value === "") {
            dayError.textContent = "This field is required";
        }
        else {
            if (day.value.match(numsRegex) === null) {
                dayError.textContent = "Invalid day";
            }
            else {
                if (Number(day.value) < 1 || Number(day.value) > 31) {
                    dayError.textContent = "Invalid day";
                }
                else {
                    dayError.textContent = "";
                }
            }
        }
    }

    function months() {
        if (month.value === "") {
            monthError.textContent = "This field is required";
        }
        else {
            if (month.value.match(numsRegex) === null) {
                monthError.textContent = "Invalid month";
            }
            else {
                if (Number(month.value) < 1 || Number(month.value) > 12) {
                    monthError.textContent = "Invalid month";
                }
                else {
                    monthError.textContent = "";
                }
            }
        }
    }

    function years() {
        if (year.value === "") {
            yearError.textContent = "This field is required";
        }
        else {
            if (year.value.match(numsRegex) === null) {
                yearError.textContent = "Invalid year";
            }
            else {
                if (Number(year.value) < 1900 || Number(year.value) > currentYear) {
                    yearError.textContent = "Invalid year";
                }
                else {
                    yearError.textContent = "";
                }
            }
        }
    }

    function age() {
        let dayValue;
        let monthValue;
        let yearValue = currentYear - Number(year.value);
        if (currentMonth < Number(month.value)) {
            yearValue--;
            monthValue = 12 - Number(month.value) + currentMonth;
        }
        else {
            monthValue = currentMonth - Number(month.value);
        }
        if (currentDay < Number(day.value)) {
            monthValue--;
            dayValue = monthsLen[currentMonth - 2] - Number(day.value) + currentDay;
        }
        else {
            dayValue = currentDay - Number(day.value);
        }
        if (dayValue === 1) {
            dayText.textContent = "day";
        }
        else {
            dayText.textContent = "days";
        }
        if (monthValue === 1) {
            monthText.textContent = "month";
        }
        else {
            monthText.textContent = "months";
        }
        if (yearValue === 1) {
            yearText.textContent = "year";
        }
        else {
            yearText.textContent = "years";
        }
        dayNum.textContent = dayValue.toString();
        monthNum.textContent = monthValue.toString();
        yearNum.textContent = yearValue.toString();
    }

    function validate() {
        let dayValid = false;
        let monthValid = false;
        let yearValid = false;
        if (day.value === "") {
            dayValid = false;
            dayError.textContent = "This field is required";
        }
        else if (day.value.match(numsRegex) === null) {
            dayValid = false;
            dayError.textContent = "Invalid day";
        }
        else if (Number(day.value) < 1 || Number(day.value) > 31) {
            dayValid = false;
            dayError.textContent = "Invalid day";
        }
        else {
            dayValid = true;
            dayError.textContent = "";
        }
        if (month.value === "") {
            monthValid = false;
            monthError.textContent = "This field is required";
        }
        else if (month.value.match(numsRegex) === null) {
            monthValid = false;
            monthError.textContent = "Invalid month";
        }
        else if (Number(month.value) < 1 || Number(month.value) > 12) {
            monthValid = false;
            monthError.textContent = "Invalid month";
        }
        else {
            monthValid = true;
            monthError.textContent = "";
        }
        if (year.value === "") {
            yearValid = false;
            yearError.textContent = "This field is required";
        }
        else if (year.value.match(numsRegex) === null ||
            year.value !== year.value.match(numsRegex)?.[0]) {
            yearValid = false;
            yearError.textContent = "Invalid year";
        }
        else if (Number(year.value) < 1900 || Number(year.value) > currentYear) {
            yearValid = false;
            yearError.textContent = "Invalid year";
        }
        else {
            yearValid = true;
            yearError.textContent = "";
        }
        if (dayValid && monthValid && yearValid) {
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
};
