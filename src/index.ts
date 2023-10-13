import { ApiGateway } from "./gateways/ApiGateway";
import { TaskModel } from "./models/TaskModel";
import { getLastYear } from "./util/date";

const main = async () => {
  const response = await ApiGateway.get<TaskModel>("https://interview.adpeai.com/api/v2/get-task");
  const transactions = response.data.transactions;

  const lastYear = getLastYear();
  const lastYearTransactions = transactions.filter((transaction) => new Date(transaction.timeStamp).getFullYear() === lastYear);
  console.log(lastYearTransactions);
}

main();

// With this data: 1) Get all the transactions of last year’s top earner. This means find the employee with the highest sum total of amount within the prior calendar year.
// Prior calendar year means, if it is currently 2022, we want only to consider transactions in 2021. 2) With last year’s top earner’s transactions get the transactionID s
// where the type is alpha .