import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import { Account, AccountControllerService } from '../../openapi-typescript-codegen/api';

const AccountDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [account, setAccount] = useState<Account>();

    useEffect(() => {
        AccountControllerService.get1(id as string)
            .then((data) => {
                setAccount(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [id]);

    return (
        <Layout title="AccountDetails">
            {account ? (
                <div>
                    <div>Name: {account.name}</div>
                    <div>Number: {account.number}</div>
                    <div>Amount: {account.amount}</div>

                    <div className="fixed bottom-24 right-2">
                        <Link href={`/account/deposit-withdraw/${account.id}`}>
                            <Button color="dark" className="w-24 my-3">
                                Deposit/Withdraw
                            </Button>
                        </Link>
                        <Link href={`/account/transfer/${account.id}`}>
                            <Button color="dark" className="w-24 my-3">
                                Transfer
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </Layout>
    );
};

export default AccountDetails;
