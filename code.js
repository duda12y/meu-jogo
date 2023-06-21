var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7221668f-75f4-402e-9d44-60bde28e4017","72b94c7b-152e-48e2-af8c-141dee9c4370"],"propsByKey":{"7221668f-75f4-402e-9d44-60bde28e4017":{"name":"Bob","sourceUrl":"assets/api/v1/animation-library/gamelab/q99pz0TOAJSBAnxLhiIrUGcOjMvFdemn/category_people/kid_18.png","frameSize":{"x":287,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"q99pz0TOAJSBAnxLhiIrUGcOjMvFdemn","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":287,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/q99pz0TOAJSBAnxLhiIrUGcOjMvFdemn/category_people/kid_18.png"},"72b94c7b-152e-48e2-af8c-141dee9c4370":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fundo = createSprite(200,200);
fundo.setAnimation('space_1');




var bob = createSprite(152,357);
bob.setAnimation('Bob');
bob.scale = 0.2;

var meteoro1 = createSprite(172,177,25,25);
meteoro1.shapeColor = '#4e0095';

var meteoro2 = createSprite(172,137,25,25);
meteoro2.shapeColor = '#4e0095';

var meteoro3 = createSprite(292,137,25,25);
meteoro3.shapeColor = '#4e0095';

var meteoro4 = createSprite(372,137,25,25);
meteoro4.shapeColor = '#4e0095';

var meteoro5 = createSprite(72,137,25,25);
meteoro5.shapeColor = '#4e0095';

meteoro1.velocityY = -6;
meteoro2.velocityY = -2;
meteoro3.velocityY = -5;
meteoro4.velocityY = -7; 
meteoro5.velocityY = -7;
 
 
meteoro1.velocityX = 6;
meteoro2.velocityX = 2;
meteoro3.velocityX = 5;
meteoro4.velocityX = 7;
meteoro5.velocityX = 7;

var mortes = 0;

function draw() {
  createEdgeSprites();


meteoro1.bounceOff(rightEdge);
meteoro1.bounceOff(leftEdge);
meteoro1.bounceOff(topEdge);



  









meteoro2.bounceOff(leftEdge);
meteoro2.bounceOff(rightEdge);

meteoro2.bounceOff(topEdge);




meteoro3.bounceOff(leftEdge);
meteoro3.bounceOff(rightEdge);
meteoro3.bounceOff(topEdge);





meteoro4.bounceOff(leftEdge);
meteoro4.bounceOff(rightEdge);
meteoro4.bounceOff(topEdge);






meteoro5.bounceOff(leftEdge);
meteoro5.bounceOff(rightEdge);

meteoro5.bounceOff(topEdge);



























if(bob.isTouching(meteoro1)){
  mortes = mortes + 1;
  }
  
  if(bob.isTouching(meteoro2)){
  mortes = mortes + 1;
  }
  
  if(bob.isTouching(meteoro3)){
  mortes = mortes + 1;
  }
  
  if(bob.isTouching(meteoro4)){
  mortes = mortes + 1;
  }
  
   if(bob.isTouching(meteoro5)){
  mortes = mortes + 1;
   }
  
  
  
if(keyDown(RIGHT)){
  bob.x = bob.x + 3;
}
 
 if(keyDown(LEFT)){
   bob.x = bob.x + -3;
 }





drawSprites();
fill("yellow");
textSize(20);
text("pontos "+mortes, 0, 15);

  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
