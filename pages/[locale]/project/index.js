import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from '@/components/layout';
import Anchor from '@/components/anchor';
// import Button from '@/components/button';

import { useScroll } from "@/providers/scroll";

import { locales, projects, common } from '@/i18n/index';

import mid from '@/mid';

export default function ProjectsList({ locale }) {
    const router = useRouter();
    const { isScrollLoaded, getLocomotiveScroll } = useScroll();
    gsap.registerPlugin(ScrollTrigger);

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

                gsap.to("footer", {
                    scrollTrigger: {
                        scroller: pageContainer,
                        scrub: true,
                        trigger: "footer",
                        start: "top 5%",
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
        <Layout
            breadcrumb={[
                {
                    name: common[locale].home,
                    path: '/' + locale + '/'
                },
                {
                    name: common[locale].projects,
                    path: '/' + locale + '/project'
                }
            ]}
            locale={locale}
        >
            <Head>
                <title>Projects - P'Min</title>
            </Head>
            <section className='w-[90%] max-w-[80rem] mx-auto' data-scroll-section>
                <h1 className='text-5xl md:text-6xl mb-10 md:mb-0 font-black'>{common[locale].projects}</h1>
                <div className='w-fill flex flex-wrap gap-y-20 md:gap-y-[200px] md:pb-[450px]'>
                    {
                        projects[locale].map((project, i) => (
                            <Link
                                href={'/' + locale + '/project/page/' + (i + 1)}
                                key={'projects_' + i}
                                className={`w-full md:w-1/3 md:p-5 ${i % 3 == 0 ? 'md:translate-y-[200px]' : i % 3 == 2 ? 'md:translate-y-[450px]' : ''}`}
                            >
                                <div className='w-full aspect-video md:aspect-video shadow-xl overflow-hidden'>
                                    <div className='hover:scale-110 w-full h-full transition duration-500'>
                                        <img src={project.image} className='w-full h-full object-cover transition-all pointer-events-none drop-shadow-2xl' alt={project.title + '圖示'} />
                                    </div>
                                </div>
                                <h2 className='mt-4 text-xl w-full font-bold font-semibold tracking-widest pointer-events-non'>{project.title}</h2>
                                <p className='w-full mt-1 line-clamp-3 overflow-hidden'>{project.description}</p>
                            </Link>
                        ))
                    }
                </div>
            </section>
            <section className='w-[90%] max-w-[80rem] mx-auto mt-20 pb-20 flex justify-center' data-scroll-section>
                <Anchor onClick={router.back}>← {common[locale].back}</Anchor>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const res = mid({ params });
    return res;
}

export async function getStaticPaths() {
    let paths = [];
    for (const locale of locales) {
        paths.push({ params: { locale } });
    }
    return {
        paths,
        fallback: false, // false or "blocking"
    }
}