import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function EventCard({ details }) {
    return (
        <div className="flex flex-col h-fit w-full rounded-md shadow-md hover:shadow-xl font-karla font-bold">
            <Link href={{ pathname: `events/${details.path}` }}>
                <CldImage
                    src={`${details.path}/cover`}
                    height="1000"
                    width="1000"
                    className="h-[30vh] w-full rounded-t-md object-cover"
                />
                <div className="h-1/4 w-full p-5 pb-3">
                    <h1 className="text-xl font-extrabold">{details.name}</h1>
                    <h2 className="text-md text-blue-500">{details.date}</h2>
                </div>
                <div className="h-1/4 w-full px-5 pb-5">
                    <p className="text-sm text-gray-500">{details.description.substring(0, 80)}...</p>
                </div>
            </Link>
        </div>
    )
}