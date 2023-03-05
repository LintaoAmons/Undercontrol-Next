import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ExpenseControllerService, ExpenseResponse } from '../../openapi-typescript-codegen/api';
import { Button } from 'flowbite-react';
import Layout from '../../components/Layout';

const OneExpense = () => {
    const router = useRouter();
    const { id } = router.query;
    const [expense, setExpense] = useState<ExpenseResponse>();

    useEffect(() => {
        ExpenseControllerService.get(id as string)
            .then((data) => {
                setExpense(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [id]);

    const deleteExpense = () => {
        ExpenseControllerService.delete(expense.id).then(() => {
            void router.push('/expense');
        });
    };

    return (
        <Layout title="ExpenseDetails">
            {expense == null ? (
                <div>Loading</div>
            ) : (
                <div>
                    <p>Amount: {expense.amount}</p>
                    <p>Category: {expense.category}</p>
                    <p>Date: {expense.date}</p>
                    <p>Time: {expense.time}</p>
                    <p>Notes: {expense.note}</p>
                    <Button className="fixed bottom-24 right-2" onClick={deleteExpense}>
                        Delete
                    </Button>
                </div>
            )}
        </Layout>
    );
};

export default OneExpense;
