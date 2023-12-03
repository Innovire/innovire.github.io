import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function GetInvolved() {
    // Returns the year
    const getYear = () => {
        return new Date().getFullYear()
    }

    return (
        <Layout>
            {/* HERO */}
            <div className="flex flex-col p-10 pt-20 lg:p-20 lg:pt-40 gap-5 items-center lg:flex-row lg:items-left">
                <div className="flex-col items-center lg:items-start w-full lg:w-[55%] text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-7xl font-bold">
                        Get Involved With Us.
                    </h1>
                    <p className="font-karla font-semibold leading-loose text-pg text-gray-500 pt-10">
                        For the {getYear()} year, Innovire plans to bring various engaging, inspiring and exciting events to
                        get youth excited about different topics in STEM. Throughout the year we will be hosting various
                        workshops, conferences, hackathons and more, on topics like design, space travel, robotics,
                        genetics, education in STEM, etc.!
                    </p>
                </div>
                <div className="flex flex-col w-full lg:w-[45%] items-end justify-center">
                    <Image height={700} width={700} src="/images/undraw_get_involved.svg" className="w-[90%] h-[70%]" />
                </div>
            </div>

            {/* PARTICIPATE IN OUR EVENTS */}
            <div className="flex flex-col px-10 py-20 lg:p-20 bg-gray-100 font-karla font-semibold items-center lg:flex-row gap-20">
                {/* Heading and text */}
                <div className="lg:items-start lg:w-1/2 lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-6xl">
                        Participate in our Events.
                    </h1>

                    <p className="lg:w-3/4 font-semibold text-xl text-gray-500 mt-2 pt-3 pb-5">
                        Click the button below to learn more about our next event!
                    </p>

                    <button className="font-karla text-xl font-extrabold py-4 px-7 my-2 text-white bg-[#004BC8] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] text-center rounded">
                        Get Started
                    </button>
                </div>

                {/* Photo */}
                <div className="flex-col lg:w-2/4">
                    <Image height={700} width={700} src="/images/participate.JPG" className="rounded-lg" />
                </div>
            </div>

            {/* JOIN OUR TEAM */}
            <div className="flex flex-col px-10 py-20 lg:p-20 font-karla font-semibold items-center lg:flex-row gap-20">
                {/* Photo */}
                <div className="flex-col lg:w-2/4">
                    <Image height={700} width={700} src="/images/join_team.JPG" className="rounded-lg" />
                </div>

                {/* Heading and text */}
                <div className="lg:items-start lg:w-1/2 lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-6xl">
                        Join the Team.
                    </h1>

                    <p className="font-semibold text-xl text-gray-500 mt-2 pt-3 pb-5">
                        Are you interested in becoming a member of the Innovire team? Click the
                        button below to see all our available opportunities.
                    </p>

                    <button className="font-karla text-xl font-extrabold py-4 px-7 my-2 text-white bg-[#004BC8] hover:text-white hover:shadow-[inset_17rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] text-center rounded">
                        <Link href="/get-involved/join">
                            See Opportunities
                        </Link>
                    </button>
                </div>

            </div>
        </Layout>
    )
}