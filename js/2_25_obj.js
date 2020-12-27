function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  let newArray = [];
  for (const num of array1) {
    if (array2.includes(num)) {
      newArray.push(num);
    }
  }

  return newArray;

  // Пиши код выше этой строки
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]
