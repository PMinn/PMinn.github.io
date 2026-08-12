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
                <title>Projects - P&apos;Min</title>
            </Head>
            <section className='w-[92%] max-w-[80rem] mx-auto' data-scroll-section>
                <div className='min-h-[42svh] flex flex-col justify-end pb-16 md:pb-24 reveal' data-scroll>
                    <div className='eyebrow text-cobalt mb-5'>{locale === 'zh-TW' ? '完整作品選集' : 'The full selection'}</div>
                    <h1 className='section-heading'>{common[locale].projects}</h1>
                    <p className='mt-6 max-w-[32rem] text-ink/60'>{locale === 'zh-TW' ? '從介面、數位工具到視覺實驗，每件作品都是一次讓複雜變得更簡單的練習。' : 'Interfaces, digital tools and visual experiments—each project is an exercise in making complexity feel simple.'}</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 md:gap-y-28 pb-20 md:pb-40'>
                    {
                        projects[locale].map((project, i) => (
                            <Link
                                href={'/' + locale + '/project/page/' + (i + 1)}
                                key={'projects_' + i}
                                className={`project-grid-card group w-full ${i % 2 === 1 ? 'md:translate-y-20' : ''}`}
                            >
                                <div className='reveal' data-scroll style={{ transitionDelay: (i % 3) * 0.08 + 's' }}>
                                    <div className='project-grid-card__image'>
                                        <img src={project.image} className='pointer-events-none' alt={project.title} />
                                    </div>
                                    <div className='flex items-start gap-4 mt-5'>
                                        <div className='text-cobalt text-sm font-bold'>{String(i + 1).padStart(2, '0')}</div>
                                        <div>
                                            <h2 className='text-xl md:text-2xl w-full font-display font-semibold leading-tight pointer-events-none'>{project.title}</h2>
                                            <p className='w-full mt-2 text-sm text-ink/60 line-clamp-2 overflow-hidden'>{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>
            <section className='w-[92%] max-w-[80rem] mx-auto pb-24 flex justify-center' data-scroll-section>
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
