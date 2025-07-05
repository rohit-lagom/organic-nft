import Code from "@/components/code/code";
import Explore from "@/components/explore/explore";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { Footer } from "@/components/footer/footer";


import Image from "next/image";
import TopCreators from "@/components/top-creators/top-creators";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Code/>
      <Explore/>
      <TopCreators/>
      <Footer/>
    </main>
  );
}
