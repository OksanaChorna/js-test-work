function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  return (newObject = { category, priority, ...data, completed });
  // Пиши код выше этой строки
}

console.log(
  makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }),
); //{ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }
console.log(
  makeTask({ category: 'Общее', priority: 'Обычный', completed: false }),
);
console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' })); //{ category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' })); //{ category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }
console.log(makeTask({ text: 'Купить хлеб' })); //{ category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }
