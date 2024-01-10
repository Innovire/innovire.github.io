import { notion } from "@/pages";
import Layout from "@/components/layout";
import { CldImage } from "next-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { useEffect, useState } from "react";

export default function Event({ event, images }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, []);

    return (
        <Layout title={`Innovire - ${event.name}`} description={event.description}>
            <div className="flex flex-col p-10 pt-20 lg:p-20 lg:pt-40 gap-10 place-items-center text-center lg:text-left">
                {/* SIGNUP BANNER */}
                {event?.signup ? (
                    <span className="w-full text-blue-600 bg-blue-50 py-2 px-2 text-md font-semibold rounded-md">
                        <a href={event.signup} target="_blank">🔗 Register for the event here!</a>
                    </span>
                ): null}

                {/* COVER */}
                {isClient ? (
                    <CldImage
                        src={`${event?.path}/cover`}
                        height="2000"
                        width="2000"
                        className="h-[50vh] w-full rounded-lg object-cover"
                    />
                ) : null}

                {/* NAME */}
                {event?.name ? (
                    <h1 className="text-5xl lg:text-7xl font-bold">
                        {event.name}
                    </h1>
                ): null}

                {/* STATUS AND DATE */}
                {event?.status && event?.date ? (
                    <div className="flex-row space-x-5">
                        <span className={`${event.status === "Upcoming" ? "text-green-600 bg-green-100" : "text-blue-600 bg-blue-100"} py-1 px-3 text-md rounded-md`}>
                            {event.status}
                        </span>
                            <span className="text-purple-600 bg-purple-100 py-1 px-3 text-md rounded-md">
                            {event.date}
                        </span>
                    </div>
                ): null}

                <div className="font-karla font-semibold leading-loose text-pg text-gray-500 space-y-5">
                    {/* DESCRIPTION */}
                    {event?.description ? <p>{event.description}</p> : null}

                    {/* PRESENTERS */}
                    {event?.presenters ? <p>{event.presenters}</p> : null}

                    {/* MENTORS */}
                    {event?.mentors ? <p>{event.mentors}</p> : null}
                </div>

                {/* IMAGES */}
                {images && isClient ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {images.map((image) => (
                            <CldImage
                                src={image.public_id}
                                key={image.public_id}
                                height="2000"
                                width="2000"
                                className="h-[50vh] rounded-lg object-cover hover:shadow-xl"
                            />
                        ))}
                    </div>
                ) : null}

                {/* VIDEO */}
                {event?.video ? <iframe className="rounded-lg w-full lg:w-[50%] aspect-video" src={event.video} /> : null}
            </div>
        </Layout>
    )
}

// Get all the page paths for the events
export async function getStaticPaths() {
    const response = await notion.databases.query({
        database_id: process.env.EVENTS_DB_ID
    });

    // List of path IDs
    const paths = []
    response.results.forEach((result) => {
        paths.push({
            params: {
                event: result.properties.Path.rich_text[0].plain_text
            }
        })
    })

    return {
        paths,
        fallback: false
    }
}

// Get all the event details required to render the page
export async function getStaticProps({ params }) {
    const eventID = params.event;

    // Get the event details from notion using the eventID
    const response = await notion.databases.query({
        database_id: process.env.EVENTS_DB_ID,
        filter: {
            property: "Path",
            rich_text: {
                equals: eventID
            }
        }
    });

    // Add the necessary information to eventDetails
    const eventDetails = {
        name: response.results[0].properties.Name.title[0].text.content,
        path: response.results[0].properties.Path.rich_text[0].plain_text,
        status: response.results[0].properties.Status.status.name,
        date: response.results[0].properties.Date.date?.start || "TBD",
        signup: response.results[0].properties.Signup?.url,
        video: response.results[0].properties.Video?.url,
        description: response.results[0].properties.Description.rich_text[0].plain_text,
        presenters: response.results[0].properties.Presenters.rich_text[0]?.plain_text || null,
        mentors: response.results[0].properties.Mentors.rich_text[0]?.plain_text || null
    };

    // Get the event images from cloudinary using the eventID
    cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true
    });

    // Filter the results to exclude the cover image
    const result = await cloudinary.search.expression(`folder=${eventID}`).max_results(500).execute();
    const images = result.resources.filter(i => !i.public_id.includes("cover")) || null;

    return {
        props: {
            event: eventDetails,
            images: images
        }
    }
}