/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddInvestmentTargetCommand } from '../models/AddInvestmentTargetCommand';
import type { Fund } from '../models/Fund';
import type { InvestCommand } from '../models/InvestCommand';
import type { InvestmentHomePageResponse } from '../models/InvestmentHomePageResponse';
import type { InvestmentRecord } from '../models/InvestmentRecord';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InvestmentControllerService {

    /**
     * @returns Fund OK
     * @throws ApiError
     */
    public static findAll(): CancelablePromise<Array<Fund>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/investment/targets',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static addInvestmentTarget(
        requestBody: AddInvestmentTargetCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/investment/targets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns InvestmentRecord OK
     * @throws ApiError
     */
    public static showAllInvestment(): CancelablePromise<Array<InvestmentRecord>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/investment/records',
        });
    }

    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static invest(
        requestBody: InvestCommand,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/investment/records',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns Fund OK
     * @throws ApiError
     */
    public static getById(
        id: string,
    ): CancelablePromise<Fund> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/investment/target/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns InvestmentHomePageResponse OK
     * @throws ApiError
     */
    public static investmentHome(): CancelablePromise<InvestmentHomePageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/investment/home',
        });
    }

}
