'use client'

import Section from "@/components/Shared/Section";
import AboutTitle from "./AboutTitle";
import Paragraph from "@/components/Shared/Paragraph";
import Expandble from "@/components/Shared/Expandble";

export default function About() {

    return (
        <Section>
            <div className="flex flex-col items-center gap-10 mt-[0vh] sm:w-3/4 md:w-1/2 transition-all">

                <AboutTitle />

                <div>
                    <Paragraph>
                        Olá! Sou um programador front end.
                    </Paragraph>
                    <Expandble>

                        <Paragraph>
                            Todos os dias, a programação resolve muitos problemas pelo mundo, e evita muitos outros. A programação salva e transforma vidas.
                        </Paragraph>

                        <Paragraph>
                            Com a programação, o mundo é um lugar melhor.
                        </Paragraph>

                        <Paragraph>
                            Sou programador, pois quero fazer parte disso.
                        </Paragraph>
                    </Expandble>
                </div>


            </div>
        </Section>
    );
}