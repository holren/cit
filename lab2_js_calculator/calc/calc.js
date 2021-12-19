let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let calc_button = document.querySelector(".calculator__button button");

let a_value;
let b_value;
let c_value;
let message;

function quadratic_equation(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    message =
      "<div class='result'><p>Дискриминант = " +
      D +
      "</p><p>Нет корней</p></div>";
  } else if (D === 0) {
    let x = ((-b + Math.sqrt(D)) / 2) * a;
    message =
      "<div class='result'><p>Дискриминант = " +
      D +
      "</p><p>Один корень</p><p>x = " +
      x +
      "</p></div>";
  } else {
    let x1 = ((-b + Math.sqrt(D)) / 2) * a;
    let x2 = ((-b - Math.sqrt(D)) / 2) * a;
    message =
      "<div class='result'><p>Дискриминант = " +
      D +
      "</p><p>Два корня</p><p>x1 = " +
      x1 +
      "</p><p>x2 = " +
      x2 +
      "</p></div>";
  }
  calc_button.insertAdjacentHTML("afterend", message);
}

calc_button.addEventListener("click", function () {
  a_value = Number(a.value);
  b_value = Number(b.value);
  c_value = Number(c.value);

  if (a_value === 0) {
    alert("a не может быть равен 0");
  } else {
    quadratic_equation(a_value, b_value, c_value);
  }
});
