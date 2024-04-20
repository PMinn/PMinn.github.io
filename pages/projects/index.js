import Head from 'next/head';
import Link from 'next/link';
// import Button from '@/components/button';
import Anchor from '@/components/anchor';
import { useRouter } from 'next/router';

import Layout from '@/components/layout';
import projects from '@/data/projects.json';


export default function ProjectsList() {
    const router = useRouter();
    return (
        <Layout
            breadcrumb={[
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'Projects',
                    path: '/projects'
                }
            ]}
        >
            <Head>
                <title>Projects - P'Min</title>
            </Head>
            <section className='w-[90%] max-w-[80rem] mx-auto' data-scroll-section>
                <h1 className='text-5xl md:text-8xl mb-5 md:mb-0 font-black'>Projects</h1>
                <div className='w-fill flex flex-wrap gap-y-5 md:gap-y-[251px] md:pb-[503px]'>
                    {
                        projects.map((project, i) => (
                            <Link
                                href={'/projects/page/' + project.title}
                                key={'projects_' + i}
                                className={`w-full md:w-1/3 md:p-5 ${i % 3 == 0 ? 'md:translate-y-[251px]' : i % 3 == 2 ? 'md:translate-y-[503px]' : ''}`}
                            >
                                <div className='w-full aspect-square md:aspect-video shadow-xl rounded-3xl overflow-hidden'>
                                    <div className='hover:scale-110 w-full h-full transition duration-500'>
                                        <img src={project.image} className='w-full h-full object-cover transition-all pointer-events-none' alt={project.title + '圖示'} />
                                    </div>
                                </div>
                                <h2 className='mt-4 text-xl w-full font-bold font-semibold tracking-widest pointer-events-non'>{project.title}</h2>
                                <p className='w-full mt-2 line-clamp-2 overflow-hidden'>{project.description}</p>
                            </Link>
                        ))
                    }
                </div>
            </section>
            <section className='w-[90%] max-w-[80rem] mx-auto mt-5 pb-20 flex justify-center' data-scroll-section>
                <Anchor onClick={router.back}>← Back</Anchor>
            </section>
        </Layout>
    )
}