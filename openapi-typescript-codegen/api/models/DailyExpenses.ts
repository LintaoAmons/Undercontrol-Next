/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExpenseResponse } from './ExpenseResponse';

export type DailyExpenses = {
    total: number;
    date: string;
    expenses: Array<ExpenseResponse>;
};

