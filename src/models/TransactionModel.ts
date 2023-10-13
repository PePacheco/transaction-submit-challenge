import { EmployeeModel } from "./EmployeeModel";
import { LocationModel } from "./LocationModel";

export interface TransactionModel {
  transactionID: string;
  amount: number;
  type: string;
  timeStamp: string;
  employee: EmployeeModel;
  location: LocationModel;
}
