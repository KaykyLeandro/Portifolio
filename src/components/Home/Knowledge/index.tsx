import Title from "@/components/Shared/Title";
import Section from "@/components/Shared/Section";
import TechList from "./TechList";
import Tech from "./Tech";
import TechData from "@/models/TechData";
import { forwardRef, useEffect, useState } from "react";

const Knowledge = forwardRef<HTMLElement>((props, ref) => {

    const [techList, setTechList] = useState<TechData[]>([])

    useEffect(() => {
        const FetchTechs = async () => {
            const jsonResponse = await fetch('/api/techs').then(value => value.json());
            const response = jsonResponse as TechData[];
            setTechList(response);
        }
        FetchTechs();
    })

    return (
        <Section ref={ref} className="bg-ease-gradient-knowledge font-quicksand">
            <Title main='Conhecimento' sub="Linguagens de programação, tecnologias e frameworks" />
            <TechList>
                {techList.map((tech, index) => (
                    <Tech key={index} tech={tech} />
                ))}
            </TechList>
        </Section>
    )
})

export default Knowledge;