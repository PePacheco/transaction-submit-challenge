import { ApiGateway } from "./gateways/ApiGateway";
import { TaskModel } from "./models/TaskModel";

const main = async () => {
  const response = await ApiGateway.get<TaskModel>("https://interview.adpeai.com/api/v2/get-task");
  console.log(response.data);
}

main();
