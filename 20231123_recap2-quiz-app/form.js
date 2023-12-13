// =========== CODE FIXED ABOVE THIS LINE ===========

// TODOForm submit  =========== NOT FIXED YET===========

const formNewCard = document.querySelector('[data-js="form-new-card"]');
const formNewCardSubmit = document.querySelector(
  '[data-js="form-new-card-submit"]'
);

formNewCard.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const formElements = event.target.elements;
  console.log("hallo");

  console.log(formElements);
  console.log(formElements.question.value);
  console.log(formElements.answer.value);
  console.log(formElements.tag.value);

  event.target.reset();
  formElements.question.focus();

  // TODO Create new card =========== NOT FIXED YET===========

  const card = document.createElement("li");
  card.classList.add("card-list__item");
  document.body.append(card);

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = "XXX QUESTION"; // variable

  const cardButtonAnswer = document.createElement("button");
  cardButtonAnswer.classList.add("card__button-answer");
  cardButtonAnswer.setAttribute("type", "button");
  cardButtonAnswer.setAttribute("data-js", "button-answer");
  cardButtonAnswer.textContent = "Show answer";

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer");
  cardAnswer.setAttribute("data-js", "card-answer");
  cardAnswer.textContent = "XXX ANSWER"; // variable

  const cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");

  const cardTagListItem = document.createElement("li"); // later implement function, depending on number of tags
  cardTagListItem.classList.add("card__tag-list-item");
  cardTagListItem.textContent = "# TAG"; // variable
  cardTagList.append(cardTagListItem);

  const cardButtonBookmark = document.createElement("div");
  cardButtonBookmark.classList.add("card__button-bookmark");

  const bookmark = document.createElement("button");
  bookmark.classList.add("bookmark");
  bookmark.setAttribute("aria-label", "bookmark");
  bookmark.setAttribute("type", "button");
  bookmark.setAttribute("data-js", "button-bookmark");
  cardButtonBookmark.append(bookmark);

  const bookmarkIcon = document.createElement("svg");
  bookmarkIcon.classList.add("bookmark__icon");
  bookmarkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  bookmarkIcon.setAttribute("viewbox", "0 0 24 24");
  cardButtonBookmark.append(bookmarkIcon);

  card.append(
    cardQuestion,
    cardButtonAnswer,
    cardAnswer,
    cardTagList,
    cardButtonBookmark
  );

  console.log(card);
});

// Assuming the data variable contains the data you want to transfer
// window.location.href = 'other.html?data=' + encodeURIComponent(data);
// const params = new URLSearchParams(window.location.search);
// const transferredData = params.get('data');

// =========== CODE TEMPLATE BELOW THIS LINE ===========

// console.log("Your question: ", isFilled(data.question));
// console.log("Your answer: ", isFilled(data.answer));
// console.log("Tag: ", isFilled(data.tag));

// function isFilled(field) {
//   if (field == "" || field == undefined || field == null) {
//     return "-";
//   }
//   return field;
// }

// =========== CODE TEMPLATE BELOW THIS LINE ===========

// const data = document.querySelector('#dataElement').value;
// Assuming the data variable contains the data you want to transfer
// window.location.href = 'other.html?data=' + encodeURIComponent(data);
// const params = new URLSearchParams(window.location.search);
// const transferredData = params.get('data');

// =========== CODE TEMPLATE BELOW THIS LINE (from Kevin)===========

// console.clear();

// const answer = document.querySelector('[data-js="answer"]');
// const answerButton = document.querySelector('[data-js="answer-button"]');

// const bookmark = document.querySelector('[data-js="bookmark"]');

// answerButton.addEventListener("click", () => {
//     answer.classList.toggle("hide-answer");

//     if(answerButton.textContent == "Antwort zeigen") {
//         answerButton.textContent = "Antwort verstecken";
//     } else {
//         answerButton.textContent = "Antwort zeigen"
//     }
// });

// bookmark.addEventListener("click", () => {

//     if (!bookmark.classList.contains("bookmarked")) {
//         bookmark.innerHTML = '<img src="img/icons/bookmarked.png" alt="Bookmark Icon" width="16" height="16"/>';
//     } else {
//         bookmark.innerHTML = '<img src="img/icons/not-bookmarked.png" alt="Bookmark Icon" width="16" height="16"/>';
//     }

//     bookmark.classList.toggle("bookmarked");
// });
