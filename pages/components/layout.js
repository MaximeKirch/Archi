import Navbar from "./navbar";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
        <Head>
            <title> Marie Coulombon - Casanova</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta property="og:title" content="Marie Coulombon Casanova" key="title" />
        </Head>
        <Navbar/>
        <main>{children}</main>
        </>
    )
}