import Anchor from './anchor';
import Footer from './footer';
import Breadcrumb from './breadcrumb';
import { useRouter } from 'next/router';

export default function Layout({ children, breadcrumb, locale }) {
    const router = useRouter();
    const { pathname, asPath, query } = router;

    return (
        <>
            <nav className='site-nav w-full fixed top-0 z-[2000000000]'>
                <div className='site-nav__inner w-[92%] max-w-[80rem] mx-auto px-5 md:px-6 py-3 flex justify-between items-center gap-2'>
                    <Anchor href={'/' + locale + '/'} className='brand-mark text-lg leading-none text-ink'>P&apos;Min</Anchor>
                    <div className='flex gap-4 text-[0.7rem] font-bold tracking-[0.14em] uppercase'>
                        {
                            locale != 'zh-TW' &&
                            <Anchor className='text-ink/65 hover:text-cobalt transition-colors' onClick={() => {
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
                            <Anchor className='text-ink/65 hover:text-cobalt transition-colors' onClick={() => {
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
                </div>
            </nav>
            {
                breadcrumb && (
                    <section className='mx-auto w-[92%] max-w-[80rem] pt-28 pb-10' data-scroll-section>
                        <div className='flex flex-wrap items-center text-xs font-bold tracking-[0.12em] uppercase text-ink/45' data-scroll>
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
