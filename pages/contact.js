import Layout from "@/components/layout";
import Image from "next/image";
import ContactForm from "@/components/contact-form";

// List of social media platforms
const socialMedia = [
    {
        name: "Email",
        icon: "/icons/gmail.png",
        link: "mailto:innovireteam@gmail.com"
    },
    {
        name: "Instagram",
        icon: "/icons/instagram.png",
        link: "https://www.instagram.com/innovireteam/"
    },
    {
        name: "TikTok",
        icon: "/icons/tiktok.svg",
        link: "https://www.tiktok.com/@innovireofficial/"
    },
    {
        name: "Discord",
        icon: "/icons/discord.svg",
        link: "https://discord.com/invite/yHvs4ekDex/"
    },
    {
        name: "LinkedIn",
        icon: "/icons/linkedin.png",
        link: "https://ca.linkedin.com/company/innovire/"
    }
]

export default function Contact() {
    return (
        <Layout>
            <div className="flex lg:pt-40 p-20 gap-5 flex-col items-center lg:flex-row lg:items-left">
                <div className="flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-6xl lg:text-8xl font-bold">
                        Contact Us.
                    </h1>
                    <p className="font-karla font-semibold leading-loose text-2xl text-gray-500 pt-10">
                        Have any burning questions you want to ask us? Contact us here to get a quick response.
                    </p>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 items-end justify-center">
                    <img src="/images/undraw_mail.svg" className="w-[90%] h-[70%]" alt="Team"/>
                </div>
            </div>

            {/* SEND US A MESSAGE */}
            <div className="flex flex-col gap-y-10 items-center justify-center p-20">
                <h1 className="text-4xl text-center font-bold">Send Us A Message</h1>
                <ContactForm />
            </div>

            {/* CONNECT WITH US */}
            <div className="flex flex-col p-12 mx-20 my-20 rounded-md bg-blue-100">
                <h1 className="text-5xl text-center font-bold">Connect With Us</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 pt-10">
                    {socialMedia.map((media) => (
                        <a target="_blank" rel="noopener noreferrer" key={media.name} href={media.link}>
                            <Image
                                src={media.icon}
                                alt={media.name}
                                quality={100}
                                height={70}
                                width={70}
                                className="mx-auto object-center hover:brightness-105"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </Layout>
    )
}