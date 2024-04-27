import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Anchor(props) {
    const router = useRouter();
    var newProps = {};
    Object.keys(props).forEach(key => {
        if (key != 'children' && key != 'onClick') newProps[key] = props[key];
    })
    if (!newProps.className) newProps.className = '';
    newProps.className = 'overflow-hidden pb-[2px] h-[1.3rem] inline-block content-box relative cursor-pointer anchor ' + newProps.className;
    if (props?.href) {
        return (
            <div
                {...newProps}
                onClick={(...args) => {
                    if (props.onClick) props.onClick(...args);
                    router.push(props.href);
                }}
            >
                <span className='flex flex-col w-full'>
                    <span style={{ fontSize: '1rem', lineHeight: '1.3rem', verticalAlign: 'top' }}>{props.children}</span>
                    <span style={{ fontSize: '1rem', lineHeight: '1.3rem', verticalAlign: 'top' }}>{props.children}</span>
                </span>
            </div>
        )
    }
    return (
        <div {...newProps}>
            <span className='flex flex-col w-full'>
                <span style={{ fontSize: '1rem', lineHeight: '1.3rem', verticalAlign: 'top' }}>{props.children}</span>
                <span style={{ fontSize: '1rem', lineHeight: '1.3rem', verticalAlign: 'top' }}>{props.children}</span>
            </span>
        </div>
    )
}