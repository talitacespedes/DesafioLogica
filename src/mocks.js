const list = [
    {
        name: "Uber",
        value: 1430.0,
        month: 12,
    },
    {
        name: "PS Store",
        value: 40.0,
        month: 03,
    },
    {
        name: "GPlay",
        value: 37.50,
        month: 03,
    },
    {
        name: "Uber",
        value: 1382.0,
        month: 03,
    },
    {
        name: "iFood",
        value: 77.0,
        month: 02,
    },
    {
        name: "Uber",
        value: 3.00,
        month: 01,
    },
    {
        name: "iFood",
        value: 20.34,
        month: 01,
    },
    {
        name: "iFood",
        value: 37.40,
        month: 01,
    },
    {
        name: "Uber",
        value: 17.70,
        month: 03,
    },
    {
        name: "GPlay",
        value: 16.70,
        month: 03,
    },
    {
        name: "AppStore",
        value: 15.0,
        month: 02,
    },
    {
        name: "Uber",
        value: 96.11,
        month: 02,
    },
    {
        name: "GPlay",
        value: 7.71,
        month: 02,
    },
    {
        name: "AppStore",
        value: 3.33,
        month: 02,
    },
    {
        name: "iFood",
        value: 47.98,
        month: 03,
    },
    {
        name: "AppStore",
        value: 12.22,
        month: 03,
    },
    {
        name: "Uber",
        value: 2.56,
        month: 04,
    },
    {
        name: "Uber",
        value: 5.32,
        month: 03,
    },
    {
        name: "PS Store",
        value: 5.44,
        month: 03,
    },
    {
        name: "PS Store",
        value: 98.37,
        month: 03,
    },
    {
        name: "PS Store",
        value: 78.90,
        month: 01,
    },
    {
        name: "GPlay",
        value: 65.03,
        month: 03,
    },
    {
        name: "iFood",
        value: 32.12,
        month: 03,
    },
    {
        name: "iFood",
        value: 34.56,
        month: 01,
    },
    {
        name: "iFood",
        value: 1480.0,
        month: 03,
    },
    {
        name: "Uber",
        value: 5.34,
        month: 03,
    },
    {
        name: "iFood",
        value: 6.12,
        month: 01,
    },
    {
        name: "Uber",
        value: 344.12,
        month: 03,
    },
    {
        name: "GPlay",
        value: 96.10,
        month: 03,
    },
    {
        name: "Uber",
        value: 6.09,
        month: 01,
    },
    {
        name: "PS Store",
        value: 3.21,
        month: 03,
    },
];

let group = list.reduce((items, item) => {
    items[item.month] = [...items[item.month] || [], item];
    return items;
}, {});