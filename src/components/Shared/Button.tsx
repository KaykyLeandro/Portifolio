import { ButtonHTMLAttributes, Children } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    primary?: boolean
}

export default function Button(props: ButtonProps) {

    const primary = props.primary ?? false;

    return (
        <button {...props} className={`
            p-3 w-fit flex gap-1 font-sans cursor-pointer border-2 rounded-md text-center transition
            ${primary ?
            `
                bg-primary [box-shadow:-4px_4px_0_black,-4px_4px_15px_rgba(255,255,255,0.2)] text-background border-transparent 
                hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-x-[4px] hover:translate-y-[4px] hover:[box-shadow:0px_0px_0_var(--foreground),0px_0px_5px_rgba(255,255,255,0.5)] 
            `:`      
                bg-transparent border-[rgba(128,128,128,0.2)] hover:text-secondary hover:border-secondary
            `}  
        ${primary ? 'bg-primary' : ''}`}>
            {props.children ?? ''}
        </button>
    )
}

