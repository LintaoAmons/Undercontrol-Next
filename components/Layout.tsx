import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Footer, Navbar } from 'flowbite-react';

type Props = {
    children?: ReactNode;
    title?: string;
    pageTitle?: string;
};

const Layout = ({
    children,
    title = 'This is the default title',
    pageTitle = undefined,
}: Props) => (
    <div>
        <Head>
            <title>{title} | Undercontrol</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar className="fixed top-0 w-full z-10" fluid={true} rounded={true}>
            <Navbar.Brand href="/undercontrol/home">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    {pageTitle || title}
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link active={true} href="/undercontrol/home">
                    Home
                </Navbar.Link>
                {/* <Navbar.Link href="/undercontrol/investment/target">Target</Navbar.Link> */}
                <Navbar.Link href="/undercontrol/account">Account</Navbar.Link>
                <Navbar.Link href="/undercontrol/expense">Expense</Navbar.Link>
                {/* <Navbar.Link href="/undercontrol/about">About</Navbar.Link> */}
            </Navbar.Collapse>
        </Navbar>

        <div className="flex flex-col mt-16 mb-28 mx-3">{children}</div>

        <Footer className="fixed bottom-0">
            <Footer.Copyright href="#" by="OATNIL" year={2022} />
            <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
                <Footer.Link href="https://oatnil.top/">Blog</Footer.Link>
                <Footer.Link href="https://github.com/LintaoAmons">Github</Footer.Link>
                <Footer.Link href="https://space.bilibili.com/394425489">BiliBili</Footer.Link>
            </Footer.LinkGroup>
        </Footer>

    </div>
);

export default Layout;
