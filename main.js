// Definición de la clase Jugador
class Jugador {
  constructor(nombre, puntosDeVida, puntosDeAtaque) {
    this.nombre = nombre;
    this.nivel = 1;
    this.puntosDeVida = puntosDeVida;
    this.puntosDeAtaque = puntosDeAtaque;
  }

  atacar(enemigo) {
    console.log(`${this.nombre} ataca a ${enemigo.nombre}!`);
    enemigo.puntosDeVida -= this.puntosDeAtaque;
    console.log(`${enemigo.nombre} ahora tiene ${enemigo.puntosDeVida} puntos de vida.`);
  }

  mostrarEstado() {
    console.log(`Estado de ${this.nombre}:`);
    console.log(`Nivel: ${this.nivel}`);
    console.log(`Puntos de Vida: ${this.puntosDeVida}`);
    console.log(`Puntos de Ataque: ${this.puntosDeAtaque}`);
  }
}

// Crear instancia de Jugador
const nombreJugador = prompt("Ingresa el nombre del jugador:");
const jugador = new Jugador(nombreJugador, 100, 10);

// Crear un array de enemigos
const enemigos = [
  new Jugador("Orco", 50, 5),
  new Jugador("Dragón", 200, 20),
  new Jugador("Goblin", 30, 3),
];

// Simulación de combate con cada enemigo
enemigos.forEach((enemigo) => {
  jugador.mostrarEstado();
  console.log("¡Un enemigo aparece!", enemigo.nombre);
  enemigo.mostrarEstado();
  jugador.atacar(enemigo);
  if (enemigo.puntosDeVida <= 0) {
    console.log(`${enemigo.nombre} ha sido derrotado.`);
  } else {
    enemigo.atacar(jugador);
    if (jugador.puntosDeVida <= 0) {
      console.log(`${jugador.nombre} ha sido derrotado.`);
    }
  }
});

// Mostrar estado final del jugador
jugador.mostrarEstado();