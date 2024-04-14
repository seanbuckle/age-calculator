"use strict";
window.onload = () => {
    const form = document.getElementById("form");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const dayError = document.getElementById("day-error");
    const monthError = document.getElementById("month-error");
    const yearError = document.getElementById("year-error");
    const dayLabel = document.getElementById("day-label");
    const monthLabel = document.getElementById("month-label");
    const yearLabel = document.getElementById("year-label");
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
            dayLabel.classList.add("ac-card__input-label--error");
            day.classList.add("ac-card__date-input--error");
            dayError.textContent = "This field is required";
        }
        else {
            if (day.value.match(numsRegex) === null) {
                dayLabel.classList.add("ac-card__input-label--error");
                day.classList.add("ac-card__date-input--error");
                dayError.textContent = "Must be a valid day";
            }
            else {
                if (Number(day.value) < 1 || Number(day.value) > 31) {
                    dayLabel.classList.add("ac-card__input-label--error");
                    day.classList.add("ac-card__date-input--error");
                    dayError.textContent = "Must be a valid day";
                }
                else {
                    dayLabel.classList.remove("ac-card__input-label--error");
                    day.classList.remove("ac-card__date-input--error");
                    dayError.textContent = "";
                }
            }
        }
    }
    function months() {
        if (month.value === "") {
            monthLabel.classList.add("ac-card__input-label--error");
            month.classList.add("ac-card__date-input--error");
            monthError.textContent = "This field is required";
        }
        else {
            if (month.value.match(numsRegex) === null) {
                monthLabel.classList.add("ac-card__input-label--error");
                month.classList.add("ac-card__date-input--error");
                monthError.textContent = "Must be a valid month";
            }
            else {
                if (Number(month.value) < 1 || Number(month.value) > 12) {
                    monthLabel.classList.add("ac-card__input-label--error");
                    month.classList.add("ac-card__date-input--error");
                    monthError.textContent = "Must be a valid month";
                }
                else {
                    monthLabel.classList.remove("ac-card__input-label--error");
                    month.classList.remove("ac-card__date-input--error");
                    monthError.textContent = "";
                }
            }
        }
    }
    function years() {
        if (year.value === "") {
            yearLabel.classList.add("ac-card__input-label--error");
            year.classList.add("ac-card__date-input--error");
            yearError.textContent = "This field is required";
        }
        else {
            if (year.value.match(numsRegex) === null) {
                yearLabel.classList.add("ac-card__input-label--error");
                year.classList.add("ac-card__date-input--error");
                yearError.textContent = "Must be a valid year";
            }
            else {
                if (Number(year.value) < 1) {
                    yearLabel.classList.add("ac-card__input-label--error");
                    year.classList.add("ac-card__date-input--error");
                    yearError.textContent = "Must be a valid year";
                }
                else {
                    if (Number(year.value) > currentYear) {
                        yearLabel.classList.add("ac-card__input-label--error");
                        year.classList.add("ac-card__date-input--error");
                        yearError.textContent = "Must be in the past";
                    }
                    else {
                        yearLabel.classList.remove("ac-card__input-label--error");
                        year.classList.remove("ac-card__date-input--error");
                        yearError.textContent = "";
                    }
                }
            }
        }
    }
    /**
     * Validates the day, month, and year inputs and displays error messages if the inputs are invalid.
     * If the inputs are valid, it calls the `age` function.
     */
    function validate() {
        let dayValid = false;
        let monthValid = false;
        let yearValid = false;
        let leapYear = false;
        let dateValid = false;
        if (day.value === "") {
            dayValid = false;
            dayLabel.classList.add("ac-card__input-label--error");
            day.classList.add("ac-card__date-input--error");
            dayError.textContent = "This field is required";
        }
        else {
            if (day.value.match(numsRegex) === null) {
                dayValid = false;
                dayLabel.classList.add("ac-card__input-label--error");
                day.classList.add("ac-card__date-input--error");
                dayError.textContent = "Must be a valid day";
            }
            else {
                if (Number(day.value) < 1 || Number(day.value) > 31) {
                    dayValid = false;
                    dayLabel.classList.add("ac-card__input-label--error");
                    day.classList.add("ac-card__date-input--error");
                    dayError.textContent = "Must be a valid day";
                }
                else {
                    dayValid = true;
                    dayLabel.classList.remove("ac-card__input-label--error");
                    day.classList.remove("ac-card__date-input--error");
                    dayError.textContent = "";
                }
            }
        }
        if (month.value === "") {
            monthValid = false;
            monthLabel.classList.add("ac-card__input-label--error");
            month.classList.add("ac-card__date-input--error");
            monthError.textContent = "This field is required";
        }
        else {
            if (month.value.match(numsRegex) === null) {
                monthValid = false;
                monthLabel.classList.add("ac-card__input-label--error");
                month.classList.add("ac-card__date-input--error");
                monthError.textContent = "Must be a valid month";
            }
            else {
                if (Number(month.value) < 1 || Number(month.value) > 12) {
                    monthValid = false;
                    monthLabel.classList.add("ac-card__input-label--error");
                    month.classList.add("ac-card__date-input--error");
                    monthError.textContent = "Must be a valid month";
                }
                else {
                    monthValid = true;
                    monthLabel.classList.remove("ac-card__input-label--error");
                    month.classList.remove("ac-card__date-input--error");
                    monthError.textContent = "";
                }
            }
        }
        if (year.value === "") {
            yearValid = false;
            yearLabel.classList.add("ac-card__input-label--error");
            year.classList.add("ac-card__date-input--error");
            yearError.textContent = "This field is required";
        }
        else {
            if (year.value.match(numsRegex) === null ||
                year.value !== year.value.match(numsRegex)?.[0]) {
                yearValid = false;
                yearLabel.classList.add("ac-card__input-label--error");
                year.classList.add("ac-card__date-input--error");
                yearError.textContent = "Must be a valid year";
            }
            else {
                if (Number(year.value) < 1) {
                    yearValid = false;
                    yearLabel.classList.add("ac-card__input-label--error");
                    year.classList.add("ac-card__date-input--error");
                    yearError.textContent = "Must be a valid year";
                }
                else if (Number(year.value) > currentYear) {
                    yearValid = false;
                    yearLabel.classList.add("ac-card__input-label--error");
                    year.classList.add("ac-card__date-input--error");
                    yearError.textContent = "Must be in the past";
                }
                else {
                    yearValid = true;
                    yearLabel.classList.remove("ac-card__input-label--error");
                    year.classList.remove("ac-card__date-input--error");
                    yearError.textContent = "";
                }
            }
        }
        if ((Number(day.value) > currentDay &&
            Number(month.value) >= currentMonth &&
            Number(year.value) >= currentYear) ||
            (Number(day.value) <= currentDay &&
                Number(month.value) > currentMonth &&
                Number(year.value) === currentYear)) {
            dayValid = false;
            monthValid = false;
            yearValid = false;
            dayLabel.classList.add("ac-card__input-label--error");
            day.classList.add("ac-card__date-input--error");
            monthLabel.classList.add("ac-card__input-label--error");
            month.classList.add("ac-card__date-input--error");
            yearLabel.classList.add("ac-card__input-label--error");
            year.classList.add("ac-card__date-input--error");
            dayError.textContent = "Must be in the past";
        }
        if (dayValid === true && monthValid === true && yearValid === true) {
            if (Number(year.value) % 4 === 0) {
                if (Number(year.value) % 100 === 0) {
                    if (Number(year.value) % 400 === 0) {
                        leapYear = true;
                    }
                    else {
                        leapYear = false;
                    }
                }
                else {
                    leapYear = true;
                }
            }
            else {
                leapYear = false;
            }
            if (leapYear) {
                monthsLen[1] = 29;
            }
            else {
                monthsLen[1] = 28;
            }
            if (Number(day.value) > monthsLen[Number(month.value) - 1]) {
                dateValid = false;
                dayError.textContent = "Must be a valid date";
                dayLabel.classList.add("ac-card__input-label--error");
                day.classList.add("ac-card__date-input--error");
                monthLabel.classList.add("ac-card__input-label--error");
                month.classList.add("ac-card__date-input--error");
                yearLabel.classList.add("ac-card__input-label--error");
                year.classList.add("ac-card__date-input--error");
            }
            else {
                dateValid = true;
                dayError.textContent = "";
                dayLabel.classList.remove("ac-card__input-label--error");
                day.classList.remove("ac-card__date-input--error");
                monthLabel.classList.remove("ac-card__input-label--error");
                month.classList.remove("ac-card__date-input--error");
                yearLabel.classList.remove("ac-card__input-label--error");
                year.classList.remove("ac-card__date-input--error");
            }
        }
        if (dateValid === true) {
            age();
        }
    }
    function age() {
        let dayValue;
        let monthValue;
        let yearValue = currentYear - Number(year.value);
        const counters = document.querySelectorAll(".ac-card__age-number");
        const interval = 100;
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
        for (let d = 0; d <= dayValue; d++) {
            days(d);
        }
        function days(day) {
            setTimeout(() => {
                dayNum.textContent = day.toString();
            }, interval * day);
        }
        for (let m = 0; m <= monthValue; m++) {
            months(m);
        }
        function months(month) {
            setTimeout(() => {
                monthNum.textContent = month.toString();
            }, interval * month);
        }
        for (let y = 0; y <= yearValue; y++) {
            years(y);
        }
        function years(year) {
            setTimeout(() => {
                yearNum.textContent = year.toString();
            }, interval * year);
        }
    }
    day.addEventListener("input", days);
    month.addEventListener("input", months);
    year.addEventListener("input", years);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validate();
    });
    const root = document.documentElement;
    /**
     * Button element used to toggle the theme.
     */
    const themeToggle = document.getElementById("theme-toggle");
    /**
     * SVG icon representing the dark mode.
     */
    const darkModeIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 -960 960 960" width="1.5rem"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`;
    /**
     * SVG icon representing the light mode.
     */
    const lightModeIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 -960 960 960" width="1.5rem"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>`;
    let local = localStorage.getItem("theme");
    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    const lightTooltip = "Switch to dark theme";
    const darkTooltip = "Switch to light theme";
    function updateTheme() {
        if (local === "dark") {
            root.setAttribute("theme", "dark");
            themeToggle.innerHTML = lightModeIcon;
            themeToggle.setAttribute("tooltip", darkTooltip);
        }
        else {
            themeToggle.innerHTML = darkModeIcon;
            root.setAttribute("theme", local ?? "");
            themeToggle.setAttribute("tooltip", lightTooltip);
        }
        themeToggle.setAttribute("aria-label", local ?? "");
    }
    if (local === null) {
        if (isDark.matches) {
            themeToggle.innerHTML = lightModeIcon;
            themeToggle.setAttribute("aria-label", "dark");
            themeToggle.setAttribute("tooltip", darkTooltip);
        }
        else {
            themeToggle.innerHTML = darkModeIcon;
            themeToggle.setAttribute("aria-label", "light");
            themeToggle.setAttribute("tooltip", lightTooltip);
        }
        isDark.addEventListener("change", () => {
            if (isDark.matches) {
                themeToggle.innerHTML = lightModeIcon;
                themeToggle.setAttribute("aria-label", "dark");
                themeToggle.setAttribute("tooltip", darkTooltip);
            }
            else {
                themeToggle.innerHTML = darkModeIcon;
                themeToggle.setAttribute("aria-label", "light");
                themeToggle.setAttribute("tooltip", lightTooltip);
            }
        });
    }
    else {
        updateTheme();
    }
    function toggleTheme() {
        if (local === null) {
            if (isDark.matches) {
                local = "light";
            }
            else {
                local = "dark";
            }
        }
        else {
            if (local === "dark") {
                local = "light";
            }
            else {
                local = "dark";
            }
        }
        localStorage.setItem("theme", local);
        root.setAttribute("theme", local);
        themeToggle.innerHTML = local === "dark" ? lightModeIcon : darkModeIcon;
        themeToggle.setAttribute("aria-label", local ?? "");
        themeToggle.setAttribute("tooltip", local === "dark" ? darkTooltip : lightTooltip);
    }
    themeToggle.addEventListener("click", toggleTheme);
};
