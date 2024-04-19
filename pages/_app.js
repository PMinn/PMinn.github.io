import "@/styles/globals.css";
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Dekko as Font } from 'next/font/google';
import 'react-multi-carousel/lib/styles.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const font = Font({
    subsets: ['latin'],
    weight: ['400']
});

export default function App({ Component, pageProps }) {
    const containerRef = useRef(null);
    const { asPath } = useRouter();

    return <LocomotiveScrollProvider
        options={{
            smooth: true,
            smartphone: {
                smooth: true,
                inertia: 1.1
            },
            tablet: {
                smooth: true,
            }
            // ... all available Locomotive Scroll instance options 
        }}
        watch={[
            //...all the dependencies you want to watch to update the scroll EXCEPT the location one
        ]}
        location={asPath}
        containerRef={containerRef}
        onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
    // onUpdate={() => console.log('Updated, but not on location change!')} // Will trigger on 
    >
        <main data-scroll-container ref={containerRef} style={{ fontFamily: `${font.style.fontFamily}, naikaifont, "Noto Sans TC", Arial, Helvetica, sans-serif` }}>
            <Component {...pageProps} />
        </main>
    </LocomotiveScrollProvider >

    // return <Component {...pageProps} />;
}
