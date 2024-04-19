import Link from 'next/link';

export default function Anchor({ children, href, className }) {
    return (
        <Link className={'anchor ' + (className ? className : '')} href={href}>
            <span>
                <span>{children}</span>
                <span>{children}</span>
            </span>
        </Link>
    )
}