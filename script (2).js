let money = 500;
let multiplier = 1;
firstTrophyAwarded = false;
secondTrophyAwarded = false;
thirdTrophyAwarded = false;
fourthTrophyAwarded = false;
fifthTrophyAwarded = false;
sixthTrophyAwarded = false;

const gameContainer = document.getElementById('gameContainer');
const gameBoard = document.getElementById('gameBoard');
const gameWall = document.getElementById('gameWall');
const context = gameBoard.getContext("2d")

window.addEventListener("keydown", move)


function move(event){
 switch (event.key) {
   case " ":
   multiplier += 100;
  document.getElementById("multiplier").textContent = "Multiplier: x" + multiplier;
break;
   case "f":
      multiplier += 1000000000000;
       document.getElementById("multiplier").textContent = "Multiplier: x" + multiplier;
     break;
 }
}

function drawRectangle(){
  context.fillStyle = "beige";
  context.fillRect(50, 50, 400, 150);
  context.strokeStyle= "black"
  context.strokeRect(50, 50, 400, 150);
}


function drawSecondRectangle(){
  context.save()
  context.translate(200, 100);
   context.translate(-25, -75);
  context.rotate(1/ 4);
 context.fillStyle = "black";
  context.fillRect(75, 5, 200, 50);
  context.strokeStyle= "black"
  context.strokeRect(75, 5, 200, 50);
   context.restore()
}



function drawImage(){
  const img = new Image();
  img.src = "keyboard.jpg"

  img.onload = function (){
    context.drawImage(img, 150, 150, 250, 50);
  }
}

const jackdaniels = { src: "jackdaniels.png"}

function drawJackDaniels() {
  const img = new Image();
  img.src = "jackdaniels.png";

  img.onload = function (){
    context.drawImage(img, 75, 75, 50, 50);
  };
}

const jackDaniels = {
  x: 75,
  y: 75,
  width: 50,
  height: 50,
  src: "jackdaniels.png"
};


const keyboard = {
  x: 150,
  y: 150,
  width: 250,
  height: 50,
  src: "keyboard.jpg"
};

function getMoney(){
const randomNum = Math.floor(Math.random()*2)+1 ;
 if(randomNum == 1){
   money += multiplier;
   document.getElementById("money").innerHTML = "Money: $" + money;
 }
  else if(randomNum == 2){
    money -= multiplier;
     document.getElementById("money").innerHTML = "Money: $" + money;
  }
  checkTrophyOne()
  checkTrophyTwo()
  checkTrophyThree()
  checkTrophyFour()
  checkTrophyFive()
  checkTrophySix()
}
 

function getMultiplier(){
multiplier +=1;
  document.getElementById("multiplier").textContent = "Multiplier: x" + multiplier;
  }

gameBoard.addEventListener('click', function(event) {
  // Get the mouse position relative to the canvas
  const rect = gameBoard.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Check if the click is within the bounds of the keyboard image
  if (mouseX >= keyboard.x && mouseX <= keyboard.x + keyboard.width &&
      mouseY >= keyboard.y && mouseY <= keyboard.y + keyboard.height) {
    getMoney();
  }

  // Check if the click is within the bounds of the Jack Daniels image
  if (mouseX >= jackDaniels.x && mouseX <= jackDaniels.x + jackDaniels.width &&
      mouseY >= jackDaniels.y && mouseY <= jackDaniels.y + jackDaniels.height) {
    getMultiplier();
  }
});


function checkTrophyOne() {
  if (money >= 1000 && !firstTrophyAwarded) {
    window.alert('You have reached $1000 as a reward you got axe deo!');
    firstTrophyAwarded = true; 
    document.getElementById("reward1000").style.display = "block";
  }
}

function checkTrophyTwo(){
   if(money >= 2500 && !secondTrophyAwarded) {
      window.alert('You have reached $2500 as a reward you got a ps5!');
      secondTrophyAwarded = true; 
      document.getElementById("reward2500").style.display = "block";
  }
}

function checkTrophyThree(){
   if(money >= 5000 && !thirdTrophyAwarded) {
      window.alert('You have reached $5000 as a reward you got a lambo!');
      thirdTrophyAwarded = true; 
      document.getElementById("reward5000").style.display = "block";
  }
}

function checkTrophyFour(){
   if(money >= 10000 && !fourthTrophyAwarded) {
      window.alert('You have reached $10000 as a reward you got a yacht!');
      fourthTrophyAwarded = true; 
      document.getElementById("reward10000").style.display = "block";
  }
}

function checkTrophyFive(){
   if(money >= 50000 && !fifthTrophyAwarded) {
      window.alert('You have reached $50000 as a reward you got a jet!');
      fifthTrophyAwarded = true; 
      document.getElementById("reward50000").style.display = "block";
  }
}

function checkTrophySix(){
   if(money >= 50000 && !sixthTrophyAwarded) {
      window.alert('You have reached $100000 as a reward you got a mansion!');
      sixthTrophyAwarded = true; 
      document.getElementById("reward100000").style.display = "block";
  }
}

/*document.getElementById("how").onclick = function() {
  window.alert = ("Click on Keyboard to gamble, click on the Jack Daniels to get a multiplier.")
};*/
document.getElementById("how").onclick = function (){
  window.alert("Click on the keyboard to gamble, click on the Jack Daniels to get a multiplier.")
}
function checkLose(){
if(money <= 0){
  window.alert("You have lost all your money, please restart the game.")
  let money = 500;
  let multiplier = 1;
  firstTrophyAwarded = false;
  secondTrophyAwarded = false;
  thirdTrophyAwarded = false;
  fourthTrophyAwarded = false;
  fifthTrophyAwarded = false;
  sixthTrophyAwarded = false;
}}


drawRectangle();
drawSecondRectangle()
drawImage()
drawJackDaniels()
checkTrophyOne()
checkTrophyTwo()
checkTrophyThree()
//button()
