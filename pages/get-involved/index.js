import Layout from "@/components/layout";
import Image from "next/image";

export default function GetInvolved() {
    // Returns the year
    const getYear = () => {
        return new Date().getFullYear()
    }

    return (
        <Layout>
            {/* HERO */}
            <div className="flex p-20 lg:pt-60 gap-5 flex-col items-center lg:flex-row lg:items-left">
                <div className="flex-col items-center lg:items-start w-full lg:w-[55%] text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-6xl lg:text-8xl font-bold">
                        Get Involved With Us.
                    </h1>
                    <p className="font-karla font-semibold leading-loose text-[1.3rem] text-gray-500 pt-10">
                        For the {getYear()} year, Innovire plans to bring various engaging, inspiring and exciting events to
                        get youth excited about different topics in STEM. Throughout the year we will be hosting various
                        workshops, conferences, hackathons and more, on topics like design, space travel, robotics,
                        genetics, education in STEM, etc.!
                    </p>
                </div>
                <div className="flex flex-col w-full lg:w-[45%] items-end justify-center">
                    <img src="/images/undraw_get_involved.svg" className="w-[90%] h-[70%]" alt="Team"/>
                </div>
            </div>

            {/* PARTICIPATE IN OUR EVENTS */}
            <div className="flex flex-col bg-gray-100 font-karla font-semibold items-center px-10 py-20 lg:p-20 lg:flex-row gap-20">
                {/* Heading and text */}
                <div className="lg:items-start w-3/4 lg:w-1/2 lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-6xl lg:text-7xl">
                        Participate in our Events.
                    </h1>

                    <p className="lg:w-3/4 font-semibold text-2xl text-gray-500 mt-2 pt-3 pb-5">
                        Click the button below to learn more about our next event!
                    </p>

                    <button className="font-karla text-2xl font-extrabold py-4 px-7 my-2 text-white bg-[#004BC8] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] text-center rounded">
                        Get Started
                    </button>
                </div>

                {/* Photo */}
                <div className="flex-col lg:w-2/4">
                    <Image height={700} width={700} src="/images/participate.JPG" className="rounded-lg" />
                </div>
            </div>

            {/* JOIN OUR TEAM */}
            <div className="flex flex-col font-karla font-semibold items-center px-10 py-20 lg:p-20 lg:flex-row gap-20">
                {/* Photo */}
                <div className="flex-col lg:w-2/4">
                    <Image height={700} width={700} src="/images/join_team.JPG" className="rounded-lg" />
                </div>

                {/* Heading and text */}
                <div className="lg:items-start w-3/4 lg:w-1/2 lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-6xl lg:text-7xl">
                        Join the Team.
                    </h1>

                    <p className="font-semibold text-2xl text-gray-500 mt-2 pt-3 pb-5">
                        Are you interested in becoming a member of the Innovire team? Click the
                        button below to see all our available opportunities.
                    </p>

                    <button className="font-karla text-2xl font-extrabold py-4 px-7 my-2 text-white bg-[#004BC8] hover:text-white hover:shadow-[inset_17rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] text-center rounded">
                        See Opportunities
                    </button>
                </div>

            </div>
        </Layout>
    )
}