import Logo from "@/public/logo/white.png";
import Image from "next/image";

export default function Footer() {
    // Returns the year for the copyright
    const getYear = () => {
        return new Date().getFullYear()
    }

    return (
        <footer className="bg-black text-white p-5 lg:p-20 font-karla font-semibold text-md">
            {/* Footer items */}
            <div className="grid grid-cols-12 mb-20">
                <Image src={Logo} alt="logo" width={124} height={64} className="col-span-4 lg:col-span-2"/>
                <div className="grid grid-cols-2 lg:grid-cols-4 col-span-8 lg:col-span-10 gap-y-10 gap-x-5">
                    <div className="space-y-4">
                        <h1 className="mb-7">About</h1>
                        <p className="text-gray-400">Our Mission</p>
                        <p className="text-gray-400">Team Members</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="mb-7">Events</h1>
                        <p className="text-gray-400">2023 Conference</p>
                        <p className="text-gray-400">2022 Conference</p>
                        <p className="text-gray-400">Boat Design</p>
                        <p className="text-gray-400">Thunkable Workshop</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="mb-7">Get Involved</h1>
                        <p className="text-gray-400">Participate</p>
                        <p className="text-gray-400">Sponsor</p>
                        <p className="text-gray-400">Join Us</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="mb-7">Other</h1>
                        <p className="text-gray-400">Contact</p>
                        <p className="text-gray-400">Articles</p>
                        <p className="text-gray-400">Current Events</p>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-400">
                <hr />
                <p className="text-sm mt-5">© {getYear()} Innovire, All Rights Reserved</p>
            </div>
        </footer>
    )
}