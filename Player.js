
class Player {
    constructor(x,y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

_drawPlayer(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
       playerSprite.sprite,
       playerSprite.x,
       playerSprite.y,
       playerSprite.width,
       playerSprite.height,
       this.x, 
       this.y, 
       this.width, 
       this.height 
   )
}

moveRight(){
    this.x = this.x + 40;
    }
    ///como hacer para que se quede dentro del canvas

moveLeft(){
    this.x = this.x - 40;
    }
}

