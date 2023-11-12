import Layout from "@/components/layout";

export default function Sponsorship() {
    return (
        <Layout>
            {/* HERO */}
            <div className="flex p-20 lg:pt-60 gap-5 flex-col items-center lg:flex-row lg:items-left">
                <div className="flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-6xl lg:text-8xl font-bold">
                        Sponsor Us.
                    </h1>
                    <p className="font-karla font-semibold leading-loose text-2xl text-gray-500 pt-10">
                        Sponsoring us is the best way of supporting us in our endeavours into helping communities
                        through STEM.
                    </p>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 items-end justify-center">
                    <img src="/images/undraw_sponsor.svg" className="w-[90%] h-[70%]" alt="Team"/>
                </div>
            </div>

            {/* WHY SPONSOR */}
            <div className="flex flex-col p-20 pt-20">
                <h1 className="text-6xl font-bold">Why Should You Sponsor Us?</h1>
                <p className="font-karla font-semibold leading-loose text-xl text-gray-500 pt-10">
                    Innovire’s ambitions are always growing, looking for ways to reach a greater number of youth and
                    make a bigger impact all the time. We have met, worked with, learned from and have been supported
                    by various people and organizations throughout our journey. To achieve our ambitions we are always
                    looking for support whether that be in the form of resources, money, knowledge, experiences, etc.
                    There are various reasons why you should choose to support us and join us on our journey.
                </p>

                <p className="font-karla font-semibold leading-loose text-xl text-gray-500 pt-5">
                    In Innovire’s journey to share and promote the excitement for STEM with youth of all demographics we
                    have required resources and finances to successfully see through our projects and initiatives. With
                    these resources and finances we try to provide the best quality of support and guidance that youth
                    will need to succeed. Supporting our journey will greatly increase the impact we can make on the
                    youth in our community and our ability to make sure ALL youth are given the tools, opportunities
                    and resources they need to carve their paths to success.
                </p>

                <p className="font-karla font-semibold leading-loose text-xl text-gray-500 pt-5">
                    There are various ways you can support our organization and its projects and initiatives. Financial
                    sponsorships would greatly help us in achieving our goals and significantly increase the size and
                    quality of the impact we can make. Non-monetary sponsorships are also very helpful to us, such as
                    providing us with technologies to showcase to youth, supplying certain tools and materials for STEM
                    activities, providing marketing support, giving mentorship/guidance and more.
                </p>
            </div>

            {/* SPONSORSHIP PACKAGE */}
            <div>
                <iframe
                    src="/pdfs/2022%20Innovire%20Sponsorship%20Package.pdf"
                    className="p-20 w-full h-[1000px]"
                />
            </div>
        </Layout>
    )
}