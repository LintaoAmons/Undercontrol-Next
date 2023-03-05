/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccountTransferCommand = {
    transferType: AccountTransferCommand.transferType;
    currentAccountId: string;
    targetAccountId: string;
    amount: number;
    note?: string;
};

export namespace AccountTransferCommand {

    export enum transferType {
        IN = 'IN',
        OUT = 'OUT',
    }


}

