interface ParagraphProps{
    children: React.ReactNode
    className?: string
}

export default function Paragraph(props : ParagraphProps){


    return(
        <p className={`
            p-3 text-xl text-left text-foreground duration-600 transition-all
            md:p-5 md:text-2xl
            ${props.className ?? ''}
        `}>
            {props.children}     
        </p>
    );
}