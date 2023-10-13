import { TransactionModel } from "../models/TransactionModel";
import { GetTopAmountEmployeeFromLastYearService } from "../services/GetTopAmountEmployeeFromLastYearService";

describe('Testing GetTopAmountEmployeeFromLastYearService execute method', () => {
  it('should return transactionIDs of type "alpha" for the top earner of the prior year', () => {
    const transactions: TransactionModel[] = [
      {
        transactionID: '1',
        amount: 100,
        type: 'alpha',
        timeStamp: '2021-06-01T00:00:00Z',
        employee: { id: 'A', name: 'Employee A', categoryCode: 'red' },
        location: { id: '1', name: 'Location 1' },
      },
      {
        transactionID: '2',
        amount: 200,
        type: 'alpha',
        timeStamp: '2021-07-01T00:00:00Z',
        employee: { id: 'A', name: 'Employee A', categoryCode: 'red' },
        location: { id: '1', name: 'Location 1' },
      },

      {
        transactionID: '3',
        amount: 150,
        type: 'beta',
        timeStamp: '2021-05-01T00:00:00Z',
        employee: { id: 'B', name: 'Employee B', categoryCode: 'blue' },
        location: { id: '1', name: 'Location 1' },
      },

      {
        transactionID: '4',
        amount: 1000,
        type: 'alpha',
        timeStamp: '2020-06-01T00:00:00Z',
        employee: { id: 'C', name: 'Employee C', categoryCode: 'green' },
        location: { id: '1', name: 'Location 1' },
      },
    ];

    const service = new GetTopAmountEmployeeFromLastYearService();
    const result = service.execute(transactions, 2021);

    expect(result).toEqual(['1', '2']);
  });

  it('should return an empty array if all transactions of the top earner are not of type "alpha"', () => {
    const transactions: TransactionModel[] = [
      {
        transactionID: '1',
        amount: 100,
        type: 'beta',
        timeStamp: '2021-06-01T00:00:00Z',
        employee: { id: 'A', name: 'Employee A', categoryCode: 'red' },
        location: { id: '1', name: 'Location 1' },
      },
      {
        transactionID: '2',
        amount: 200,
        type: 'beta',
        timeStamp: '2021-07-01T00:00:00Z',
        employee: { id: 'A', name: 'Employee A', categoryCode: 'red' },
        location: { id: '1', name: 'Location 1' },
      },
      {
        transactionID: '3',
        amount: 150,
        type: 'beta',
        timeStamp: '2021-05-01T00:00:00Z',
        employee: { id: 'B', name: 'Employee B', categoryCode: 'blue' },
        location: { id: '1', name: 'Location 1' },
      },
      {
        transactionID: '4',
        amount: 1000,
        type: 'beta',
        timeStamp: '2020-06-01T00:00:00Z',
        employee: { id: 'C', name: 'Employee C', categoryCode: 'green' },
        location: { id: '1', name: 'Location 1' },
      },
    ];
    const service = new GetTopAmountEmployeeFromLastYearService();
    const result = service.execute(transactions, 2021);
    expect(result).toEqual([]);
  });

  it('should return transactionIDs of type "alpha" for both top earners if they earned the same highest amount', () => {
    const transactions: TransactionModel[] = [
      {
        transactionID: '1',
        amount: 150,
        type: 'alpha',
        timeStamp: '2021-06-01T00:00:00Z',
        employee: { id: 'A', name: 'Employee A', categoryCode: 'red' },
        location: { id: '1', name: 'Location 1' },
      },
      {
        transactionID: '2',
        amount: 50,
        type: 'beta',
        timeStamp: '2021-07-01T00:00:00Z',
        employee: { id: 'A', name: 'Employee A', categoryCode: 'red' },
        location: { id: '1', name: 'Location 1' },
      },
      {
        transactionID: '3',
        amount: 100,
        type: 'alpha',
        timeStamp: '2021-05-01T00:00:00Z',
        employee: { id: 'B', name: 'Employee B', categoryCode: 'blue' },
        location: { id: '1', name: 'Location 1' },
      },
      {
        transactionID: '4',
        amount: 100,
        type: 'alpha',
        timeStamp: '2021-07-01T00:00:00Z',
        employee: { id: 'B', name: 'Employee B', categoryCode: 'blue' },
        location: { id: '1', name: 'Location 1' },
      },
      {
        transactionID: '5',
        amount: 100,
        type: 'beta',
        timeStamp: '2021-08-01T00:00:00Z',
        employee: { id: 'C', name: 'Employee C', categoryCode: 'green' },
        location: { id: '1', name: 'Location 1' },
      },
    ];

    const service = new GetTopAmountEmployeeFromLastYearService();
    const result = service.execute(transactions, 2021);

    expect(result).toEqual(['1', '3', '4']);
  });
});
