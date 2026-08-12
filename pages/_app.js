import "@/styles/globals.css";
import 'react-multi-carousel/lib/styles.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import { Noto_Sans_TC, Syne, Fragment_Mono } from 'next/font/google';

import { ScrollProvider } from "@/providers/scroll";

const noto_Sans_TC = Noto_Sans_TC({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-sans',
});

const syne = Syne({
    subsets: ['latin'],
    weight: ['500', '600', '700', '800'],
    variable: '--font-display',
});

const fragmentMono = Fragment_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-mono',
});

export default function App({ Component, pageProps }) {
    return (
        <ScrollProvider
            options={{
                smooth: true,
                smartphone: {
                    smooth: true,
                    inertia: 1.1
                },
                tablet: {
                    smooth: true,
                }
            }}
            // onUpdate={() => setAlpha(0)}
        >
            <main data-scroll-container className={`${noto_Sans_TC.variable} ${syne.variable} ${fragmentMono.variable} font-sans`} >
                <Component {...pageProps} />
            </main>
        </ScrollProvider>
    );
}
