interface TitleProps {
    main: string
    sub?: string
}

export default function Title(props: TitleProps) {
    return (
        <div className="w-full flex text-center flex-col self-start md:text-left md:pl-20 pb-10 drop-shadow-background drop-shadow-xl">
            <h2 className="text-3xl text-primary font-quicksand font-black md:text-5xl">{props.main}</h2>
            <h3 className="mt-2 font-quicksand text-md font-bold md:text-lg">{props.sub ?? ''}</h3>
        </div>
    )
}