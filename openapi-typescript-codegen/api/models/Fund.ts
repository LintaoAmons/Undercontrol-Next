/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Tag } from './Tag';

export type Fund = {
    id: string;
    name: string;
    code: number;
    tags: Array<Tag>;
    holdingCount: number;
    averageBuyInPrice: number;
    costPerUint: number;
    markingPrice?: number;
    marketValue: number;
};

