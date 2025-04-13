'use client'

import Button from "@/components/Shared/Button";
import ProjectData from "@/models/ProjectData"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";

interface ProjectPanelProps {
    project?: ProjectData | null;
    onClose: () => void;
}

export default function ProjectPanel(props: ProjectPanelProps) {

    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className={`
        flex flex-col items-center gap-10 absolute top-0 w-full left-0 bg-background p-3 rounded basis-full [box-shadow:0_0_50px_rgba(0,0,0,0.9)] lg:px-20 lg:py-10
        `}>
            <Button className="" onClick={props.onClose}>
                <IconX/>
                Fechar
            </Button>

            <div className="flex flex-col items-center gap-10 w-full md:flex-row">

                {/* PROJECT INFO  */}
                <div className="flex justify-evenly flex-col gap-5 box-border md:w-1/2">

                    <h3 className="text-xl font-sans text-primary md:text-3xl font-black">
                        {props.project?.name}
                    </h3>

                    <p className="p-3 bg-black text-green-300 font-cutive-mono rounded md:px-10">
                        {props.project?.description}
                    </p>

                    <Link href={props.project?.link ?? ''} className="py-3 px-6 self-center w-fit bg-primary font-bold text-background rounded hover:scale-110 hover:bg-foreground transition duration-100">
                        Acessar
                    </Link>

                </div>

                {/* PROJECT GALERY */}
                <div className="flex flex-col gap-3 justify-center items-center box-border bg-[rgba(255,255,255,0.05)] p-2 pt-5 rounded-xl md:w-1/2 md:p-5">

                    <div className="flex flex-row jul flex-wrap h-fit gap-3 w-full justify-center">
                        {props.project?.images.map((image, index) => (

                            <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`
                                rounded-lg overflow-hidden w-20 h-15 border-3 border-foreground [box-shadow:0_0_7px_rgba(0,0,0,0.5)] cursor-pointer box-content p-[2px] bg-background
                                hover:border-secondary transition-colors
                                ${currentImage == index ? "scale-110 border-primary" : ""}
                            `}>

                                <Image
                                    key={index}
                                    src={image}
                                    width={200}
                                    height={200}
                                    alt={`${props.project?.name} - Print ${index}`}
                                    className="object-cover w-full h-full rounded"
                                />

                            </button>
                        ))}
                    </div>

                    <Image
                        width={100} height={100}
                        src={props.project?.images[currentImage] ?? ''}
                        alt={props.project?.name.concat(" print") ?? ''}
                        className="p-1 [box-shadow:0_0_5px_rgba(0,0,0,0.5)] w-full rounded-lg h-100 object-contain lg:w-full bg-black"
                    />

                </div>

            </div>
        </div>
    )
}