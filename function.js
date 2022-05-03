var drink = document.getElementById("dummy");

function move() {
drink.style.left = "875px";
drink.classList.remove("drink");
drink.classList.add("hide");
setTimeout(() => {drink.style.display = "none";
drink.classList.remove("hide");
drink.classList.add("drink");
drink.style.left = "-15px";}, 1000);
};

function select(choice) {
  var choose = choice.className;
  if (choose == "calico") {
    document.getElementById("img5").style.display = "block";
    move();
    setTimeout(() => {drink = document.getElementById("img5");}, 1000);
    document.getElementById("response").innerHTML = "Here's Calico Jack spiced rum. It's the cheapest thing I found at the liquor store, but it's rum so its not bad.";
  }
  else if (choose == "svedka") {
    document.getElementById("img6").style.display = "block";
    move();
    setTimeout(() => {drink = document.getElementById("img6");}, 1000);
    document.getElementById("response").innerHTML = "That's Svedka vodka. Super cheap vodka. Truly awful. Here's a shot for ya.";
}
else if (choose == "smirnoff") {
  document.getElementById("img7").style.display = "block";
  move();
  setTimeout(() => {drink = document.getElementById("img7");}, 1000);
  document.getElementById("response").innerHTML = "For some reason I thought Smirnoff vodka was fancy, I was wrong, have a shot.";
}
else if (choose == "boston") {
  document.getElementById("img8").style.display = "block";
  move();
  setTimeout(() => {drink = document.getElementById("img8");}, 1000);
  document.getElementById("response").innerHTML = "Mr. Boston white rum. Don't know who Mr. Boston is but he makes a good long island.";
}
else if (choose == "bacardi") {
  document.getElementById("img9").style.display = "block";
  move();
  setTimeout(() => {drink = document.getElementById("img9");}, 1000);
  document.getElementById("response").innerHTML = "Bacardi is what me and my family used to make mojito's during quarantine happy hour.";
}
else if (choose == "kraken") {
  document.getElementById("img10").style.display = "block";
  move();
  setTimeout(() => {drink = document.getElementById("img10");}, 1000);
  document.getElementById("response").innerHTML = "Kraken spiced rum was a gift from my brother when he moved out of his place, I wouldn't buy it because it's too expensive, but makes a good rum and coke.";
}
};
