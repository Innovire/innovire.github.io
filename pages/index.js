export default function Home() {
    return (
        <div className="font-raleway">
            {/* Hero Section */}
            <header className="flex p-10 flex-col items-center lg:flex-row lg:p-20 lg:items-left">
                <div className="flex flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0">
                    <div className="flex-col text-6xl lg:text-8xl font-bold">
                        Where Innovation Meets Inspiration.
                    </div>
                </div>

                <div className="flex-col w-2/3 items-center">
                    <img src="/images/hero-powerful.svg" className="w-[90%] h-[70%] object-center" alt=""/>
                </div>
            </header>
        </div>
    )
}
