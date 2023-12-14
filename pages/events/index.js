import { notion } from "@/pages";
import Layout from "@/components/layout";
import EventCard from "@/components/event-card";

export default function Events({ pastEvents, futureEvents }) {
    return (
        <Layout>
            {/* HERO */}
            <div className="flex flex-col p-10 pt-20 lg:p-20 lg:pt-40 gap-5 items-center lg:flex-row lg:items-left">
                <div className="flex-col items-center lg:items-start w-full lg:w-[55%] text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl lg:text-7xl font-bold">Events.</h1>
                    <p className="font-karla font-semibold leading-loose text-pg text-gray-500 pt-10">
                        Check out some of our past events, as well as the events we plan on hosting in the near future!
                    </p>
                </div>
                <div className="flex flex-col w-full lg:w-[45%] items-end justify-center">

                </div>
            </div>

            {/* FUTURE EVENTS */}
            <div className="flex flex-col px-10 lg:px-20 py-10">
                <h1 className="text-5xl font-bold">Future Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10">
                    {futureEvents.map((event) => (
                        <EventCard key={event.name} details={event} />
                    ))}
                </div>
            </div>

            {/* PAST EVENTS */}
            <div className="flex flex-col px-10 lg:px-20 py-10">
                <h1 className="text-5xl font-bold">Past Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10">
                    {pastEvents.map((event) => (
                        <EventCard key={event.name} details={event} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

// Get the list of past and future events
export async function getStaticProps() {
    const response = await notion.databases.query({
        database_id: process.env.EVENTS_DB_ID,
        sorts: [{ property: "Date", direction: "ascending" }]
    });

    // Holds the past and future events
    const events = {
        "Past": [],
        "Future": []
    }

    response.results.forEach((result) => {
        const name = result.properties.Name.title[0].text.content;
        const path = result.properties.Path.rich_text[0].plain_text;
        const status = result.properties.Status.status.name;
        const date = result.properties.Date.date.start;
        const description = result.properties.Description.rich_text[0].plain_text;

        events[status].push({
            name,
            path,
            date,
            description
        })
    })

    return {
        props: {
            pastEvents: events["Past"],
            futureEvents: events["Future"]
        }
    }
}