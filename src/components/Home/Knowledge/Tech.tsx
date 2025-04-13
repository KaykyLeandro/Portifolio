import Image from "next/image";

interface TechProps{
    name: string
    image: string
    description: string
}

export default function Tech(props: TechProps){
    return(
        <div className={`
        w-24/50 p-2 [box-shadow:0_0_10px_rgba(0,0,0,0.4)] flex flex-col gap-2 rounded
        md:w-9/30
        lg:w-60
        `}>
            <Image src={props.image} width={100} height={100} alt={props.name.concat(" logo")} className="w-full rounded" />
            <h3 className="text-secondary font-sans font-bold md:text-xl">{props.name}</h3>
            <p className="font-cutive-mono md:text-lg">{props.description}</p>
        </div>
    )
}