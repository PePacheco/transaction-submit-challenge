import { TransactionModel } from "../models/TransactionModel";

export class GetTopAmountEmployeeFromLastYearService {
  constructor() {}

  execute(transactions: TransactionModel[], lastYear: number): string[] {
    const lastYearTransactions = transactions.filter((transaction) => new Date(transaction.timeStamp).getFullYear() === lastYear);

    const employeeSums = lastYearTransactions.reduce<{ [id: string]: number }>((acc, transaction) => {
      const { employee: { id }, amount } = transaction;
      if (!acc[id]) acc[id] = 0;

      acc[id] += amount;
      return acc;
    }, {});

    const topEarnerId = Object.keys(employeeSums).reduce((a, b) => employeeSums[a] > employeeSums[b] ? a : b);

    const topEarnerAlphaTransactions = lastYearTransactions.filter((transaction) => transaction.employee.id === topEarnerId && transaction.type === "alpha");

    return topEarnerAlphaTransactions.map((transaction) => transaction.transactionID);
  }
}
