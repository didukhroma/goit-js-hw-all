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
    let input;
    const numbers = [];
    let total = 0;

    // 1-var
    while (true) {
      input = prompt('Введите число!');
      if (input === '') {
        alert('Введите не пуcтое значение');
        continue;
      }
      const inputNumber = Number(input);
      console.log(inputNumber);
      const inputNotANumber = Number.isNaN(inputNumber);

      if (input === null) {
        for (const number of numbers) {
          total += number;
        }

        const message =
          numbers.length === 0
            ? `Отменено пользователем`
            : `Общая сумма чисел равна ${total}`;

        console.log(message);
        break;
      }
      if (inputNotANumber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
      }
      numbers.push(inputNumber);
      console.log(numbers);
    }

    // // 2-var
    // while (true) {
    //   input = prompt('Введите число!');
    //   const inputNumber = Number(input);
    //   const inputNotANumber = Number.isNaN(inputNumber);

    //   if (input === null)
    // }

    // const addNumberToArray = inputNumber => numbers.push(inputNumber);
  }
}
