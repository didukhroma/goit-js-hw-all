const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let balance;

const value = prompt('Введите количество дроидов!');

if (value === null) {
  console.log('Отменено пользователем!');
} else if (Number.isNaN(Number(value))) {
  console.log('Некоректное число! ');
} else if (Number(value) === 0 || Number(value) < 0) {
  console.log('Введите число больше 0!');
} else {
  totalPrice = Number(value) * pricePerDroid;
  balance = credits - totalPrice;
  const message =
    totalPrice > credits
      ? 'Недостаточно средств на счету!'
      : `Вы купили ${value} дроидов, на счету осталось ${balance} кредитов.`;

  console.log(message);
}