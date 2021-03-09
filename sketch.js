let dots = [];
let dsize = 20;
let leftPlayer;
let rightPlayer;
let ball;
let scoreleft = 0;
let scoreright = 0;

function setup() {
  createCanvas(1000, 800);
  for (let i = dsize; i < height; i += dsize) {
    dots.push(createVector(width / 2 - dsize / 4, i - dsize / 2))
  }
  leftPlayer = new player1();
  ball = new Ball();
  rightPlayer = new player2(ball);

}


function scoreBoard(){
  fill(255);
  textSize(32)
  let score1 = "score : " + scoreleft;
  let score2 = "score : " + scoreright;
  // left player
  text(score1,width/2 - 180,80);
  // right player
  text(score2,width/2 + 50,80);
}

function draw() {
  background(0);
  fill(255);
  createLine()
  ball.update()
  ball.show()
 
  rightPlayer.show()
  rightPlayer.update()

  leftPlayer.show()
  leftPlayer.update()
  rightPlayer.hits(ball);
  leftPlayer.hits(ball);
  
  ball.score()
  scoreBoard()

 
}

function keyReleased(){
  // if(keyCode === )
  leftPlayer.stop();
  rightPlayer.stop();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    rightPlayer.dir(-15);
  }else if(keyCode === DOWN_ARROW){
    rightPlayer.dir(15);
  }

  if(key === 'w'){
    leftPlayer.dir(-15);
  }else if(key === 's'){
    leftPlayer.dir(15)
  }
}

// line function 
function createLine() {
  for (let i = 0; i < dots.length; i++) {
    let x = dots[i].x;
    let y = dots[i].y;
    rect(x, y, dsize / 2, dsize / 2)
  }
}