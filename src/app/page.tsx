'use client'

import Image from "next/image";

import Navbar from "@/components/Navbar";
import About from "@/components/Home/About";
import Knowledge from "@/components/Home/Knowledge";
import Projects from "@/components/Home/Projects";
import Footer from "@/components/Footer/Footer";
import { IconUser } from "@tabler/icons-react";
import { use, useRef } from "react";

export default function Home() {

  const[about, knowledge, projects] = [useRef<HTMLElement>(null), useRef<HTMLElement>(null), useRef<HTMLElement>(null)];

  return (
    <div className="flex flex-col md:gap-3">
      
      <Navbar scrollLinks={[
          {name: "Sobre", icon: IconUser, ref: about},
          {name: "Conhecimento", icon: IconUser, ref: knowledge},
          {name: "Projetos", icon: IconUser, ref: projects},
      ]}/>

      <About ref={about}/>
      <Knowledge ref={knowledge}/>
      <Projects ref={projects} />
      <Footer />
    </div>
  );
}
