import ProjectData from "@/models/ProjectData";
import Image from "next/image";

interface ProjectProps {
    project: ProjectData
    setProject: (project: ProjectData) => void;
}

export default function Project(props: ProjectProps) {
    return (
        <div className={`
        relative flex flex-col items-center [box-shadow:0_0_10px_rgba(0,0,0,0.3)] rounded-lg w-full h-50 overflow-hidden
        md:w-9/20
        lg:w-100 
        `}>

            <button onClick={() => props.setProject(props.project)} className={`
            absolute bottom-0 left-0 w-full h-full text-center z-1
            bg-transparent text-background text-3xl font-sans  p-4 cursor-pointer bg-gradient-to-tl to-primary opacity-0
            transition duration-700 hover:opacity-50 peer flex items-end justify-center [text-shadow:_0_0_10px_black]
            `}>

            </button>

            <h3 className="font-black top-0 left-0 text-background absolute w-100% px-5 py-5 bg-primary rounded-br-2xl text-xl font-cutive-mono pointer-events-none z-1 peer-hover:px-10 transition-all duration-400">
                {props.project.name}
            </h3>
            <Image
                src={props.project.mainImage}
                height={1000} width={1000}
                alt={props.project.name.concat(", print")}
                className="w-full h-full pointer-events-none peer-hover:scale-120 transition duration-5000 z-0 object-cover" 
            />

        </div>
    );
}