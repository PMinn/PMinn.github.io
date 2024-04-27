import Anchor from './anchor';

export default function Breadcrumb({ pathValues }) {
    return (
        <div className='flex flex-wrap items-center' data-scroll>
            {
                pathValues.map((pathValue, index) => (
                    <div key={`breadcrumb_anchor_${index}`}>
                        <Anchor className='max-w-fill text-clip overflow-hidden' href={pathValue.path}>{pathValue.name}</Anchor>
                        {
                            index != pathValues.length - 1 &&
                            <span style={{ fontSize: '1rem', lineHeight: '1.3rem', verticalAlign: 'top' }}>&nbsp;/&nbsp;</span>
                        }
                    </div>
                ))
            }
        </div>
    )
}