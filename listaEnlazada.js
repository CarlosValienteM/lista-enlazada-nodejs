class Nodo {
    constructor(dato, enlace = null) {
        this.dato = dato;
        this.enlace = enlace;
    }

    toString() {
        return `${this.dato} => ${this.enlace}`;
    }

    leerDato() {
        return this.dato;
    }

    siguiente() {
        return this.enlace;
    }
}

class Lista {
    constructor() {
        this.primero = null;
    }

    leerPrimero() {
        return this.primero;
    }

    insertarCabezaLista(entrada) {
        const nuevo = new Nodo(entrada, this.primero);
        this.primero = nuevo;
    }

    insertarLista(anterior, entrada) {
        if (!anterior) {
            console.error("El nodo anterior no puede ser nulo para insertar después.");
            return;
        }
        const nuevo = new Nodo(entrada, anterior.enlace);
        anterior.enlace = nuevo;
    }

    eliminar(entrada) {
        let actual = this.primero;
        let anterior = null;

        while (actual !== null && actual.dato !== entrada) {
            anterior = actual;
            actual = actual.enlace;
        }

        if (actual !== null) {
            if (actual === this.primero) {
                this.primero = actual.enlace;
            } else {
                anterior.enlace = actual.enlace;
            }
        }
    }

    buscarLista(destino) {
        let indice = this.primero;
        while (indice !== null) {
            if (indice.dato === destino) {
                return indice;
            }
            indice = indice.enlace;
        }
        return null;
    }

    visualizar() {
        let n = this.primero;
        const elementos = [];
        while (n !== null) {
            elementos.push(n.dato);
            n = n.enlace;
        }
        console.log(elementos.join(' '));
    }

    toString() {
        let current = this.primero;
        let str = '';
        while (current) {
            str += current.dato;
            if (current.enlace) {
                str += ' -> ';
            }
            current = current.enlace;
        }
        return `=> ${str}`;
    }

    /**
     * invertir(): Invierte el orden de los nodos en la lista enlazada.
     * Complejidad Temporal: O(n), donde n es el número de nodos en la lista, ya que recorremos la lista una vez.
     * Complejidad Espacial: O(1), ya que solo utilizamos un número constante de variables auxiliares.
     */
    invertir() {
        let anterior = null;
        let actual = this.primero;
        let siguiente = null;

        while (actual !== null) {
            siguiente = actual.enlace; // Guarda el siguiente nodo
            actual.enlace = anterior;    // Invierte el puntero del nodo actual
            anterior = actual;            // Mueve 'anterior' al nodo actual
            actual = siguiente;           // Mueve 'actual' al siguiente nodo
        }
        this.primero = anterior; // El último nodo ahora es la nueva cabeza
    }

    /**
     * eliminarDuplicados(): Elimina los elementos duplicados de la lista enlazada.
     * Complejidad Temporal: O(n^2) en el peor caso (todos los elementos son iguales), donde n es el número de nodos. Podría optimizarse a O(n) con un Set para almacenar los elementos vistos.
     * Complejidad Espacial: O(1), ya que solo utilizamos un número constante de variables auxiliares.
     */
    eliminarDuplicados() {
        let actual = this.primero;
        while (actual !== null) {
            let siguienteDistinto = actual;
            while (siguienteDistinto.enlace !== null && siguienteDistinto.enlace.dato === actual.dato) {
                siguienteDistinto.enlace = siguienteDistinto.enlace.enlace; // Saltar los duplicados
            }
            actual = siguienteDistinto.enlace;
        }
    }

    /**
     * obtenerDesdeElFinal(n): Devuelve el n-ésimo elemento desde el final de la lista.
     * Complejidad Temporal: O(n), donde n es el número de nodos en la lista, ya que recorremos la lista dos veces en el peor caso.
     * Complejidad Espacial: O(1), ya que solo utilizamos un número constante de variables auxiliares.
     * @param {number} n El índice del elemento desde el final (1 es el último elemento).
     * @returns {*} El dato del n-ésimo elemento desde el final, o undefined si n es inválido.
     */
    obtenerDesdeElFinal(n) {
        if (n <= 0) {
            return undefined;
        }
        let primero = this.primero;
        let segundo = this.primero;

        // Mueve el puntero 'primero' n nodos adelante
        for (let i = 0; i < n; i++) {
            if (primero === null) {
                return undefined; // La lista es más corta que n
            }
            primero = primero.enlace;
        }

        // Mueve ambos punteros hasta que 'primero' llegue al final
        while (primero !== null) {
            primero = primero.enlace;
            segundo = segundo.enlace;
        }

        // 'segundo' ahora apunta al n-ésimo nodo desde el final
        return segundo ? segundo.dato : undefined;
    }
}

// Pruebas automáticas
console.log("\n--- Pruebas Automáticas ---");

const listaPrueba = new Lista();
listaPrueba.insertarCabezaLista(3);
listaPrueba.insertarCabezaLista(2);
listaPrueba.insertarCabezaLista(1);

// Prueba de invertir()
const listaInvertidaPrueba = new Lista();
listaInvertidaPrueba.insertarCabezaLista(3);
listaInvertidaPrueba.insertarCabezaLista(2);
listaInvertidaPrueba.insertarCabezaLista(1);
listaInvertidaPrueba.invertir();
console.assert(listaInvertidaPrueba.toString() === "=> 3 -> 2 -> 1", "Prueba de invertir() fallida");

const listaInvertirVacia = new Lista();
listaInvertirVacia.invertir();
console.assert(listaInvertirVacia.toString() === "=> ", "Prueba de invertir() en lista vacía fallida");

