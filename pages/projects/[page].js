import Head from 'next/head';
import Link from 'next/link';

import Layout from '@/components/Layout';
import projects from '@/data/projects.json';


export default function Projects({ project }) {
    return (
        <Layout>
            <Head>
                <title>{project.title} - P'Min</title>
            </Head>
            <section className='mx-auto w-[90%] max-w-[80rem] mt-20' data-scroll-section>
                <img src={project.image} alt={project.title + '圖片'} className='w-full mx-auto' data-scroll data-scroll-speed="3" />
            </section>
            <section className='w-[90%] max-w-[80rem] mx-auto mt-5' data-scroll-section>
                <h1 className='text-4xl font-black flex' data-scroll data-scroll-speed="3">{project.title}</h1>
                <p className='tracking-widest leading-8 mt-5' data-scroll data-scroll-speed="2">{project.description}</p>
                <Link className="block underline mt-5 text-end" href={project.link} target='_blank' data-scroll data-scroll-speed="1">前往連結→</Link>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const { page } = params;
    const project = projects.find(project => project.title === page);
    return {
        props: {
            project
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