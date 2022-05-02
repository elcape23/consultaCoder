let acumulado = "";
let total = 0;

const saludoBienvenida = () =>{
    let nombre;

    do{
        nombre = prompt("Bienvenido a Munay. Ingrese su nombre.")
    } while (nombre === "" || !isNaN(nombre));{
        prompt(`Hola ${nombre}, un gusto recibirte.`);
    }
}

const prendaElegida = () =>{
    let prenda = parseInt(
        prompt(
            "Qué prenda te gustaría elegir?\n1. Bombacha\n2. Corpiño\n3. Conjunto\n4. Body"
        )
    );

    while (prenda > 4 || prenda < 1){
        prenda = parseInt(
            prompt(
                "Qué prenda te gustaría elegir?\n1. Bombacha\n2. Corpiño\n3. Conjunto\n4. Body"
            )
        )    
    }
    
    let prenda2;

    switch(prenda){
        case 1:
            prenda2 = "Bombacha"
        break
        case 2:
            prenda2 = "Corpiño"
        break
        case 3:
            prenda2 = "Conjunto"
        break
        case 4:
            prenda2 = "Body"
        break        
    }

    return prenda2
}

const precioPrenda = (prendaTexto) =>{
    if(prendaTexto === "Bombacha"){
        return 500
    } else if (prendaTexto === "Corpiño"){
        return 800
    } else if (prendaTexto === "Conjunto"){
        return 1150
    } else {
        return 1400
    }
}

const precioFinalInfo = (prendaTexto, precio) =>{
    alert(`Agregaste ${prendaTexto} por $${precio}`)

    acumulado += `${prendaTexto} $${precio}\n`;
    total += precio;

    let agregarProducto = confirm("¿Desea agregar otro producto?")

    if (agregarProducto){
        init();
    } else {
        alert(`Llevas \n${acumulado}\nSu total es $${total}\nMuchas gracias por tu compra.`)
    }

}


const init = () =>{
    let prendaDefinitiva = prendaElegida(); 
    // ¿Porqué tengo que hacer un let aquí?¿Es la única manera para sacar el resultado del "return"??
    let prendaPrecioFinal = precioPrenda();
    precioFinalInfo(prendaDefinitiva, prendaPrecioFinal); //¿Porqué elijo éstas let entre paréntesis?
}

saludoBienvenida();
init ();
