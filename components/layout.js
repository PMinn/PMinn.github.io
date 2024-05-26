import Anchor from './anchor';
import Footer from './footer';
import Breadcrumb from './breadcrumb';
// import { usePathname } from 'next/navigation';
// import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children, breadcrumb, locale }) {
    const router = useRouter();
    const { pathname, asPath, query } = router;
    // const pathname = usePathname();

    return (
        <>
            <nav className='w-full fixed top-0 z-[2000000000]'>
                <div className='w-[90%] max-w-[80rem] mx-auto p-4 flex justify-end gap-2'>
                    {
                        locale != 'zh-TW' &&
                        <Anchor onClick={() => {
                            const routerValue = {
                                query: { ...query, locale: 'zh-TW' },
                            };
                            if (query.locale == undefined) {
                                routerValue.pathname = '/[locale]' + pathname;
                            }
                            router.replace(routerValue);
                        }}>繁體中文</Anchor>
                    }
                    {
                        locale != 'en' &&
                        <Anchor onClick={() => {
                            const routerValue = {
                                query: { ...query, locale: 'en' },
                            };
                            if (query.locale == undefined) {
                                routerValue.pathname = '/[locale]' + pathname;
                            }
                            router.replace(routerValue);
                        }}>English</Anchor>
                    }
                </div>
            </nav>
            {
                breadcrumb && (
                    <section className='mx-auto w-[90%] max-w-[80rem] pt-20 pb-10' data-scroll-section>
                        <div className='flex flex-wrap items-center' data-scroll>
                            <Breadcrumb pathValues={breadcrumb}></Breadcrumb>
                        </div>
                    </section>
                )
            }
            {children}
            <Footer locale={locale} />
        </>
    )
}