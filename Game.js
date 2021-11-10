class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player(300, 550, 100, 100, "red"); 
        this.trucks = [new Truck(25, -250, 150, 100, "blue"), new Truck(425, -450, 150, 100, "blue")]
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
        let randomY = Math.random() * 150
    }
        // return Y entre 0 y -2000

    _getRandomX(){
        let randomY = Math.random() * 600 
        // math.random
        // return X entre 0 y 600
    }

    _generateTrucks(){
        this.interval = setInterval(function(){
            const newTruck = new Truck(this._getRandomX(), this._getRandomY(), 600, 600, "blue" );
            this.trucks.push(newTruck);
        }, 500)
        // const newTruck1= new Truck(25, -250, 150, 100, "blue");
        // const newTruck2 = new Truck(250, 50, 100, 100, "blue");
        // const newTruck3 = new Truck(425, -450, 150, 100, "blue");
        // this.trucks.push(newTruck1);
        // this.trucks.push(newTruck2);
        // this.trucks.push(newTruck3);
    }

   // _checkColission(){
       // for (let i = 0; i < this.trucks.length; i++){
        //    if (this.player.y === (this.trucks[i].y + this.trucks[i].height) && this.player.x === (width)){
                // clearInterval(this.interval);
                // this.status = over;

        //}

       // }
        //si X e Y del truck es = a X e Y del Player
           

    _clean(){
        this.ctx.clearRect(0,0,600,650);
    }

    _renderGame(){
        this._clean();
        this.player._drawPlayer(this.ctx);
        for (let i = 0; i < this.trucks.length; i++){
            this.trucks[i]._drawTruck(this.ctx);
        }
        window.requestAnimationFrame(this._renderGame.bind(this));
    }

    start(){
        this._assignControls();
        // this._generateTrucks();
        setInterval(() =>{
            for (let i = 0; i < this.trucks.length; i++){
                this.trucks[i]._move();
            }
        }, 500)
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