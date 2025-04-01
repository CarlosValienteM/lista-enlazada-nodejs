# Lista Enlazada en JavaScript con Funcionalidades Extendidas para Node.js

Este proyecto implementa una estructura de datos fundamental: la **lista enlazada**, utilizando JavaScript y diseñada para ser utilizada en entornos Node.js. Además de las operaciones básicas que se esperan de una lista enlazada, esta implementación incluye funcionalidades extendidas para una mayor utilidad.

## Funcionalidades Incluidas

* **Insertar al inicio:** Permite agregar un nuevo nodo al principio de la lista.
* **Insertar después de un nodo:** Inserta un nuevo nodo después de un nodo específico.
* **Eliminar:** Elimina un nodo basado en su valor.
* **Buscar:** Busca un nodo en la lista por su valor.
* **Visualizar:** Imprime los elementos de la lista en la consola.
* **`toString()`:** Devuelve una representación en cadena de la lista.
* **`invertir()`:** Invierte el orden de los nodos dentro de la lista enlazada.
* **`eliminarDuplicados()`:** Elimina cualquier nodo que contenga un valor duplicado dentro de la lista.
* **`obtenerDesdeElFinal(n)`:** Retorna el dato del n-ésimo nodo contando desde el final de la lista.

## Pruebas Automáticas

El código incluye una sección de pruebas automáticas implementadas utilizando `console.assert()`. Estas pruebas verifican la correcta funcionalidad de todos los métodos, incluyendo casos para listas vacías, listas con un solo elemento y listas con múltiples elementos.

## Documentación

Cada método dentro de las clases `Nodo` y `Lista` está cuidadosamente documentado con comentarios JSDoc. Estos comentarios explican la finalidad del método, sus parámetros (si los tiene), el valor que retorna (si aplica) y un análisis de la complejidad computacional para los métodos extendidos.

## Instrucciones de Ejecución

1.  **Clonar el Repositorio (Opcional):** Si aún no tienes el código localmente, puedes clonar este repositorio utilizando Git:
    ```bash
    git clone [https://github.com/CarlosValientem/lista-enlazada-nodejs.git](https://github.com/CarlosValientem/lista-enlazada-nodejs.git)
    cd lista-enlazada-nodejs
    ```
2.  **Asegurarse de tener Node.js:** Este proyecto está diseñado para Node.js. Asegúrate de tenerlo instalado en tu sistema. Puedes descargarlo desde [https://nodejs.org/](https://nodejs.org/).
3.  **Ejecutar el Script:** Abre tu terminal o símbolo del sistema, navega hasta el directorio donde se encuentra el archivo `listaEnlazada.js` y ejecuta el siguiente comando:
    ```bash
    node listaEnlazada.js
    ```
4.  **Ver la Salida:** La terminal mostrará la salida de los ejemplos de uso, demostrando las diferentes funcionalidades de la lista enlazada, así como un encabezado indicando la sección de pruebas automáticas y cualquier error que se haya detectado en las pruebas.

## Ejemplos de Uso (Salida Esperada)

Al ejecutar el script, deberías ver una salida similar a la siguiente (los valores exactos pueden variar ligeramente):



--- Pruebas Automáticas ---
--- Ejemplos de Uso ---
Lista inicial (visualizar):
10 20 30
Lista inicial (toString): => 10 -> 20 -> 30
Lista invertida (visualizar):
30 20 10
Lista invertida (toString): => 30 -> 20 -> 10
Lista después de insertar 25 después de 20 (visualizar):
30 20 25 10
Lista después de insertar 25 después de 20 (toString): => 30 -> 20 -> 25 -> 10
Lista con duplicados (visualizar):
1 2 2 3
Lista sin duplicados (visualizar):
1 2 3
El 2do elemento desde el final es: 25
Elemento desde el final de lista vacía: undefined
