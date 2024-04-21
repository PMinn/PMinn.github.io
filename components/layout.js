import Footer from './footer';
import Breadcrumb from './breadcrumb';
// import { useRouter } from 'next/router';
// import { usePathname } from 'next/navigation';

export default function Layout({ children, breadcrumb }) {
    // const router = useRouter();
    // const pathname = usePathname();

    return (
        <>
            <section className='mx-auto w-[90%] max-w-[80rem] my-10' data-scroll-section>
                <div className='flex flex-wrap items-center' data-scroll>{breadcrumb && <Breadcrumb pathValues={breadcrumb} />}</div>
            </section>
            {children}
            <Footer />
        </>
    )
}