const listaInvertirUnElemento = new Lista();
listaInvertirUnElemento.insertarCabezaLista(1);
listaInvertirUnElemento.invertir();
console.assert(listaInvertirUnElemento.toString() === "=> 1", "Prueba de invertir() en lista con un elemento fallida");

// Prueba de eliminarDuplicados()
const listaDuplicadosPrueba = new Lista();
listaDuplicadosPrueba.insertarCabezaLista(3);
listaDuplicadosPrueba.insertarCabezaLista(2);
listaDuplicadosPrueba.insertarCabezaLista(2);
listaDuplicadosPrueba.insertarCabezaLista(1);
listaDuplicadosPrueba.eliminarDuplicados();
const listaSinDuplicadosStr = "=> 1 -> 2 -> 3";
let listaDuplicadosActualStr = "";
let currentDuplicados = listaDuplicadosPrueba.primero;
while (currentDuplicados) {
    listaDuplicadosActualStr += currentDuplicados.dato + (currentDuplicados.enlace ? " -> " : "");
    currentDuplicados = currentDuplicados.enlace;
}
console.assert("=> " + listaDuplicadosActualStr === listaSinDuplicadosStr, "Prueba de eliminarDuplicados() fallida");

const listaSinDuplicadosPrueba = new Lista();
listaSinDuplicadosPrueba.insertarCabezaLista(3);
listaSinDuplicadosPrueba.insertarCabezaLista(2);
listaSinDuplicadosPrueba.insertarCabezaLista(1);
listaSinDuplicadosPrueba.eliminarDuplicados();
console.assert(listaSinDuplicadosPrueba.toString() === "=> 1 -> 2 -> 3", "Prueba de eliminarDuplicados() en lista sin duplicados fallida");

const listaDuplicadosVacia = new Lista();
listaDuplicadosVacia.eliminarDuplicados();
console.assert(listaDuplicadosVacia.toString() === "=> ", "Prueba de eliminarDuplicados() en lista vacía fallida");

const listaSoloDuplicados = new Lista();
listaSoloDuplicados.insertarCabezaLista(2);
listaSoloDuplicados.insertarCabezaLista(2);
listaSoloDuplicados.eliminarDuplicados();
console.assert(listaSoloDuplicados.toString() === "=> 2", "Prueba de eliminarDuplicados() en lista solo con duplicados fallida");


// Prueba de obtenerDesdeElFinal(n)
const listaFinalPrueba = new Lista();
listaFinalPrueba.insertarCabezaLista(5);
listaFinalPrueba.insertarCabezaLista(4);
listaFinalPrueba.insertarCabezaLista(3);
listaFinalPrueba.insertarCabezaLista(2);
listaFinalPrueba.insertarCabezaLista(1);
console.assert(listaFinalPrueba.obtenerDesdeElFinal(1) === 5, "Prueba de obtenerDesdeElFinal(1) fallida");
console.assert(listaFinalPrueba.obtenerDesdeElFinal(3) === 3, "Prueba de obtenerDesdeElFinal(3) fallida");
console.assert(listaFinalPrueba.obtenerDesdeElFinal(5) === 1, "Prueba de obtenerDesdeElFinal(5) fallida");
console.assert(listaFinalPrueba.obtenerDesdeElFinal(0) === undefined, "Prueba de obtenerDesdeElFinal(0) fallida");
console.assert(listaFinalPrueba.obtenerDesdeElFinal(6) === undefined, "Prueba de obtenerDesdeElFinal(6) en lista corta fallida");

const listaFinalVacia = new Lista();
console.assert(listaFinalVacia.obtenerDesdeElFinal(1) === undefined, "Prueba de obtenerDesdeElFinal(1) en lista vacía fallida");

const listaFinalUnElemento = new Lista();
listaFinalUnElemento.insertarCabezaLista(10);
console.assert(listaFinalUnElemento.obtenerDesdeElFinal(1) === 10, "Prueba de obtenerDesdeElFinal(1) en lista con un elemento fallida");
console.assert(listaFinalUnElemento.obtenerDesdeElFinal(2) === undefined, "Prueba de obtenerDesdeElFinal(2) en lista con un elemento fallida");


// Ejemplos de uso
console.log("\n--- Ejemplos de Uso ---");

const miLista = new Lista();
miLista.insertarCabezaLista(30);
miLista.insertarCabezaLista(20);
miLista.insertarCabezaLista(10);
console.log("Lista inicial (visualizar):");
miLista.visualizar();
console.log("Lista inicial (toString):", miLista.toString());

miLista.invertir();
console.log("Lista invertida (visualizar):");
miLista.visualizar();
console.log("Lista invertida (toString):", miLista.toString());

miLista.insertarLista(miLista.buscarLista(20), 25);
console.log("Lista después de insertar 25 después de 20 (visualizar):");
miLista.visualizar();
console.log("Lista después de insertar 25 después de 20 (toString):", miLista.toString());

const listaConDuplicados = new Lista();
listaConDuplicados.insertarCabezaLista(3);
listaConDuplicados.insertarCabezaLista(2);
listaConDuplicados.insertarCabezaLista(2);
listaConDuplicados.insertarCabezaLista(1);
console.log("Lista con duplicados (visualizar):");
listaConDuplicados.visualizar();
listaConDuplicados.eliminarDuplicados();
console.log("Lista sin duplicados (visualizar):");
listaConDuplicados.visualizar();

const elementoDesdeFinal = miLista.obtenerDesdeElFinal(2);
console.log("El 2do elemento desde el final es:", elementoDesdeFinal);

const elementoDesdeFinalVacio = new Lista();
console.log("Elemento desde el final de lista vacía:", elementoDesdeFinalVacio.obtenerDesdeElFinal(1));