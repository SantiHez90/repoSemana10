
function AddItem(val,mesa) {

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
    console.log("agregar cantidad de :"+mesa);
}

function valorTotal(val,mesa){


    switch (mesa){
        case 1:
            var ValorTotalM1 = document.getElementById("ValorTM1")
            var ValorTM1 = parseInt(ValorTotalM1.innerText);
            var ValorTM1 = parseInt(ValorTM1) + parseInt(val);
            ValorTotalM1.innerText = ValorTM1;
            break
        case 2:
            var ValorTotalM2 = document.getElementById("ValorTM2")
            var ValorTM2 = parseInt(ValorTotalM2.innerText);
            var ValorTM2 = parseInt(ValorTM2) + parseInt(val);
            ValorTotalM2.innerText = ValorTM2;
            break
        case 3:
            var ValorTotalM3 = document.getElementById("ValorTM3")
            var ValorTM3 = parseInt(ValorTotalM3.innerText);
            var ValorTM3 = parseInt(ValorTM3) + parseInt(val);
            ValorTotalM3.innerText = ValorTM3;
            break
        case 4:
            var ValorTotalM4 = document.getElementById("ValorTM4")
            var ValorTM4 = parseInt(ValorTotalM4.innerText);
            var ValorTM4 = parseInt(ValorTM4) + parseInt(val);
            ValorTotalM4.innerText = ValorTM4;
            break
    }
}

