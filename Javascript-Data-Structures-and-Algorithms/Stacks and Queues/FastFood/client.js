const Cashier = require('./Cashier');

let customer1 = {name: "Andrey Westcol", order: 2343}
let customer2 = {name: "Jully Santos", order: 2344}
let customer3 = {name: "Wesley Couls", order: 2345}
let customer4 = {name: "Francis Ellen", order: 2346}

const cashier = new Cashier();
cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);
cashier.addOrder(customer4);
cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();

