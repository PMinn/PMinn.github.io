import Link from 'next/link';

export default function Anchor(props) {
    var newProps = {};
    Object.keys(props).forEach(key => {
        if (key != 'children') newProps[key] = props[key];
    })
    if (!newProps.className) newProps.className = '';
    newProps.className = 'overflow-hidden pb-[2px] h-[1rem] inline-block content-box relative cursor-pointer anchor ' + newProps.className;
    if (props?.href) {
        return (
            <Link {...newProps}>
                <span className='flex flex-col w-full'>
                    <span className='truncate leading-[1.2rem] h-[1.3rem]'>{props.children}</span>
                    <span className='truncate leading-[1.2rem] h-[1.3rem]'>{props.children}</span>
                </span>
            </Link>
        )
    }
    return (
        <div {...newProps}>
            <span className='flex flex-col w-full'>
                <span className='truncate leading-[1.2rem] h-[1.3rem]'>{props.children}</span>
                <span className='truncate leading-[1.2rem] h-[1.3rem]'>{props.children}</span>
            </span>
        </div>
    )
}