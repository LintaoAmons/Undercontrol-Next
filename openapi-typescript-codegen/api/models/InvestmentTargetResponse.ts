/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MarkingPrice } from './MarkingPrice';

export type InvestmentTargetResponse = {
    name: string;
    code: number;
    markingPrice: MarkingPrice;
    costPerUnit: number;
    holdingCount: number;
    averageBuyInPrice: number;
    marketValue: number;
};

