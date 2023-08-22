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