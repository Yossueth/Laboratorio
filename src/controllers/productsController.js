const addProduct = async (req, res) => {
    const {name, precio, cantidad, fecha_de_vencimiento} = req.body
    //validacion para que sea obligatorio el guardado de el post
    if (!name || !precio || !cantidad || !fecha_de_vencimiento) {
        return res.status(400), json({
            message: 'Todos los datos son obligatorios: name y precio'
        })
    }
    try {
        const data = await fs.readFile('data.json', 'utf8');
        let productos = JSON.parse(data);

        const newProducto = {
            id: productos.Productos.length + 1,
            name,
            cantidad,
            precio,
            fecha_de_vencimiento
        };  

        productos.Productos.push(newProducto);
        const jsonData = JSON.stringify(productos, null, 2);
        await fs.writeFile("data.json", jsonData);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
};


module.exports = {addProduct}