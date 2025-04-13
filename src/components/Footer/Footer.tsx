'use client'

import Button from "../Shared/Button"

export default function Footer() {
    return (
        <footer
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }}
            className="bg-black text-zinc-300 h-40 flex justify-evenly items-center"
        >
            <Button>Retornar para o topo</Button>
        </footer>
    )
}