import { useRef, useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Button from "./Button";

export default function Expandble(props: { children: React.ReactNode }) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [showContent, setShowContent] = useState(false);

    const toggle = () => {
        setShowContent((prev) => !prev);
    };

    return (
        <div className="relative flex flex-col gap-10">
            <div ref={contentRef} className="overflow-hidden transition-[max-height] duration-500 ease-in-out" style={
                { maxHeight: showContent ? contentRef.current?.scrollHeight + "px" : "0px", }
            }>
                {props.children}
            </div>

            <Button onClick={toggle} className="text-xl flex items-center gap-2 cursor-pointer self-center">
                {showContent ? <><IconMinus /> Mostrar Menos</> : <><IconPlus /> Mostrar Mais</>}
            </Button>
        </div>
    );
}