import Title from "@/components/Shared/Title";
import Section from "@/components/Shared/Section";
import TechList from "./TechList";
import Tech from "./Tech";
import { forwardRef } from "react";

const Knowledge = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section ref={ref}>
            <Title main='Conhecimento' sub="Linguagens de programação, tecnologias e frameworks" />
            <TechList>
                <Tech name="HTML" description="Cria os elementos na tela." image="/img/tech/js.png" />
                <Tech name="CSS" description="Define a aparência dos elementos na tela." image="/img/tech/js.png" />
                <Tech name="Javascript" description="Linguagem de programação frontend." image="/img/tech/js.png" />
                <Tech name="Typescript" description="Linguagem de programação frontend tipada." image="/img/tech/js.png" />
                <Tech name="React" description="Biblioteca front-end, focada em SPA." image="/img/tech/js.png" />
                <Tech name="Next.JS" description="Adiciona funcionalidades novas ao react." image="/img/tech/js.png" />
                <Tech name="Tailwind" description="Framework CSS. Agiliza a estilização." image="/img/tech/js.png" />
                <Tech name="SASS" description="Adiciona novas funcionalidades ao CSS" image="/img/tech/js.png" />
                <Tech name="Git" description="Ferramenta de versionamento de código." image="/img/tech/js.png" />
            </TechList>
        </Section>
    )
})

export default Knowledge;