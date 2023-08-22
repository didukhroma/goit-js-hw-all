const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  const validLogin = login.length >= 4 && login.length <= 16 ? true : false;
  return validLogin;
};

const isLoginUnique = function (allLogins, login) {
  let uniqueLogin;
  for (const elementArrayLogins of allLogins) {
    uniqueLogin = true;
    if (login === elementArrayLogins) {
      uniqueLogin = false;
      break;
    }
  }
  return uniqueLogin;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(login);
      const addLoginAccept = 'Логин успешно добавлен!';
      // console.log(allLogins);
      return addLoginAccept;
    } else {
      const notUniqueLogin = 'Такой логин уже используется!';
      return notUniqueLogin;
    }
  } else {
    const notValidLogin = 'Ошибка! Логин должен быть от 4 до 16 символов';
    return notValidLogin;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
