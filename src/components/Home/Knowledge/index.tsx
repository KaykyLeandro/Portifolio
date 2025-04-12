import Title from "@/components/Shared/Title";
import Section from "@/components/Shared/Section";
import TechList from "./TechList";
import Tech from "./Tech";

export default function Knowledge(){
    return (
        <Section>
            <Title main='Conhecimento' sub="Linguagens de programação, tecnologias e frameworks" />
            <TechList>
                <Tech name="HTML" description="Cria os elementos na tela." />
                <Tech name="CSS" description="Define a aparência dos elementos na tela." />
                <Tech name="Javascript" description="Linguagem de programação frontend." />
                <Tech name="Typescript" description="Linguagem de programação frontend tipada." />
                <Tech name="React" description="Biblioteca front-end, focada em SPA." />
                <Tech name="Next.JS" description="Adiciona funcionalidades novas ao react." />
                <Tech name="Tailwind" description="Framework CSS. Agiliza a estilização." />
                <Tech name="SASS" description="Adiciona novas funcionalidades ao CSS" />
                <Tech name="Git" description="Ferramenta de versionamento de código." />
            </TechList>
        </Section>
    )
}