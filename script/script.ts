window.onload = () => {
  const form: HTMLFormElement = document.getElementById(
    "form"
  ) as HTMLFormElement;
  const day: HTMLInputElement = document.getElementById(
    "day"
  ) as HTMLInputElement;
  const month: HTMLInputElement = document.getElementById(
    "month"
  ) as HTMLInputElement;
  const year: HTMLInputElement = document.getElementById(
    "year"
  ) as HTMLInputElement;
  const dayError: HTMLElement = document.getElementById(
    "day-error"
  ) as HTMLElement;
  const monthError: HTMLElement = document.getElementById(
    "month-error"
  ) as HTMLElement;
  const yearError: HTMLElement = document.getElementById(
    "year-error"
  ) as HTMLElement;
  const dayNum: HTMLElement = document.getElementById("day-num") as HTMLElement;
  const monthNum: HTMLElement = document.getElementById(
    "month-num"
  ) as HTMLElement;
  const yearNum: HTMLElement = document.getElementById(
    "year-num"
  ) as HTMLElement;
  const dayText: HTMLElement = document.getElementById(
    "day-txt"
  ) as HTMLElement;
  const monthText: HTMLElement = document.getElementById(
    "month-txt"
  ) as HTMLElement;
  const yearText: HTMLElement = document.getElementById(
    "year-txt"
  ) as HTMLElement;
  const currentDate: Date = new Date();
  const currentDay: number = currentDate.getDate();
  const currentMonth: number = currentDate.getMonth() + 1;
  const currentYear: number = currentDate.getFullYear();
  const monthsLen: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const numsRegex: RegExp = /^[0-9]*$/;

  function days(): void {
    if (day.value === "") {
      dayError.textContent = "This field is required";
    } else {
      if (day.value.match(numsRegex) === null) {
        dayError.textContent = "Invalid day";
      } else {
        if (Number(day.value) < 1 || Number(day.value) > 31) {
          dayError.textContent = "Invalid day";
        } else {
          dayError.textContent = "";
        }
      }
    }
  }

  function months(): void {
    if (month.value === "") {
      monthError.textContent = "This field is required";
    } else {
      if (month.value.match(numsRegex) === null) {
        monthError.textContent = "Invalid month";
      } else {
        if (Number(month.value) < 1 || Number(month.value) > 12) {
          monthError.textContent = "Invalid month";
        } else {
          monthError.textContent = "";
        }
      }
    }
  }

  function years(): void {
    if (year.value === "") {
      yearError.textContent = "This field is required";
    } else {
      if (year.value.match(numsRegex) === null) {
        yearError.textContent = "Invalid year";
      } else {
        if (Number(year.value) < 1900 || Number(year.value) > currentYear) {
          yearError.textContent = "Invalid year";
        } else {
          yearError.textContent = "";
        }
      }
    }
  }

  function age(): void {
    let dayValue: number;
    let monthValue: number;
    let yearValue: number = currentYear - Number(year.value);
    if (currentMonth < Number(month.value)) {
      yearValue--;
      monthValue = 12 - Number(month.value) + currentMonth;
    } else {
      monthValue = currentMonth - Number(month.value);
    }
    if (currentDay < Number(day.value)) {
      monthValue--;
      dayValue = monthsLen[currentMonth - 2] - Number(day.value) + currentDay;
    } else {
      dayValue = currentDay - Number(day.value);
    }
    if (dayValue === 1) {
      dayText.textContent = "day";
    } else {
      dayText.textContent = "days";
    }
    if (monthValue === 1) {
      monthText.textContent = "month";
    } else {
      monthText.textContent = "months";
    }
    if (yearValue === 1) {
      yearText.textContent = "year";
    } else {
      yearText.textContent = "years";
    }
    dayNum.textContent = dayValue.toString();
    monthNum.textContent = monthValue.toString();
    yearNum.textContent = yearValue.toString();
  }

  function validate(): void {
    let dayValid: boolean = false;
    let monthValid: boolean = false;
    let yearValid: boolean = false;
    if (day.value === "") {
      dayValid = false;
      dayError.textContent = "This field is required";
    } else if (day.value.match(numsRegex) === null) {
      dayValid = false;
      dayError.textContent = "Invalid day";
    } else if (Number(day.value) < 1 || Number(day.value) > 31) {
      dayValid = false;
      dayError.textContent = "Invalid day";
    } else {
      dayValid = true;
      dayError.textContent = "";
    }
    if (month.value === "") {
      monthValid = false;
      monthError.textContent = "This field is required";
    } else if (month.value.match(numsRegex) === null) {
      monthValid = false;
      monthError.textContent = "Invalid month";
    } else if (Number(month.value) < 1 || Number(month.value) > 12) {
      monthValid = false;
      monthError.textContent = "Invalid month";
    } else {
      monthValid = true;
      monthError.textContent = "";
    }
    if (year.value === "") {
      yearValid = false;
      yearError.textContent = "This field is required";
    } else if (
      year.value.match(numsRegex) === null ||
      year.value !== year.value.match(numsRegex)?.[0]
    ) {
      yearValid = false;
      yearError.textContent = "Invalid year";
    } else if (Number(year.value) < 1900 || Number(year.value) > currentYear) {
      yearValid = false;
      yearError.textContent = "Invalid year";
    } else {
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
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    validate();
  });
};
