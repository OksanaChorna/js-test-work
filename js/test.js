// const target = {
//   id: 24,
//   isOnline: true,
//   ...{ name: 'Mango', age: 2 },
//   ...{ age: 7, isOnline: false },
// };

// 2_23

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  let newArray = [];
  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
    //push
  }
  return newArray;
  // Пиши код выше этой строки
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); //4, 5
console.log(filterArray([1, 2, 3, 4, 5], 4)); //5
