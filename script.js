let cardName = document.getElementById("card-name");
let cardNo = document.getElementById("card-no");
let cardMonth = document.getElementById("card-month");
let cardYear = document.getElementById("card-year");
let cardCvc = document.getElementById("card-cvc");
let nameBox = document.getElementById("name-box");
let cardBox = document.getElementById("card-box");
let monthBox = document.getElementById("month-box");
let yearBox = document.getElementById("year-box");
let cvcBox = document.getElementById("cvc-box");
let nameErr = document.getElementById("name-err");
let numberErr = document.getElementById("number-err");
let mmErr = document.getElementById("mm-err");
let yyErr = document.getElementById("yy-err");
let cvcErr = document.getElementById("cvc-err");
let cardNoDsk = document.getElementById("card-no-dsk");
let cardNameDsk = document.getElementById("card-name-dsk");
let cardMonthDsk = document.getElementById("card-month-dsk");
let cardYearDsk = document.getElementById("card-year-dsk");
let cardCvcDsk = document.getElementById("card-cvc-dsk");
let nameBoxDsk = document.getElementById("name-box-dsk");
let cardBoxDsk = document.getElementById("card-box-dsk");
let monthBoxDsk = document.getElementById("month-box-dsk");
let yearBoxDsk = document.getElementById("year-box-dsk");
let cvcBoxDsk = document.getElementById("cvc-box-dsk");
let nameErrDsk = document.getElementById("name-err-dsk");
let numberErrDsk = document.getElementById("number-err-dsk");
let mmErrDsk = document.getElementById("mm-err-dsk");
let yyErrDsk = document.getElementById("yy-err-dsk");
let cvcErrDsk = document.getElementById("cvc-err-dsk");
let confirmBtn = document.getElementById("confirm-btn");
let confirmBtnDsk = document.getElementById("confirm-btn-dsk");
let registrationForm = document.getElementById("registration-form");
let completeState = document.getElementById("complete-state");
let registrationFormDsk = document.getElementById("registration-form-dsk");
let completeStateDsk = document.getElementById("complete-state-dsk");
nameBox.addEventListener("keyup", function () {
  if (!nameBox.value.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)) {
    nameErr.innerHTML = "wrong name format";
    nameBox.style.borderColor = "red";
    return false;
  } else {
    nameErr.innerHTML = "";
  }
  cardName.innerHTML = nameBox.value;
  nameBox.style.borderColor = "hsl(279, 6%, 55%)";
});

cardBox.addEventListener("keyup", function () {
  let cardValue = cardBox.value.replace(/\s+/g, "");
  let formatedValue = "";
  for (let i = 0; i < cardValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatedValue += " ";
    }
    formatedValue += cardValue[i];
  }

  cardBox.value = formatedValue;
  cardNo.innerHTML = formatedValue;
  if (cardBox.value.length > 19 || cardBox.value.length < 19) {
    numberErr.innerHTML = "Must be 16 digits only";
    cardBox.style.borderColor = "red";
    return false;
  } else if (cardBox.value.length === 19) {
    numberErr.innerHTML = "";
    cardBox.style.borderColor = "hsl(270, 3%, 87%)";
  }
  // if (!cardBox.value.match(/^\d+$/)) {
  //   numberErr.innerHTML = "Wrong format";
  //   cardBox.style.borderColor = "red";
  //   return false;
  // }

  cardBox.style.borderColor = "hsl(279, 6%, 55%)";
});

monthBox.addEventListener("keyup", function () {
  cardMonth.innerHTML = monthBox.value + "/";
  if (!monthBox.value.match(/^\d+$/)) {
    monthBox.style.borderColor = "red";
    return false;
  } else {
    mmErr.innerHTML = "";
    monthBox.style.borderColor = "hsl(270, 3%, 87%)";
  }
  if (monthBox.value.length > 2 || monthBox.value.length === 1) {
    mmErr.innerHTML = "not valid";
    monthBox.style.borderColor = "red";
    return false;
  } else {
    mmErr.innerHTML = "";
  }

  if (monthBox.value > 12) {
    mmErr.innerHTML = "not valid";
    monthBox.style.borderColor = "red";
    return false;
  } else {
    mmErr.innerHTML = "";
  }
  monthBox.style.borderColor = "hsl(279, 6%, 55%)";
});

yearBox.addEventListener("keyup", function () {
  cardYear.innerHTML = yearBox.value;
  if (!yearBox.value.match(/^\d+$/)) {
    yearBox.style.borderColor = "red";
    return false;
  } else {
    yyErr.innerHTML = "";
    yearBox.style.borderColor = "hsl(270, 3%, 87%)";
  }
  if (yearBox.value.length > 2 || yearBox.value.length === 1) {
    yyErr.innerHTML = "not valid";
    yearBox.style.borderColor = "red";
    return false;
  } else {
    yyErr.innerHTML = "";
  }
  yearBox.style.borderColor = "hsl(279, 6%, 55%)";
});

