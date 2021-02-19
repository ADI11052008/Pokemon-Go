
var gameState="Choose",T=0,B=0

function preload() {

  balbasaurImage= loadImage("balbasaur.png")
  charmanderImage= loadImage("charmander.png")
  PikachuImage= loadImage("pikachu.jpg")
  SquirtleImage= loadImage("squirtle.png")
  AshImage =loadImage("Ash poke trainer.jpg")
  Trainer1Image =loadImage("trainer 1.png")
  Trainer2Image =loadImage("trainer 2.png")
  pokeballImage =loadImage("pokeball.png")
  gardenImage= loadImage("garden.jpg")
  factoryImage= loadImage("factory.jpg")
  cityImage= loadImage("city.jpg")
} 


function setup() {
  createCanvas(displayWidth,displayHeight);

trainer1= createSprite(500,300)
trainer1.scale=0.5
trainer1.addImage(Trainer1Image)
trainer2= createSprite(100,300)
trainer2.addImage(Trainer2Image)
background1= createSprite(175,600)  
background1.scale=1.2
background1.addImage(gardenImage)
background2= createSprite(500,600)
background2.scale=0.2 
background2.addImage(cityImage)
background3= createSprite(900,600) 
background3.scale=0.3
background3.addImage(factoryImage)
trainer= createSprite(200,500)
backgroundImage= createSprite(400,400)
pikachu= createSprite(800,250)
pikachu.scale=0.09
pikachu.addImage(PikachuImage)

balbasaur= createSprite(950,275)
balbasaur.scale=0.12
balbasaur.addImage(balbasaurImage)

Charmander= createSprite(800,400)
Charmander.scale=0.55
Charmander.addImage(charmanderImage)

Squirtle= createSprite(950,415)
Squirtle.scale=0.50
Squirtle.addImage(SquirtleImage)

pokeball= createSprite(600,325)
pokeball.scale=0.06
pokeball.addImage(pokeballImage)

}

function draw() {
  background(255,255,255); 
   
  if(gameState==="Choose")
  if(mousePressedOver(trainer1)){
    console.log("Trainer1 selected")
    T=1
  }
  else if(mousePressedOver(trainer2)){
    console.log("Trainer2 selected")
    T=2
  }

  
  if(mousePressedOver(background1)){
    console.log("Garden selected")
    B=1
  }
  else if (mousePressedOver(background2)){
    console.log("City selected")
    B=2
  }
  else if (mousePressedOver(background3)){
    console.log("Factory selected")
    B=3
  }
  if((T===1||T===2)&&(B===1||B===2||B===3)){
  gameState="Start"
  }
  else if(gameState==="Start"){
    console.log("Game Started")
    
    if(T===1){
    trainer.addImage(Trainer1Image)
  }
  }
  drawSprites();
}

