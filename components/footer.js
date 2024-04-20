import Link from 'next/link';
import Anchor from './anchor';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function Footer() {
    const { scroll } = useLocomotiveScroll();
    return (
        <footer className='min-h-svh flex flex-col bg-white rounded-t-3xl shadow-2xl py-20 mt-20 relative' data-scroll-section>
            <div className='flex justify-around grow'>
                <div data-scroll data-scroll-speed='-3' data-scroll-direction='horizontal'>
                    <span className='font-black text-3xl'>P'Min</span>
                    <div className='flex gap-4 justify-center mt-10'>
                        <Link href='https://www.instagram.com/min.developer/' target='_blank'>
                            <img src="/images/instagram-logo.svg" alt="instagram" />
                        </Link>
                        <Link href='https://github.com/PMinn' target='_blank' >
                            <img src="/images/github-logo.svg" alt="github" />
                        </Link>
                    </div>
                </div>
                <div data-scroll data-scroll-speed='3' data-scroll-direction='horizontal'>
                    <ul>
                        <li><Anchor href="/">Home</Anchor></li>
                        <li><Anchor href="/projects">Projects</Anchor></li>
                    </ul>
                </div>
            </div>
            <small className='w-full block pb-5 pt-20 text-center'>© 2024 P'Min. All rights reserved</small>
            <div className='absolute bottom-[25%] right-2 text-xl md:text-4xl pr-5 cursor-pointer' onClick={() => scroll.scrollTo(0)}>PAGE TOP</div>
        </footer>
    )
}