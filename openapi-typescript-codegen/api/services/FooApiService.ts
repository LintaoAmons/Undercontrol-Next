/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FooApiService {

    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static getFoo(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/foo/{id}',
            path: {
                'id': id,
            },
        });
    }

}
