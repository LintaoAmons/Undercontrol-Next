import Layout from '../../components/Layout';
import { Label, TextInput, Button, Toast, Select, Textarea } from 'flowbite-react';
import { ExpenseControllerService } from '../../openapi-typescript-codegen/api';
import { HiX } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateAccountForm() {
    const router = useRouter();
    const [categories, setCategories] = useState<string[]>([]);
    const [category, setCategory] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [note, setNote] = useState<string>(undefined);

    const [showFailed, setShowFailed] = useState<boolean>(false);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        // TODO change hardcoded referenceId
        ExpenseControllerService.createExpense({
            referenceId: 'lintao',
            amount: amount,
            category: category,
            note: note,
        })
            .then(() => {
                void router.push('/expense');
            })
            .catch((e) => {
                setShowFailed(true);
            });
    };

    const handleToastClick = () => {
        setShowFailed(false);
    };

    // TODO switch to real api data
    const mockCategories = ['food', 'cat', 'cloth', 'nicetohave', 'lifeImprove'];

    useEffect(() => {
        setCategories(mockCategories);
        setCategory(mockCategories[0]);
    }, []);

    return (
        <Layout title="Create Expense">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <Label className="mb-2 block" htmlFor="categories">
                        Choose Category
                    </Label>
                    <Select
                        id="categories"
                        required={true}
                        onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                            setCategory(e.currentTarget.value)
                        }
                    >
                        {categories.map((category) => (
                            <option>{category}</option>
                        ))}
                    </Select>
                </div>

                <div>
                    <Label className="mb-2 block" htmlFor="amount">
                        Amount
                    </Label>
                    <TextInput
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            setAmount(Number.parseFloat(e.currentTarget.value))
                        }
                        id="amount"
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
                        value={note}
                        required={false}
                        shadow={true}
                        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                            setNote(e.currentTarget.value);
                        }}
                    />
                </div>

                <Toast className={`${showFailed ? '' : 'hidden'}`}>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                        <HiX className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">Create Expense Failed</div>
                    <Toast.Toggle onClick={handleToastClick} />
                </Toast>
                <Button type="submit">Confirm</Button>
            </form>
        </Layout>
    );
}
