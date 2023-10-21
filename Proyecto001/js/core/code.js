function AddItem(val,mesa) {
    // document.getElementById("salesItems").innerHTML = AddTableItem(1, val, `other: ${val}`, "1234");
    //                                                                   numVenta
    var numventa = 1;
    
    document.getElementById("salesItems").appendChild(AddTableItemOption2(numventa, val, `other: ${val}`, mesa));
    var numventa = numventa + 1;

    agregarCantidad(mesa)
    valorTotal(val,mesa)

}

function agregarCantidad(mesa){

    switch (mesa){
        case 1:
            var cantidadM1 = document.getElementById("CantidadM1")
            var valorActualM1 = parseInt(cantidadM1.innerText)
            var valorActualM1 = valorActualM1 + 1;
            cantidadM1.innerText = valorActualM1;
            break
        case 2:
            var cantidadM2 = document.getElementById("CantidadM2")
            var valorActualM2 = parseInt(cantidadM2.innerText)
            var valorActualM2 = valorActualM2 + 1;
            cantidadM2.innerText = valorActualM2;
            break
        case 3:
            var cantidadM3 = document.getElementById("CantidadM3")
            var valorActualM3 = parseInt(cantidadM3.innerText)
            var valorActualM3 = valorActualM3 + 1;
            cantidadM3.innerText = valorActualM3;
            break
        case 4:
            var cantidadM4 = document.getElementById("CantidadM4")
            var valorActualM4 = parseInt(cantidadM4.innerText)
            var valorActualM4 = valorActualM4 + 1;
            cantidadM4.innerText = valorActualM4;
            break
    }
}

function valorTotal(val,mesa){
    switch (mesa){
        case 1:
            var cantidadM1 = document.getElementById("CantidadM1")
            var valorActualM1 = parseInt(cantidadM1.innerText)
            var valorActualM1 = valorActualM1 + 1;
            cantidadM1.innerText = valorActualM1;
            break
        case 2:
            var cantidadM2 = document.getElementById("CantidadM2")
            var valorActualM2 = parseInt(cantidadM2.innerText)
            var valorActualM2 = valorActualM2 + 1;
            cantidadM2.innerText = valorActualM2;
            break
        case 3:
            var cantidadM3 = document.getElementById("CantidadM3")
            var valorActualM3 = parseInt(cantidadM3.innerText)
            var valorActualM3 = valorActualM3 + 1;
            cantidadM3.innerText = valorActualM3;
            break
        case 4:
            var cantidadM4 = document.getElementById("CantidadM4")
            var valorActualM4 = parseInt(cantidadM4.innerText)
            var valorActualM4 = valorActualM4 + 1;
            cantidadM4.innerText = valorActualM4;
            break
    }
}