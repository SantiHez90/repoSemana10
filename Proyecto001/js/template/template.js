/* let MenuItems = ["Beef", "Rice", "Wine"]; */

let MenuItems = {"Sopa":5000,"Jugo":4000};

function InitialValues() {
    var select = document.getElementsByClassName("menuItems");
    var ItemsMenu = Object.keys(MenuItems);

    for (var i = 0; i < ItemsMenu.length; i++) {

        ItemsMenu.forEach((key) => {

            console.log(key);
            let option = document.createElement("option");
            option.text = key;
            option.value = MenuItems[key];
            console.log(MenuItems[key]);
    
            select[i].appendChild(option);
        });
    
    }

function AddTemplateItem(label, value) {
    let template = `<li class="list-group-item d-flex justify-content-between align-items-center">${label}<span class="badge bg-primary rounded-pill">${value}</span></li>`

    return template;
}

function AddTableItem(id, first, last, handle) {
    let template = `<tr><th scope="row">${id}</th><td>${first}</td><td>${last}</td><td>${handle}</td></tr>`

    return template;
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

// Initial values and template defaults
InitialValues();
