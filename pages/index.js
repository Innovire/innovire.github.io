export default function Home() {
    return (
        <div className="font-raleway">
            {/* HERO */}
            <header className="flex p-10 gap-5 flex-col items-center lg:flex-row lg:p-20 lg:pt-40 lg:items-left">
                <div className="flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-6xl lg:text-8xl font-bold">
                        Where Innovation Meets Inspiration.
                    </h1>
                    <p className="font-karla font-semibold text-2xl text-gray-500 pt-10">
                        We're a group of ambitious and passionate youth aiming to make an impact on this
                        world through STEM.
                    </p>
                    <button className="font-karla text-2xl font-extrabold py-4 px-7 my-10 text-white bg-[#004BC8] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] text-center rounded">
                        Get Started
                    </button>
                </div>
                <div className="flex flex-col w-2/3 items-end">
                    <img src="/images/hero-powerful.svg" className="w-[90%] h-[70%]" alt=""/>
                </div>
            </header>

            {/* WHAT WE DO */}
            <div className="flex flex-col items-center px-10 py-20 lg:p-20 lg:flex-row font-karla font-semibold bg-blue-600 gap-20">
                {/* Heading and text */}
                <div className="lg:items-start w-3/4 lg:w-1/2 lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-6xl lg:text-7xl text-white font-bold">What we do.</h1>

                    <p className="text-2xl leading-relaxed text-blue-200 mt-2 pt-3 pb-5">
                        We've realized that the real changemakers are the ones who understand the world around them and
                        use it to create innovative technologies. We aim to inspire future generations to pursue STEM
                        and build world-changing tools.
                    </p>

                    <button className="text-2xl border py-4 px-7 my-5 text-white hover:text-black hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[200ms,700ms] transition-[color,box-shadow] text-center rounded">
                        Learn More
                    </button>
                </div>

                {/* Graphic boxes */}
                <div className="lg:w-1/2 h-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="w-full h-full bg-white rounded-md">
                        <div className="m-8">
                            <div className="flex bg-red-100 rounded-full h-20 w-20 items-center justify-center">
                                <img src="/icons/layout-red.png" className="p-5" alt="Layout Icon"/>
                            </div>
                            <h1 className="text-2xl pt-2">Conferences</h1>
                            <p className="text-md text-gray-700 pt-3">
                                We host the yearly Innovire Summit showing students the awesome world of STEM.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-full bg-white rounded-md">
                        <div className="m-8">
                            <div className="flex bg-yellow-100 rounded-full h-20 w-20 items-center justify-center">
                                <img src="/icons/sidebar-yellow.png" className="p-5" alt="Sidebar Icon" />
                            </div>
                            <h1 className="text-2xl pt-2">Workshops</h1>
                            <p className="text-md text-gray-700 pt-3">
                                We host short and fun activities to light the candle of curiosity in students.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-full bg-white rounded-md">
                        <div className="m-8">
                            <div className="flex bg-blue-100 rounded-full h-20 w-20 items-center justify-center">
                                <img src="/icons/bookmark-blue.png" className="p-5" alt="Bookmark Icon" />
                            </div>
                            <h1 className="text-2xl pt-2">Classes</h1>
                            <p className="text-md text-gray-700 pt-3">
                                We help youth gain the knowledge to build what they want.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-full bg-white rounded-md">
                        <div className="m-8">
                            <div className="flex bg-gray-100 rounded-full h-20 w-20 items-center justify-center">
                                <img src="/icons/chat-black.png" className="p-5" alt="Chat Icon" />
                            </div>
                            <h1 className="text-2xl pt-2">Service</h1>
                            <p className="text-md text-gray-700 pt-3">
                                We've donated hundreds of dollars to organisations that are improving people's lives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SVG Wave */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 65">
                <path fill="#2563eb" d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,53.3C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
            </svg>
        </div>
    )
}
