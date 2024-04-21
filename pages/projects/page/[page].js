import Head from 'next/head';
import Anchor from '@/components/anchor';
import { useRouter } from 'next/router';

import Layout from '@/components/layout';
import projects from '@/data/projects.json';

import Markdown from 'markdown-to-jsx';

export default function Projects({ project }) {
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
                },
                {
                    name: project.title,
                    path: '/projects/page/' + project.title
                }
            ]}
        >
            <Head>
                <title>{project.title} - P'Min</title>
            </Head>
            <section className='mx-auto w-[90%] max-w-[80rem]' data-scroll-section>
                <h1 className='text-4xl font-black flex mb-5'>{project.title}</h1>
                <img src={project.image} alt={project.title + '圖片'} className='rounded-3xl w-full mx-auto' />
                <p className='tracking-widest leading-8 mt-5'>
                    <Markdown>{project.description}</Markdown>
                </p>
                <div className='flex justify-end mt-10'>
                    <Anchor href={project.link} className='ml-auto' target='_blank'>前往連結 →</Anchor>
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