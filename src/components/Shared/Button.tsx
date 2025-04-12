import { ButtonHTMLAttributes, Children } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    primary?: boolean
}

export default function Button(props: ButtonProps) {

    const primary = props.primary ?? false;

    return (
        <button {...props} className={`
        p-3 w-fit bg-secondary [box-shadow:-4px_4px_0_black,-4px_4px_30px_rgba(255,255,255,0.2)] flex gap-1 text-background font-cutive-mono cursor-pointer border-1 border-foreground
        hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-x-[4px] hover:translate-y-[4px] hover:[box-shadow:0px_0px_0_var(--foreground)] transition
        ${primary ? 'bg-primary' : ''} ${props.className ?? ''}
        `}>
            {props.children ?? ''}
        </button>
    )
}

