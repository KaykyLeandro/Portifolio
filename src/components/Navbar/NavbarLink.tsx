import Link from "next/link"

interface NavbarLinkProps {
    children?: React.ReactNode
    url: string
}

export default function NavbarLink(props: NavbarLinkProps) {
    return (
        <Link href={props.url} className="p-4 flex gap-1 hover:bg-[rgba(128,128,128,0.1)] md:bg-background md:px-5 md:py-2 ">
            {props.children}
        </Link>
    )
}