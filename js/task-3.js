// // Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// // (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
//---------------------------------------------------------------
//1-var
// const findLongestWord = function (string) {
//   const arrayString = string.split(' ');
//   let lengthWord = 0;
//   let indexLongWord = 0;
//   for (let i = 0; i < arrayString.length; i += 1) {
//     if (arrayString[i].length > lengthWord) {
//       lengthWord = arrayString[i].length;
//       indexLongWord = i;
//     } else {
//       continue;
//     }
//   }
//   const longWord = arrayString[indexLongWord];
//   return longWord;
// };
//---------------------------------------------------------------------
//2-var
const findLongestWord = function (string) {
  const arrayString = string.split(' ');
  let longWord = arrayString[0];
  for (let i = 1; i < arrayString.length; i += 1) {
    if (arrayString[i].length > longWord.length) {
      longWord = arrayString[i];
    }
  }

  return longWord;
};

console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('May the force be with you'));
