import { Label, Select } from 'flowbite-react';
import React from 'react';
import {
    AccountTransferCommand,
    AvailableAccountResponse,
} from '../../../openapi-typescript-codegen/api';

export interface AccountSelectionProps {
    transferType: AccountTransferCommand.transferType;
    availableAccounts: Array<AvailableAccountResponse>;
    setSelectedAccount: React.Dispatch<React.SetStateAction<AvailableAccountResponse>>;
}

const AccountSelection = (props: AccountSelectionProps) => {
    const { transferType, availableAccounts, setSelectedAccount } = props;
    return (
        <div>
            <Label className="mt-5 mb-2 block" htmlFor="accountSelection">
                {transferType === AccountTransferCommand.transferType.IN
                    ? 'Transfer in, FROM Account'
                    : 'Transfer out, TO Account'}
            </Label>
            <Select
                id="accountSelection"
                required={true}
                onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                    const selectedAccount = availableAccounts.find(
                        (it) => it.name == e.currentTarget.value
                    );
                    console.log(selectedAccount);
                    setSelectedAccount(selectedAccount);
                }}
            >
                {(availableAccounts ? availableAccounts : []).map((it) => (
                    <option id={it.id as string}>{it.name}</option>
                ))}
            </Select>
        </div>
    );
};

export default AccountSelection;
