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

    const maxAmount = Math.max(...Object.values(employeeSums));
    const topEarnerIds = Object.keys(employeeSums).filter(
      (id) => employeeSums[id] === maxAmount
    );

    const topEarnerAlphaTransactions = lastYearTransactions.filter(
      (transaction) =>
        topEarnerIds.includes(transaction.employee.id) &&
        transaction.type === "alpha"
    );

    return topEarnerAlphaTransactions.map((transaction) => transaction.transactionID);
  }
}
