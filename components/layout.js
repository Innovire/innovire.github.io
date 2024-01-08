import { motion } from "framer-motion";
import Head from "next/head";

export default function Layout({ title, description, children }) {
    return (
        <>
            {/* METADATA */}
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} key="desc" />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={description} />
                {/*<meta property="og:image" content="https://new-website-innovire.vercel.app/images/ogImage.JPG" />*/}
                {/*<meta property="og:url" content="https://new-website-innovire.vercel.app/" />*/}
                {/*<meta property="twitter:card" content="summary_large_image" />*/}
                {/*<meta property="twitter:image" content="https://new-website-innovire.vercel.app/images/ogImage.JPG" />*/}
                {/*<meta property="twitter:site" content="https://new-website-innovire.vercel.app/" />*/}
            </Head>

            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                {children}
            </motion.div>
        </>
    )
}