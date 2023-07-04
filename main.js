alert('Bienvenidos a Giga Plant - Tu vivero Online')

const buyProducts = () => {
    let product = ''
    let quantity = 0
    let price = 0
    let subtotal = 0
    let continueShopping = true

    do {
        let productValidated = false
        product = prompt("¿Qué planta queres comprar hoy?: Potus $499; Jazmin $799; Palmera $999; Cactus $599")

        productValidated = validateProduct(product)

        quantity = parseInt(prompt("¿Cuantas unidades queres?"))

        let quantityValidated = validateQuantity(quantity)

        switch (product) {
            case 'potus':
                price = 499
                break;
            case 'jazmin':
                price = 799
                break;
            case 'palmera':
                price = 999
                break;
            case 'cactus':
                price = 599
                break;
            default:
                0;
        }

        let pricePerProduct = price * quantityValidated
        subtotal += pricePerProduct
        console.log (subtotal)

        alert ("Agregaste "+quantityValidated+' plantas a tu vida. Tu total a pagar es $'+subtotal)

        continueShopping = confirm('¿Queres otra planta?')

    } while (continueShopping)

    return subtotal
}

const validateProduct = (product) => {
    if (product === 'palmera' || product === 'potus' || product === 'jazmin' || product === 'cactus') {
        return true
    } else {
        alert('¡Esa planta no está disponible... por lo menos por ahora!')
        product = prompt("Escribe solamente el nombre de la planta")
    }
    return product
}
    

const validateQuantity = (quantity) => {
    while (isNaN(quantity) || quantity <= 0){
        alert('¡Surgió un problema! No ingresaste la cantidad de plantas')

    quantity = parseInt(prompt("Selecciona cuantas plantas necesitas"))
    }
    return quantity
}

let total = buyProducts()

alert('Gracias por comprar en Giga Plant, tu total es $'+total)
