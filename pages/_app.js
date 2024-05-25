import "@/styles/globals.css";
import 'react-multi-carousel/lib/styles.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import { Noto_Sans_TC } from 'next/font/google';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

import { ScrollProvider } from "@/providers/scroll";

// const dekko = Dekko({
//     subsets: ['latin'],
//     weight: ['400']
// });

const noto_Sans_TC = Noto_Sans_TC({
    subsets: ['latin'],
    weight: ['400']
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
            {/* style={{ fontFamily: `${dekko.style.fontFamily}, naikaifont, "Noto Sans TC", Arial, Helvetica, sans-serif` }} */}
            {/* style={{ backgroundColor: `rgba(var(--footer-bgc),${alpha})` }} */}
            <main data-scroll-container className={noto_Sans_TC.className} >
                <Component {...pageProps} />
            </main>
        </ScrollProvider>
    );
}
