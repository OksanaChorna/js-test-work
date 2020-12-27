const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);

    // 🔥 Оставляем три пустые строки для студента
    // Пиши код выше этой строки
  },
};

atTheOldToad.removePotion('Дыхание дракона');

atTheOldToad.removePotion('Зелье скорости');