cvcBox.addEventListener("keyup", function () {
  cardCvc.innerHTML = cvcBox.value;
  if (!cvcBox.value.match(/^\d+$/)) {
    cvcBox.style.borderColor = "red";
    return false;
  } else {
    cvcErr.innerHTML = "";
    cvcBox.style.borderColor = "hsl(270, 3%, 87%)";
  }
  if (
    cvcBox.value.length > 3 ||
    cvcBox.value.length === 1 ||
    cvcBox.value.length === 2
  ) {
    cvcErr.innerHTML = "not valid";
    cvcBox.style.borderColor = "red";
    return false;
  }
  cvcBox.style.borderColor = "hsl(279, 6%, 55%)";
});

nameBoxDsk.addEventListener("keyup", function () {
  if (!nameBoxDsk.value.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)) {
    nameErrDsk.innerHTML = "wrong name format";
    nameBoxDsk.style.borderColor = "red";
    return false;
  } else {
    nameErrDsk.innerHTML = "";
  }
  cardNameDsk.innerHTML = nameBoxDsk.value;
  nameBoxDsk.style.borderColor = "hsl(279, 6%, 55%)";
});

cardBoxDsk.addEventListener("keyup", function () {
  let cardValueDsk = cardBoxDsk.value.replace(/\s+/g, "");
  let formatedValueDsk = "";
  for (let i = 0; i < cardValueDsk.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatedValueDsk += " ";
    }
    formatedValueDsk += cardValueDsk[i];
  }

  cardBoxDsk.value = formatedValueDsk;
  cardNoDsk.innerHTML = formatedValueDsk;
  if (cardBoxDsk.value.length > 19 || cardBoxDsk.value.length < 19) {
    numberErrDsk.innerHTML = "Must be 16 digits only";
    cardBoxDsk.style.borderColor = "red";
    return false;
  } else if (cardBoxDsk.value.length === 19) {
    numberErrDsk.innerHTML = "";
    cardBoxDsk.style.borderColor = "hsl(270, 3%, 87%)";
  }
  if (cardBoxDsk.value.match(/^\d+$/)) {
    numberErrDsk.innerHTML = "Wrong format";
    cardBoxDsk.style.borderColor = "red";
    return false;
  }

  // if (!/[0-9]/.test(e.key)) {
  //   e.preventDefault();
  // }
  cardBoxDsk.style.borderColor = "hsl(279, 6%, 55%)";
});

monthBoxDsk.addEventListener("keyup", function () {
  cardMonthDsk.innerHTML = monthBoxDsk.value + "/";
  if (!monthBoxDsk.value.match(/^\d+$/)) {
    monthBoxDsk.style.borderColor = "red";
    return false;
  } else {
    mmErrDsk.innerHTML = "";
    monthBoxDsk.style.borderColor = "hsl(270, 3%, 87%)";
  }
  if (monthBoxDsk.value.length > 2 || monthBoxDsk.value.length === 1) {
    mmErrDsk.innerHTML = "not valid";
    monthBoxDsk.style.borderColor = "red";
    return false;
  } else {
    mmErrDsk.innerHTML = "";
  }

  if (monthBoxDsk.value > 12) {
    mmErrDsk.innerHTML = "not valid";
    monthBoxDsk.style.borderColor = "red";
    return false;
  } else {
    mmErrDsk.innerHTML = "";
  }
  monthBoxDsk.style.borderColor = "hsl(279, 6%, 55%)";
});

yearBoxDsk.addEventListener("keyup", function () {
  cardYearDsk.innerHTML = yearBoxDsk.value;
  if (!yearBoxDsk.value.match(/^\d+$/)) {
    yearBoxDsk.style.borderColor = "red";
    return false;
  } else {
    yyErrDsk.innerHTML = "";
    yearBoxDsk.style.borderColor = "hsl(270, 3%, 87%)";
  }
  if (yearBoxDsk.value.length > 2 || yearBoxDsk.value.length === 1) {
    yyErrDsk.innerHTML = "not valid";
    yearBoxDsk.style.borderColor = "red";
    return false;
  } else {
    yyErrDsk.innerHTML = "";
  }
  yearBoxDsk.style.borderColor = "hsl(279, 6%, 55%)";
});

cvcBoxDsk.addEventListener("keyup", function () {
  cardCvcDsk.innerHTML = cvcBoxDsk.value;
  if (!cvcBoxDsk.value.match(/^\d+$/)) {
    cvcBoxDsk.style.borderColor = "red";
    return false;
  } else {
    cvcErrDsk.innerHTML = "";
    cvcBoxDsk.style.borderColor = "hsl(270, 3%, 87%)";
  }
  if (
    cvcBoxDsk.value.length > 3 ||
    cvcBoxDsk.value.length === 1 ||
    cvcBoxDsk.value.length === 2
  ) {
    cvcErrDsk.innerHTML = "not valid";
    cvcBoxDsk.style.borderColor = "red";
    return false;
  }
  cvcBoxDsk.style.borderColor = "hsl(279, 6%, 55%)";
});

