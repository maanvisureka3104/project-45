const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drop=[];
var engine,world;
var t1,t2,t3,t4;
var thunder,umbrella;

function preload(){
    t1=loadImage("thunderbolt/1.png");
    t2=loadImage("thunderbolt/2.png");
    t3=loadImage("thunderbolt/3.png");
    t4=loadImage("thunderbolt/4.png");
}

function setup(){
createCanvas(500,500);   
    
engine=Engine.create();
world=engine.world


umbrella=new Umbrella(250,450);

for(var i=0;i<100;i++){
    drop.push(new drops(random(0,500), random(0,500)))
}

}

function draw(){
 background("black");
 Engine.update(engine);  
 
 drps=Math.round(random(1,4))

 if(frameCount%100===0){
  thunder=createSprite(random(50,350),random(10,50),50,50)
  switch (drps) {
      case 1: thunder.addImage(t1);
          
          break;

     case 2: thunder.addImage(t2);
          
          break;

     case 3: thunder.addImage(t3);
          
          break;

      case 4: thunder.addImage(t4);
          
          break;
      default:
          break;
  }
  thunder.scale=random(0.2,0.6);
  thunder.lifetime=20;
 }

 umbrella.display();

 for(var i=0;i<100;i++){
     drop [i].update();
     drop [i].display();
 }
 drawSprites();
}   

