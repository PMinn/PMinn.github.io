import Link from 'next/link';

export default function Button(props) {
    var newProps = {};
    Object.keys(props).forEach(key => {
        if (key != 'as' && key != 'children') newProps[key] = props[key];
    })
    if (!newProps.className) newProps.className = '';
    newProps.className += ' btn';
    if (props?.href) return <Link {...newProps}>{props.children}</Link>;
    return <div {...newProps}>{props.children}</div>;
}