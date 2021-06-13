var bimg, bSprite;
var shooter;
var zombie;
var zombieImg;
var sImg, ballimg;
var ballG, zombieG;
var score = 0;
var life = 3;
var heartimg;
var introImg, intro;
var h1, h2, h3;
var state = 0;
var over;

function preload() {

    bimg = loadImage("background.png");
    sImg = loadImage("plant1.png");
    ballimg = loadImage("ball.png");
    zombieImg = loadImage("zombie3.png");
    introImg = loadImage("intro.png")
    heart = loadImage("heart.png")

}


function setup() {

    createCanvas(displayWidth, displayHeight - 100);
    bSprite = createSprite(width / 2, height / 2, displayWidth, displayHeight);
    bSprite.addImage(bimg)

    shooter = createSprite(displayWidth / 3 + 20, height / 2, 50, 50);
    shooter.addImage(sImg);
    shooter.scale = 0.2;

    ballG = new Group();
    zombieG = new Group();

    h1 = createSprite(550, displayHeight / 9 - 30)
    h1.addImage("h1", heart)
    h1.scale = 0.03

    h2 = createSprite(580, displayHeight / 9 - 30)
    h2.addImage("h2", heart)
    h2.scale = 0.03

    h3 = createSprite(610, displayHeight / 9 - 30)
    h3.addImage("h3", heart)
    h3.scale = 0.03

    over = loadImage("over.png")

}



function draw() {
    if (state == 0) {
        background(introImg)
    } else {

        background(0);

    }

    // if (state == 0 || state == 2) {

    //     shooter.visible = false;
    //     h1.visible = false;
    //     h2.visible = false;
    //     h3.visible = false;
    //     bSprite.visible = false;

    // } else {

    //     shooter.visible = true;
    //     h1.visible = true;
    //     h2.visible = true;
    //     h3.visible = true;
    //     bSprite.visible = true;

    // }

    // if (state == 0) {

    //     if (keyDown("f")) {

    //         state = 1;

    //     }
    // }
    // if (state == 1) {

    //     shooter.y = mouseY;

    //     if (shooter.y < 100) {

    //         shooter.y = 100;

    //     }
    //     if (shooter.y > displayHeight - 200) {

    //         shooter.y = displayHeight - 200;

    //     }

    //     if (life == 2) {
    //         h1.destroy();
    //     }

    //     if (life == 1) {
    //         h2.destroy();
    //     }

    //     if (life == 0) {
    //         h3.destroy();
    //         state = 2;
    //     }

    //     zombies();
    //     drawSprites();
    // }
    // if (state == 1) {
    //     textFont("fantasy")
    //     fill("black")
    //     textSize(25)
    //     text("Score: " + score, width / 2, height / 8)
    // }

    // if (state == 2) {

    //     background(over)

    // }

}


function balls() {

    var ball = createSprite(shooter.x, shooter.y, 10, 10);
    ball.addImage(ballimg);
    ball.velocityX = 5;
    ball.scale = 0.08
    ball.lifetime = 140
    ballG.add(ball)

}

function keyPressed() {

    if (keyCode == 32) {// key pressed function working

        balls();

    }
}

function mousePressed() {// this one not working
    console.log('mousePressed')

    balls();
}

function zombies() {

    if (frameCount % 80 == 0) {

        var zombie = createSprite(displayWidth - 200, 200, 20, 20);
        zombie.addImage(zombieImg);
        zombie.velocityX = -5;
        zombie.scale = 0.1;

        zombie.y = Math.round(random(displayHeight / 8, displayHeight - 200))

        zombieG.add(zombie)


        if (shooter.x > zombieG[0].x) {

            life -= 1;
            zombieG[0].destroy();

        }

    }

    if (zombieG.isTouching(ballG)) {

        zombieG[0].destroy();
        ballG[0].destroy();
        score += 10;

    }


}


