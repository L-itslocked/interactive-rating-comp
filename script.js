const ratings = document.querySelectorAll("input");
const ratingCard = document.getElementById("rating-state");
const thankYou = document.querySelector(".hidden");
const selected = document.getElementById("rating-selection");

function showThankYou() {
  ratingCard.style.display = "none";
  thankYou.classList.remove("hidden");
  ratings.value = selected.innerHTML;
}