confirmBtn.addEventListener("click", function () {
  if (!nameBox.value.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)) {
    nameErr.innerHTML = "cannot be blank";
    nameBox.style.borderColor = "red";
    return false;
  }
  if (cardBox.value.length === 0) {
    numberErr.innerHTML = "cannot be blank";
    cardBox.style.borderColor = "red";
    return false;
  }
  if (monthBox.value.length === 0 || yearBox.value.length === 0) {
    mmErr.innerHTML = "cannot be blank";
    monthBox.style.borderColor = "red";
    yearBox.style.borderColor = "red";
    yyErr.innerHTML = "";
    return false;
  }
  if (cvcBox.value.length === 0) {
    cvcErr.innerHTML = "cannot be blank";
    cvcBox.style.borderColor = "red";
    return false;
  }
  if (cardBox.value.length > 19 || cardBox.value.length < 19) {
    numberErr.innerHTML = "Must be 16 digits only";
    cardBox.style.borderColor = "red";
    return false;
  }
  if (!monthBox.value.match(/^\d+$/)) {
    monthBox.style.borderColor = "red";
    return false;
  }
  if (monthBox.value.length > 2 || monthBox.value.length === 1) {
    mmErr.innerHTML = "not valid";
    monthBox.style.borderColor = "red";
    return false;
  }
  if (monthBox.value > 12) {
    mmErr.innerHTML = "not valid";
    monthBox.style.borderColor = "red";
    return false;
  }
  if (!yearBox.value.match(/^\d+$/)) {
    yearBox.style.borderColor = "red";
    return false;
  }
  if (yearBox.value.length > 2 || yearBox.value.length === 1) {
    yyErr.innerHTML = "not valid";
    yearBox.style.borderColor = "red";
    return false;
  }
  if (!cvcBox.value.match(/^\d+$/)) {
    cvcBox.style.borderColor = "red";
    return false;
  }
  if (
    cvcBox.value.length > 3 ||
    cvcBox.value.length === 1 ||
    cvcBox.value.length === 2
  ) {
    cvcErr.innerHTML = "not valid";
    cvcBox.style.borderColor = "red";
    return false;
  } else {
    nameErr.innerHTML = "";
    mmErr.innerHTML = "";
    registrationForm.style.display = "none";
    completeState.style.display = "flex";
  }
});
confirmBtnDsk.addEventListener("click", function () {
  if (!nameBoxDsk.value.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)) {
    nameErrDsk.innerHTML = "cannot be blank";
    nameBoxDsk.style.borderColor = "red";
    return false;
  }
  if (cardBoxDsk.value.length === 0) {
    numberErrDsk.innerHTML = "cannot be blank";
    cardBoxDsk.style.borderColor = "red";
    return false;
  }
  if (monthBoxDsk.value.length === 0 || yearBoxDsk.value.length === 0) {
    mmErrDsk.innerHTML = "cannot be blank";
    monthBoxDsk.style.borderColor = "red";
    yearBoxDsk.style.borderColor = "red";
    yyErrDsk.innerHTML = "";
    return false;
  }
  if (cvcBoxDsk.value.length === 0) {
    cvcErrDsk.innerHTML = "cannot be blank";
    cvcBoxDsk.style.borderColor = "red";
    return false;
  }
  if (cardBoxDsk.value.length > 19 || cardBoxDsk.value.length < 19) {
    numberErrDsk.innerHTML = "Must be 16 digits only";
    cardBoxDsk.style.borderColor = "red";
    return false;
  }
  if (!monthBoxDsk.value.match(/^\d+$/)) {
    monthBoxDsk.style.borderColor = "red";
    return false;
  }
  if (monthBoxDsk.value.length > 2 || monthBoxDsk.value.length === 1) {
    mmErrDsk.innerHTML = "not valid";
    monthBoxDsk.style.borderColor = "red";
    return false;
  }
  if (monthBoxDsk.value > 12) {
    mmErrDsk.innerHTML = "not valid";
    monthBoxDsk.style.borderColor = "red";
    return false;
  }
  if (!yearBoxDsk.value.match(/^\d+$/)) {
    yearBoxDsk.style.borderColor = "red";
    return false;
  }
  if (yearBoxDsk.value.length > 2 || yearBoxDsk.value.length === 1) {
    yyErrDsk.innerHTML = "not valid";
    yearBoxDsk.style.borderColor = "red";
    return false;
  }
  if (!cvcBoxDsk.value.match(/^\d+$/)) {
    cvcBoxDsk.style.borderColor = "red";
    return false;
  }
  if (
    cvcBoxDsk.value.length > 3 ||
    cvcBoxDsk.value.length === 1 ||
    cvcBoxDsk.value.length === 2
  ) {
    cvcErrDsk.innerHTML = "not valid";
    cvcBoxDsk.style.borderColor = "red";
    return false;
  } else {
    nameErrDsk.innerHTML = "";
    mmErrDsk.innerHTML = "";
    registrationFormDsk.style.display = "none";
    completeStateDsk.style.display = "flex";
  }
});
