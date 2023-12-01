import Layout from "@/components/layout";
import {notion} from "@/pages/index";
import Image from "next/image";

export default function About({ team }) {
    return (
        <Layout>
            {/* ABOUT US */}
            <div className="flex p-10 pt-20 lg:p-20 lg:pt-40 gap-10 flex-col items-center lg:flex-row lg:items-left">
                <div className="flex-col items-center lg:items-start w-full lg:w-[55%] text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-7xl font-bold">
                        About Us.
                    </h1>
                    <p className="font-karla font-semibold leading-loose text-[1.2rem] text-gray-500 pt-10">
                        Innovire is a registered non-profit organization consisting of a group of
                        ambitious youth between the ages 13-18, who strive to create an impact in
                        this world by creating and sharing opportunities for ALL youth in an attempt
                        to inspire them to innovate and become leaders in the world of STEM. Innovire
                        was founded in 2018 by a few students attending the SciTech Program at Tomken
                        Road Middle School. Since then the organization and the amazing team that runs
                        it has grown, with members from various high schools around Peel. We are all
                        incredibly passionate about STEM, business, leadership and opportunities to
                        support our community.
                    </p>
                </div>
                <div className="flex flex-col w-full lg:w-[45%] items-end justify-center">
                    <Image src="/images/undraw_team.svg" height={700} width={700} />
                </div>
            </div>

            {/* MISSION */}
            <div className="flex flex-col p-10 pt-20 lg:p-20 lg:pt-40 lg:flex-row gap-5 lg:items-left">
                <div className="flex-col lg:items-start w-full lg:w-[55%] lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-7xl font-bold">
                        Our mission is to empower youth.
                    </h1>
                </div>

                <div className="flex flex-col w-full lg:w-[45%] items-end justify-center">
                    <p className="font-karla font-semibold lg:w-[85%] leading-loose text-[1.2rem] text-gray-500">
                        Our team recognized that often high rewarding opportunities were only
                        accessed by people with increased privileges and better resources and
                        through Innovire, we want all youth to benefit no matter their background
                        or life circumstances. Through Innovire we want to provide the access to
                        knowledge, resources and opportunities to all youth to help them become
                        future world leaders that create change in the world by innovating solutions
                        to world problems. We aim to inspire youth to innovate using technology and
                        in turn inspire others.
                    </p>
                </div>
            </div>

            {/* IMAGES */}
            <div className="flex flex-col p-10 pt-20 lg:p-20 lg:flex-row gap-10">
                <img src="/images/summit2023.JPG" className="rounded lg:w-1/2" alt="Innovire at the 2023 Summit" />
                <img src="/images/team.jpg" className="rounded lg:w-1/2" alt="Innovire Team" />
            </div>

            {/* MEET THE COMMITTEE */}
            <div className="flex flex-col items-center text-center px-20 pb-40">
                <h1 className="text-6xl font-bold">
                    Meet the Committee
                </h1>
                <p className="font-karla font-semibold lg:w-2/4 text-xl text-gray-500 pt-10">
                    We have over 30 driven members in the team. Here are the ones who bring it all together.
                </p>

                {/* EXECUTIVE PHOTOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-40 lg:gap-x-20 pt-20">
                    {team.map((executive) => (
                        <div key={executive.name} className="h-[250px] w-[250px]">
                            <Image
                                src={executive.photo}
                                alt={executive.name}
                                quality={100}
                                height={500}
                                width={500}
                                className="w-full h-full rounded-full object-cover"
                            />
                            <h1 className="font-raleway font-bold text-2xl mt-4 text-center">{executive.name}</h1>
                            <h2 className="font-karla font-semibold text-lg text-gray-500 text-center">{executive.role}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

// Get the list of executive team members with their photo and role from Notion
export async function getStaticProps() {
    const response = await notion.databases.query({
        database_id: process.env.TEAM_DB_ID,
        sorts: [{ property: "Priority", direction: "descending"}]
    });

    const teamList = [];
    response.results.forEach((result) => {
        teamList.push({
            name: result.properties.Name.title[0].text.content,
            role: result.properties.Role.rich_text[0].text.content,
            photo: result.properties.Photo.url
        })
    })

    return {
        props: {
            team: teamList.reverse()
        }
    }
}