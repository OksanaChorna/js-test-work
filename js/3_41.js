const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potion) {
    const entries = Object.entries(this.potions);
    for (const entry of entries) {
      if (entry.name === potion.name) {
        return `Зелье ${potion} уже есть в инвентаре!`;
      }
    }
    this.potions.push(potion);
  },
  removePotion(potionName) {
    let potionIndex = -1;

    const potions = Object.entries(this.potions);
    for (const [index, potion] of potions) {
      if (potionName === potion.name) {
        potionIndex = index;
      }
    }

    if (potionIndex === -1) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }

    // https://github.com/OksanaChorna/js-test-work.git

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    let potionIndex = -1;
    let targetPotion;

    const potions = Object.entries(this.potions);
    for (const [index, potion] of potions) {
      if (oldName === potion.name) {
        potionIndex = index;
        potion.name = newName;
        targetPotion = potion;
        break;
      }
    }

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1, targetPotion);
  },
  // Пиши код выше этой строки
};

// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));

console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));

// console.log(atTheOldToad.removePotion('Дыхание дракона'));
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
console.log(atTheOldToad.getPotions());
