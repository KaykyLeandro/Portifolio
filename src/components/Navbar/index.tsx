'use client'

import { useState } from "react";
import NavbarLink from "./NavbarLink";
import NavbarLinkList from "./NavbarLinkList"
import NavbarSwitchButton from "./NavbarSwitchButton";
import { IconHome, IconUser } from "@tabler/icons-react"

export default function Navbar() {

    const [hideMenu, setHideMenu] = useState(true);

    function handlwMenuSwitch(){
        setHideMenu(!hideMenu);
    }

    return (
        <nav className={`
        z-10 pointer-events-none
        fixed h-screen w-50 bg-background border-r-1 border-r-[rgba(128,128,128,0.1)] flex flex-col py-10 transition
        ${hideMenu ? '-translate-x-full lg:-translate-x-0 [box-shadow:0_0_100px_transparent' : '[box-shadow:0_0_100px_rgba(0,0,0,5)]'}
        lg:w-full lg:border-none lg:h-fit lg:translate-x-0 lg:p-2 lg:bg-transparent
        `}>

            <NavbarSwitchButton hideMenu={hideMenu} onClick={handlwMenuSwitch} />

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

