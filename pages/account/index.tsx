import { ListGroup, Card, Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

import {
    AccountControllerService,
    AccountHomePageVO,
    AccountResponse,
} from '../../openapi-typescript-codegen/api';

export default function AccountHome() {
    const router = useRouter();
    const [accountHomePageVO, setAccountHomePageVo] = useState<AccountHomePageVO>({
        totalAmount: 0,
        accounts: [],
    });

    useEffect(() => {
        AccountControllerService.accountHomePage()
            .then((data) => {
                if (data) {
                    setAccountHomePageVo(data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const oneAccount = (account: AccountResponse) => {
        return (
            <ListGroup.Item
                key={account.id}
                className="flex flex-col"
                onClick={handleOneAccountClick(account)}
            >
                <p>Name: {account.name}</p>
                <p>Number: {account.number}</p>
                <p>Amount: {account.amount}</p>
                <p>updatedAt: {account.updatedAt}</p>
            </ListGroup.Item>
        );
    };

    const handleOneAccountClick = (account: AccountResponse) => () => {
        void router.push(`/account/${account.id}`);
    };

    const accounts = (accountHomePageVO: AccountHomePageVO) => {
        console.log('RenderAccount');
        return (
            <ListGroup>
                {accountHomePageVO.accounts.map((account) => oneAccount(account))}
            </ListGroup>
        );
    };

    return (
        <Layout title="Account">
            <Card className="my-5 box-border">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Total Amount
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    ¥ {accountHomePageVO.totalAmount}
                </p>
            </Card>

            {accounts(accountHomePageVO)}

            <Link href="/account/create-form">
                {/* TODO put button in the center */}
                <Button className="fixed bottom-24 right-2">Create</Button>
            </Link>
        </Layout>
    );
}
