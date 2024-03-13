import style from '../styles/index.module.css';

export default function Index() {

    const projects = [{
        title: '異質使用者密度分布應用環境下最大化滿足率之無人機佈署演算法',
        description: '研究著重於三維空間中無人機基地台（UAV-BSs）的部署，透過一個新算法提升非均勻分佈的地面用戶滿意度。此算法避免單一 UAV-BS 服務過多用戶，以增加每位用戶的數據傳輸率，進而提升整體用戶體驗。',
        image: '/images/Efficient_Deployment_of_User_Satisfaction_Optimization_in_Multi-UAV_Networks.png',
        link: 'https://chromewebstore.google.com/detail/%E7%84%A1%E9%9A%9C%E7%A4%99%E6%AA%A2%E6%B8%AC/njenpakabillpkdpnbkbajkfcgmpmlop',
        row: 2,
        col: 1
    }, {
        title: '每日文大',
        description: '一個全方位的校園資訊助手，透過 Line bot 能提供即時的天氣資訊、公車進站通知、校內重要消息、吃飯建議、每日星座運勢，以及快速連結到校園即景網頁。在校園中常用的各種資訊，這個 bot 都能提供最新、最快速的服務，讓您的校園生活更加便捷與豐富，您可以輕鬆規劃一天的活動，並隨時獲得您所需的資訊。',
        image: '/images/daily-pccu.web.app.jpeg',
        link: 'https://daily-pccu.web.app/',
        row: 1,
        col: 2
    }, {
        title: '起源劇團',
        description: 'Origin 起源劇團的官方網站。網站提供了劇團的最新消息，還有劇團的成員介紹及過往演出的精彩瞬間。無論是劇團的粉絲還是新觀眾，都能在這個網站上找到豐富的內容和資訊。',
        image: '/images/origin-performing-art.web.app.jpeg',
        link: 'https://origin-performing-art.web.app/',
        row: 1,
        col: 1
    }, {
        title: '無障礙檢測',
        description: '一款基於 axe-core 的 Chrome 擴充功能，旨在全面檢測網站的無障礙性。這個工具能夠評估網站是否符合無障礙需求，並提供詳細的檢測報告，指出網站在無障礙性方面的優勢和不足之處。這有助於網站開發者針對性地優化網站，以擴大受眾範圍，符合法規要求，並提升品牌形象。安裝這個擴充功能，可以讓您的網站更加包容，為所有用戶提供更友善的網頁體驗。',
        image: '/images/A11y_Extension.png',
        link: 'https://chromewebstore.google.com/detail/%E7%84%A1%E9%9A%9C%E7%A4%99%E6%AA%A2%E6%B8%AC/njenpakabillpkdpnbkbajkfcgmpmlop',
        row: 1,
        col: 1
    }];

    return (
        <main className='w-full max-w-[1280px] mx-auto relative'>
            <section className='w-full h-svh flex flex-col justify-center items-center'>
                <div className='w-full grow flex flex-col md:flex-row-reverse justify-center items-center gap-9 md:gap-0'>
                    <div className='md:w-full md:h-full flex justify-center items-center'>
                        <img src='/images/avatar.jpg' alt='avatar' className='rounded-full border border-black w-[80%] max-w-[400px]' width='500' height='500' />
                    </div>
                    <div className='md:w-full md:h-full flex flex-col justify-center items-center gap-5'>
                        <div className='text-5xl mb-2 font-black'>P'Min</div>
                        <div className='text-2xl font-light'>A full-stack engineer.</div>
                    </div>
                </div>
                <div className='mb-20 flex justify-center items-center gap-5'>
                    <a href="https://github.com/PMinn" target='_blank'>GitHub</a>
                    <a href="https://www.instagram.com/min.developer/">Instagram</a>
                </div>
            </section>
            <section className='w-full min-h-svh'>
                {/* <h2 className='text-2xl font-black mb-4'>專案</h2> */}
                <div className={"grid grid-flow-row-dense grid-cols-3 gap-4 " + style.projects}>
                    {
                        projects.map((project, i) => (
                            <a className={`relative border-1 row-span-${project.row} col-span-${project.col} ` + style.project} href={project.link} title={project.title + "(另開新視窗)"} target="_blank" key={'projects_' + i}>
                                <img src={project.image} className='w-full h-full aspect-video object-cover' alt={project.title + "圖示"} />
                                <div className='w-full h-full p-10 text-white bg-[#00000090] overflow-hidden absolute top-0 left-0 opacity-0 hover:opacity-100 transition duration-300'>
                                    <div className='w-full h-full overflow-y-auto'>
                                        <h3 className='text-lg font-black my-2'>{project.title}</h3>
                                        <p className='text-md'>{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}
