import { ListGroup } from 'flowbite-react';

export interface InvestmentTargetProps {
    id: string;
    name: string;
    code: number;
}

export default function InvestmentTargetComponent(props: InvestmentTargetProps) {
    const { name, code } = props;
    return (
        <ListGroup.Item href="/investment/target" className='flex flex-col'>
            <p>Name: {name}</p>
            <p>Code: {code}</p>
        </ListGroup.Item>
    );
}
