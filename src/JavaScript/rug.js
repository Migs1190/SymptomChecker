`use strict`;
const mysql = require(`mysql`);

const con = mysql.createConnection({
  host: "localhost",
  user: "Migs",
  password: "mm1372002",
  database: "main",
});

let age_input = document.querySelector(`input[name="age-input"]`);
let next_button = document.querySelector(`.next`);
let prev_button = document.querySelector(`.prev`);
let male_button = document.querySelector(`.male-btn`);
let female_button = document.querySelector(`.female-btn`);
let selected_age;
let selected_gender;
let left_list = document.querySelector(`.left-list`);
let right_list = document.querySelector(`.right-list`);
let chosen = document.querySelector(`.choice`);

/*---------------------------Functions-----------------------------------*/

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM symptoms", function (err, result, fields) {
    console.log(result);
    if (err) throw err;
    {
      if (e.symptom_branching == 1) {
        left_list.innerHTML += `
        <div class="choice sub">
    <input type="checkbox" name="check" />
    ${e.symptom_name}
    </div>`;
      }
      result.forEach(function (e) {
        left_list.innerHTML += `
        <div class="choice">
<input type="checkbox" name="check" />
${e.symptom_name}
</div>`;
      });
    }
  });
});

/*---------------------------Events-------------------------------*/
if (age_input) {
  age_input.addEventListener(`input`, function () {
    if (age_input.value > 3) age_input.value = age_input.value.slice(0, 3);
    age_input.value = age_input.value
      .replace(/^0+(?=\d)|[^0-9\\.]/g, "")
      .replace(/(\\.*)\\./g, "$1");
    if (age_input.value > 122) age_input.value = 122;
  });
}
if (next_button) {
  next_button.addEventListener("click", function () {
    if (age_input.value == 122) age_input.value = -1;
    age_input.value = ++age_input.value;
  });
}

if (prev_button) {
  prev_button.addEventListener("click", function () {
    if (age_input.value == 0) age_input.value = 123;
    age_input.value = --age_input.value;
  });
}

if (male_button) {
  male_button.addEventListener("click", function () {
    if (age_input.value == ``) return;

    selected_age = age_input.value;
    selected_gender = 1;
  });
}
if (female_button) {
  female_button.addEventListener("click", function () {
    if (age_input.value == ``) return;

    selected_age = age_input.value;
    selected_gender = 2;
  });
}
// console.log(selected_age, selected_gender);
