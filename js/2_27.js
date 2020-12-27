// // function filterArray(numbers, value) {
// //   // Пиши код ниже этой строки
// //   const filteredNumbers = [];

// //   for (const number of numbers) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   }

// //   return filteredNumbers;
// //   // Пиши код выше этой строки
// // }
// // console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]]
// // console.log(filterArray([1, 2, 3, 4, 5], 4)); //[12, 27, 3]
// // console.log(filterArray([1, 2, 3, 4, 5], 5)); //[10, 30, 40]
// // console.log(filterArray([12, 24, 8, 41, 76], 38));
// // console.log(filterArray([12, 24, 8, 41, 76], 20));

// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (number of array) {
//     if (number === value) {
//       return true;
//     }
//   }
//   return false;

//   // Пиши код выше этой строки
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += object[key];
    }
  }
  // Пиши код выше этой строки
  return propCount;
}
console.log(countProps({ name: 'Mango', age: 2 }));
