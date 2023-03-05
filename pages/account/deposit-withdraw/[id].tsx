import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import { Account, AccountControllerService } from '../../../openapi-typescript-codegen/api';
import { Badge, Button, Label, TextInput } from 'flowbite-react';
import { GrAdd, GrSubtract } from 'react-icons/gr';

const AccountDeposit = () => {
    const router = useRouter();
    const { id } = router.query;
    const [currentAccount, setCurrentAccount] = useState<Account>();
    const [toBeAmount, setToBeAmount] = useState<string>('');
    const [amountToBeChange, setAmountToBeChange] = useState<string>('');
    const [isDeposit, setIsDeposit] = useState(true);

    useEffect(() => {
        AccountControllerService.get1(id as string).then((data) => {
            if (data) {
                setCurrentAccount(data);
            }
        });
    }, []);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (isDeposit) {
            AccountControllerService.deposit({
                accountId: id as string,
                amount: Number.parseFloat(amountToBeChange),
            });
        } else {
            AccountControllerService.withdraw({
                accountId: id as string,
                amount: Number.parseFloat(amountToBeChange),
            });
        }

        router.push(`/account/${id}`);
    };

    const handleAmountBlur = (e: React.FormEvent<HTMLInputElement>) => {
        const amountToBeChange = Number.parseFloat(e.currentTarget.value);
        onAmountChange(amountToBeChange);
    };

    const onAmountChange = (amountToBeChange: number) => {
        setAmountToBeChange(amountToBeChange.toFixed(2));
        const toBeAmount = isDeposit
            ? currentAccount.amount + amountToBeChange
            : currentAccount.amount - amountToBeChange;
        setToBeAmount(toBeAmount.toFixed(2));
    };

    const handleToBeAmountBlur = (e: React.FormEvent<HTMLInputElement>) => {
        const toBeAmount = Number.parseFloat(e.currentTarget.value);
        onToBeAmountChange(toBeAmount);
    };

    const onToBeAmountChange = (toBeAmount: number) => {
        setToBeAmount(toBeAmount.toFixed(2));
        const amountToBeChange = toBeAmount - currentAccount.amount;
        if (amountToBeChange >= 0) {
            setIsDeposit(true);
        } else {
            setIsDeposit(false);
        }
        setAmountToBeChange(Math.abs(amountToBeChange).toFixed(2));
    };

    const handleIsDepositClick = (_) => {
        setIsDeposit(!isDeposit);
        onAmountChange(Number.parseFloat(amountToBeChange));
    };

    const renderDepositOrWithdraw = () => {
        return isDeposit ? 'Deposit' : 'Withdraw';
    };

    return (
        <Layout title="AccountDeposit">
            {currentAccount ? (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>Name: {currentAccount.name}</div>
                    <div>CurrentAmount: {currentAccount.amount}</div>

                    <div id="toBeAmount">
                        <Label className="mb-2 block" htmlFor="tobeAmount">
                            TobeAmount
                        </Label>
                        <TextInput
                            className="inline-block"
                            onBlur={handleToBeAmountBlur}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                setToBeAmount(e.currentTarget.value);
                            }}
                            id="tobeAmount"
                            type="text"
                            value={toBeAmount}
                            required={false}
                            shadow={true}
                        />
                    </div>

                    <div
                        id="amountToBeChange"
                        className={isDeposit ? 'text-red-600' : 'text-lime-400'}
                    >
                        <Label className="mb-2 block text-inherit" htmlFor="amount">
                            {renderDepositOrWithdraw()} Amount
                        </Label>
                        <div className="flex justify-between flex-wrap items-center gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <span onClick={handleIsDepositClick}>
                                    {isDeposit ? (
                                        <Badge icon={GrAdd} />
                                    ) : (
                                        <Badge icon={GrSubtract} />
                                    )}
                                </span>
                                <TextInput
                                    onBlur={handleAmountBlur}
                                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                        setAmountToBeChange(e.currentTarget.value);
                                    }}
                                    id="amount"
                                    type="text"
                                    value={amountToBeChange}
                                    required={true}
                                    shadow={true}
                                />
                            </div>
                            <Button className="inline-block" onClick={handleIsDepositClick}>
                                {renderDepositOrWithdraw()}
                            </Button>
                        </div>
                    </div>

                    <div className="fixed bottom-24 right-2">
                        <Button type="submit">Confirm</Button>
                    </div>
                </form>
            ) : undefined}
        </Layout>
    );
};

export default AccountDeposit;
