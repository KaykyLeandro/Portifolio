import projects from "@/static/Projects";

export async function GET(){
    return Response.json(projects);
}