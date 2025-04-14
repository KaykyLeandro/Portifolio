import Image from "next/image";
import TechData from "@/models/TechData";

interface TechProps{
    tech: TechData
}

export default function Tech(props: TechProps){
    return(
        <div className={`
        w-24/50 p-2 [box-shadow:0_0_10px_rgba(0,0,0,0.4)] flex flex-col gap-2 rounded relative
        md:w-9/30
        lg:w-60
        `}>
            <div className="bg-background absolute top-0 left-0 w-full h-full opacity-50"/>
            <Image src={props.tech.image} width={100} height={100} alt={props.tech.name.concat(" logo")} className="w-full rounded p-3 drop-shadow-lg drop-shadow-black z-1" />
            <h3 className="text-secondary font-quicksand font-bold md:text-xl z-1">{props.tech.name}</h3>
            <p className="font-cutive-mono md:text-lg z-1">{props.tech.description}</p>
        </div>
    )
}