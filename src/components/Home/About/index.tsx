'use client'

import Section from "@/components/Shared/Section";
import AboutTitle from "./AboutTitle";
import Paragraph from "@/components/Shared/Paragraph";
import Expandble from "@/components/Shared/Expandble";
import { forwardRef } from "react";

const About = forwardRef<HTMLElement>((props, ref) => {

    return (
        <Section ref={ref} className="bg-gradient-to-tl from-[rgba(200,100,250,0.05)] to-[rgba(30,255,200,0.2)] font-quicksand">
            <div className="flex flex-col items-center gap-10 mt-[0vh] sm:w-3/4 md:w-1/2 transition-all">

                <AboutTitle />

                <div>
                    <Paragraph className="drop-shadow-backreground drop-shadow-xl">
                        Olá! Sou um programador front end.
                    </Paragraph>
                    <Expandble>

                        <Paragraph className="drop-shadow-background drop-shadow-xl">
                            Todos os dias, a programação resolve muitos problemas pelo mundo, e evita muitos outros. A programação salva e transforma vidas.
                        </Paragraph>

                        <Paragraph className="drop-shadow-background drop-shadow-xl">
                            Com a programação, o mundo é um lugar melhor.
                        </Paragraph>

                        <Paragraph className="drop-shadow-background drop-shadow-xl">
                            Sou programador, pois quero fazer parte disso.
                        </Paragraph>

                    </Expandble>
                </div>


            </div>
        </Section>
    );
})

export default About;