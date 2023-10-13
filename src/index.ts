import { ApiGateway } from "./gateways/ApiGateway";
import { TaskModel } from "./models/TaskModel";
import { GetTopAmountEmployeeFromLastYearService } from "./services/GetTopAmountEmployeeFromLastYearService";
import { getLastYear } from "./util/date";

const main = async () => {
  const response = await ApiGateway.get<TaskModel>("https://interview.adpeai.com/api/v2/get-task");
  const transactions = response.data.transactions;
  const getTopAmountEmployeeFromLastYearService = new GetTopAmountEmployeeFromLastYearService();

  const lastYear = getLastYear();
  const ret = getTopAmountEmployeeFromLastYearService.execute(transactions, lastYear);
}

main();
