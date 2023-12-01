import Image from "next/image";
import { Client } from "@notionhq/client";
import Link from "next/link";
import Layout from "@/components/layout";

export const notion = new Client ({ auth: process.env.NOTION_API_KEY });

export default function Home({ partners }) {
    return (
        <Layout className="font-raleway">
            {/* HERO */}
            <header className="flex p-10 gap-5 flex-col items-center lg:flex-row lg:p-20 lg:pt-40 lg:items-left">
                <div className="flex-col items-center justify-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-7xl font-bold">
                        Where Innovation Meets Inspiration.
                    </h1>
                    <p className="font-karla font-semibold text-xl text-gray-500 pt-10">
                        We're a group of ambitious and passionate youth aiming to make an impact on this
                        world through STEM.
                    </p>
                    <button className="font-karla text-xl font-extrabold py-4 px-7 my-10 text-white bg-[#004BC8] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] text-center rounded">
                        <Link href="/#about">
                            Get Started
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col w-2/3 items-end">
                    <Image src="/images/hero-powerful.svg" height={700} width={700}/>
                </div>
            </header>

            {/* WHAT WE DO */}
            <div id="about" className="flex flex-col items-center px-10 py-20 lg:p-20 lg:flex-row font-karla font-semibold bg-blue-600 gap-20">
                {/* Heading and text */}
                <div className="lg:items-start w-3/4 lg:w-1/2 lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-6xl text-white font-bold">What we do.</h1>

                    <p className="text-xl leading-relaxed text-blue-200 mt-2 pt-3 pb-5">
                        We've realized that the real changemakers are the ones who understand the world around them and
                        use it to create innovative technologies. We aim to inspire future generations to pursue STEM
                        and build world-changing tools.
                    </p>

                    <button className="text-xl border py-4 px-7 my-5 text-white hover:text-black hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[200ms,700ms] transition-[color,box-shadow] text-center rounded">
                        <Link href="/about">
                            Learn More
                        </Link>
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

            {/* PARTNERS */}
            <div className="w-full p-16 md:p-24 lg:p-30 pt-20">
                <h1 className="text-5xl text-center text-black font-bold">Affiliated With</h1>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10">
                    {partners.map((partner) => (
                        <Link key={partner.name} href={partner.website}>
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                quality={100}
                                height={500}
                                width={500}
                                className="h-[70px] w-auto mx-auto object-center hover:brightness-110"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            {/* JOIN US */}
            <div className="flex flex-col bg-gray-50 items-center px-10 py-20 lg:p-20 lg:flex-row font-karla font-semibold gap-20">
                {/* Drone Graphic */}
                <div className="lg:w-1/2 h-full gap-5">
                    <Image height={700} width={700} src="/images/undraw_drone.svg" className="p-5" alt="Chat Icon" />
                </div>

                {/* Heading and text */}
                <div className="lg:items-start w-3/4 lg:w-1/2 lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-6xl text-black font-bold">Join Us!</h1>

                    <p className="text-xl leading-relaxed text-gray-500 mt-2 pt-3 pb-5">
                        We're hosting monthly events to help youth explore the various fields of STEM
                        and change the world. Click the button below to check out what we have in store for you.
                    </p>

                    <button className="font-karla text-xl font-extrabold py-4 px-7 my-2 text-white bg-[#004BC8] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] text-center rounded">
                        <Link href="/get-involved/index">
                            Get Involved
                        </Link>
                    </button>
                </div>
            </div>
        </Layout>
    )
}

// Get the list of partners with their logo and website from Notion
export async function getStaticProps() {
    const response = await notion.databases.query({
        database_id: process.env.PARTNERS_DB_ID
    });

    const partnersList = [];
    response.results.forEach((result) => {
        partnersList.push({
            name: result.properties.Name.title[0].text.content,
            logo: result.properties.Logo.url,
            website: result.properties.Website.rich_text[0].href
        })
    })

    return {
        props: {
            partners: partnersList
        }
    }
}