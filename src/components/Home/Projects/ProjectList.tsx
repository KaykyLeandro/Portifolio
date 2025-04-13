interface ProjectListProps{
    children: React.ReactNode
    show: boolean
}

export default function ProjectList(props: ProjectListProps){
    return(
        <div className={`flex flex-wrap gap-2 justify-center md:gap-4 ${props.show ? '' : 'blur-xl'}`}>
            {props.children}
        </div>
    );
}