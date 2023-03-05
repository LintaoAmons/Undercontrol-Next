import { Badge, Button, ListGroup } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import {
    ExpenseControllerService,
    ExpenseHomePage2,
    ExpenseResponse,
} from '../../openapi-typescript-codegen/api';
import { DatetimeUtil } from '../../utils/DatetimeUtil';
import TotalExpense from './TotalExpense';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

export default function ExpenseHome() {
    const router = useRouter();
    const [displayMonth, setDisplayMonth] = useState<string>(DatetimeUtil.getCurrentMonth());
    const [homePageData, setHomePageData] = useState<ExpenseHomePage2>({
        totalExpense: 0,
        dailyExpenses: [],
    });

    useEffect(() => {
        loadData(displayMonth);
    }, []);

    const loadData = (month: string) => {
        setDisplayMonth(month);
        ExpenseControllerService.expenseOfMonth(month)
            .then((data) => {
                if (data) {
                    setHomePageData(data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleOneExpenseClick = (expense: ExpenseResponse) => () => {
        void router.push(`/expense/${expense.id}`);
    };

    const sliceNote = (origin: string) => {
        if (origin.length > 20) {
            return origin.slice(0, 16) + '...';
        } else {
            return origin;
        }
    };

    const oneExpense = (expense: ExpenseResponse) => (
        <ListGroup.Item
            key={expense.id}
            className="flex justify-between"
            onClick={handleOneExpenseClick(expense)}
        >
            <span>{expense.category + ": " + sliceNote(expense.note)}</span>
            <span>{expense.amount}</span>
        </ListGroup.Item>
    );

    return (
        <Layout title="Expense">
            <TotalExpense totalExpense={homePageData.totalExpense} displayMonth={displayMonth}/>

            <div className="flex justify-end flex-wrap items-center gap-2">
                <div
                    onClick={() => {
                        loadData(DatetimeUtil.getPrevMonth(displayMonth));
                    }}
                >
                    <Badge icon={GrCaretPrevious} />
                </div>
                <div
                    onClick={() => {
                        loadData(DatetimeUtil.getNextMonth(displayMonth));
                    }}
                >
                    <Badge icon={GrCaretNext} />
                </div>
            </div>

            <div>
                {homePageData.dailyExpenses.map((daily) => (
                    <div className="my-3">
                        {
                            <div>
                                <div className="my-2 flex justify-between">
                                    <span>今日总计: {daily.total}</span>
                                    <span>{daily.date}</span>
                                </div>

                                <ListGroup>{daily.expenses.map((it) => oneExpense(it))}</ListGroup>
                            </div>
                        }
                    </div>
                ))}
            </div>

            <Link href="/expense/create-form">
                <Button className="fixed bottom-24 right-2">Create</Button>
            </Link>
        </Layout>
    );
}
