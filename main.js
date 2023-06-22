var canvas = new fabric.Canvas("myCanvas")
playerX=500
playerY=300
blockImageHeight = 30
blockImageWidth = 30
function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObject)
    })
}
function newImage(getimage) {
    fabric.Image.fromURL(getimage,function(Img){
        blockImageObject=Img
        blockImageObject.scaleToWidth(blockImageWidth)
        blockImageObject.scaleToHeight(blockImageHeight)
        blockImageObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockImageObject)
    })
}
function up() {
    if(playerY>=0){
        playerY-=blockImageHeight
        canvas.remove(playerObject)
        playerUpdate()
        console.log("function up está ativa")
    }
}
function down() {
    if(playerY<=500){
        playerY+=blockImageHeight
        canvas.remove(PlayerObject)
        playerUpdate()
    }
}
function left() {
    if(playerX>=0){
        playerX-=blockImageWidth
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function right() {
    if(playerX<=850){
        playerX+=blockImageWidth
        canvas.remove(playerObject)
        playerUpdate()
        }
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed=e.keycode
    console.log(keyPressed)
    if (keyPressed=="38") {
        up()
        console.log("tecla para cima pressionada")
    }
    if (keyPressed=="40") {
        down()
        console.log("tecla para baixo pressionada")
    }
    if (keyPressed=="37") {
        left()
        console.log("tecla para esquerda pressionada")
    }
    if (keyPressed=="39") {
        right()
        console.log("tecla para direita pressionada")
    }
    if (if(keyPressed == '87') { newImage('wall.jpg'); console.log("w");}
    if(keyPressed == '71') { newImage('ground.png'); console.log("g");}
    if(keyPressed == '76') { newImage('light_green.png'); console.log("l");}
    if(keyPressed == '84') { newImage('trunk.jpg'); console.log("t");}
    if(keyPressed == '82') { newImage('roof.jpg'); console.log("r");}
    if(keyPressed == '89') { newImage('yellow_wall.png'); console.log("y");}
    if(keyPressed == '68') { newImage('dark_green.png'); console.log("d");}
    if(keyPressed == '85') { newImage('unique.png'); console.log("u");}
    if(keyPressed == '67') { newImage('cloud.jpg'); console.log("c") })
}   