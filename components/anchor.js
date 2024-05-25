import Link from 'next/link';

export default function Anchor(props) {
    var newProps = {};
    Object.keys(props).forEach(key => {
        if (key != 'children') newProps[key] = props[key];
    })
    if (!newProps.className) newProps.className = '';
    newProps.className = 'overflow-hidden pb-[2px] h-[1.3rem] inline-block content-box relative cursor-pointer anchor ' + newProps.className;
    if (props?.href != undefined) {
        return (
            <Link {...newProps}>
                <span className='flex flex-col w-full'>
                    <span style={{ fontSize: '1rem', lineHeight: '1.3rem', verticalAlign: 'top' }}>{props.children}</span>
                    <span style={{ fontSize: '1rem', lineHeight: '1.3rem', verticalAlign: 'top' }}>{props.children}</span>
                </span>
            </Link>
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