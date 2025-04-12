interface TechListProps{
    children: React.ReactNode
}

export default function TechList(props: TechListProps){
    return(
        <div className="flex flex-row gap-1 justify-center items-stretch flex-wrap lg:px-20 md:gap-8">
            {props.children}
        </div>
    )
}