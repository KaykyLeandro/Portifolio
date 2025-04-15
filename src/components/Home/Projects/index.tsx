'use client'

import Section from "@/components/Shared/Section";
import Title from "@/components/Shared/Title";
import ProjectList from "./ProjectList";
import ProjectPanel from "./ProjectPanel";
import Project from "./Project";
import ProjectData from "@/models/ProjectData";
import { useState, forwardRef, useEffect } from "react";


const Projects = forwardRef<HTMLElement>((props, ref) => {

    const [projectList, setProjectList] = useState<ProjectData[]>([])
    const [currentProject, setCurrentProject] = useState<ProjectData | null>(null);

    useEffect(() => {
        async function getProjectsData() {
            const response = await fetch('/api/projects');
            const projectsJson = await response.json();
            const list = projectsJson as ProjectData[];
            setProjectList(list);
        }
        getProjectsData();
    })

    const onCloseProjectPanel = () => setCurrentProject(null);

    return (
        <Section ref={ref} className="bg-ease-gradient-projects font-quicksand">
            <Title main='Projetos' sub="Projetos pessoais" />

            <ProjectList show={currentProject == null}>

                {projectList.map((project, index) => (
                    <Project key={index} project={project} setProject={setCurrentProject} />
                ))}

            </ProjectList>

            {currentProject ? <ProjectPanel project={currentProject} onClose={onCloseProjectPanel} /> : ''}

        </Section>
    )
});

export default Projects;