var narratorSprite;
var narratorIMG;
var animalGodSprite;
var animalGodIMG;
var bandit1Sprite;
var bandit1IMG;
var bandit2Sprite;
var bandit2IMG;
var bandit3Sprite;
var bandit3IMG;
var cryingManSprite;
var cryingManIMG;
var dharmaGodSprite;
var dharmaGodIMG;
var dhotiManSprite;
var dhotiManIMG;
var godessSprite;
var godessIMG;
var horseSprite;
var horseIMG;
var hungryChildSprite;
var hungryChildIMG;
var merchantSprite;
var merchantIMG;
var rishiSprite;
var rishiIMG;
var tribalGuardSprite;
var tribalGuardIMG;
var unknownTravellerSprite;
var unknownTravellerIMG;
var villageHeadmanSprite;
var villageHeadmanIMG;
var warlordSprite;
var warlordIMG;
var scene1BgSprite;
var scene1BgIMG;
var gameState=0;
var database; 
var player;
var playerCount;
var form;
var start;
var start;
var getState;
var play;
var name;
var backgroundImg;
var IMG;

function preload(){
  scene1BgIMG = loadImage("IMG/SCENE 1 BG.png")
  narratorIMG = loadImage("IMG/narrator.png")
  animalGodIMG = loadImage("IMG/Animal god.png")
  bandit1IMG = loadImage("IMG/Bandit 1.png")
  bandit2IMG = loadImage("IMG/Bandit2.png")
  bandit3IMG = loadImage("IMG/Bandit3.png")
  cryingManIMG = loadImage("IMG/Crying man.png")
  dharmaGodIMG = loadImage("IMG/Dharma god-2.png")
  dhotiManIMG = loadImage("IMG/Dhoti man-2.png")
  godessIMG = loadImage("IMG/Godess of birth.png")
  horseIMG = loadImage("IMG/Horse.png")
  hungryChildIMG = loadImage("IMG/Hungry child.png")
  merchantIMG = loadImage("IMG/Merchant.png")
  rishiIMG = loadImage("IMG/Rishi.png")
  tribalGuardIMG = loadImage("IMG/Tribal guard1.png")
  unknownTravellerIMG = loadImage("IMG/Unknown traveller.png")
  villageHeadmanIMG = loadImage("IMG/Village Headman.png")
  warlordIMG = loadImage("IMG/Warlord.png")
}
function setup(){
    createCanvas(displayWidth-50,displayHeight-150)
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}
function draw(){

  if(playerCount === 1){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
        game.end();
      }

}
    
    

