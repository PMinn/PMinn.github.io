import Anchor from './anchor';

export default function Breadcrumb({ pathValues }) {
    return (
        <div className='flex flex-wrap items-center' data-scroll>
            {
                pathValues.map((pathValue, index) => (
                    <>
                        <Anchor className='max-w-fill text-clip overflow-hidden' key={`breadcrumb_${index}`} href={pathValue.path}>{pathValue.name}</Anchor>
                        {index != pathValues.length - 1 && <span className='h-[1rem]'>&nbsp;/&nbsp;</span>}
                    </>
                ))
            }
        </div>
    )
}