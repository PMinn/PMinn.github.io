import Footer from './footer';
import Anchor from './anchor';
// import { useRouter } from 'next/router';
// import { usePathname } from 'next/navigation';

export default function Layout({ children, breadcrumb }) {
    // const router = useRouter();
    // const pathname = usePathname();

    return (
        <>
            <section className='mx-auto w-[90%] max-w-[80rem] my-10' data-scroll-section>
                <div className='flex flex-wrap items-center' data-scroll>
                    {
                        breadcrumb && breadcrumb.map((item, index) => (
                            <>
                                <Anchor className='max-w-fill text-clip overflow-hidden' key={`breadcrumb_${index}`} href={item.path}>{item.name}</Anchor>
                                {index != breadcrumb.length - 1 && <span>&nbsp;/&nbsp;</span>}
                            </>
                        ))
                    }
                </div>
            </section>
            {children}
            <Footer />
        </>
    )
}