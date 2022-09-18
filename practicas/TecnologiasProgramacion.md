# Tecnologías de la Programación

## Parcial 1

### Práctica 1

Con lo aprendido de los Tipos de Datos:

Construye un objeto que dentro tenga:

- Tu información personal (nombre, edad, datos de contacto, etc).
- Incluye pasatiempos y
- La información de tus 3 películas favoritas.

Dentro de tu objeto incluye todos los tipos de datos vistos hasta el momento (_strings_, _numbers_, _booleans_, _functions_, _arrays_ y _objects_).

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 2

Con lo aprendido en clase vas a formar la ficha bibliográfica de tus 3 libros favoritos.

Cada libro será un objeto.

Dentro de dicho objeto cada dato del libro será una propiedad del objeto, cada libro deberá tener un método que al ejecutarlo en la consola, imprima la ficha bibliográfica del mismo.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 3

Convierte el código de la **práctica 2** en una función constructora prototípica.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 4

Aplica Progrmación Orientada a Objetos, Herencia y Polimorfismo con Clases con el siguiente planteamiento:

Vamos a calcular el perímetro y área de 3 Polígonos regulares: Tríangulo, Cuadrado y Pentágono.

Para ello tendrás que crear una clase padre llamada Polígono y 3 clases hijas una por cada figura solicitada.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 5

Con lo aprendido sobre condicionales, manda a imprimir en la consola del navegador los siguientes mensajes, dependiendo la hora del día:

- De **0hrs - 5hrs** imprime el mensaje **Déjame Dormir**.
- De **6hrs - 11hrs** imprime el mensaje **Buenos días**.
- De **12hrs - 18hrs** imprime el mensaje **Buenas tardes**.
- De **19hrs - 23hrs** imprime el mensaje **Buenas noches**.

El Objeto _**Date**_ permite obtener la información de la fecha y hora, puedes revisar su documentación en [este enlace](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date).

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 6

Con lo aprendido sobre condicionales, usa un _switch_ para mandar a imprimir en la consola del navegador el nombre del mes en el que estamos y una festividad alusiva al mes.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 7

Con lo aprendido sobre condicionales, operadores, el objeto _Date_ y los temporizadores, crea una función que imprima en la consola del navegador un reloj digital que muestre horas, minutos, segundos y este en formato am/pm.

Agrega validaciones a tu código.

Antes de escribir el código fuente del ejercicio deja un comentario y en este, escribe el algoritmo para resolver este ejercicio.

Esta práctica **vale por 2**.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 8

Con lo aprendido sobre ciclos, crea una función para obtener el factorial de un número.

Considera lo siguiente, para obtener el factorial:

- El número en cuestión tiene que ser positivo, entero y mayor a cero.
- El factorial se define como el producto de todos los números naturales anteriores o iguales a él, por ejemplo:

```
!5 = 5 x 4 x 3 x 2 x 1 = 120
!4 = 4 x 3 x 2 x 1 = 24
!3 = 3 x 2 x 1 = 6
```

Agrega validaciones a tu código.

Antes de escribir el código fuente del ejercicio deja un comentario y en este, escribe el algoritmo para resolver este ejercicio.

Esta práctica **vale por 2**.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 9

Con lo aprendido sobre ciclos, crea una función para determinar si un número dado es **Primo**.

Considera lo siguiente, un número primo es aquel que:

- Es positivo, entero y mayor a cero.
- Es divisible sólo entre el mismo y la unidad.
- La unidad (número uno) no es considerado primo.

Agrega validaciones a tu código.

Antes de escribir el código fuente del ejercicio deja un comentario y en este, escribe el algoritmo para resolver este ejercicio.

Esta práctica **vale por 2**.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

## Parcial 2

### Práctica 1

Con lo aprendido sobre constantes, tipos de funciones, arreglos y validaciones, crea una función que dado un arreglo de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, la salida de tu consola tendría que verse así:

Al ejecutar tu función:

```js
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
```

Al devolver el resultado:

```js
{
  pares: [2,4,6,8,0],
  impares: [1,3,5,7,9]
}
```

Agrega validaciones a tu código.

Para resolver este ejercicio tendrás que investigar sobre el método _**filter**_ de los Arreglos.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 2

Con lo aprendido sobre constantes, tipos de funciones, arreglos y validaciones, crea una función que dado un arreglo de números devuelva un objeto con tres arreglos, el primero tendrá los numeros en el orden que fueron pasados a la función, el segundo tendrá los números ordenados en forma ascendente y el último de forma descendiente, la salida de tu consola tendría que verse así:

pe. miFuncion devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }

Al ejecutar tu función:

```js
ordenarNumeros([7, 5, 7, 8, 6]);
```

Al devolver el resultado:

```js
{
  original:[7, 5, 7, 8, 6],
  ascendente: [5, 6, 7, 7, 8],
  descendente: [8, 7, 7, 6, 5]
}
```

Agrega validaciones a tu código.

Para resolver este ejercicio tendrás que investigar sobre los métodos _**map**_, _**sort**_ y _**reverse**_ de los Arreglos.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

### Práctica 3

Con lo aprendido sobre los Módulos:

Crea un nuevo proyecto en _Replit_ y convierte a módulos los siguientes ejercicios:

1. Reloj Digital.
1. Factorial.
1. Número Primo.
1. Separar número pares e impares.
1. Ordenar números.
1. Polígonos Regulares:
   - Por cada polígono crea un archivo _js_.
   - Agrega validaciones a tus clases de los polígonos.

En la tarea sólo agrega el enlace de tu proyecto en _Replit_.

---

## Parcial 3

---

## Proyecto Final

---
