function FormatPrice(number, minDigits = 2) {
    number = number.toFixed(minDigits).toString();
    return number.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

function getTotal(total, item) {
    return total + item.value;
};

function getMonth(key) {
    let months = {
        01 : 'Janeiro',
        02 : 'Fevereiro',
        03 : 'Março',
        04 : 'Abril',
        05 : 'Maio',
        06 : 'Junho',
        07 : 'Julho',
        08 : 'Agosto',
        09 : 'Setembro',
        10 : 'Outubro',
        11 : 'Novembro',
        12 : 'Dezembro'
    };

    return months[key];
};

// table fatura
Object.values(list).map(item => {

    let row = document.createElement("tr");
    let tbody = document.getElementById("tbody_fatura").appendChild(row);

    Object.entries(item).map(([key, value]) => {

        if(key == 'value') {
            value = `R$ ${FormatPrice(value)}`;
        }
        
        let data = document.createElement("td");
        tbody.appendChild(data).innerText = value;
    })
});

// table consolidado
Object.entries(group).map(([key, value]) => {

    let row = document.createElement("tr");
    let tbody = document.getElementById("tbody_consolidado").appendChild(row);

    let dataMonth = document.createElement("td");
    tbody.appendChild(dataMonth).innerText = getMonth(key);

    let total = value.reduce(getTotal, 0);

    let dataTotal = document.createElement("td");
    row.appendChild(dataTotal).innerText = `R$ ${FormatPrice(total)}`;
});