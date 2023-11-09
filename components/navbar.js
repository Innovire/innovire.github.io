import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo/black.png"
import { AiOutlineMenu } from "react-icons/ai";

// List of menu items
const menuItems = [
    {
        name: "About Us",
        path: "/about-us"
    },
    {
        name: "Get Involved",
        path: "/get-involved"
    },
    {
        name: "Updates",
        path: "/updates"
    },
    {
        name: "Contact Us",
        path: "/contact"
    }
]

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [navBg, setNavBg] = useState(false);

    const changeNavBg = () => {
        window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => window.removeEventListener('scroll', changeNavBg);
    })

    return (
        <header className={`flex py-2 lg:py-5 w-screen transition-colors duration-400 font-karla font-bold ${navBg || showDropdown ? 'bg-white shadow-xl' : 'bg-transparent'} `}>
            <div className="px-10 lg:flex w-full">
                <div className="flex justify-between">
                    <Link href="/" className="flex flex-row items-center font-bold text-xl mr-auto">
                        <Image src={Logo} alt="logo" width={124} height={64} />
                    </Link>

                    <button
                        className="px-3 py-1 opacity-50 hover:opacity-75 rounded ml-auto text-white lg:hidden"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <AiOutlineMenu className="text-black" />
                    </button>
                </div>

                <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row mt-3 lg:mt-0 lg:text-lg ml-auto`}>
                    {menuItems.map((menuItem, i) => (
                        <Link
                            className="text-[#454646] hover:text-[#004BC8] p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors"
                            href={menuItem.path}
                            key={i}
                        >
                            {menuItem.name}
                        </Link>
                    ))}

                    <Link
                        className="text-white bg-[#004BC8] hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] text-center lg:ml-5 lg:px-8 py-2 lg:mx-2 rounded"
                        href="/sponsorship"
                    >
                        Sponsor Us
                    </Link>
                </div>
            </div>
        </header>
    )
}