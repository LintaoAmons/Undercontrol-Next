import Layout from '../../components/Layout';
import {Button, Label, TextInput, Toast} from 'flowbite-react';
import {AccountControllerService} from '../../openapi-typescript-codegen/api';
import {HiCheck, HiX} from 'react-icons/hi';
import React, {useState} from 'react';
import {useRouter} from "next/router";

export default function CreateAccountForm() {
    const router = useRouter();
    const [name, setName] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)
    const [accountNumber, setAccountNumber] = useState<string>("")
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [showFailed, setShowFailed] = useState<boolean>(false);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        AccountControllerService.create({
            name,
            amount,
            number: accountNumber
        })
            .then(() => {
                void router.push('/account');
            })
            .catch(() => setShowFailed(true));
    };

    const handleToastClick = () => {
        setShowFailed(false);
    };

    return (
        <Layout title="Create Account">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <Label className="mb-2 block" htmlFor="accountName">
                        Account Name
                    </Label>
                    <TextInput
                        onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
                        id="accountName"
                        type="text"
                        value={name}
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <Label className="mb-2 block" htmlFor="accountAmount">
                        Account Amount
                    </Label>
                    <TextInput
                        onChange={(e: React.FormEvent<HTMLInputElement>) => setAmount(Number(e.currentTarget.value))}
                        id="accountAmount"
                        type="number"
                        value={amount}
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <Label className="mb-2 block" htmlFor="accountnumber">
                        account Number
                    </Label>
                    <TextInput
                        onChange={(e: React.FormEvent<HTMLInputElement>) => setAccountNumber(e.currentTarget.value)}
                        id="accountNumber"
                        type="text"
                        value={accountNumber}
                        required={true}
                        shadow={true}
                    />
                </div>
                <Toast className={`${showSuccess ? '' : 'hidden'}`}>
                    <div
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                        <HiCheck className="h-5 w-5"/>
                    </div>
                    <div className="ml-3 text-sm font-normal">Create Account Successfully</div>
                    <Toast.Toggle onClick={handleToastClick}/>
                </Toast>
                <Toast className={`${showFailed ? '' : 'hidden'}`}>
                    <div
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                        <HiX className="h-5 w-5"/>
                    </div>
                    <div className="ml-3 text-sm font-normal">Create Account Failed</div>
                    <Toast.Toggle onClick={handleToastClick}/>
                </Toast>
                <Button type="submit">Add new account</Button>
            </form>
        </Layout>
    );
}
