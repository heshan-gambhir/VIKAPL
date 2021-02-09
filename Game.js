class Game{
  constructor(){}
  
  
  getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
        
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
      }
        form = new Form()
        form.display();
        scene1BgSprite= createSprite(displayWidth-750,displayHeight-500);
        scene1BgSprite.addImage(scene1BgIMG);
        narratorSprite= createSprite(200,400);
        narratorSprite.addImage(narratorIMG);
        narratorIMG.scale=5.5;
       // animalGodSprite= createSprite(500,400);
        //animalGodSprite.addImage(animalGodIMG);
        //animalGodSprite.scale=0.5;
        //bandit1Sprite= createSprite(600,400);
        //bandit1Sprite.addImage(bandit1IMG);
        //bandit2Sprite= createSprite(700,400);
        //bandit2Sprite.addImage(bandit2IMG);
        //bandit2Sprite.scale=0.5;
        //bandit3Sprite= createSprite(800,400);
        //bandit3Sprite.addImage(bandit3IMG);
        //bandit3Sprite.scale=0.5;
        //cryingManSprite= createSprite(900,400);
        //cryingManSprite.addImage(cryingManIMG);
        //cryingManSprite.scale=0.5;
        //dharmaGodSprite= createSprite(1000,400);
        //dharmaGodSprite.addImage(dharmaGodIMG);
        //dharmaGodSprite.scale=0.5;
        //dhotiManSprite= createSprite(1100,400);
        //dhotiManSprite.addImage(dhotiManIMG);
        //godessSprite= createSprite(300,400);
        //godessSprite.addImage(godessIMG);
        //godessSprite.scale=0.5;
        //horseSprite= createSprite(300,400);
        //horseSprite.addImage(horseIMG);
        //hungryChildSprite= createSprite(1200,400);
        //hungryChildSprite.addImage(hungryChildIMG);
        //hungryChildSprite.scale=0.5;
        //merchantSprite= createSprite(1400,400);
        //merchantSprite.addImage(merchantIMG);
        //merchantSprite.scale=0.5;
        //rishiSprite= createSprite(700,600);
        //rishiSprite.addImage(rishiIMG);
        //rishiSprite.scale=0.5;
        //tribalGuardSprite= createSprite(500,600);
        //tribalGuardSprite.addImage(tribalGuardIMG);
        //tribalGuardSprite.scale=0.5;
        //unknownTravellerSprite= createSprite(300,400);
        //unknownTravellerSprite.addImage(unknownTravellerIMG);
        //unknownTravellerSprite.scale=0.5;
        //villageHeadmanSprite= createSprite(900,400);
        //villageHeadmanSprite.addImage(villageHeadmanIMG);
        //villageHeadmanSprite.scale=0.5;
        //warlordSprite= createSprite(300,600);
        //warlordSprite.addImage(warlordIMG);
        //warlordSprite.scale=0.5;
        
        

        
        
        
        
        
        
      }
  }
   play(){
    form.hide();
    drawSprites();
  }

}

  

  