var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn;
var gameState = "PLAY";
var line;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",750,750);
 text("500",660,750);
 text("100",570,750);
 text("100",500,750);
 text("100",410,750);
 text("100",340,750);
 text("100",270,750);
 text("500",190,750);
 text("500",110,750);
 text("500",30,750);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  if(particle!=null){
    particle.display();
    
    if(particle.body.position.y>760){
    if(particle.body.position.x<300){
      score=score+500;
      particle=null;
      if(turn>=5){
        gameState="end";
      }
    }else if(particle.body.position.x>301 && particle.body.position.x<600){
score = score+100;
particle = null;
if(turn>=5){
  gameState="end";
}
    }else if(particle.body.position.x>601 && particle.body.position.x<800){
      score = score+500;
      particle = null;
      if(turn>=5){
        gameState="end";
      }
          }
    
  }
}
}



function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle=new Particle(mouseX,10,10);
  }           
}