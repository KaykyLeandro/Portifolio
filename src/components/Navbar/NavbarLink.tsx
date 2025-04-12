import Link from "next/link"

interface NavbarLinkProps {
    children?: React.ReactNode
    url: string
}

export default function NavbarLink(props: NavbarLinkProps) {
    return (
        <Link href={props.url} className="p-4 flex gap-1 hover:bg-[rgba(128,128,128,0.1)] lg:bg-background lg:px-5 lg:py-2 cursor-pointer pointer-events-auto">
            {props.children}
        </Link>
    )
}