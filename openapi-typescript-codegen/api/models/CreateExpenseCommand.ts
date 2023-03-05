/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateExpenseCommand = {
    referenceId: string;
    category: string;
    amount: number;
    note?: string;
};

