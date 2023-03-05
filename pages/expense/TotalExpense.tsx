import React from 'react';
import { Card } from 'flowbite-react';

type Props = {
    totalExpense: number;
    displayMonth: string;
};

const TotalExpense = (props: Props) => {
    const { totalExpense, displayMonth } = props;
    return (
        <Card className="my-5">
            <div className="flex flex-wrap justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Total Expenses
                </h5>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {displayMonth}
                </h5>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">{totalExpense}</p>
        </Card>
    );
};

export default TotalExpense;
