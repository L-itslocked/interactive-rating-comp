let ratings = document.querySelector(".circle");
const ratingCard = document.getElementById("rating-state");
const btn = document.getElementById("button");
const thankYou = document.querySelector(".hidden");
const ratingSelection = document.getElementById("rating-selection");

function showThankYou() {
  ratingCard.style.display = "none";
  thankYou.classList.remove("hidden");

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      ratingSelection.innerHTML = rating.innerHTML;
    });
  });
}

btn.addEventListener("click", showThankYou);
