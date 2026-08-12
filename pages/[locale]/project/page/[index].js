import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Markdown from 'markdown-to-jsx';

import Layout from '@/components/layout';
import Anchor from '@/components/anchor';

import { useScroll } from "@/providers/scroll";

import { locales, projects, common, tags } from '@/i18n/index';

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
                    path: '/' + locale + '/project/page/' + project.index
                }
            ]}
            locale={locale}
        >
            <Head>
                <title>{project.title} - P&apos;Min</title>
            </Head>
            <section className='mx-auto w-[92%] max-w-[80rem]' data-scroll-section>
                <div className='min-h-[45svh] flex flex-col justify-end pb-12 md:pb-20 reveal' data-scroll>
                    <div className='eyebrow text-cobalt mb-5'>{locale === 'zh-TW' ? '作品故事' : 'Project story'} · {String(project.index).padStart(2, '0')}</div>
                    <h1 className='section-heading max-w-[13ch]'>{project.title}</h1>
                </div>
                <div className='project-hero-image' data-scroll data-scroll-speed='1'>
                    <img src={project.image} alt={project.title + '圖片'} className='w-full max-h-[78svh] object-cover mx-auto' />
                </div>
                <div className='grid md:grid-cols-12 gap-10 md:gap-16 py-16 md:py-28'>
                    <div className='md:col-span-7 text-lg md:text-xl leading-9 text-ink/75 reveal' data-scroll>
                        <Markdown>{project.description}</Markdown>
                    </div>
                    <div className='md:col-span-5 reveal' data-scroll>
                        <dl>
                            <div className='grid grid-cols-3 gap-4 border-t hairline py-4'>
                                <dt className='eyebrow text-ink/45'>{common[locale].client}</dt>
                                <dd className='col-span-2'>{project.client || '—'}</dd>
                            </div>
                            <div className='grid grid-cols-3 gap-4 border-t hairline py-4'>
                                <dt className='eyebrow text-ink/45'>{common[locale].year}</dt>
                                <dd className='col-span-2'>{project.year}</dd>
                            </div>
                            <div className='grid grid-cols-3 gap-4 border-y hairline py-4'>
                                <dt className='eyebrow text-ink/45'>{common[locale].content}</dt>
                                <dd className='col-span-2'>{project.content.map(content => content.name).join(', ')}</dd>
                            </div>
                        </dl>
                        {project.link && <div className='mt-8'><Anchor href={project.link} target='_blank'>{common[locale].link} ↗</Anchor></div>}
                    </div>
                </div>
            </section>
            <section className='w-[92%] max-w-[80rem] mx-auto pb-24 flex justify-center' data-scroll-section>
                <Anchor onClick={router.back}>← {common[locale].back}</Anchor>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const { index, locale } = params;
    const res = mid({ params });
    res.props.project = projects[locale][index - 1];
    res.props.project.index = index;
    res.props.project.content = res.props.project.content.map(tag => tags[locale][tag]);
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
