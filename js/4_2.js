function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
// makeMessage('Роял гранд', makePizza);
console.log(makeMessage('Роял гранд', makePizza));
console.log(makeMessage('Ультрасыр', deliverPizza));
