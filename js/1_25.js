function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

  message =
    ordered > available
      ? 'На складе недостаточно товаров!'
      : 'Заказ оформлен, с вами свяжется менеджер';

  // Пиши код выше этой строки
  return message;
}
console.log(checkStorage(100, 50)); // возвращает 'Заказ оформлен, с вами свяжется менеджер'.
console.log(checkStorage(100, 130)); // возвращает 'На складе недостаточно товаров!'.
console.log(checkStorage(200, 20)); // возвращает 'Заказ оформлен, с вами свяжется менеджер'.
console.log(checkStorage(200, 150)); // возвращает 'Заказ оформлен, с вами свяжется менеджер'.
console.log(checkStorage(150, 180)); // возвращает 'На складе недостаточно товаров!'.
