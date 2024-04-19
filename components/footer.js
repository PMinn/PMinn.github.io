import Link from 'next/link';
import Anchor from './anchor';

export default function Footer() {
    return (
        <footer className='min-h-svh flex flex-col bg-white rounded-t-3xl shadow-2xl pt-20' data-scroll-section>
            <div className='flex justify-around grow pt-10'>
                <div>
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
                <div>
                    <ul>
                        <li>
                            <Anchor href="/">Home</Anchor>
                        </li>
                    </ul>
                </div>
            </div>
            <small className='w-full block pb-10 pt-20 text-center'>© 2024 P'Min. All rights reserved</small>
        </footer>
    )
}