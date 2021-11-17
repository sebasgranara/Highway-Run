class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player(300, 550, 100, 100, "red"); 
        this.trucks = []
        this.interval;
    }

    _assignControls(){
        document.addEventListener("keydown", (event) => {
            switch (event.code){
                case "ArrowRight":
                    this.player.moveRight();
                    break;
                case "ArrowLeft":
                    this.player.moveLeft();
                    break;
            }
        })
    }

    _getRandomY(){
        return Math.floor(Math.random() * (-1200 + 100 + 1) - 100)
        
    }
    //Math.floor(Math.random() * (max - min + 1) + min)

    _getRandomX(){
        return Math.floor(Math.random() * (400 + 1) )
    }

    _generateTrucks(){
        //  const newTruck1= new Truck(25, -250, 100, 100, "blue");
        //  const newTruck2 = new Truck(250, -150, 100, 100, "blue");
        //  const newTruck3 = new Truck(425, -450, 100, 100, "blue");
        //  const newTruck4 = new Truck(425, -450, 100, 100, "blue");
        //  this.trucks.push(newTruck1);
        //  this.trucks.push(newTruck2);
        //  this.trucks.push(newTruck3);
        //  this.trucks.push(newTruck4);

        this.interval = setInterval(() => {
           const newTruck = new Truck(this._getRandomX(), this._getRandomY(), 100, 100, "blue" );
          this.trucks.push(newTruck);
       }, 1200)
    }
    
     _checkCollision() {
        for (let i = 0; i < this.trucks.length; i++) {
            if (
              this.player.x <= this.trucks[i].x + this.trucks[i].width &&
              this.player.x + this.player.width >= this.trucks[i].x &&
              this.player.y <= this.trucks[i].y + this.trucks[i].height &&
              this.player.height + this.player.y >= this.trucks[i].y
                ) {
                    this._stopGame();
                }
            }
         }

    _stopGame(){
        clearInterval(this.interval);
        this.trucks.forEach((truck) => clearInterval(truck.interval));
        document.getElementById("Game-Over").style = "display: block;";
        document.getElementById("Game-Over").style = "display: absolute; position: absolute; z-index: 5px';"; 

    }

    _clean(){
        this.ctx.clearRect(0,0,600,650);
    }

    _renderGame(){
        this._clean();
        this.player._drawPlayer(this.ctx);
        for (let i = 0; i < this.trucks.length; i++){
            this.trucks[i]._drawTruck(this.ctx);
        }
        this._checkCollision()
        window.requestAnimationFrame(this._renderGame.bind(this));
    }

    start(){
        this._assignControls();
        this._generateTrucks();
        setInterval(() =>{
            for (let i = 0; i < this.trucks.length; i++){
                this.trucks[i]._move();
            }
        }, 1500)
        window.requestAnimationFrame(this._renderGame.bind(this));
    }

}   

// _generateTrucks {
        // seleccionar x randoms
        // constr truck = new Truck(x, )
        // this.trucks.push(truck);
        // loop que me pinta truck[i]._drawTruck(this.ctx)
    // }

    // Lógica de lo de los frames 
//}