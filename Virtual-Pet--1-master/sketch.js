//Create variables here
var dog, happyDog;
var foodS, foodStock;
var database;

function preload()
{
  //load images here
  dog=loadImage("dogImg1.png");
	happyDog=loadImage("dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  foodstock=database.ref('Food');
  foodStock.on("value", readStock);

  dog=createSprite(200, 200, 10,10);
	dog.addImage(dog,happyDog);
	dog.scale=0.6
  
}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  
  drawSprites();

  //add styles here
  text("Note: press UP_ARROW key to feed Draco milk!",400,400);
  
 
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  
  if(x<=0){
   x=0;
  }
  else{
    x=x-1;
  }
  
  database.ref('/').update({
    food:x
  })
}
