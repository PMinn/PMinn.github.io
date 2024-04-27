import { useContext, createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';

const ScrollContext = createContext({});

export function ScrollProvider({ children, options, onUpdate = () => { }, ...value }) {
    const [isScrollLoaded, setIsScrollLoaded] = useState(false);
    const router = useRouter();

    async function locomotiveScrollInit() {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        window.ls = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            ...options
        });
        setIsScrollLoaded(true);
    }

    useEffect(() => {
        locomotiveScrollInit();
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            if (typeof window.ls.destroy === 'function') window.ls.destroy();
            setIsScrollLoaded(false);
            document.querySelector('[data-scroll-container]').style.display = 'none';
            onUpdate();
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => router.events.off('routeChangeStart', handleRouteChange)
    }, [router])

    useEffect(() => {
        const handleRouteChange = () => {
            document.querySelector('[data-scroll-container]').style.display = '';
            locomotiveScrollInit();
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => router.events.off('routeChangeComplete', handleRouteChange)
    }, [router])

    function getLocomotiveScroll() {
        return window.ls;
    }

    return (
        <ScrollContext.Provider value={{ isScrollLoaded, getLocomotiveScroll, ...value }}>
            {children}
        </ScrollContext.Provider>
    )
}

export function useScroll() {
    return useContext(ScrollContext);
}