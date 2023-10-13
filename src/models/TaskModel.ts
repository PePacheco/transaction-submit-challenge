import { TransactionModel } from "./TransactionModel";

export interface TaskModel {
  id: string;
  transactions: TransactionModel[];
}
