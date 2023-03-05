/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvestmentTargetResponse } from './InvestmentTargetResponse';

export type InvestmentHomePageResponse = {
    aggregateMarketValue: number;
    aggregateCost: number;
    aggregateCostOfThisMonth: number;
    investmentTargets: Array<InvestmentTargetResponse>;
};

