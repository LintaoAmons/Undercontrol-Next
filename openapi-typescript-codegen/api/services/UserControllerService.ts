/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { UserInfoResponse } from '../models/UserInfoResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static login(
        requestBody: LoginRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/my-login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param token
     * @returns UserInfoResponse OK
     * @throws ApiError
     */
    public static getUserInfo(
        token: string,
    ): CancelablePromise<UserInfoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/userInfo',
            query: {
                'token': token,
            },
        });
    }

}
