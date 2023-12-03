import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { notion } from "@/pages";

function PingEffect({ dotColor, pingColor }) {
    const [animation, setAnimation] = useState(true);

    const changeAnimation = () => {
        window.scrollY >= 380 ? setAnimation(false) : setAnimation(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeAnimation);
        return () => window.removeEventListener('scroll', changeAnimation);
    })

    return (
        <div className={`grid place-items-center h-14 w-14 rounded-full`}>
            <span className={`col-span-full row-span-full h-14 w-14 rounded-full ${pingColor}`} />
            <span className={`col-span-full row-span-full h-10 w-10 rounded-full ${pingColor} ${animation ? 'animate-ping' : 'animate-none'}`} />
            <span className={`col-span-full row-span-full h-3 w-3 rounded-full ${dotColor}`} />
        </div>
    )
}

export default function Join({ roles }) {
    return (
        <Layout>
            {/* WHY INNOVIRE */}
            <div className="flex p-10 pt-20 lg:p-20 lg:pt-60 lg:gap-10 flex-col lg:flex-row lg:items-left">
                <div className="flex-col lg:items-start w-full lg:w-2/3 lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-7xl font-bold">
                        Why Innovire?
                    </h1>
                </div>
                <div className="flex flex-col w-full lg:w-1/3">
                    <p className="font-karla font-semibold leading-loose text-md text-gray-500 pt-5">
                        Innovire is hyper-focused on bringing youth with new opportunities that will
                        help them in all aspects in life.
                    </p>
                </div>
            </div>

            {/* REASONS */}
            <div className="px-10 py-20 lg:px-20 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                {/* Volunteer Hours */}
                <div className="flex gap-2">
                    <div className="w-1/5">
                        <PingEffect dotColor="bg-sky-600" pingColor="bg-sky-50" />
                    </div>
                    <div className="w-4/5">
                        <h1 className="font-raleway font-semibold text-2xl">Volunteer Hours</h1>
                        <p className="font-karla font-semibold leading-loose text-md text-gray-500 pt-3">
                            With events every month and five subteams, you could get all your volunteer hours in many ways.
                        </p>
                    </div>
                </div>

                {/* Help Communities */}
                <div className="flex gap-2">
                    <div className="w-1/5">
                        <PingEffect dotColor="bg-red-600" pingColor="bg-red-50" />
                    </div>
                    <div className="w-4/5">
                        <h1 className="font-raleway font-semibold text-2xl">Help Communities</h1>
                        <p className="font-karla font-semibold leading-loose text-md text-gray-500 pt-3">
                            We have created impact on over 500 students in the world over three years. With Innovire,
                            you can help people from all backgrounds.
                        </p>
                    </div>
                </div>

                {/* Freedom */}
                <div className="flex gap-2">
                    <div className="w-1/5">
                        <PingEffect dotColor="bg-yellow-600" pingColor="bg-yellow-50" />
                    </div>
                    <div className="w-4/5">
                        <h1 className="font-raleway font-semibold text-2xl">Freedom</h1>
                        <p className="font-karla font-semibold leading-loose text-md text-gray-500 pt-3">
                            The ideas and planning come from you! Being a student-run organisation, you can have more
                            say in what gets done.
                        </p>
                    </div>
                </div>

                {/* Make New Friends */}
                <div className="flex gap-2">
                    <div className="w-1/5">
                        <PingEffect dotColor="bg-green-600" pingColor="bg-green-50" />
                    </div>
                    <div className="w-4/5">
                        <h1 className="font-raleway font-semibold text-2xl">Make New Friends</h1>
                        <p className="font-karla font-semibold leading-loose text-md text-gray-500 pt-3">
                            Innovire is the perfect place to make new friends who have similar interests with a common
                            goal of helping students.
                        </p>
                    </div>
                </div>

                {/* Learn New Skills */}
                <div className="flex gap-2">
                    <div className="w-1/5">
                        <PingEffect dotColor="bg-violet-600" pingColor="bg-violet-50" />
                    </div>
                    <div className="w-4/5">
                        <h1 className="font-raleway font-semibold text-2xl">Learn New Skills</h1>
                        <p className="font-karla font-semibold leading-loose text-md text-gray-500 pt-3">
                            Innovire is filled with opportunities to learn new skills in the STEM field and pass on the
                            knowledge to students.
                        </p>
                    </div>
                </div>

                {/* Have Fun */}
                <div className="flex gap-2">
                    <div className="w-1/5">
                        <PingEffect dotColor="bg-orange-600" pingColor="bg-orange-50" />
                    </div>
                    <div className="w-4/5">
                        <h1 className="font-raleway font-semibold text-2xl">Learn New Skills</h1>
                        <p className="font-karla font-semibold leading-loose text-md text-gray-500 pt-3">
                            Innovire is a safe space for people of all skill levels and ages to learn, grow and have fun.
                        </p>
                    </div>
                </div>
            </div>

            {/* OPEN ROLES */}
            <div className="flex flex-col bg-gray-100 items-center text-center px-20 py-20">
                <h1 className="text-6xl font-bold">Open Roles</h1>
                <p className="font-karla font-semibold lg:w-2/4 text-xl text-gray-500 pt-10">
                    Click on each tab to see the application. Note that some roles may not have spots open.
                </p>

                {/* ROLE CARDS */}
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20">
                    {roles.map((role) => (
                        <a key={role.name} href={role.link}>
                            <div className="h-full w-full p-10 bg-white space-y-5 rounded-md shadow-md hover:shadow-xl">
                                <span className={`${role.status === "Open" ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"} py-1 px-3 text-md rounded-md`}>
                                    {role.status}
                                </span>
                                <h1 className="font-karla font-semibold text-xl">{role.name}</h1>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

// Get the list of team roles and their status (open or closed)
export async function getStaticProps() {
    const response = await notion.databases.query({
        database_id: process.env.ROLES_DB_ID
    });

    const rolesList = [];
    response.results.forEach((result) => {
        rolesList.push({
            name: result.properties.Name.title[0].text.content,
            status: result.properties.Status.multi_select[0].name,
            link: result.properties.URL.url
        })
    })

    return {
        props: {
            roles: rolesList
        }
    }
}