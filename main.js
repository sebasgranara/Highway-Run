// COGE EL EJEMPLO DE ROVER

// SELECCIÓN DEL DOM DEL BOTON DE START
// Cojo el contexto del canvas
// const game = new Game(ctx)
// function startGame(){
    // cojo los elementos de la splash screen y los escondo display = none;
    // muestro canvas
    // game.start()
// }
// game.start()

var game;

document.onload = (function(){

  const ctx = document.getElementById('miCanvas').getContext('2d');

  const startBtn = document.getElementById("start-button");
    startBtn.addEventListener("click", startGame);

  const tryAgainBtn = document.getElementById("try-again");
    tryAgainBtn.addEventListener("click", startGame);

  function startGame(){
          document.getElementById("splash").style = "display: none";
          document.getElementById("miCanvas").style = "display: block";
          document.getElementById("Game-Over").style = "display: none";
          game = new Game(ctx);
          game.start();
    }

})();



  // window.addEventListener("load", function () {
  //   console.log("loaded");

    
  //   function generateGame() {
  //       const ctx = document.getElementById('miCanvas').getContext('2d');
  //       const game = new Game(ctx);

  //       function startGame(){
  //         document.getElementById("splash").style = "display: none";
  //         document.getElementById("micanvas").style = "display: block";
  //           game.start();
  //       }
   
  //   }

  //   const startBtn = document.getElementById("start-button");
  //   startBtn.addEventListener("click", generateGame);

  //   const tryAgainBtn = document.getElementById("try-again");
  //   tryAgainBtn.addEventListener("click", generateGame);
  
  // });