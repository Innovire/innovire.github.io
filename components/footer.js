import Logo from "@/public/logo/white.png";
import Image from "next/image";
import Link from "next/link";

// List of footer items
const footerItems = [
    {
        name: "About",
        items: [
            {
                name: "Our Mission",
                path: "/about/#mission"
            },
            {
                name: "Team Members",
                path: "/about/#team"
            }
        ]
    },
    {
        name: "Events",
        items: [
            {
                name: "2023 Summit",
                path: "/events/summit-2023"
            },
            {
                name: "2022 Summit",
                path: "/events/summit-2022"
            },
            {
                name: "Boat Design",
                path: "/events/boat-design"
            },
            {
                name: "Thunkable Workshop",
                path: "/events/thunkable"
            }
        ]
    },
    {
        name: "Get Involved",
        items: [
            {
                name: "Participate",
                path: "/get-involved/#participate"
            },
            {
                name: "Sponsor",
                path: "/sponsorship"
            },
            {
                name: "Join Us",
                path: "/get-involved/join"
            }
        ]
    },
    {
        name: "Other",
        items: [
            {
                name: "Contact",
                path: "/contact"
            },
            {
                name: "Partners",
                path: "/#partners"
            }
        ]
    }
]

export default function Footer() {
    // Returns the year for the copyright
    const getYear = () => {
        return new Date().getFullYear()
    }

    return (
        <footer className="bg-black text-white p-10 lg:p-20 font-karla font-semibold text-md">
            {/* Footer items */}
            <div className="grid grid-cols-12 mb-20">
                <Image src={Logo} alt="Logo" width={124} height={64} className="col-span-12 lg:col-span-2 pb-10" />
                <div className="grid grid-cols-2 lg:grid-cols-4 col-span-12 lg:col-span-10 gap-y-10 gap-x-20 lg:gap-x-5">
                    {footerItems.map((section) => (
                        <div key={section.name} className="flex flex-col space-y-4">
                            <h1 className="mb-7">{section.name}</h1>
                            {section.items.map((item) => (
                                <Link key={item.path} href={item.path} className="text-gray-400">{item.name}</Link>
                            ))}
                        </div>
                    ))}
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