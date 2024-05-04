import Link from 'next/link';
import Anchor from './anchor';

import { useScroll } from "@/providers/scroll";

export default function Footer() {
    const { isScrollLoaded, getLocomotiveScroll } = useScroll();

    return (
        <footer className='min-h-[150vh] relative text-white flex flex-col justify-end transition-colors' style={{ '--color': '#fff' }} data-scroll-section>
            <div className='min-h-svh flex flex-col w-[90%] max-w-[80rem] mx-auto py-[10vh]' data-scroll>
                <div className='flex justify-between grow'>
                    <div className='ml-5'>
                        <div className='font-black text-3xl'>Let's<br />Connect.</div>
                        <div className='font-black mt-8'>P'Min</div>
                        <div className='flex gap-4 mt-3'>
                            <Link href='https://www.instagram.com/min.developer/' target='_blank'>
                                <img src="/images/instagram-logo.svg" className='invert' alt="instagram" />
                            </Link>
                            <Link href='https://github.com/PMinn' target='_blank' >
                                <img src="/images/github-logo.svg" className='invert' alt="github" />
                            </Link>
                        </div>
                    </div>
                    <div className='mr-[15%]'>
                        <ul>
                            <li className='w-full flex justify-center min-h-[40px]'><Anchor className='text-white border-white' href="/">Home</Anchor></li>
                            <li className='w-full flex justify-center min-h-[40px]'><Anchor className='text-white border-white' href="/project">Projects</Anchor></li>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex justify-center mb-10'>
                    <div className='hover:bg-[var(--color)] hover:text-black transition duration-300 relative overflow-hidden cursor-pointer rounded-full border border-white aspect-square flex justify-center items-center w-[70px]' onClick={() => getLocomotiveScroll()?.scrollTo(0)}>↑</div>
                </div>
                <hr />
                <small className='w-full block pt-1 text-center'>© 2024 P'Min. All rights reserved</small>
            </div>
        </footer>
    )
}