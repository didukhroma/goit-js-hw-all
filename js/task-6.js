let input;
let total = 0;

while (true) {
  input = prompt('Введите число!');
  const inputNumber = Number(input);
  const inputNotANumber = Number.isNaN(inputNumber);

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  } else if (inputNotANumber) {
    alert(`Введено не число. Введите число`);
    continue;
  } else {
    total += inputNumber;
  }
}