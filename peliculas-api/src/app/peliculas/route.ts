import { NextResponse, NextRequest } from "next/server";
import { peliculas } from "@/mock/peliculas";

export function GET(req: NextRequest) {
    return NextResponse.json(peliculas)
}