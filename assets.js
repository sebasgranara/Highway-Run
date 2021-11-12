const playerSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    width: 300, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    height: 570, // Le digo cuántos píxeles tiene que coger de height
    x: 300, // En qué x del archivo tiene que empezar a coger personaje
    y: 50, // En qué y del archivo tiene que empezar a coger personaje
  
  };
  playerSprite.sprite.src = "./Images/auto.png"; // Le asigno el archivo como source del sprite

  const truckSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    width: 300, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    height: 650, // Le digo cuántos píxeles tiene que coger de height
    x: 300, // En qué x del archivo tiene que empezar a coger personaje
    y: 50, // En qué y del archivo tiene que empezar a coger personaje
  
  };
  truckSprite.sprite.src = "./Images/truck-3.jpeg"; 