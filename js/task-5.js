let price;
let countryName;
const country = prompt('Введите страну назначения!');

if (country === null) {
  console.log('Отменено пользователем!');
} else {
  switch (country.toLowerCase()) {
    case 'китай':
      countryName = 'Китай';
      price = 100;
      break;
      const checkForSpam = function (message) {
        const normalizedMessage = message.toLowerCase();
        const result =
          normalizedMessage.includes('spam') ||
          normalizedMessage.includes('sale');
        //2-var
        // const result = Boolean(
        //   normalizedMessage.includes('spam') || normalizedMessage.includes('sale'),
        // );
        //3-var
        //  const result =
        // normalizedMessage.includes('spam') || normalizedMessage.includes('sale')
        //   ? true
        //   : false;
        //4-var
        //   let result = false;
        //   if (normalizedMessage.includes('spam') || normalizedMessage.includes('sale')) {
        //     result = true;
        //   }
        return result;
      };

      // /*
      //  * Вызовы функции для проверки работоспособности твоей реализации.
      //  */
      console.log(checkForSpam('Latest technology news')); // false

      console.log(checkForSpam('JavaScript weekly newsletter')); // false

      console.log(checkForSpam('Get best sale offers now!')); // true

      console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
    case 'чили':
      countryName = 'Чили';
      price = 250;
      break;

    case 'австралия':
      countryName = 'Австралия';
      price = 170;
      break;

    case 'индия':
      countryName = 'Индия';
      price = 80;
      break;

    case 'ямайка':
      countryName = 'Ямайка';
      price = 120;
      break;

    default:
      break;
  }

  const message =
    price === undefined
      ? 'В вашей стране доставка не доступна'
      : `Доставка в ${countryName} будет стоить ${price} кредитов`;
  alert(message);
}
