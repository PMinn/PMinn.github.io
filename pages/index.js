import Head from 'next/head';
import Link from 'next/link';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Carousel from 'react-multi-carousel';
import Marquee from "react-fast-marquee";
// import { useEffect } from 'react';

import projects from '@/data/projects.json';
import skills from '@/data/skills.json';
import works from '@/data/works.json';
import Layout from '@/components/layout';
import Anchor from '@/components/anchor';

export default function Index() {
    // const { scroll } = useLocomotiveScroll();

    // useEffect(() => {
    //     console.log(scroll)
    // }, [scroll])

    return (
        <Layout>
            <Head>
                <title>I am P'Min</title>
            </Head>
            <section className='w-full h-svh flex flex-col justify-center items-center' data-scroll-section>
                <div className='w-full grow flex flex-col md:flex-row-reverse justify-center items-center gap-9 md:gap-0 relative' id='cover'>
                    {/* 粉 */}
                    <div className='w-[40%] md:w-[13%] bottom-[5%] md:bottom-[15%] left-[-20%] md:left-[10%] absolute aspect-square rounded-full bg-[#d15173] z-0' data-scroll data-scroll-speed='-3' data-scroll-position='top'></div>
                    {/* 藍 */}
                    <div className='w-[30%] md:w-[10%] top-3 md:top-[10%] left-[50%] md:left-[40%] absolute aspect-square rounded-full bg-[#5199d1] z-0' data-scroll data-scroll-speed='2' data-scroll-position='top'></div>
                    {/* 綠 */}
                    <div className='w-[15%] md:w-[5%] bottom-0 md:bottom-[2%] right-[4%] md:right-[40%] absolute aspect-square rounded-full bg-[#51d18f] z-0' data-scroll data-scroll-speed='-1' data-scroll-position='top'></div>
                    <div className='md:w-full md:h-full flex justify-center items-center z-10' data-scroll data-scroll-speed='-5' data-scroll-direction='horizontal' data-scroll-position='top' data-scroll-target='#cover'>
                        <img src='/images/avatar.jpg' alt='avatar' className='rounded-full w-[80%] md:w-[44%]' width='500' height='500' />
                    </div>
                    <div className='md:w-full md:h-full flex flex-col justify-center items-center gap-5' data-scroll data-scroll-speed='5' data-scroll-direction='horizontal' data-scroll-position='top' data-scroll-target='#cover'>
                        <h1 className='text-6xl mb-8 font-black'>P'Min</h1>
                        <div className='text-2xl font-light'>A full-stack engineer.</div>
                    </div>
                </div>
                <div className='h-20 flex justify-center gap-5' data-scroll data-scroll-speed='7' data-scroll-position='top'>
                    <Anchor href='https://github.com/PMinn' target='_blank'>GitHub</Anchor>
                    <Anchor href='https://www.instagram.com/min.developer/' target='_blank'>Instagram</Anchor>
                </div>
            </section>
            <section className='w-[60%] md:w-full pb-20 mx-auto relative' data-scroll-section id='works'>
                <div className='absolute top-0 right-0 bottom-0 left-0' id='works_sticky_target'></div>
                <h2 className='text-4xl text-center font-black pt-1 md:pt-5 z-10' data-scroll data-scroll-sticky data-scroll-speed='6' data-scroll-target='#works_sticky_target'>WORKS</h2>
                {
                    works.map((work, index) => (
                        <div className={'w-full gap-y-4 mb-10 flex flex-col justify-evenly items-center ' + (index % 2 == 1 ? 'md:flex-row-reverse' : 'md:flex-row')}>
                            <img src={work.image} alt={work.displayName} data-scroll data-scroll-speed='6' data-scroll-delay='0.5' />
                            <span className='text-lg md:text-2xl font-black flex'>{work.displayName.split('').map((char, i) => <span key={`${work.name}_${i}`} data-scroll data-scroll-speed='6' data-scroll-delay={0.5 + i * 0.1}>{char}</span>)}</span>
                        </div>
                    ))
                }
            </section>
            <section className='bg-[var(--theme-color-primary)] text-2xl py-5 text-white' data-scroll-section>
                <Marquee autoFill={true} className='overflow-hidden'>
                    <span>Freelancer</span>
                    {
                        Array.from({ length: 20 }).map((_, i) => <span key={i}>&nbsp;</span>)
                    }
                </Marquee>
            </section>
            <section className='w-full py-20' data-scroll-section id='projects'>
                <h2 className='text-4xl text-center font-black mb-12 pt-5 z-10'>PROJECTS</h2>
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
                            <Link
                                href={'/projects/page/' + project.title}
                                key={'projects_' + i}
                                className='relative block'
                            >
                                <div className='w-full aspect-square absolute top-0 py-[1.5rem] px-4 z-10'>
                                    <h2 className='w-full text-xl line-clamp-3 font-bold font-semibold tracking-widest text-center pointer-events-non' style={{ color: project.color }}>{project.title}</h2>
                                </div>
                                <div className='w-full aspect-square md:aspect-video shadow-xl rounded-3xl overflow-hidden z-0'>
                                    <div className='hover:scale-110 w-full h-full transition duration-500'>
                                        <img src={project.image} className='w-full h-full object-cover transition-all pointer-events-none' alt={project.title + '圖示'} />
                                    </div>
                                </div>
                                <p className='w-full mt-4 line-clamp-2 overflow-hidden'>{project.description}</p>
                            </Link>
                        ))
                    }
                </Carousel>
                <div className='w-full my-10 flex justify-center'>
                    <Anchor href='/projects'>More +</Anchor>
                </div>
            </section>
            <section className='w-full min-h-svh flex flex-col justify-center py-20' data-scroll-section id='skills'>
                <h2 className='text-4xl text-center font-black mb-12 z-10'>SKILLS</h2>
                <div className='w-full flex flex-wrap gap-y-10'>
                    {
                        skills.map(skill =>
                            <div className='flex flex-col items-center w-1/2 md:w-1/4' key={skill.name}>
                                <img src={skill.image} className='w-[80px] h-[80px] object-fill' alt={skill.name} />
                                <div className='mt-2'>{skill.name}</div>
                            </div>
                        )
                    }
                </div>
            </section>
        </Layout>
    )
}
