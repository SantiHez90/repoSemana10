// Items

let MenuItems = {"Sopa de 5":5000,"Jugo de 4":4000,"Hamburguesa de 3":3000,"Papas de 2":2000,"Gaseosa de 1":1000};

// Convertir el diccionario a solo claves
var claveDicc = Object.keys(MenuItems);

function InitialValues() {

    var select = document.getElementsByClassName("menuItems");
    var ItemsMenu = Object.keys(MenuItems);

    for (var i = 0; i < ItemsMenu.length; i++) {

        ItemsMenu.forEach((key) => {
            /* console.log("La llave es: "+key); */
            let option = document.createElement("option");
            option.text = key;
            option.value = MenuItems[key];
            /* console.log("El valor es: "+MenuItems[key]); */
            select[i].appendChild(option);
        });
    
    }
}

function AddTableItemOption2(id, first, last, handle) {
    let tableRow = document.createElement("tr");
    let tableDataId = document.createElement("th");
    let tableDataFirst = document.createElement("td");
    let tableDataLast = document.createElement("td");
    let tableDataHandle = document.createElement("td");

    tableDataId.appendChild(document.createTextNode(id));
    tableDataId.scope = "row";
    
    tableDataFirst.appendChild(document.createTextNode(first));
    tableDataLast.appendChild(document.createTextNode(last));
    tableDataHandle.appendChild(document.createTextNode(handle));

    tableRow.appendChild(tableDataId);
    tableRow.appendChild(tableDataFirst);
    tableRow.appendChild(tableDataLast);
    tableRow.appendChild(tableDataHandle);

    return tableRow;
}

/* window.AddTableItemOption2 = AddTableItemOption2; */
InitialValues();