class Game {
    constructor(ctx){
        this.ctx = ctx;
        //this.highway; //confirmar
        this.player = new Player(300, 550, 100, 100, "red"); 
        this.trucks = []
        //this.points-counter;
        //this.km-counter;
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

    _generateTrucks(){
        const newTruck1= new Truck(25, -250, 150, 100, "blue");
        const newTruck2 = new Truck(250, 50, 100, 100, "blue");
        const newTruck3 = new Truck(425, -450, 150, 100, "blue");
        this.trucks.push(newTruck1);
        this.trucks.push(newTruck2);
        this.trucks.push(newTruck3);
    }

   // _checkColission(){
       // for (let i = 0; i < this.trucks.length; i++){
        //    if (this.player.x.width = this.trucks[i].x.width)

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
        this._generateTrucks();
       
        setInterval(() =>{
            this._generateTrucks()
        }, 5000)

        for (let i = 0; i < this.trucks.length; i++){
            this.trucks[i]._move(this.ctx)

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
}