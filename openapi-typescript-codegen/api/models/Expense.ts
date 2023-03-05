/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category } from './Category';
import type { DomainFields } from './DomainFields';

export type Expense = {
    id: string;
    category: Category;
    amount: number;
    note: string;
    domainFields: DomainFields;
};

