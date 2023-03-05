/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';
import type { AccountDepositCommand } from '../models/AccountDepositCommand';
import type { AccountDetailsResponse } from '../models/AccountDetailsResponse';
import type { AccountHomePageVO } from '../models/AccountHomePageVO';
import type { AccountTransferCommand } from '../models/AccountTransferCommand';
import type { AccountWithdrawCommand } from '../models/AccountWithdrawCommand';
import type { AvailableAccountResponse } from '../models/AvailableAccountResponse';
import type { CreateCommand } from '../models/CreateCommand';
import type { UpdateCommand } from '../models/UpdateCommand';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountControllerService {

    /**
     * @returns Account OK
     * @throws ApiError
     */
    public static findAllAccounts(): CancelablePromise<Array<Account>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts',
        });
    }

    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static create(
        requestBody: CreateCommand,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns Account OK
     * @throws ApiError
     */
    public static get1(
        id: string,
    ): CancelablePromise<Account> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static update1(
        id: string,
        requestBody: UpdateCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static withdraw(
        requestBody: AccountWithdrawCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/withdraw',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static transfer(
        requestBody: AccountTransferCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/transfer',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static deposit(
        requestBody: AccountDepositCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/deposit',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param accountId
     * @returns AccountDetailsResponse OK
     * @throws ApiError
     */
    public static getDetails(
        accountId: string,
    ): CancelablePromise<AccountDetailsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{accountId}/details',
            path: {
                'accountId': accountId,
            },
        });
    }

    /**
     * @returns AccountHomePageVO OK
     * @throws ApiError
     */
    public static accountHomePage(): CancelablePromise<AccountHomePageVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/home-page',
        });
    }

    /**
     * @param excludeAccountIds
     * @returns AvailableAccountResponse OK
     * @throws ApiError
     */
    public static findAvailableAccounts(
        excludeAccountIds: Array<string>,
    ): CancelablePromise<Array<AvailableAccountResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/availableAccounts',
            query: {
                'excludeAccountIds': excludeAccountIds,
            },
        });
    }

}
