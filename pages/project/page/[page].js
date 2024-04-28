import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Markdown from 'markdown-to-jsx';

import Layout from '@/components/layout';
import Anchor from '@/components/anchor';

import { useScroll } from "@/providers/scroll";

import projects from '@/data/projects_en.json';


export default function Projects({ project }) {
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
        <Layout
            breadcrumb={[
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'Project',
                    path: '/project'
                },
                {
                    name: project.title,
                    path: '/work/page/' + project.title
                }
            ]}
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
                        <div className='w-1/4'>Client:</div>
                        <div className='w-3/4'>{project.client}</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-1/4'>Year:</div>
                        <div className='w-3/4'>{project.year}</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-1/4'>Content:</div>
                        <div className='w-3/4'>{project.content.join(", ")}</div>
                    </div>
                    <div className='flex justify-end mt-10'>
                        <Anchor href={project.link} className='ml-auto' target='_blank'>Link →</Anchor>
                    </div>
                </div>
                <div className='md:w-1/2 mb-5'>
                    <img src={project.image} alt={project.title + '圖片'} className='drop-shadow-2xl w-full mx-auto' />
                </div>
            </section>
            <section className='w-[90%] max-w-[80rem] mx-auto mt-5 pb-20 flex justify-center' data-scroll-section>
                <Anchor onClick={router.back}>← Back</Anchor>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const { page } = params;
    return {
        props: {
            project: projects.find(project => project.title == page)
        },
        // revalidate: 1
    };
}

export async function getStaticPaths() {
    return {
        paths: projects.map(project => ({
            params: {
                page: project.title
            }
        })),
        fallback: false, // false or "blocking"
    }
}