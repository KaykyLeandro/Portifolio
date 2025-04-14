import { NextRequest } from "next/server";
import techList from "@/static/Tech";

export async function GET(request: NextRequest){
    return Response.json(techList);
}