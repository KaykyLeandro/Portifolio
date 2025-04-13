'use client'

import Section from "@/components/Shared/Section";
import Title from "@/components/Shared/Title";
import ProjectList from "./ProjectList";
import ProjectPanel from "./ProjectPanel";
import Project from "./Project";
import ProjectData from "@/models/ProjectData";
import { useState, forwardRef } from "react";

const Projects = forwardRef<HTMLElement>((props, ref) => {

    const [currentProject, setCurrentProject] = useState<ProjectData | null>(null);

    const onCloseProjectPanel = () => setCurrentProject(null);

    return (
        <Section ref={ref}>
            <Title main='Projetos' sub="Projetos pessoais" />

            <div className="relative">


                <ProjectList show={currentProject == null}>
                    <Project setProject={setCurrentProject} project={{
                        name: 'Projeto',
                        description: 'Esse é um projeto de teste, um place holder. Não possui qualquer utilitade e só está aqui até eu chamar um projeto real pelo backend depois.',
                        mainImage: "/img/projects/test/2.jpg",
                        images: ["/img/projects/test/1.jpg", "/img/projects/test/2.jpg", "/img/projects/test/3.jpg"],
                        link: "https://google.com"
                    }} />
                    <Project setProject={setCurrentProject} project={{
                        name: 'Projeto',
                        description: 'Esse é um projeto de teste, um place holder. Não possui qualquer utilitade e só está aqui até eu chamar um projeto real pelo backend depois.',
                        mainImage: "/img/projects/test/1.jpg",
                        images: ["/img/projects/test/1.jpg", "/img/projects/test/2.jpg", "/img/projects/test/3.jpg"],
                        link: "https://google.com"
                    }} />
                    <Project setProject={setCurrentProject} project={{
                        name: 'Projeto',
                        description: 'Esse é um projeto de teste, um place holder. Não possui qualquer utilitade e só está aqui até eu chamar um projeto real pelo backend depois.',
                        mainImage: "/img/projects/test/1.jpg",
                        images: ["/img/projects/test/1.jpg", "/img/projects/test/2.jpg", "/img/projects/test/3.jpg"],
                        link: "https://google.com"
                    }} />
                    <Project setProject={setCurrentProject} project={{
                        name: 'Projeto',
                        description: 'Esse é um projeto de teste, um place holder. Não possui qualquer utilitade e só está aqui até eu chamar um projeto real pelo backend depois.',
                        mainImage: "/img/projects/test/1.jpg",
                        images: ["/img/projects/test/1.jpg", "/img/projects/test/2.jpg", "/img/projects/test/3.jpg"],
                        link: "https://google.com"
                    }} />
                    <Project setProject={setCurrentProject} project={{
                        name: 'Projeto',
                        description: 'Esse é um projeto de teste, um place holder. Não possui qualquer utilitade e só está aqui até eu chamar um projeto real pelo backend depois.',
                        mainImage: "/img/projects/test/1.jpg",
                        images: ["/img/projects/test/1.jpg", "/img/projects/test/2.jpg", "/img/projects/test/3.jpg"],
                        link: "https://google.com"
                    }} />
                    
                </ProjectList>

                {currentProject ? <ProjectPanel project={currentProject} onClose={onCloseProjectPanel} /> : ''}

            </div>
        </Section>
    )
});

export default Projects;