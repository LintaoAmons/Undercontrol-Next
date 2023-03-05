import { Label, Select } from 'flowbite-react';
import React from 'react';
import { AccountTransferCommand } from '../../../openapi-typescript-codegen/api';

export interface TransferTypeProps {
    setTransferType: React.Dispatch<React.SetStateAction<AccountTransferCommand.transferType>>;
}

const TransferType = (props: TransferTypeProps) => {
    const { setTransferType } = props;
    return (
        <div>
            <Label className="mb-2 block" htmlFor="transferType">
                Choose TransferType
            </Label>
            <Select
                id="transferType"
                required={true}
                onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                    setTransferType(e.currentTarget.value as AccountTransferCommand.transferType)
                }
            >
                {Object.values(AccountTransferCommand.transferType).map((it) => (
                    <option id={it}>{it}</option>
                ))}
            </Select>
        </div>
    );
};

export default TransferType
