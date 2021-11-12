class Truck {
    constructor(x, y, width, height, color){
        this.x = x;
    //     this.x = Math.random() * 400
        this.y = y
    //     this.y = Math.random() * -1500
        this.width = width;
        this.height = height;
        this.color = color;
        this.interval;
    }

    _drawTruck(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(
            truckSprite.sprite,
            truckSprite.x,
            truckSprite.y,
            truckSprite.width,
            truckSprite.height,
            this.x, 
            this.y, 
            this.width, 
            this.height 
        )
    }

    _move(){
        this.interval = setInterval(() => {
            this.y = this.y + 1;
        }, 3)
        
    } 
}
