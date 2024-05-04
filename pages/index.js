import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from '@/components/layout';
import Anchor from '@/components/anchor';

import { useScroll } from "@/providers/scroll";

import projects from '@/data/projects_en.json';
import works from '@/data/works_en.json';


export default function Home() {
    const { isScrollLoaded, getLocomotiveScroll } = useScroll();
    gsap.registerPlugin(ScrollTrigger);

    const maxWorkImageWidth = Math.max(...works.map(work => work.image.width));

    useEffect(() => {
        const locomotiveScroll = getLocomotiveScroll();
        if (locomotiveScroll) {
            let ctx = gsap.context(() => {
                const pageContainer = document.querySelector("main[data-scroll-container]");

                ScrollTrigger.scrollerProxy(pageContainer, {
                    scrollTop(value) {
                        return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
                    },
                    getBoundingClientRect() {
                        return {
                            left: 0,
                            top: 0,
                            width: window.innerWidth,
                            height: window.innerHeight
                        };
                    },
                    pinType: "transform"
                });

                let pinWrapWidth = document.querySelector(".pin-wrap").offsetWidth;

                gsap.to(".pin-wrap", {
                    scrollTrigger: {
                        scroller: pageContainer,
                        scrub: true,
                        trigger: "#sectionPin",
                        pin: true,
                        // anticipatePin: 1,
                        start: "top top",
                        end: pinWrapWidth,
                        // markers: true,
                    },
                    x: window.innerWidth - pinWrapWidth,
                    ease: "none"
                });

                gsap.to("#cover>div", {
                    scrollTrigger: {
                        scroller: pageContainer,
                        scrub: true,
                        trigger: "#cover",
                        // pin: true,
                        // anticipatePin: 1,
                        start: "top top",
                        end: "bottom center",
                        // markers: true,
                    },
                    opacity: 0,
                    scale: 0.8,
                    y: window.innerHeight / 2,
                    ease: "none"
                });

                gsap.to(pageContainer, {
                    scrollTrigger: {
                        scroller: pageContainer,
                        scrub: true,
                        trigger: "footer",
                        start: "top top",
                        end: "bottom bottom",
                        // markers: true,
                    },
                    backgroundColor: '#080808',
                    ease: "none"
                });

                ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update()); //locomotive-scroll

                ScrollTrigger.refresh();

                locomotiveScroll.on("scroll", ScrollTrigger.update);
            });

            return () => ctx.revert();
        }
        return () => { };
    }, [isScrollLoaded])

    return (
        <Layout>
            <Head>
                <title>I am P'Min</title>
            </Head>
            <section data-scroll-section id='cover'>
                <div className='min-h-svh relative'>
                    <h1 className='text-[16vw] md:text-7xl absolute top-[10vh] left-[10vw] font-extrabold z-0'>P'Min</h1>
                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-0' id='avatar'>
                        <img src='/images/avatar.jpg' alt='avatar' className='rounded-full w-[80%] md:w-[44%] max-w-[500px] mx-auto ' width='500' height='500' />
                    </div>
                    <div className='absolute bottom-[4vh] md:bottom-[10vh] right-[10vw] z-10 flex gap-5'>
                        <Anchor href='https://github.com/PMinn' target='_blank'>GitHub</Anchor>
                        <Anchor href='https://www.instagram.com/min.developer/' target='_blank'>Instagram</Anchor>
                    </div>
                </div>
            </section>
            <section data-scroll-section className='relative'>
                <div className='absolute bottom-[10vh] left-[10vw] text-xl'>A Full-Stack Developer <br />Who Loves To Create Things.</div>
            </section>
            <section data-scroll-section id='projects'>
                <div id="sectionPin" className='h-svh overflow-hidden flex bg-[#080808] text-white'>
                    <div className="pin-wrap h-full flex justify-start items-center">
                        <h2 className='text-3xl w-[90vw] max-w-[400px] pl-5'>Just Something I Made</h2>
                        {
                            projects.map((project, i) => (
                                <Link
                                    href={'/project/page/' + project.title}
                                    key={'projects_' + i}
                                    className='relative block w-[120vw] md:w-auto md:h-[32rem] p-[5vw]'
                                >
                                    <div className='h-full aspect-video shadow-xl overflow-hidden z-0'>
                                        <div className='hover:scale-110 w-full h-full transition duration-500'>
                                            <img src={project.image} className='w-full h-full object-cover transition-all pointer-events-none' alt={project.title + '圖示'} />
                                        </div>
                                    </div>
                                    <div className='w-full text-xs mt-2 md:mt-5 line-clamp-2 overflow-hidden' style={{ height: '3em' }}>{project.title}</div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section data-scroll-section className='relative min-h-svh'>
                <h2 className='absolute top-[15vh] right-2 md:right-[5rem] text-2xl inline-block border-l border-black tracking-wider pl-[0.5rem]' style={{ writingMode: 'vertical-rl' }} data-scroll data-scroll-speed="3" >WHAT I DO</h2>
                <div className='flex flex-col md:flex-row mt-[5vh] px-[1rem] md:px-[5rem] md:gap-[5rem]'>
                    <div data-scroll data-scroll-speed="1" className='mt-[5vh] w-full pr-[3rem] md:pr-0 md:w-4/5'>
                        <img src="/images/design-daily-pccu-1.png" className='w-full h-auto' alt="" />
                    </div>
                    <div className='md:pt-[40vh]'>
                        <div className='pr-[3rem]' data-scroll data-scroll-speed="2">
                            <h3 className='text-2xl mb-2'>UI/UX Design</h3>
                            <p>My aim to create interfaces that users find easy to use and pleasurable.</p>
                        </div>
                        <img src="/images/design-daily-pccu-2.png" className='w-full md:mt-[20vh]' alt="" data-scroll data-scroll-speed="4" />
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row md:gap-[8vw] mt-[5vh] px-[1rem] md:px-0'>
                    <img src="/images/image-processing-1.png" className='w-full md:w-3/5' alt="" data-scroll data-scroll-speed="5" />
                    <div className='pt-[10vh] text-center md:text-left' data-scroll data-scroll-speed="2">
                        <h3 className='text-2xl mb-2'>Image Processing</h3>
                        <p>I have experience in image processing.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-around mt-[5vh] px-[1rem] md:px-0'>
                    <div className='pt-[15vh] text-center' data-scroll data-scroll-speed="2">
                        <h3 className='text-2xl mb-2'>Server Development</h3>
                        <p>Experience in deploying Firebase and Vercel servers using CLI and CI/CD.</p>
                    </div>
                    <img src="/images/deploy-1.png" className='w-full md:w-1/2 md:h-[80vh] object-contain bg-[#80A6E7]' alt="" data-scroll data-scroll-speed="5" />
                </div>
            </section>
        </Layout >
    )
}
