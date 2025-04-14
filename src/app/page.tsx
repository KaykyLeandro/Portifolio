'use client'

import Image from "next/image";

import Navbar from "@/components/Navbar";
import About from "@/components/Home/About";
import Knowledge from "@/components/Home/Knowledge";
import Projects from "@/components/Home/Projects";
import Footer from "@/components/Footer/Footer";
import { IconUser, IconCode, IconHammer } from "@tabler/icons-react";
import { useRef } from "react";

export default function Home() {

  const [about, knowledge, projects] = [useRef<HTMLElement>(null), useRef<HTMLElement>(null), useRef<HTMLElement>(null)];

  return (
    <>
      <div className="flex flex-col md:mx-3 md:gap-3 md:mb-3 lg:gap-6 lg:mx-6">

        <Navbar scrollLinks={[
          { name: "Sobre", icon: IconUser, ref: about },
          { name: "Conhecimento", icon: IconCode, ref: knowledge },
          { name: "Projetos", icon: IconHammer, ref: projects },
        ]} />

        <About ref={about} />
        <Knowledge ref={knowledge} />
        <Projects ref={projects} />
      </div>
      <Footer />
    </>
  );
}
