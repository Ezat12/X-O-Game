let title = document.querySelector(".name-game")

let elementAll = document.querySelectorAll(".element");

let StartGame = document.querySelector(".start-game");

let turn = "X";

function theClick(id) {

  let element = document.getElementById(id)
  
  if (element.innerHTML == "" && turn == "X") {
    element.innerHTML = "X"
    turn = "O"

    title.innerHTML = "O is Click"

  }
  else if (element.innerHTML == "" && turn == "O") {

    element.innerHTML = "O";
    turn = "X";

    title.innerHTML = "X is Click";
  }
  winner();
}



function winner() {
  if (elementAll[0].innerHTML == elementAll[1].innerHTML && elementAll[1].innerHTML == elementAll[2].innerHTML && elementAll[0].innerHTML != "") {
    title.innerHTML = `the Winner is : ${elementAll[0].innerHTML}`;

    elementAll.forEach((e) => {
      e.classList.add("pointer");
    })

    colors(0, 1, 2);

    StartGame.style.display = "block";
  }
  else if (elementAll[3].innerHTML == elementAll[4].innerHTML && elementAll[4].innerHTML == elementAll[5].innerHTML && elementAll[3].innerHTML != "") {
    title.innerHTML = `the Winner is : ${elementAll[3].innerHTML}`;

    elementAll.forEach((e) => {
      e.classList.add("pointer");
    });

    colors(3, 4, 5);

    StartGame.style.display = "block";
  }
  else if (elementAll[6].innerHTML == elementAll[7].innerHTML && elementAll[7].innerHTML == elementAll[8].innerHTML && elementAll[6].innerHTML != "") {
    title.innerHTML = `the Winner is : ${elementAll[6].innerHTML}`;
    elementAll.forEach((e) => {
      e.classList.add("pointer");
    });

    colors(6, 7, 8);

    StartGame.style.display = "block";
  }
  else if (elementAll[0].innerHTML == elementAll[4].innerHTML && elementAll[4].innerHTML == elementAll[8].innerHTML && elementAll[0].innerHTML != "") {
    title.innerHTML = `the Winner is : ${elementAll[0].innerHTML}`;
    
    elementAll.forEach((e) => {
      e.classList.add("pointer");
    });

    colors(0, 4, 5);

    StartGame.style.display = "block";
  }
  else if (elementAll[2].innerHTML == elementAll[4].innerHTML && elementAll[4].innerHTML == elementAll[6].innerHTML && elementAll[2].innerHTML != "") {
    title.innerHTML = (`the Winner is : ${elementAll[2].innerHTML}`)
    
    elementAll.forEach((e) => {
      e.classList.add("pointer");
    });

    colors(2, 6, 4);

    StartGame.style.display = "block";
  }
  else if (elementAll[0].innerHTML == elementAll[3].innerHTML && elementAll[3].innerHTML == elementAll[6].innerHTML && elementAll[0].innerHTML != "") {
    title.innerHTML = `the Winner is : ${elementAll[0].innerHTML}`;
    
    elementAll.forEach((e) => {
      e.classList.add("pointer");
    });

    colors(0, 3, 6);

    StartGame.style.display = "block";
  }
  else if (elementAll[1].innerHTML == elementAll[4].innerHTML && elementAll[4].innerHTML == elementAll[7].innerHTML && elementAll[1].innerHTML != "") {
    title.innerHTML = `the Winner is : ${elementAll[1].innerHTML}`;
    
    elementAll.forEach((e) => {
      e.classList.add("pointer");
    });

    colors(4, 1, 7);

    StartGame.style.display = "block";
  }
  else if (elementAll[2].innerHTML == elementAll[5].innerHTML && elementAll[5].innerHTML == elementAll[8].innerHTML && elementAll[2].innerHTML != "") {
    title.innerHTML = `the Winner is : ${elementAll[2].innerHTML}`;
    
      elementAll.forEach((e) => {
        e.classList.add("pointer");
      });
    
    colors(8, 5, 2);

    StartGame.style.display = "block";
  }
}


function colors(num1, num2, num3) {
  elementAll[num1].style.backgroundColor = "#000";
  elementAll[num2].style.backgroundColor = "#000";
  elementAll[num3].style.backgroundColor = "#000";
}

function reload() {
  location.reload()
}