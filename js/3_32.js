// Пиши код ниже этой строки
function addOverNum(argFirst, ...args) {
  //   console.log(...args);
  let total = 0;

  for (const arg of args) {
    if (arg > argFirst) {
      total += arg;
    }
  }

  return total;
  // Пиши код выше этой строки
}

console.log(addOverNum(50, 15, 27)); //0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
