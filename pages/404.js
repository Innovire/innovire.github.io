// Custom 404 page that redirects to the home page

import Head from "next/head";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Innovire - 404</title>
                <meta name="robots" content="all" />
            </Head>

            <h1>404 - Page Not Found</h1>;
        </>
    )
}

export async function getStaticProps() {
    return {
        redirect: {
            destination: '/',
            permanent: true, // triggers 308
        },
    };
}