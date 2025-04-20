import techList from "@/static/Tech";

export async function GET(){
    return Response.json(techList);
}