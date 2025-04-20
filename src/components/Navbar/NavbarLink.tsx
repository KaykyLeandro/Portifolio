import Link from "next/link"

interface NavbarLinkProps {
    children?: React.ReactNode;
    url: string;
}

export default function NavbarLink(props: NavbarLinkProps) {
    return (
        <Link href={props.url} className={`
        p-4 flex items-center gap-2 transition duration-100 font-quicksand
        hover:bg-[rgba(128,128,128,0.1)]
        lg:bg-background lg:px-5 lg:py-2 cursor-pointer lg:border-[rgba(127,127,127,0.05)] pointer-events-auto lg:hover:bg-background lg:hover:scale-105 lg:hover:text-secondary lg:rounded-xl
        `} target="_blank">
            {props.children}
        </Link>
    )
}