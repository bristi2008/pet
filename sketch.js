//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  dogHImage = loadImage("dogImg1.png"); 
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,30,40);
  dog.addImage("dog", dogImage);
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
 background(46,139,87)

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(dogHImage);
 }
  drawSprites();
  //add styles here
  Text("Food:20",200,100);

}

function readStock(data){
  foodS = data.val();

}

function writeStock() {

  if(x<0){
    x=0;
  }
  else{
    x = x-1
  }
  
  database.ref('/').update({
    Food:x
  })
  
}



