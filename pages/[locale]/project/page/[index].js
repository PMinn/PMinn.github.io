import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Markdown from 'markdown-to-jsx';

import Layout from '@/components/layout';
import Anchor from '@/components/anchor';

import { useScroll } from "@/providers/scroll";

import { locales, projects, common } from '@/i18n/index';

import mid from '@/mid';

export default function Projects({ project, locale }) {
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
                },
                {
                    name: project.title,
                    path: '/' + locale + '/project/page/' + project.title
                }
            ]}
            locale={locale}
        >
            <Head>
                <title>{project.title} - P'Min</title>
            </Head>
            <section className='mx-auto w-[90%] max-w-[80rem] flex flex-col-reverse md:flex-row' data-scroll-section>
                <div className='md:w-1/2 md:pr-[20%]'>
                    <h1 className='text-4xl font-black flex mb-5'>{project.title}</h1>
                    <p className='tracking-widest leading-8 mt-5 mb-8'>
                        <Markdown>{project.description}</Markdown>
                    </p>
                    <div className='flex gap-2'>
                        <div className='w-1/4'>{common[locale].client}:</div>
                        <div className='w-3/4'>{project.client}</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-1/4'>{common[locale].year}:</div>
                        <div className='w-3/4'>{project.year}</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-1/4'>{common[locale].content}:</div>
                        <div className='w-3/4'>{project.content.join(", ")}</div>
                    </div>
                    <div className='flex justify-end mt-10'>
                        <Anchor href={project.link} className='ml-auto' target='_blank'>{common[locale].link} →</Anchor>
                    </div>
                </div>
                <div className='md:w-1/2 mb-5'>
                    <img src={project.image} alt={project.title + '圖片'} className='drop-shadow-2xl w-full mx-auto' />
                </div>
            </section>
            <section className='w-[90%] max-w-[80rem] mx-auto mt-5 pb-20 flex justify-center' data-scroll-section>
                <Anchor onClick={router.back}>← {common[locale].back}</Anchor>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const { index, locale } = params;
    const res = mid({ params });
    res.props.project = projects[locale][index - 1];
    return res;
}

export async function getStaticPaths() {
    let paths = [];
    for (const locale of locales) {
        for (let i = 0; i < projects[locale].length; i++) {
            paths.push({ params: { index: (i + 1).toString(), locale } });
        }
    }
    return {
        paths,
        fallback: false, // false or "blocking"
    }
}