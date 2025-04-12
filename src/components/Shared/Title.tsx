interface TitleProps {
    main: string
    sub?: string
}

export default function Title(props: TitleProps) {
    return (
        <div className="flex flex-col items-start self-start md:pl-20 pb-10">
            <h2 className="text-3xl text-primary font-sans font-bold md:text-5xl">{props.main}</h2>
            <h3 className="mt-2 font-sans text-md md:text-lg">{props.sub ?? ''}</h3>
        </div>
    )
}