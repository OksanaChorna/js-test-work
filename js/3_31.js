// Пиши код ниже этой строки

function add(...args) {
  let sum = 0;
  for (const arg of args) {
    if (typeof arg === 'number') {
      sum = sum += arg;
    }
  }
  return sum;
  // Пиши код выше этой строки
}
console.log(add(15, 27)); //42
console.log(add(12, 4, 11, 48)); //75
