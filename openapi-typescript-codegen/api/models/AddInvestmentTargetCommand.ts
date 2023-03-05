/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Tag } from './Tag';

export type AddInvestmentTargetCommand = {
    name: string;
    code: number;
    tags: Array<Tag>;
    holdingCount: number;
    averageBuyInPrice: number;
    costPerUint: number;
};

