import Head from "next/head";
import Image from "next/image";
import Hero from "@/section/hero";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import About from "../section/about";
import Achievement from "@/section/achievement";
import Features from "@/section/features";
import CTA from "@/section/cta";

import Layout from "@/component/layout/layout";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Layout>
        <Head>
          <title>Netbook</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="overflow-hidden">
          <Hero />

          <About />

          <Achievement />

          <Features />

          <CTA />
        </main>
      </Layout>
    </>
  );
}
