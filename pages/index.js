import Head from 'next/head';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Carousel from 'react-multi-carousel';

export default function Index() {
    // const { scroll } = useLocomotiveScroll();

    const projects = [{
        title: '異質使用者密度分布應用環境下最大化滿足率之無人機佈署演算法',
        description: '研究著重於三維空間中無人機基地台（UAV-BSs）的部署，透過一個新算法提升非均勻分佈的地面使用者滿意度。此算法避免單一 UAV-BS 服務過多使用者，以增加每位使用者的數據傳輸率，進而提升整體使用者體驗。',
        image: '/images/Efficient_Deployment_of_User_Satisfaction_Optimization_in_Multi-UAV_Networks2.png',
        link: 'https://ieeexplore.ieee.org/document/10234047',
        color: 'black'
    }, {
        title: '每日文大',
        description: '一個全方位的校園資訊助手，透過 Line bot 能提供即時的天氣資訊、公車進站通知、校內重要消息、吃飯建議、每日星座運勢，以及快速連結到校園即景網頁。在校園中常用的各種資訊，這個 bot 都能提供最新、最快速的服務，讓您的校園生活更加便捷與豐富，您可以輕鬆規劃一天的活動，並隨時獲得您所需的資訊。',
        image: '/images/daily-pccu.web.app.jpeg',
        link: 'https://daily-pccu.web.app/',
        color: 'black'
    }, {
        title: '起源劇團',
        description: 'Origin 起源劇團的官方網站。網站提供了劇團的最新消息，還有劇團的成員介紹及過往演出的精彩瞬間。無論是劇團的粉絲還是新觀眾，都能在這個網站上找到豐富的內容和資訊。',
        image: '/images/origin-performing-art.web.app.jpeg',
        link: 'https://origin-performing-art.web.app/',
        class: 'md:text-white',
        color: 'white'
    }, {
        title: '無障礙檢測',
        description: '一款基於 axe-core 的 Chrome 擴充功能，旨在全面檢測網站的無障礙性。這個工具能夠評估網站是否符合無障礙需求，並提供詳細的檢測報告，指出網站在無障礙性方面的優勢和不足之處。這有助於網站開發者針對性地優化網站，以擴大受眾範圍，符合法規要求，並提升品牌形象。安裝這個擴充功能，可以讓您的網站更加包容，為所有使用者提供更友善的網頁體驗。',
        image: '/images/A11y_Extension.jpeg',
        link: 'https://chromewebstore.google.com/detail/%E7%84%A1%E9%9A%9C%E7%A4%99%E6%AA%A2%E6%B8%AC/njenpakabillpkdpnbkbajkfcgmpmlop',
        color: 'black'
    }];

    return (
        <>
            <Head>
                <title>I am P'Min</title>
            </Head>
            <section className='w-full h-svh flex flex-col justify-center items-center' data-scroll-section>
                <div className='w-full grow flex flex-col md:flex-row-reverse justify-center items-center gap-9 md:gap-0' id='cover'>
                    <div className='md:w-full md:h-full flex justify-center items-center' data-scroll data-scroll-speed='-9' data-scroll-direction='horizontal' data-scroll-position="top" data-scroll-target='#cover'>
                        <img src='/images/avatar.jpg' alt='avatar' className='rounded-full border border-black w-[80%] max-w-[400px]' width='500' height='500' />
                    </div>
                    <div className='md:w-full md:h-full flex flex-col justify-center items-center gap-5' data-scroll data-scroll-speed='9' data-scroll-direction='horizontal' data-scroll-position="top" data-scroll-target='#cover'>
                        <h1 className='text-5xl mb-8 font-black'>
                            P'Min
                        </h1>
                        <div className='text-2xl font-light'>A full-stack engineer.</div>
                    </div>
                </div>
                <div className='h-20 flex justify-center gap-5' data-scroll data-scroll-speed='7' data-scroll-position="top">
                    <a href='https://github.com/PMinn' target='_blank'>GitHub</a>
                    <a href='https://www.instagram.com/min.developer/' target='_blank'>Instagram</a>
                </div>
            </section>
            <section className='w-full py-20' data-scroll-section>
                <Carousel
                    data-scroll
                    responsive={{
                        superLargeDesktop: {
                            // the naming can be any, depends on you.
                            breakpoint: { max: 4000, min: 3000 },
                            items: 2
                        },
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 2
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1
                        }
                    }}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    itemClass="px-[8px] md:px-[2rem]"
                    centerMode={true}
                >
                    {
                        projects.map((project, i) => (
                            <a
                                href={project.link}
                                title={project.title + '(另開新視窗)'}
                                target='_blank'
                                key={'projects_' + i}
                                className='relative'
                            >
                                <h2 className='absolute top-[1.5rem] px-4 text-xl w-full font-bold font-semibold tracking-widest text-center' style={{ color: project.color }}>{project.title}</h2>
                                <img src={project.image} className='w-full aspect-square md:aspect-video shadow-xl rounded-3xl object-cover transition-all pointer-events-none' alt={project.title + '圖示'} />
                                <p className='w-full mt-4 line-clamp-2 overflow-hidden'>{project.description}</p>
                            </a>
                        ))
                    }
                </Carousel>
            </section>
            {/* <footer data-scroll-section>
                <div className='pt-[100vh]'>
                    <div data-scroll>
                        ok
                    </div>
                </div>
            </footer> */}
        </>
    )
}
