import platform from '../img/platformLand.jpg';
import runLeft from '../img/spriteRunLeft.png';
import runRight from '../img/spriteRunRight.png';
import standLeft from '../img/spriteStandLeft.png';
import standRight from '../img/spriteStandRight.png';
import bg from '../img/bg.jpg';
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576
const gravity = 0.5;
class Player {
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        
        this.velocity = {
            x:0,
            y:0
        }
        this.width = 66 
        this.height = 150
        this.image = createImage(standRight)
        this.frame = 0
        this.actions={
            stand: {
            right: createImage(standRight),
            left: createImage(standLeft),
            cropWidth: 177,
            width: 66
            },
            run:{
                right: createImage(runRight),
                left: createImage(runLeft),
                cropWidth: 341,
                width: 127.875

            }
        }
        this.currentAction = this.actions.stand.right
        this.currentAcitonWidth = 177
    }
    draw () {
        c.drawImage(
            this.currentAction,
            this.currentAcitonWidth * this.frame,
            0,
            this.currentAcitonWidth,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )   
    }
    update() {
        this.frame++
        if(this.frame> 59 && 
            (this.currentAction === this.actions.stand.right || this.currentAction === this.actions.stand.left)) this.frame =0
        else if (this.frame > 29 && 
            (this.currentAction === this.actions.run.right || this.currentAction === this.actions.run.left )) this.frame =0

        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
    
        
    }
}
class Platform {
    constructor({x,y, image}){
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
        
    }   
    draw() {
        c.drawImage(this.image, this.position.x,this.position.y )
    } 
}

class MainBackGround {
    constructor({x,y, image}){
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
        
    }   
    draw() {
        c.drawImage(this.image, this.position.x,this.position.y )
    } 
}
function createImage(imageSrc){
    const image = new Image()
    image.src = imageSrc
    return image
}
let platformImage = createImage(platform)
let player = new Player()
let currentKey
let platforms = [new Platform({
    x:platformImage.width,
    y:400,
    image:platformImage

})]
let mainBG = [new MainBackGround({
    x:0,
    y:0,
    image:createImage(bg)

})]
function init() {
 platformImage = createImage(platform)
 player = new Player()
 platforms = [new Platform({
    x:0,
    y:400,
    image:platformImage

})]
 mainBG = [new MainBackGround({
    x:0,
    y:0,
    image:createImage(bg)

})]
 winIndicator = 0
 currentKey
}

const keys = {
    right:  {
        pressed: false
    },
    left:  {
        pressed: false
    }
}
let winIndicator = 0

let platformSpawnCounter = 0;
const platformSpawnInterval = 200;

function spawnPlatform() {
    let newPlatform = new Platform({
        x: platforms[platforms.length - 1].position.x + platformImage.width + platformSpawnInterval,
        y: 400,
        image: platformImage
    });
    platforms.push(newPlatform);
}


function animate() {
    requestAnimationFrame(animate)
    c.fillStyle= 'white'
    c.fillRect(0,0, canvas.width,canvas.height)

    mainBG.forEach((bg) => {
        bg.draw()
    })
    
    platforms.forEach((platform) => {
        platform.draw()
    })
    player.update()
    
// player movement right and left
if (keys.right.pressed && player.position.x < 400){
    player.velocity.x =5
}
else if (keys.left.pressed && player.position.x >100){
        player.velocity.x =-5
}else {
    player.velocity.x =0
    if (keys.right.pressed){
        platformSpawnCounter += 5;
        winIndicator += 5
        platforms.forEach((platform) => {
            platform.position.x -= 5})
        
    } else if (keys.left.pressed){
        winIndicator -= 5
        platforms.forEach((platform) => {
            platform.position.x += 5})
        
    } 
}
///// win condition
console.log(winIndicator);
if (winIndicator > 2000){
    console.log('you win')
}

//// lose condition
if (player.position.y > canvas.height){
    console.log('you lose')
    init()
}
//player and platform collision
platforms.forEach((platform) => {
if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
    player.velocity.y = 0
}
})

// action switching
if(keys.right.pressed && currentKey === 'right' && player.currentAction !== player.actions.run.right) {
    player.currentAction = player.actions.run.right
    player.currentAcitonWidth = player.actions.run.cropWidth
    player.width = player.actions.run.width

}
else if (keys.left.pressed && currentKey === 'left' && player.currentAction !== player.actions.run.left) {
    player.currentAction = player.actions.run.left
    player.currentAcitonWidth = player.actions.run.cropWidth
    player.width = player.actions.run.width

}
else if (!keys.left.pressed && currentKey === 'left' && player.currentAction !== player.actions.stand.left) {
    player.currentAction = player.actions.stand.left
    player.currentAcitonWidth = player.actions.stand.cropWidth
    player.width = player.actions.stand.width

}else if (!keys.right.pressed && currentKey === 'right' && player.currentAction !== player.actions.stand.right) {
    player.currentAction = player.actions.stand.right
    player.currentAcitonWidth = player.actions.stand.cropWidth
    player.width = player.actions.stand.width

}



if (platformSpawnCounter >= platformSpawnInterval) {
    spawnPlatform();
    platformSpawnCounter = 0;
}

// Update platform positions
platforms.forEach((platform) => {
    platform.position.x -= player.velocity.x;
});


}
animate()

// Player Movements

addEventListener('keydown',({ key }) => {
 switch (key){
    case "a":
        console.log('left')
        keys.left.pressed = true
        currentKey = 'left'
        break
    case 's':
        console.log('down')
        break
    case 'd':
        console.log('right')
        keys.right.pressed = true
        currentKey = 'right'
        break
    case 'w':
        console.log('up')
        
        break
 }
})

addEventListener('keyup', ({ key }) => {
    switch (key){
       case "a":
           console.log('left')
           keys.left.pressed = false
           break
       case "s":
           console.log('down')
           break
       case "d":
           console.log('right')
           keys.right.pressed = false
           break
       case "w":
           console.log('up')
           player.velocity.y -= 12
           break
    }
   })