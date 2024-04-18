import Head from 'next/head';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Carousel from 'react-multi-carousel';
// import Marquee from "react-fast-marquee";
import Link from 'next/link';
import { useEffect } from 'react';

import projects from '@/data/projects.json';
import skills from '@/data/skills.json';

export default function Index() {
    const { scroll } = useLocomotiveScroll();

    // useEffect(() => {
    //     console.log(scroll)
    // }, [scroll])

    return (
        <>
            <Head>
                <title>I am P'Min</title>
            </Head>
            <section className='w-full h-svh flex flex-col justify-center items-center' data-scroll-section>
                <div className='w-full grow flex flex-col md:flex-row-reverse justify-center items-center gap-9 md:gap-0' id='cover'>
                    <div className='md:w-full md:h-full flex justify-center items-center' data-scroll data-scroll-speed='-9' data-scroll-direction='horizontal' data-scroll-position='top' data-scroll-target='#cover'>
                        <img src='/images/avatar.jpg' alt='avatar' className='rounded-full border border-black w-[80%] max-w-[400px]' width='500' height='500' />
                    </div>
                    <div className='md:w-full md:h-full flex flex-col justify-center items-center gap-5' data-scroll data-scroll-speed='9' data-scroll-direction='horizontal' data-scroll-position='top' data-scroll-target='#cover'>
                        <h1 className='text-5xl mb-8 font-black'>
                            P'Min
                        </h1>
                        <div className='text-2xl font-light'>A full-stack engineer.</div>
                    </div>
                </div>
                <div className='h-20 flex justify-center gap-5' data-scroll data-scroll-speed='7' data-scroll-position='top'>
                    <Link href='https://github.com/PMinn' target='_blank'>GitHub</Link>
                    <Link href='https://www.instagram.com/min.developer/' target='_blank'>Instagram</Link>
                </div>
            </section>
            <section className='w-[60%] md:w-full mx-auto relative' data-scroll-section id='works'>
                <div className='absolute top-0 right-0 bottom-0 left-0' id='works_sticky_target'></div>
                <h2 className='text-xl text-center font-black pt-5 z-10' data-scroll data-scroll-sticky data-scroll-speed='6' data-scroll-target='#works_sticky_target'>WORKS</h2>
                <div className='w-full gap-y-4 mb-10 flex flex-col md:flex-row justify-evenly items-center'>
                    <img src='images/icon-design.svg' alt='介面設計' data-scroll data-scroll-speed='6' data-scroll-delay='0.5' />
                    <span className='text-lg md:text-4xl font-black flex'>{'介面設計'.split('').map((char, i) => <span key={'design_' + i} data-scroll data-scroll-speed='6' data-scroll-delay={0.5 + i * 0.1}>{char}</span>)}</span>
                </div>
                <div className='w-full gap-y-4 mb-10 flex flex-col-reverse md:flex-row justify-evenly items-center'>
                    <span className='text-lg md:text-4xl font-black flex'>{'影像處理'.split('').map((char, i) => <span key={'draw_' + i} data-scroll data-scroll-speed='6' data-scroll-delay={0.5 + i * 0.1}>{char}</span>)}</span>
                    <img src='images/icon-draw.svg' alt='影像處理' data-scroll data-scroll-speed='6' data-scroll-delay='0.5' />
                </div>
                <div className='w-full gap-y-4 mb-10 flex flex-col md:flex-row justify-evenly items-center'>
                    <img src='images/icon-server.svg' alt='系統架設' data-scroll data-scroll-speed='6' data-scroll-delay='0.5' />
                    <span className='text-lg md:text-4xl font-black flex'>{'系統架設'.split('').map((char, i) => <span key={'server_' + i} data-scroll data-scroll-speed='6' data-scroll-delay={0.5 + i * 0.1}>{char}</span>)}</span>
                </div>
            </section>
            <section className='w-full min-h-svh flex flex-col justify-center' data-scroll-section id='skills'>
                <h2 className='text-xl text-center font-black mb-12 pt-5 z-10'>SKILLS</h2>
                <div className='w-full flex flex-wrap gap-y-10'>
                    {
                        skills.map(skill =>
                            <div className='flex flex-col items-center w-1/2 md:w-1/4' data-scroll key={skill.name}>
                                <img src={skill.image} alt={skill.name} />
                                <div>{skill.name}</div>
                            </div>
                        )
                    }
                </div>
            </section>
            <section className='w-full' data-scroll-section id='projects'>
                <h2 className='text-xl text-center font-black mb-12 pt-5 z-10'>PROJECTS</h2>
                {/* <div className='absolute top-0 left-0 text-black'>
                    <Marquee autoFill={true} style={{ fontSize: '200px' }}>PROJECTS</Marquee>
                </div> */}
                <Carousel
                    responsive={{
                        desktop: {
                            breakpoint: { max: 9999, min: 1024 },
                            items: 2
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1
                        }
                    }}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    itemClass='px-[8px] md:px-[2rem]'
                    centerMode={true}
                    ssr={true}

                    data-scroll
                    data-scroll-speed='2'
                >
                    {
                        projects.map((project, i) => (
                            <a
                                href={project.link}
                                title={project.title + '(另開新視窗)'}
                                target='_blank'
                                key={'projects_' + i}
                                className='relative z-0'
                            >
                                <h2 className='absolute top-[1.5rem] px-4 text-xl w-full font-bold font-semibold tracking-widest text-center' style={{ color: project.color }}>{project.title}</h2>
                                <img src={project.image} className='w-full aspect-square md:aspect-video shadow-xl rounded-3xl object-cover transition-all pointer-events-none' alt={project.title + '圖示'} />
                                <p className='w-full mt-4 line-clamp-2 overflow-hidden'>{project.description}</p>
                            </a>
                        ))
                    }
                </Carousel>
            </section>
            <footer data-scroll-section className='min-h-svh flex flex-col pt-[50vh]'>
                <div className='flex justify-around grow pt-10' data-scroll>
                    <div>
                        <span className='font-black text-3xl'>P'Min</span>
                        <div className='flex gap-4 justify-center mt-10'>
                            <Link href='https://www.instagram.com/min.developer/' target='_blank'>
                                <img src="images/instagram-logo.svg" alt="instagram" />
                            </Link>
                            <Link href='https://github.com/PMinn' target='_blank' >
                                <img src="images/github-logo.svg" alt="github" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link href="/" className='underline'>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <small className='w-full block pb-5 text-center'>© 2024 P'Min. All rights reserved</small>
            </footer>
        </>
    )
}
