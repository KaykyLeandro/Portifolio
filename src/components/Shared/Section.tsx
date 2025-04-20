import { forwardRef } from "react";

interface SectionProps{
    className?: string
    children: React.ReactNode
}
const Section = forwardRef<HTMLElement, SectionProps>((props, ref) =>{
    return (
        <section ref={ref} className={`
            relative min-h-screen flex h-fit flex-col justify-center items-center gap-10 px-2 py-10 border-b-3 border-b-[rgba(0,0,0,0.3)]
            md:px-4 md:rounded-xl md:my-1 md:border-none
            lg:p-10 md:[box-shadow:0_0_20px_rgba(0,0,0,0.6)]
            ${props.className ?? ''}
        `}>
            {props.children}
        </section>
    )
})

Section.displayName = "Section"

export default Section;