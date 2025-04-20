interface ProjectListProps{
    children: React.ReactNode
    show: boolean
}

export default function ProjectList(props: ProjectListProps){
    return(
        <div className={`flex flex-wrap gap-2 justify-center w-full md:gap-4 ${props.show ? '' : 'hidden md:flex blur-xl'}`}>
            {props.children}
        </div>
    );
}