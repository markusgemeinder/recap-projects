// Bookmark button toggle function

console.clear();

const buttonBookmark = document.querySelector('[data-js="button-bookmark"]');

buttonBookmark.addEventListener("click", () => {
  buttonBookmark.classList.toggle("bookmark--active");
});

// Show answer button toggle function

const buttonAnswer = document.querySelector('[data-js="button-answer"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

buttonAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
});

// =========== CODE FIXED ABOVE THIS LINE ===========
