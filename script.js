var startMyDay = function () {
  return "Time for a coffee and a shower!";
};

console.log(startMyDay);

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie("chocolate chip"));

var introduce = function (name, occupation) {
  return `Hi my name is ${name} and I am a  ${occupation}.`;
};

console.log(introduce("Caroline", "student"));

console.log(introduce("Saxby", "front-end-delveloper"));

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
