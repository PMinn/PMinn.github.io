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

                gsap.to("#avatar img", {
                    scrollTrigger: {
                        scroller: pageContainer,
                        scrub: true,
                        trigger: "#cover",
                        start: "top top",
                        end: "bottom top",
                        // markers: true,
                    },
                    rotateZ: 360,
                    scale: 0,
                    ease: "none"
                });

                gsap.to("footer", {
                    scrollTrigger: {
                        scroller: pageContainer,
                        scrub: true,
                        trigger: 'footer',
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
            <section className='min-h-svh relative' data-scroll-section id='cover'>
                <h1 className='h1 text-7xl absolute top-[10vw] left-[10vw] font-extrabold z-0' data-scroll data-scroll-position="bottom">P'Min</h1>
                <div className='absolute bottom-[10vw] right-[10vw] z-10 flex gap-5'>
                    <Anchor href='https://github.com/PMinn' target='_blank'>GitHub</Anchor>
                    <Anchor href='https://www.instagram.com/min.developer/' target='_blank'>Instagram</Anchor>
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-0' id='avatar'>
                    <img src='/images/avatar.jpg' alt='avatar' className='rounded-full w-[80%] md:w-[44%] max-w-[500px] mx-auto ' width='500' height='500' />
                </div>
            </section>
            <section data-scroll-section>
                <div id="sectionPin">
                    <div className="pin-wrap">
                        <h2 className='text-3xl max-w-[400px]'>Just Something I Made</h2>
                        {
                            projects.map((project, i) => (
                                <Link
                                    href={'/project/page/' + project.title}
                                    key={'projects_' + i}
                                    className='relative block h-[32rem]'
                                >
                                    <div className='h-full aspect-square md:aspect-video shadow-xl overflow-hidden z-0'>
                                        <div className='hover:scale-110 w-full h-full transition duration-500'>
                                            <img src={project.image} className='w-full h-full object-cover transition-all pointer-events-none' alt={project.title + '圖示'} />
                                        </div>
                                    </div>
                                    <div className='w-full mt-5 line-clamp-2 overflow-hidden'>{project.title}</div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section data-scroll-section>
                <div className='flex flex-col md:flex-row gap-[5rem] w-[90%] max-w-[80rem] mx-auto' style={{ marginTop: 'calc(50vh - 16rem)', marginBottom: 'calc(50vh - 16rem)' }}>
                    <div className='w-full md:w-1/2 inline-block align-top text-7xl' id='works_fixed_elements' >
                        <h1 className='pt-10 pl-10' data-scroll data-scroll-sticky data-scroll-target="#works_fixed_elements">What I do</h1>
                    </div>
                    <div className='w-full md:w-1/2 pt-10 relative'>
                        {
                            works.map((work, index) => (
                                <div className={`w-full gap-5 mb-16 flex flex-col justify-evenly items-center border-2 border-black px-16 py-8 ${index % 2 == 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`} style={{ transform: `rotate(${work.rotate}deg)` }} key={`work_${index}`}>
                                    <div className='w-1/2 h-full'>
                                        <img src={work.image.url} alt={work.displayName} className='h-full object-contain' style={{ width: `${work.image.width * 100 / maxWorkImageWidth}%` }} />
                                    </div>
                                    <span className='text-lg md:text-2xl font-black w-1/2 text-center'>{work.displayName}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Layout >
    )
}
