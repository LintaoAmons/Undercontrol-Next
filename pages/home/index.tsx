import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Card, ListGroup, TextInput, Label, Button } from 'flowbite-react';

const IndexPage = () => {
    const [token, setToken] = useState('');
    const [tokenInputing, setTokenInputing] = useState(true);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        console.log(token);
        if (token) {
            setToken(token);
            setTokenInputing(false);
        } else {
            setTokenInputing(true);
        }
    });

    return (
        <Layout title="Home">
            <Card>
                <h3>Undercontrol</h3>
                <h5>理清思路，更好决策</h5>
                <div>
                    <ListGroup>
                        {/* <ListGroup.Item> */}
                        {/*     <Link href='/investment/target'> */}
                        {/*         投资标的 */}
                        {/*     </Link> */}
                        {/* </ListGroup.Item> */}
                        <ListGroup.Item>
                            <Link href="/account">资产账户归集</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/expense">记账</Link>
                        </ListGroup.Item>
                        {/* <ListGroup.Item> */}
                        {/*     <Link href='about'>About</Link> */}
                        {/* </ListGroup.Item> */}
                    </ListGroup>
                </div>
                <form
                    className="flex flex-col gap-4"
                    onSubmit={(_) => window.localStorage.setItem('token', token)}
                >
                    {!tokenInputing ? (
                        <div className="flex-col">
                            <p className="mr-2 inline-block">Token 已载入:</p>
                            <p
                                className="inline-block underline"
                                onClick={(_) => {
                                    window.localStorage.removeItem('token');
                                    setTokenInputing(true);
                                }}
                            >
                                {token}
                            </p>
                        </div>
                    ) : (
                        <div className="flex-col">
                            <Label className="mb-2 block" htmlFor="token">
                                输入你的Token
                            </Label>
                            <TextInput
                                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                    setToken(e.currentTarget.value)
                                }
                                id="token"
                                type="text"
                                value={token}
                                required={true}
                                shadow={true}
                            />
                            <Button className="ml-auto mr-0" type="submit">
                                确认
                            </Button>
                        </div>
                    )}
                </form>
            </Card>
        </Layout>
    );
};

export default IndexPage;
