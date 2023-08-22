const total = 100;
const ordered = 50; //20,80,130

// 1-var
// if (ordered <= total) {
//   console.log('"Заказ оформлен, с вами свяжется менеджер"');
// } else {
//   console.log('"На складе недостаточно товаров!"');
// }

//--------------------------------------------------------------------------
// 2 -var
const message =
  ordered <= total
    ? '"Заказ оформлен, с вами свяжется менеджер"'
    : '"На складе недостаточно товаров!"';
console.log(message);

//--------------------------------------------------------------------------
// 3-var
// const btn = document.querySelector('button[data-accept-goods]');
// const goods = document.querySelector('input[data-goods]');

// btn.addEventListener('click', function () {
//   const ordered = Number(goods.value);
//   const message =
//     ordered <= total
//       ? '"Заказ оформлен, с вами свяжется менеджер"'
//       : '"На складе недостаточно товаров!"';
//   alert(message);
// });