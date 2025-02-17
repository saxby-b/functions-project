const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const h2 = document.querySelector("h2");


var startMyDay = function () {
  h1.innerText = "It's important to stay hydrated!";
};

//console.log(startMyDay);

startMyDay();


var favoriteDrink = function (drink) {
  p.innerText = `My favorite drink is ${drink}.`;
};

//console.log(favoriteCookie("chocolate chip"));
favoriteDrink("lemonade");

var introduce = function (name, occupation) {
  h2.innerText = `Hi my name is ${name} and I am a  ${occupation}.`;
};

//console.log(introduce("Caroline", "student"));

//console.log(introduce("Saxby", "front-end-delveloper"));

introduce("Saxby", "front-end developer");

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );

  if (numGlasses >= 8) {
    alert("Great job! You are really hydrated!");
  } else {
    alert("Not bad, not bad. Let's try to drink more water tomorrow!");
  }
};

hydrationFeedback();
