let rating = document.querySelector(".rating");
let thanks = document.querySelector(".thanks");
let spans = [...document.querySelectorAll(".rate-action")[0].children];
let errorMessage = document.querySelector(".error");

let button = document.querySelector(".button");
let rateValue = 0;

thanks.style.display = "none";

document.addEventListener("DOMContentLoaded", () => {
  spans.forEach((span) => {
    span.addEventListener("click", setRating);
  });
  button.addEventListener("click", buttonClick);
});

function buttonClick() {
  let infoSelect = document.querySelector(".info-select");
  let hasSelect = true;
  spans.forEach((span) => {
    if (span.classList.contains("selected")) {
      hasSelect = false;
    }
  });

  if (!hasSelect) {
    infoSelect.textContent = `You selected ${rateValue} out of 5`;
    rating.style.display = "none";
    thanks.style.display = "flex";
  } else {
    errorMessage.style.visibility = "visible";
  }
}

function setRating(e) {
  let currentSpan = e.target;
  currentSpan.classList.toggle("selected");
  errorMessage.style.visibility = "hidden";
  spans.forEach((span) => {
    if (span !== currentSpan) {
      span.classList.remove("selected");
    }
  });
  rateValue = Number(currentSpan.textContent);
}
