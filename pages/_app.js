import "@/styles/globals.css";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import 'react-multi-carousel/lib/styles.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function App({ Component, pageProps }) {
  const containerRef = useRef(null);

  return <LocomotiveScrollProvider
    options={{
      smooth: true,
    }}
    // watch={
    //   [
    //     // ..all the dependencies you want to watch to update the scroll.
    //     //   Basicaly, you would want to watch page / location changes
    //     //  For exemple, on Next.js you would want to watch properties like`router.asPath`(you may want to add more criterias if the instance should be update on locations with query parameters)
    //   ]
    // }
    containerRef={containerRef}
  >
    <main data-scroll-container ref={containerRef}>
      <Component {...pageProps} />
    </main>
  </LocomotiveScrollProvider >

  // return <Component {...pageProps} />;
}
