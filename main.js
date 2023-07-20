let nombre = prompt("Nos gusta la atención personalizada, ¿Cómo es tu nombre?");

alert(`Excelente, ${nombre}. Voy a guiarte para que tengas una compra exitosa.`);


const carrito = [];

const ordenarmenormayor = () => {
    productosgiga.sort((a,b)=> a.precio - b.precio);
    
    mostrarlistaordenada();
}

const ordenarmayormenor = () => {
    productosgiga.sort((a,b)=> b.precio - a.precio);
    
    mostrarlistaordenada();
}

const mostrarlistaordenada = () => {
    const listaOrdenada = productosgiga.map(producto => {
        return '- '+producto.nombre+'$'+producto.precio
    });
    alert('Nuestros precios:'+'\n\n'+listaOrdenada.join('\n'))
    comprarproductos(listaOrdenada)
}

const comprarproductos = (listaDeProductos) => {
    let otroproducto;
    let productonombre = '';
    let productocantidad = 0;

    do {
        productonombre = prompt ('¿Qué planta querías?'+'\n\n'+listadeproductos.join('\n'));
        productocantidad = parseInt(prompt('¿Cuántas plantas querías?'));

        const producto = productosgiga.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());

        if (producto) {
            agregarAlCarrito(producto, producto.id, productocantidad)
        } else {
            alert('¡Que verguenza! No tenemos esta planta en stock ¡pero no te preocupes! Tomamos nota para la próxima compra.')
        }

        otroProducto = confirm('¿Querías alguna otra planta?');
    } while (otroProducto)

    confirmarcompra()
};

const agregaralcarrito = (producto, productoId, productoCantidad) => {
    const productorepetido = carrito.find(producto => producto.id === productoId)
    if (!productorepetido) {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else {
        productorepetido.cantidad += productoCantidad;
    }
}

const eliminarProductoCarrito = (productoNombre) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === productoNombre) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1);
            }
        }
    });
    confirmarcompra()
};

const confirmarcompra = () => {
    const listaProductos = carrito.map(producto => {
        return '- '+producto.nombre+' | Total: '+producto.cantidad
    });

    const confirmar = confirm('Checkout: '
            +'\n\n'+listaProductos.join('\n')
            +'\n\n ¿Está bien tu compra?"'
    )

    if (confirmar) {
        finalizarCompra(listaProductos)
    } else {
        const productoAEliminar = prompt('¿Que planta queres eliminar?')
        eliminarProductoCarrito(productoAEliminar)
    }
};

const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0)
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0)
    alert('¡Esta es toda tu compra!: '
        +'\n\n'+listaProductos.join('\n')
        +'\n\nPlantas: '+cantidadTotal
        +'\n\nTotal: $'+precioTotal
        +'\n\nNo hay dudas de que estas nuevas plantas llenarán de vida cada rincon. ¡Que las disfrutes!'
    )
};

const comprar = () => {
    const productosBaratos = confirm("¿Te ordeno las plantas colocando las más caras primeras?")
    if (productosBaratos){
        ordenarMenorMayor();
    }else{
        ordenarMayorMenor();
    }
}

comprar();