const eliminar =async (req , res) => {
    try {
        const{id} =req.params;
        const productoIndex=productos.findIndex(productos => productos.id === productos.parseInt(id))

        if (productoIndex === -1) {
            res.status(404).json({message:"No se encontro el producto"})
        }
        productos.splice(productoIndex , 1);

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
  } catch (error) {
    
  }
}