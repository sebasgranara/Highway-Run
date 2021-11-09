
class Truck {
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.interval;
    }

    _drawTruck(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    _move(){
        setInterval(() => {
            this.y = this.y + 1;
        }, 7)
        
    } 
    //hacer un setInterval para que sume a la Y y vaya bajando


    
    

}