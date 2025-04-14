import { NextRequest } from "next/server";
import projects from "@/static/Projects";

export async function GET(request: NextRequest){
    return Response.json(projects);
}