import Link from "next/link"

interface NavbarLinkProps {
    children?: React.ReactNode
    ref: React.RefObject<HTMLElement|null>
}

export default function NavbarLink(props: NavbarLinkProps) {
    return (
        <button onClick={() => props.ref.current?.scrollIntoView({behavior:'smooth'})} className={`
        p-4 flex gap-1 transition duration-100
        hover:bg-[rgba(128,128,128,0.1)] 
        lg:bg-background lg:px-5 lg:py-2 cursor-pointer  lg:border-2 lg:border-[rgba(127,127,127,0.05)] pointer-events-auto lg:rounded-xl md:hover:bg-background md:hover:scale-105 md:hover:text-primary
        `}>
            {props.children}
        </button>
    )
}