import Footer from './footer';
import Breadcrumb from './breadcrumb';
// import { usePathname } from 'next/navigation';
// import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import { useRouter } from 'next/router';

export default function Layout({ children, breadcrumb }) {
    // const router = useRouter();
    // const pathname = usePathname();

    return (
        <>
            {
                breadcrumb && (
                    <section className='mx-auto w-[90%] max-w-[80rem] py-10' data-scroll-section>
                        <div className='flex flex-wrap items-center' data-scroll>
                            <Breadcrumb pathValues={breadcrumb}></Breadcrumb>
                        </div>
                    </section>
                )
            }
            {children}
            <Footer />
        </>
    )
}