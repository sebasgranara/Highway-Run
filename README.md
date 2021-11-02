# Proyect Name:
Highway Run

## Description
The purpose of the game is to drive a “car” dodging the appearing trucks by moving from left to right in the same “X” axis. There will be 3 lanes, which the “car” has to move from one to the other, if it crashes a truck, game over. Every truck you pass without crashing is 1 point. Also you will have to jump a barrier that occupies the 3 lanes.

## MVP
The MVP includes the following items graphically represented by colors:
- List item 1: car (main Player)
- List item 2: trucks (secondary character)
- List item 3: barrier (secondary character) - backlog

## Backlog / nice to have
- Musica de fondo
- Un sonido para el salto
- Un sonido para cuando chocas

## Data structure
```
class Player {
properties: life, posicion
Methods: goRight, goLeft, jump
}

class Trucks {
properties: direction.
Methods: _appear,     
}

class Game { properties: player, trucks. Methods:
\_start
}
```

## States & States Transitions
Definition of the different states and their transition (transition functions):
- splashScreen - Instructions and start button
- gameScreen - Game itself
- jumpInstructions - Before the first barrier appears, instructions to jump
- gameoverScreen - If you crush a truck or barrier, game over (start again)
- winScreen -
