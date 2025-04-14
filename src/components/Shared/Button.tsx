import { ButtonHTMLAttributes, Children } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    primary: boolean
}

export default function Button(props: ButtonProps = {primary:false}) {

    const primary = props.primary ?? false;

    return (
        <button {...props} className={`
            relative p-3 w-fit flex gap-1 cursor-pointer border-2 rounded-md font-bold text-center transition font-quicksand overflow-hidden
            ${primary ?
            `
                bg-primary [box-shadow:-4px_4px_0_black,-4px_4px_15px_rgba(255,255,255,0.2)] text-background border-transparent 
                hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-x-[4px] hover:translate-y-[4px] hover:[box-shadow:0px_0px_0_var(--foreground),0px_0px_5px_rgba(255,255,255,0.5)] 
            `:`      
                bg-transparent border-[rgba(128,128,128,0.2)] hover:text-secondary hover:border-secondary
            `}  
        ${props.className ?? ''}`}>
            <div className={`absolute top-0 left-0 w-full h-full bg-background opacity-50 ${primary ? 'hidden' : ''}`} />
            {props.children ?? ''}
        </button>
    )
}

