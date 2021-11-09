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

}

moveRight(){
    this.x = this.x + 15;
    }
    ///como hacer para que se quede dentro del canvas

moveLeft(){
    this.x = this.x - 15;
    }
}

//collision --> 
//counter de cada auto que pasa sin chocar
//counter de tiempo o distancia recorrida?
//animacion: lineas carril + arboles costado?
//dificultad: cada vez mayores camiones, mayor velocidad?