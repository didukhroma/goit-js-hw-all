// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с
// балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
let id = 1000;
//id transaction
const idNumber = () => {
  return id++;
};

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const newTransactionDetail = { id: idNumber(), type, amount };
    return newTransactionDetail;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const depositTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT,
    );

    this.transactions.push(depositTransaction);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Снятие такой суммы не возможно, недостаточно средств');
      console.log(`Ви можете снять только ${this.balance} кредитов`);
      return;
    }

    const withdrawTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW,
    );

    this.transactions.push(withdrawTransaction);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const findTransaction of this.transactions) {
      if (id !== findTransaction.id) continue;
      return findTransaction;
    }
    return console.log('Нет такой транзакции');
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let summ = 0;
    for (const typeTransaction of this.transactions) {
      if (type !== typeTransaction.type) continue;
      summ += typeTransaction.amount;
    }
    return summ;
  },
};

account.deposit(1000);
account.deposit(1000);
account.deposit(1101);
account.withdraw(1500);
account.withdraw(2500);
account.deposit(1101);
account.withdraw(1500);
account.deposit(2201);
account.withdraw(1500);
console.log(account.transactions);
console.table(account.transactions);
console.log(account.getBalance());
console.table(account.getTransactionDetails(1002));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
