import Link from "next/link"

interface NavbarInternalLinkProps {
    children?: React.ReactNode
    ref: React.RefObject<HTMLElement|null>
}

export default function NavbarInternalLink(props: NavbarInternalLinkProps) {
    return (
        <button onClick={() => props.ref.current?.scrollIntoView({behavior:'smooth'})} className={`
        p-4 flex items-center gap-2 transition duration-100 font-quicksand
        hover:bg-[rgba(128,128,128,0.1)]
        lg:bg-background lg:px-5 lg:py-2 cursor-pointer lg:border-[rgba(127,127,127,0.05)] pointer-events-auto lg:hover:bg-background lg:hover:scale-105 lg:hover:text-primary lg:rounded-xl
        `}>
            {props.children}
        </button>
    )
}