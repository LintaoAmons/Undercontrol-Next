/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountResponse } from './AccountResponse';
import type { ChangeRecord } from './ChangeRecord';

export type AccountDetailsResponse = {
    account: AccountResponse;
    changeRecords: Array<ChangeRecord>;
};

