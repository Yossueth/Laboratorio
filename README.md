CRUD de Productos
Este proyecto es una API simple que implementa las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar una lista de productos utilizando archivos JSON para el almacenamiento de datos.

Funciones Principales
1. leerData
La función leerData es la encargada de leer un archivo JSON de manera asíncrona y convertir su contenido en un objeto JavaScript. Además, maneja cualquier error que pueda ocurrir durante el proceso utilizando un bloque try-catch para asegurar una operación segura y evitar fallos inesperados.

2. getProductos
La función getProductos maneja las solicitudes para obtener la lista completa de productos. Lee los datos del archivo JSON de forma asíncrona y los devuelve al cliente en formato JSON.

3. getProductsId
La función getProductsId se encarga de manejar las solicitudes para obtener un producto específico basado en su ID. Esta función lee el archivo JSON, busca el producto correspondiente por su ID y devuelve ese producto en formato JSON.

4. addProduct
La función addProduct permite agregar un nuevo producto a la lista existente. Primero valida la entrada para asegurarse de que los datos del producto sean correctos, luego crea un nuevo objeto de producto, lo agrega a la lista y finalmente guarda los cambios en el archivo JSON.

5. editar
Por medio de una funcion asyncrona  estariamos utilizan al leer data por medio del await que es una promesa a leerData() y  a writeFile() .
estamos usando una constante patron para ingresar expreciones regulares y asi poder validar que solo sea texto y lo mismo con patronNumero que estaria para ayudarnos a validar solo numeros todo con test().
Por medio de un id y usando findIndex para buscarlo entre los productos que tenganmos en el data.json

6. eliminar
Por medio de una funcion asyncrona  estariamos utilizan al leer data por medio del await que es una promesa a leerData() y  a writeFile() .
Por medio de un id y usando findIndex para buscarlo entre los productos que tenganmos en el data.json
Utilizando splice para ayudarnos a eliminar .
Usamos json.stringify para cambiar un objeto o valor de JavaScript en una cadena de texto JSON



Instrucciones de Uso:

1.Clonar el repositorio.
2.Instalar las dependencias utilizando npm install, npm i express, npm i cors, npm init -y  
3.Iniciar el servidor utilizando node (nombre del archivo).
4.Realizar solicitudes HTTP (GET, POST, PUT, DELETE) para gestionar los productos.

Requisitos:
Node.js
Dependencias de Node (Express, etc.)