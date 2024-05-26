import Home from './[locale]';

import mid from '@/mid';

export default Home;

export async function getStaticProps() {
    const res = mid({ params: { locale: 'en' } });
    return res;
}