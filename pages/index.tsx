import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout title="Undercontrol">
        <h1>Undercontrol</h1>
        <h1 className="text-3xl font-bold underline">Hello World.</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </Layout>
);

export default IndexPage;
