import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import Loading from '../../../components/Loading';
import {
    AccountControllerService,
    AccountTransferCommand,
    AvailableAccountResponse,
} from '../../../openapi-typescript-codegen/api';
import AccountSelection from './AccountSelection';
import TransferType from './TransferType';

const AccountTransfer = () => {
    const router = useRouter();
    const { id } = router.query;
    const [transferType, setTransferType] = useState<AccountTransferCommand.transferType>(
        AccountTransferCommand.transferType.IN
    );
    const [selectedAccount, setSelectedAccount] = useState<AvailableAccountResponse>();
    const [availableAccounts, setAvailableAccounts] = useState<Array<AvailableAccountResponse>>();
    const [amount, setAmount] = useState<number>();
    const [note, setNote] = useState<string>();

    useEffect(() => {
        if (typeof id === 'string') {
            AccountControllerService.findAvailableAccounts([id]).then((data) => {
                setAvailableAccounts(data);
                setSelectedAccount(data[0]);
            });
        }
    }, [id]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        AccountControllerService.transfer({
            transferType: transferType,
            currentAccountId: id as string,
            targetAccountId: selectedAccount.id,
            amount: amount,
            note: note,
        });

        router.push(`/account/${id}`);
    };

    return (
        <Layout title="Transfer">
            {!availableAccounts || !id ? (
                <Loading />
            ) : (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <TransferType setTransferType={setTransferType} />

                    <AccountSelection
                        transferType={transferType}
                        availableAccounts={availableAccounts}
                        setSelectedAccount={setSelectedAccount}
                    />

                    <div>
                        <Label className="mb-2 block" htmlFor="accountAmount">
                            Account Amount
                        </Label>
                        <TextInput
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setAmount(Number(e.currentTarget.value))
                            }
                            id="accountAmount"
                            type="number"
                            value={amount}
                            required={true}
                            shadow={true}
                        />
                    </div>

                    <div>
                        <Label className="mb-2 block" htmlFor="note">
                            Note
                        </Label>
                        <Textarea
                            id="note"
                            required={false}
                            rows={4}
                            onBlur={(e: React.FormEvent<HTMLTextAreaElement>) =>
                                setNote(e.currentTarget.value)
                            }
                        />
                    </div>

                    <Button type="submit" className="fixed bottom-24 right-2">
                        Confirm
                    </Button>
                </form>
            )}
        </Layout>
    );
};

export default AccountTransfer;
