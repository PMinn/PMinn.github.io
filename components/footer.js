import Anchor from './anchor';

import { useScroll } from "@/providers/scroll";

import { common } from '@/i18n/index';

export default function Footer({ locale }) {
    const { isScrollLoaded, getLocomotiveScroll } = useScroll();

    return (
        <footer className='site-footer relative overflow-hidden bg-ink text-paper flex flex-col justify-center' style={{ '--color': 'rgb(244 247 255)' }} data-scroll-section>
            <div className='relative z-10 w-[92%] max-w-[80rem] mx-auto py-12 md:py-[7vh]' data-scroll>
                <div className='eyebrow text-sky mb-4'>{locale === 'zh-TW' ? '有想法嗎？' : 'Have something in mind?'}</div>
                <div className='section-heading max-w-[12ch]' dangerouslySetInnerHTML={{ __html: common[locale].lets_connect }} />

                <div className='grid grid-cols-2 gap-8 md:gap-24 mt-10 md:mt-12 pt-7 md:pt-8 border-t border-paper/15'>
                    <div>
                        <div className='eyebrow text-paper/45 mb-4'>{locale === 'zh-TW' ? '找到我' : 'Find me'}</div>
                        <ul className='flex flex-col gap-2 text-lg'>
                            <li><Anchor href='https://github.com/PMinn' target='_blank'>GitHub ↗</Anchor></li>
                            <li><Anchor href='https://www.instagram.com/pmin.dev/' target='_blank'>Instagram ↗</Anchor></li>
                            <li><Anchor href='mailto:p.min.developer@gmail.com' target='_blank'>Email ↗</Anchor></li>
                        </ul>
                    </div>
                    <div>
                        <div className='eyebrow text-paper/45 mb-4'>{locale === 'zh-TW' ? '繼續看看' : 'Keep looking'}</div>
                        <ul className='flex flex-col gap-2 text-lg'>
                            <li><Anchor href={'/' + locale + "/"}>{common[locale].home}</Anchor></li>
                            <li><Anchor href={'/' + locale + "/project"}>{common[locale].projects}</Anchor></li>
                        </ul>
                    </div>
                </div>

                <div className='flex items-center justify-between mt-8 md:mt-10 pt-4 border-t border-paper/15'>
                    <small className='text-[0.65rem] tracking-[0.12em] uppercase text-paper/40'>© 2026 P&apos;Min. Made with care.</small>
                    <button type='button' aria-label={locale === 'zh-TW' ? '回到頁首' : 'Back to top'} className='hover:bg-[var(--color)] hover:border-sky hover:text-ink transition duration-300 cursor-pointer rounded-full border border-paper/30 w-11 h-11 flex justify-center items-center text-sm' onClick={() => getLocomotiveScroll()?.scrollTo(0)}>↑</button>
                </div>
            </div>
        </footer>
    )
}
