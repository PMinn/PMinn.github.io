import Link from 'next/link';

export default function Anchor(props) {
    var newProps = {};
    Object.keys(props).forEach(key => {
        if (key != 'children') newProps[key] = props[key];
    })
    if (!newProps.className) newProps.className = '';
    newProps.className = 'inline-block relative cursor-pointer anchor ' + newProps.className;
    if (props?.href != undefined) {
        return (
            <Link {...newProps}>
                <span>{props.children}</span>
            </Link>
        )
    }
    return (
        <button type='button' {...newProps}>
            <span>{props.children}</span>
        </button>
    )
}
