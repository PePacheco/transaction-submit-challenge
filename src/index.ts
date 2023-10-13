import { ApiGateway } from "./gateways/ApiGateway";
import { TaskModel } from "./models/TaskModel";
import { GetTopAmountEmployeeFromLastYearService } from "./services/GetTopAmountEmployeeFromLastYearService";
import { getLastYear } from "./util/date";

const main = async () => {
  const response = await ApiGateway.get<TaskModel>("https://interview.adpeai.com/api/v2/get-task");
  console.log(`Task ID: ${response.data.id} fetched and being processed...`);

  const transactions = response.data.transactions;
  const getTopAmountEmployeeFromLastYearService = new GetTopAmountEmployeeFromLastYearService();

  const lastYear = getLastYear();
  const transactionIds = getTopAmountEmployeeFromLastYearService.execute(transactions, lastYear);
  console.log(`Task ID: ${response.data.id} processed and being submitted...`)

  const submitResponse = await ApiGateway.post("https://interview.adpeai.com/api/v2/submit-task", { id: response.data.id, result: transactionIds });

  const statusMessages: { [status: number]: string } = {
    200: 'Submission Result: OK',
    400: 'Submission Result: Incorrect values provided for the API.',
    404: 'Submission Result: Value not received by the API.',
    503: 'Submission Result: API error communicating with the database.',
  };

  console.log(statusMessages[submitResponse.status] || 'Unknown error.');
}

main();
