const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const cost = document.querySelector(".cost");
const costInfo = document.querySelector(".cost-info");
const countBtn = document.querySelector(".count");

const countSplitCheck = () => {
  if (price.value === "" || people.value === "" || tip.value === "") {
    error.textContent = "Podaj wszystkie wartości";
    costInfo.style.display = "none";
  } else if (parseFloat(people.value) === 0) {
    error.textContent = "Liczba osób musi być większa niż 0";
    costInfo.style.display = "none";
  } else {
    error.textContent = "";

    const totalAmount = parseFloat(price.value) * (1 + parseFloat(tip.value));
    const amountPerPerson = totalAmount / parseInt(people.value);

    cost.textContent = amountPerPerson.toFixed(2);
    costInfo.style.display = "block";
  }
};

countBtn.addEventListener("click", countSplitCheck);
