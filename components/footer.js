import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='min-h-svh flex flex-col mt-[50vh]' data-scroll-section>
            <div className='flex justify-around grow pt-10'>
                <div>
                    <span className='font-black text-3xl' data-scroll data-scroll-speed="1" data-scroll-target="footer">P'Min</span>
                    <div className='flex gap-4 justify-center mt-10' data-scroll data-scroll-speed="1" data-scroll-target="footer">
                        <Link href='https://www.instagram.com/min.developer/' target='_blank'>
                            <img src="/images/instagram-logo.svg" alt="instagram" />
                        </Link>
                        <Link href='https://github.com/PMinn' target='_blank' >
                            <img src="/images/github-logo.svg" alt="github" />
                        </Link>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="1" data-scroll-target="footer">
                    <ul>
                        <li>
                            <Link href="/" className='underline'>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <small className='w-full block pb-10 text-center'>© 2024 P'Min. All rights reserved</small>
        </footer>
    )
}