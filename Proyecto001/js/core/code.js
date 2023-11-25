numventa = 0;

function AddItem(val,mesa) {
    numventa++;
    agregarCantidad(mesa)
    valorTotal(val,mesa)
    AgregarALista(val,mesa,numventa)

    
}

function AgregarALista(val,mesa,numventa){
    switch (mesa){
        case 1:
            var opcionProductos1 = document.getElementById('inputState1');
            var nombreProducto = opcionProductos1.options[opcionProductos1.selectedIndex].text;
            document.getElementById("salesItems").appendChild(AddTableItemOption2(numventa, nombreProducto, val, mesa));
            break
        case 2:
            var opcionProductos2 = document.getElementById('inputState2');
            var nombreProducto = opcionProductos2.options[opcionProductos2.selectedIndex].text;
            document.getElementById("salesItems").appendChild(AddTableItemOption2(numventa, nombreProducto, val, mesa));
            break
        case 3:
            var opcionProductos3 = document.getElementById('inputState3');
            var nombreProducto = opcionProductos3.options[opcionProductos3.selectedIndex].text;
            document.getElementById("salesItems").appendChild(AddTableItemOption2(numventa, nombreProducto, val, mesa));
            break
        case 4:
            var opcionProductos4 = document.getElementById('inputState4');
            var nombreProducto = opcionProductos4.options[opcionProductos4.selectedIndex].text;
            document.getElementById("salesItems").appendChild(AddTableItemOption2(numventa, nombreProducto, val, mesa));
            break
    }
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

