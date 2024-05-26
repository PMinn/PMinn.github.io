import mid from '@/mid';

export default function Home() {
    return <></ >
}

export async function getStaticProps({ params }) {
    const res = mid({ params });
    return res;
}