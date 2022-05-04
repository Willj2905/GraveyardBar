var drink = document.getElementById("dummy");

function move() {
  drink.style.left = "875px";
  drink.classList.remove("drink");
  drink.classList.add("hide");
  setTimeout(() => {
    drink.style.display = "none";
    drink.classList.remove("hide");
    drink.classList.add("drink");
    drink.style.left = "-15px";
  }, 1000);
};

function select(choice) {
  var choose = choice.className;
  if (choose == "calico") {
    document.getElementById("img5").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img5");
    }, 1000);
    document.getElementById("response").innerHTML = "Here's Calico Jack spiced rum. It's the cheapest thing I found at the liquor store, but it's rum so its not bad.";
  } else if (choose == "svedka") {
    document.getElementById("img6").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img6");
    }, 1000);
    document.getElementById("response").innerHTML = "That's Svedka vodka. Super cheap vodka. Truly awful. Here's a shot for ya.";
  } else if (choose == "smirnoff") {
    document.getElementById("img7").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img7");
    }, 1000);
    document.getElementById("response").innerHTML = "For some reason I thought Smirnoff vodka was fancy, I was wrong, have a shot.";
  } else if (choose == "boston") {
    document.getElementById("img8").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img8");
    }, 1000);
    document.getElementById("response").innerHTML = "Mr. Boston white rum. Don't know who Mr. Boston is but he makes a good long island.";
  } else if (choose == "bacardi") {
    document.getElementById("img9").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img9");
    }, 1000);
    document.getElementById("response").innerHTML = "Bacardi is what me and my family used to make mojito's during quarantine happy hour.";
  } else if (choose == "kraken") {
    document.getElementById("img10").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img10");
    }, 1000);
    document.getElementById("response").innerHTML = "Kraken spiced rum was a gift from my brother when he moved out of his place, I wouldn't buy it because it's too expensive, but makes a good rum and coke.";
  } else if (choose == "trois") {
    document.getElementById("img11").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img11");
    }, 1000);
    document.getElementById("response").innerHTML = "Menage a Trois Sauvignon Blanc, pretty sure I butchered every one of those words.";
  } else if (choose == "owl") {
    document.getElementById("img12").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img12");
    }, 1000);
    document.getElementById("response").innerHTML = "If you want cheap wine get Winking Owl. It's three dollars at Aldi.";
  } else if (choose == "owlwhite") {
    document.getElementById("img13").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img13");
    }, 1000);
    document.getElementById("response").innerHTML = "Winking Owl Chardonnay. Probably the best Chardonnay you'll get for three dollars.";
  } else if (choose == "barefoot") {
    document.getElementById("img14").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img14");
    }, 1000);
    document.getElementById("response").innerHTML = "Barefoot Moscato is a classic. Cheap and tastes like apple juice.";
  } else if (choose == "dale") {
    document.getElementById("img15").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img15");
    }, 1000);
    document.getElementById("response").innerHTML = "Midnight Dale Mead. I only got this so I could feel like I was in Game of Thrones";
  } else if (choose == "artiechardonnay") {
    document.getElementById("img16").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img16");
    }, 1000);
    document.getElementById("response").innerHTML = "Artie Chardonnay is okay. The only reason I got it is because it has a cork made into a giraffe on the front.";
  } else if (choose == "artiepinot") {
    document.getElementById("img17").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img17");
    }, 1000);
    document.getElementById("response").innerHTML = "Artie Pinot Grigio is pretty good. Has a nice little cork dressed as a spartan on the front.";
  } else if (choose == "artieblanc") {
    document.getElementById("img18").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img18");
    }, 1000);
    document.getElementById("response").innerHTML = "Artie Savignon Blanc is probably my favorite wine. It's not amazing but it does have a cork dressed as a frenchman on the front.";
  } else if (choose == "chateau") {
    document.getElementById("img19").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img19");
    }, 1000);
    document.getElementById("response").innerHTML = "A gift from my parents, Chateau Ste. Michelle Riesling is solid. Definitely more expensive than anything I'd buy but I can't tell the difference.";
  } else if (choose == "crawford") {
    document.getElementById("img20").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img20");
    }, 1000);
    document.getElementById("response").innerHTML = "I don't know who Kim Crawford is but her wine isn't too bad.";
  } else if (choose == "billings") {
    document.getElementById("img21").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img21");
    }, 1000);
    document.getElementById("response").innerHTML = "Billings Farm Rosé. I don't have Rosé often but it's always good.";
  } else if (choose == "camelot") {
    document.getElementById("img22").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img22");
    }, 1000);
    document.getElementById("response").innerHTML = "I got Camelot Mead as an alternative to the other Mead I got. This one is straight honey wine without added flavors.";
  } else if (choose == "andre") {
    document.getElementById("img23").style.display = "block";
    move();
    setTimeout(() => {
      drink = document.getElementById("img23");
    }, 1000);
    document.getElementById("response").innerHTML = "Andre Champagne is six dollars and great for making mimosas before morning football games.";
  }
};
