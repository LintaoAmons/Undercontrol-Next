/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DomainFields } from './DomainFields';

export type Account = {
    id: string;
    amount: number;
    name: string;
    number: string;
    note: string;
    domainFields: DomainFields;
};

