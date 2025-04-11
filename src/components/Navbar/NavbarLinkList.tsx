import { Children } from "react"

interface NavbarLinkListProps{
    children: React.ReactNode
}

export default function NavbarLinkList(props: NavbarLinkListProps){
    return(
        <div className="flex flex-col gap-1 md:flex-row md:justify-end">
            {props.children}
        </div>
    );
}