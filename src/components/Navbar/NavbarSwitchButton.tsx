import { IconHome, IconUser, IconMenu, IconArrowLeft } from "@tabler/icons-react"

interface NavbarSwitchButtonProps{
    hideMenu: boolean, 
    onClick: () => void
}

export default function NavbarSwitchButton(props : NavbarSwitchButtonProps) {
    return (
        <button onClick={props.onClick} className={`
            pointer-events-auto
            bg-background size-14 flex justify-center items-center rounded-full
            absolute right-0 top-3 translate-x-8/7
            transition cursor-pointer hover:bg-[rgba(128,128,128,0.5)] 
            lg:hidden
            `}>
            {props.hideMenu ? <IconMenu /> : <IconArrowLeft/>}
        </button>
    )
}