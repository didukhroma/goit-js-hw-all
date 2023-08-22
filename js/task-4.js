// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.Каждое поле объекта,
//     передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   let summ = 0;
//   for (const salary in employees) {
//     summ += employees[salary];
//   }
//   return summ;
//   // твой код
// };

const countTotalSalary = function (employees) {
  const arrEmployees = Object.values(employees);
  let sum = 0;
  for (const salary of arrEmployees) {
    sum += salary;
  }
  return sum;
  // твой код
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
