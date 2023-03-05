/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateExpenseCommand } from '../models/CreateExpenseCommand';
import type { Expense } from '../models/Expense';
import type { ExpenseHomePage2 } from '../models/ExpenseHomePage2';
import type { ExpenseResponse } from '../models/ExpenseResponse';
import type { UpdateExpenseCommand } from '../models/UpdateExpenseCommand';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExpenseControllerService {

    /**
     * @param id
     * @returns ExpenseResponse OK
     * @throws ApiError
     */
    public static get(
        id: string,
    ): CancelablePromise<ExpenseResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/expense/{id}',
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
    public static update(
        id: string,
        requestBody: UpdateExpenseCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/expense/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Expense OK
     * @throws ApiError
     */
    public static findAllExpense(): CancelablePromise<Array<Expense>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/expense',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static createExpense(
        requestBody: CreateExpenseCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/expense',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static delete(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/expense/{id}/delete',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param month
     * @returns ExpenseHomePage2 OK
     * @throws ApiError
     */
    public static expenseOfMonth(
        month: string,
    ): CancelablePromise<ExpenseHomePage2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/expense/home-page',
            query: {
                'month': month,
            },
        });
    }

}
