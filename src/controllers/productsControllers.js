const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../server/data.json");

async function leerData() {
  try {
    const leer = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(leer);
  } catch (error) {
    console.error("Error al leer archivo", error);
  }
}

const getProducts = async (req, res) => {
  try {
    const productos = await leerData();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ messge: "Error al obtener el producto" });
  }
};

const getProductsId = async (req, res) => {
  try {
    const inv = await leerData();
    const { id } = req.params;
    const productsIndex = inv.Productos.findIndex(
      (productos) => productos.id === parseInt(id)
    );

    if (!productsIndex === -1) {
      return res.status(404).json({ messge: "producto no encontrado" });
    }
    const producto = inv.Productos[productsIndex];
    res.json(producto);
  } catch (error) {
    res.status(500).json({ messge: "Error al obtener el producto" });
  }
};

<<<<<<< HEAD
const eliminar =async (req , res) => {
    try {
        const{id} =req.params;
        let productos = await leerData()
        const productoIndex=productos.findIndex(productos => productos.id === productos.parseInt(id))

        if (productoIndex === -1) {
            res.status(404).json({message:"No se encontro el producto"})
        }
        productos.splice(productoIndex , 1);
        //inserte await escribir
        res.status(200).json({message:"El producto a sido elimiado"})
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
}

const editar = async (req , res) => {
  try {
    const{id} =req.params;
    const patron = '/[a-zA-Z]/';
    const patronNumero = '/[0-9]/';
    const {name, precio, cantidad, fecha_de_vencimiento} = req.body
    let productos = await leerData()
    const productoIndex=productos.findIndex(productos => productos.id === productos.parseInt(id))

    if (productoIndex === -1) {
        res.status(404).json({message:"No se encontro el producto"})
    }
    if (name !== name.macht(patron)) {
        res.status(404).json({message:"el nombre debe ser un texto"})
    }
    if (precio !== precio.macht(patronNumero)) {
        res.status(404).json({message:"debe de ingresar numeros"})
    }
    if (cantidad !== cantidad.macht(patronNumero) ) {
        res.status(404).json({message:"debe de ingresar numeros"})
    }
    if (fecha_de_vencimiento !== fecha_de_vencimiento.macht(patronNumero) ) {
        res.status(404).json({message:"debe de ingresar numeros"})
    }
    //inserte el await de escribir
    res.status(200).json({message:"El producto a sido editado"})
  } catch (error) {
    console.error('Error al editar el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
}

module.exports = { getProducts, getProductsId, eliminar, editar};
=======
const addProduct = async (req, res) => {
  const {name, precio, cantidad, fecha_de_vencimiento} = req.body
  //validacion para que sea obligatorio el guardado de el post
  if (!name || !precio || !cantidad || !fecha_de_vencimiento) {
      return res.status(400).json({
          message: 'Todos los datos son obligatorios: name y precio'
      })
  }
  try {
    const productos = await leerData();

      const newProducto = {
          id: productos.Productos.length + 1,
          name,
          cantidad,
          precio,
          fecha_de_vencimiento
      };  

      productos.Productos.push(newProducto);
      const jsonData = JSON.stringify(productos, null, 2);
      await fs.promises.writeFile(filePath, jsonData);
      res.status(201).json(newProducto);
  } catch (error) {
      res.status(500).json({ message: 'Error al crear el producto', error: error.message });
  }
};

module.exports = { getProducts, getProductsId, addProduct};
>>>>>>> 5470a4dc8dd4343da2f39cf852306ab72221c9d2
