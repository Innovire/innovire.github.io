import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="font-raleway">
            {/* Hero Section */}
            <header className="flex p-10 gap-5 flex-col items-center lg:flex-row lg:p-20 lg:items-left">
                <div className="flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0">
                    <div className="text-6xl lg:text-8xl font-bold">
                        Where Innovation Meets Inspiration.
                    </div>
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

            {/* Footer */}
            <Footer />
        </div>
    )
}
