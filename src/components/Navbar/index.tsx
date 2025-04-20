'use client'

import { useState } from "react";
import NavbarInternalLink from "./NavbarInternalLink";
import NavbarLinkList from "./NavbarLinkList"
import NavbarLink from "./NavbarLink";
import NavbarSwitchButton from "./NavbarSwitchButton";
import { FaLinkedin, FaGithub } from "react-icons/fa6"

interface NavbarProps {
    scrollLinks: {
        name: string,
        icon: React.ComponentType,
        ref: React.RefObject<HTMLElement | null>
    }[]
}

export default function Navbar(props: NavbarProps) {

    const [hideMenu, setHideMenu] = useState(true);

    function handlwMenuSwitch() {
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
                {props.scrollLinks.map((link, index) => (
                    <NavbarInternalLink key={index} ref={link.ref}>
                        {<link.icon />}
                        {link.name}
                    </NavbarInternalLink>
                ))}

                <NavbarLink url="https://www.linkedin.com/in/kayky-leandro-barbosa-da-silva-445b34345">
                    <FaLinkedin />
                    LinkedIn
                </NavbarLink>

                <NavbarLink url="https://github.com/KaykyLeandro">
                    <FaGithub />
                    GitHub
                </NavbarLink>

            </NavbarLinkList>
        </nav>
    )
}

