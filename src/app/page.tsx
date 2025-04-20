'use client'

import Navbar from "@/components/Navbar";
import About from "@/components/Home/About";
import Knowledge from "@/components/Home/Knowledge";
import Projects from "@/components/Home/Projects";
import Footer from "@/components/Footer/Footer";
import { IconUser, IconCode, IconHammer } from "@tabler/icons-react";
import { useRef } from "react";

const Home: React.FC = () => {

  const [about, knowledge, projects] = [useRef<HTMLElement>(null), useRef<HTMLElement>(null), useRef<HTMLElement>(null)];

  return (
    <>
      <Navbar scrollLinks={[
        { name: "Sobre", icon: IconUser, ref: about },
        { name: "Conhecimento", icon: IconCode, ref: knowledge },
        { name: "Projetos", icon: IconHammer, ref: projects },
      ]} />
      <div className="flex flex-col md:mx-3 md:gap-3 md:mb-3 lg:gap-6 lg:mx-6">
        <About ref={about} />
        <Knowledge ref={knowledge} />
        <Projects ref={projects} />
      </div>
      <Footer />
    </>
  );
}

Home.displayName = "Home";

export default Home;
