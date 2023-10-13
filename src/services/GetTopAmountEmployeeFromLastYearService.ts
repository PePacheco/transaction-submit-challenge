import { TransactionModel } from "../models/TransactionModel";
import { getLastYear } from "../util/date";

export class GetTopAmountEmployeeFromLastYearService {
  constructor() {}

  execute(transactions: TransactionModel[]): string[] {
    const lastYear = getLastYear();
    const lastYearTransactions = transactions.filter((transaction) => new Date(transaction.timeStamp).getFullYear() === lastYear);
    console.log(lastYearTransactions);

    return [];
  }
}

// With this data: 1) Get all the transactions of last year’s top earner. This means find the employee with the highest sum total of amount within the prior calendar year.
// Prior calendar year means, if it is currently 2022, we want only to consider transactions in 2021. 2) With last year’s top earner’s transactions get the transactionID s
// where the type is alpha .