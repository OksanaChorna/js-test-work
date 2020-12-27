# javascript-test

Операторы сравнения === и !== «Нестрогие» операторы == и != выполняют
преобразование типов сравниваемых значений, что может привести к ошибкам,
особенно у начинающих.

// ❌ Плохо, выполняется приведение типов console.log(5 == '5'); // true
console.log(5 != '5'); // false console.log(1 == true); // true console.log(1 !=
true); // false Поэтому для проверки равенства или неравенства двух значений
используются операторы === (строгое равенство) и !== (строгое неравенство),
которые не выполняют приведение типов операндов.

// ✅ Хорошо, приведение типов не выполняется console.log(5 === '5'); // false
console.log(5 === 5); // true console.log(5 !== '5'); // true console.log(5 !==
5); // false console.log(1 === true); // false console.log(1 !== true); // true

Логическое «И» (оператор &&) Логические операторы используются для проверки
условий с множественными выражениями, например в ветвлениях.

Оператор && приводит все операнды к булю и возвращает значение одного из них.
Левый операнд, если его можно привести к false, и правый в остальных случаях.

выражение && выражение В следующем примере оба условия вернут true, поэтому
результатом всего выражения будет true - вернётся значение правого операнда.

const age = 20; console.log(age > 10 && age < 30); // true && true -> true Если
хотябы один из операндов будет приведён к false, результатом выражения будет
этот операнд.

const age = 50; console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false То есть логическое
«И» запинается на лжи и возвращает то, на чём запнулось или последний операнд.

console.log(true && false); // false console.log(false && true); // false
console.log(true && true); // true

console.log(3 && false); // false console.log(false && 3); // false
console.log(3 && true); // true console.log(true && 3); // 3 Полезно Запомните
шесть значений, которые в булевом преобразовании приводятся к `false`: `0`,
`NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`.
Абсолютно всё остальное приводится к `true`.

console.log(1 && 5); // true && true -> 5 console.log(5 && 1); // true && true
-> 1 console.log(0 && 2); // false && true -> 0 console.log(2 && 0); // true &&
false -> 0 console.log('' && 'Манго'); // false && true -> ''
console.log('Манго' && ''); // true && false -> '' console.log('Манго' &&
'Поли'); // true && true -> 'Поли' console.log('Поли' && 'Манго'); // true &&
true -> 'Манго'

Логическое «ИЛИ» (оператор ||) Оператор || приводит все операнды к булю и
возвращает значение одного из них. Левый операнд, если его можно привести к
true, и правый в остальных случаях.

выражение || выражение В следующем примере условие слева вернёт true, поэтому
результатом всего выражения будет true - вернётся значение первого операнда,
которое было приведено к true.

const age = 5; console.log(age < 10 || age > 30); // true || false -> true Тут
результатом тоже будет true, так как хотябы один из операндов, в этом случае
правый, был приведён к true.

const age = 40; console.log(age < 10 || age > 30); // false || true -> true А
здесь ни одно из условий не выполняется, поэтому получаем false - значение
последнего операнда.

const age = 20; console.log(age < 10 || age > 30); // false || false -> false То
есть логическое «ИЛИ» запинается на правде и возвращает то, на чём запнулось или
последний операнд.

console.log(true || false); // true console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3 console.log(false || 3); // 3 console.log(3 ||
true); // 3 console.log(true || 3); // true

Логическое «НЕ» (оператор !) Все операторы, которые мы рассматривали до этого,
были бинарными. Т.е. они содержали два операнда: левый и правый. Логическое
«НЕ» - это унарный оператор, выполняющий операцию над одним операндом справа.

!выражение Оператор ! приводит операнд к булю, если необходимо, а затем делает
инверсию - заменяет его на противоположный true -> false или false -> true.

console.log(!true); // false console.log(!false); // true console.log(!3); // !3
-> !true -> false console.log(!'Манго'); // !'Манго' -> !true -> false
console.log(!0); // !0 -> !false -> true console.log(!''); // !'' -> !false ->
true

const isOnline = true; const isNotOnline = !isOnline; // !isOnline -> !true ->
false

Метод slice() Метод строк slice(startIndex, endIndex) используется для создания
копии части или всей строки. Он делает копию элементов строки от startIndex и
до, но не включая endIndex и возвращает новую строку.

const productName = 'Ремонтный дроид'; console.log(productName.slice(0, 4)); //
'Ремо' console.log(productName.slice(3, 9)); // 'онтный'
console.log(productName.slice(0, productName.length)); // 'Ремонтный дроид'
console.log(productName.slice(10, productName.length)); //

Метод includes() Метод строк includes(substring) проверяет входит ли подстрока
substring в строку, возвращает буль - true если входит и false в противном
случае. Регистр символов в строке и подстроке имеет значение, так как например
буква 'a' не равна букве 'А'.

const productName = 'Ремонтный дроид';

console.log(productName.includes('н')); // true
console.log(productName.includes('Н')); // false
console.log(productName.includes('дроид')); // true
console.log(productName.includes('Дроид')); // false
console.log(productName.includes('Ремонтный')); // true
console.log(productName.includes('ремонтный')); // false
