function FormatPrice(number, minDigits = 2) {
    number = number.toFixed(minDigits).toString();
    return number.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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