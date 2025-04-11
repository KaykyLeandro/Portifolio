'use client'

import { useState } from "react";
import NavbarLink from "./NavbarLink";
import NavbarLinkList from "./NavbarLinkList"
import { IconHome, IconUser, IconMenu, IconArrowLeft } from "@tabler/icons-react"

export default function Navbar() {

    const [hideMenu, setHideMenu] = useState(true);

    function handlwMenuSwitch(){
        setHideMenu(!hideMenu);
    }

    return (
        <nav className={`
        fixed h-screen w-50 bg-background border-r-1 border-r-[rgba(128,128,128,0.1)] flex flex-col py-10 transition
        ${hideMenu ? '-translate-x-full md:-translate-x-0 [box-shadow:0_0_100px_transparent' : '[box-shadow:0_0_100px_rgba(0,0,0,5)]'}
        md:w-full md:border-none md:h-fit md:translate-x-0 md:p-2
        `}>

            <SwitchButton hideMenu={hideMenu} onClick={handlwMenuSwitch} />

            <NavbarLinkList>
                <NavbarLink url='/'>
                    <IconHome /> Home
                </NavbarLink>
                <NavbarLink url='/'>
                    <IconUser /> About
                </NavbarLink>

            </NavbarLinkList>
        </nav>
    )
}

function SwitchButton(props : {hideMenu: boolean, onClick: () => void}) {
    return (
        <button onClick={props.onClick} className={`
            bg-background size-14 flex justify-center items-center rounded-full
            absolute right-0 top-3 translate-x-8/7
            transition cursor-pointer hover:bg-[rgba(128,128,128,0.5)] 
            md:hidden
            `}>
            {props.hideMenu ? <IconMenu /> : <IconArrowLeft/>}
        </button>
    )
}